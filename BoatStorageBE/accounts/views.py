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
import logging
from .models import CustomUser
logger = logging.getLogger(__name__)


# handle user registration via API
class UserRegistrationApiView(GenericAPIView):
    # allow any user (authenticated or not) to access this view
    permission_classes = (AllowAny, )
    serializer_class = UserRegistrationSerializer # use the UserRegistrationSerializer for validation and processing data

    # makes sure CSRF cookie is set in the response when a user registers
    #deleted tokens for testing, (worked)
    @method_decorator(ensure_csrf_cookie)
    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        custom_user = serializer.save()

        # Bypass token generation
        token = None

        data = serializer.data
        data["tokens"] = {
            "refresh": None,  # No token generated for testing
            "access": None,
            "csrfToken": get_token(request)
        }

        return Response(data, status=status.HTTP_201_CREATED)


# class to handle user login via API
class UserLoginApiView(GenericAPIView):
    permission_classes = (AllowAny, )
    serializer_class = UserLoginSerializer

    # ensure CSRF cookie is set in the response when a user logs in
    @method_decorator(ensure_csrf_cookie)
    def post(self, request, *args, **kwargs):
        # validate incoming request data with the login serializer
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        
        # retrieve the validated user object from the serializer
        user = serializer.validated_data
        
        # check if the user is valid and active (for debugging purposes)
        if not user.is_active:
            return Response({"detail": "User account is inactive."}, status=status.HTTP_400_BAD_REQUEST)
     
        # serialize the user object
        user_serializer = CustomUserSerializer(user)
        data = user_serializer.data  # retrieve the serialized user data
        
        try:
            # generate tokens for the user
            token = RefreshToken.for_user(user)

            # add tokens (refresh, access) and CSRF token to the response
            data["tokens"] = {
                "refresh": str(token),
                "access": str(token.access_token),
                'csrfToken': get_token(request)  # Ensure CSRF token is set
            }

        except Exception as e:
            # in case of errors (like FOREIGN KEY constraint), log or return a specific response
            # comment out token generation for testing purposes
            data["tokens"] = {
                "refresh": None,
                "access": None,
                'csrfToken': get_token(request)  # Only provide CSRF token if token generation fails
            }
        
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