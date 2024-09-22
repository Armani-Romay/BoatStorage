from django.shortcuts import render
from rest_framework.generics import GenericAPIView
from rest_framework.views import APIView
from rest_framework.permissions import AllowAny, IsAuthenticated
from .models import React
from rest_framework.response import Response
from .serializer import ReactSerializer

# Create your views here.
class ReactView(APIView):
    permission_classes = (AllowAny, )  
    serializer_class = ReactSerializer
 
    # First method is the GET method
    def get(self, request):
        output = [
            {"employee": obj.employee, "department": obj.department} 
            for obj in React.objects.all()
        ]
        return Response(output)
 
    # Second method is the POST method
    def post(self, request):
        serializer = ReactSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(serializer.data)
