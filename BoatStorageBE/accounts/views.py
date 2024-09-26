from django.shortcuts import render
# import GenericAPIView to use class-based views for API endpoints
from rest_framework.generics import GenericAPIView
from rest_framework.permissions import AllowAny, IsAuthenticated
from .serializers import *
from rest_framework_simplejwt.tokens import RefreshToken
# import the Response object to return API responses
from rest_framework.response import Response
from rest_framework import status
# import decorator to ensure that CSRF cookies are set for views that need CSRF protection
from django.views.decorators.csrf import ensure_csrf_cookie
from django.middleware.csrf import get_token
from django.utils.decorators import method_decorator


# handle user registration via API
class UserRegistrationApiView(GenericAPIView):
    # allow any user (authenticated or not) to access this view
    permission_classes = (AllowAny, )
    serializer_class = UserRegistrationSerializer # use the UserRegistrationSerializer for validation and processing data

    # makes sure CSRF cookie is set in the response when a user registers
    @method_decorator(ensure_csrf_cookie)
    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        # validate the serializer data (raise an exception if validation fails)
        serializer.is_valid(raise_exception=True)
        user = serializer.save() # save the valid data and create a new user
        token = RefreshToken.for_user(user)  # refresh token for the new user
        data = serializer.data
        csrf_token = get_token(request)
        # add the tokens (refresh, access, and CSRF) to the response data
        data["tokens"] = {"refresh": str(token),
                          "access": str(token.access_token),
                          'csrfToken': csrf_token}
        # return the response with the user data and tokens, and set the status to 201 Created
        return Response(data, status=status.HTTP_201_CREATED)

# class to handle user login via API
class UserLoginApiView(GenericAPIView):
    permission_classes = (AllowAny, )
    serializer_class = UserLoginSerializer

    # ensure CSRF cookie is set in the response when a user logs in
    @method_decorator(ensure_csrf_cookie)
    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data  # retrieve the validated user object from the serializer
        serializer = CustomUserSerializer(user)  # serialize the user object
        
        token = RefreshToken.for_user(user)
        data = serializer.data   # retrieve the serialized user data
        csrf_token = get_token(request)

        # add the tokens (refresh, access, and CSRF) to the response data
        data["tokens"] = {"refresh": str(token),
                          "access": str(token.access_token),
                          'csrfToken': csrf_token}
        # return the response with the user data and tokens, and set the status to 200 OK
        return Response(data, status=status.HTTP_200_OK)

# class to handle user logout via API
class UserLogoutApiView(GenericAPIView):
    # restrict access to only authenticated users
    permission_classes = (IsAuthenticated, )

    # handle the logout logic
    def post(self, request, *args, **kwargs):
        try:
            # retrieve the refresh token from the request data
            refresh_token = request.data["refresh"]
            # convert the token into a RefreshToken object
            token = RefreshToken(refresh_token)
            # blacklist the refresh token to invalidate it, (they are logging out)
            token.blacklist()
            # return a 205 Reset Content status to indicate successful logout
            return Response(status=status.HTTP_205_RESET_CONTENT)
        except Exception as e:
            return Response(status=status.HTTP_400_BAD_REQUEST)

# class to retrieve details of the authenticated user
class UserDetailsApiView(GenericAPIView):
    permission_classes = (IsAuthenticated, )
    serializer_class = CustomUserSerializer

    # handle the request to retrieve user details
    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(request.user)
        return Response(serializer.data, status=status.HTTP_200_OK)



# class Csrf_Token_View(GenericAPIView):
#     # Permission class restricts access to only authenticated users
#     permission_classes = (IsAuthenticated, )

#     # Ensure CSRF cookie is set in the response
#     @ensure_csrf_cookie
#     def get(self, request):
#         # Retrieve the CSRF token for the current request
#         csrf_token = get_token(request)
#         # Return the CSRF token in the response body
#         return Response({'csrfToken': csrf_token})