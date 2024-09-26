from .models import CustomUser
from rest_framework import serializers
# import the authenticate method from Django's built-in authentication system
from django.contrib.auth import authenticate

# serializer for the CustomUser model to convert it to/from JSON format
class CustomUserSerializer(serializers.ModelSerializer):
    class Meta: # meta class defines additional settings for the serializer
        model = CustomUser # Specifies the model to serialize (CustomUser)
        fields = ("id", "username", "email")

# serializer for handling user registration with password confirmation
class UserRegistrationSerializer(serializers.ModelSerializer):
    password1 = serializers.CharField(write_only=True) #write only means that it won't be readable
    password2 = serializers.CharField(write_only=True)
    
    class Meta:
        model = CustomUser
        fields = ("id", "username", "email", "password1", "password2")
        # extra settings for the password field (this is to hide the password in the response)
        extra_kwargs = {"password": {"write_only": True}}
    
    # validation logic for the serializer (checks if passwords match and meet criteria)
    def validate(self, attrs):
        if attrs['password1'] != attrs['password2']:
            raise serializers.ValidationError("Passwords do not match")
        # Get the password1 field
        password = attrs.get("password1", "")
        if len(password) < 8: #password must be at least 8 characters long
            raise serializers.ValidationError("Password must be at least 8 characters")
        # if validation passes, return the validated attributes
        return attrs

    # override the create method to handle creating the user instance
    def create(self, validated_data):
        # pop password1 (we don't store the password twice)
        password = validated_data.pop("password1")
        # remove password2 from the validated data (since it's just for confirmation)
        validated_data.pop("password2")
        # create a new user using the validated data (and set the password correctly)
        return CustomUser.objects.create_user(password=password, **validated_data)

# serializer for handling user login
class UserLoginSerializer(serializers.Serializer):
    email = serializers.CharField() # field for the email (string)
    password = serializers.CharField(write_only=True)

    # custom validation logic to authenticate the user
    def validate(self, data):
        # authenticate the user using the provided email and password
        user = authenticate(**data)
        # if the user exists and is active, return the user object
        if user and user.is_active:
            return user
        # if authentication fails, raise an error
        raise serializers.ValidationError("Username/password incorrect")
