from rest_framework import serializers

from .models import Profile, User 


class CustomUserSerializer(serializers.Serializer):
    """
    Serializer class to serialize User request
    """

    phone = serializers.CharField()


class UserRegisterationSerializer(serializers.ModelSerializer):
    class Meta:
        model = User 
        fields =['pk', 'phone']
    
    def create(self, **validated_data):
        return User.objects.create_user(**validated_data)


class UserProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields = ['id', 'user', 'phone', 'first_name', 'last_name', 'address', '']


class OTPSerializer(serializers.Serializer):
    """
    Serializer class for getting OTP from Users
    """
    otp   = serializers.CharField()
    phone = serializers.CharField(required=False)