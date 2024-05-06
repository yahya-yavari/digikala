from rest_framework import generics, permissions, response, status
from rest_framework_simplejwt import tokens

from .models import User, Profile, OTP
from .serializers import CustomUserSerializer, UserRegisterationSerializer, UserProfileSerializer, OTPSerializer
from .otp import sendToken
from .tasks import deleteOTP


class UserAccessAPIView(generics.GenericAPIView):
    """"""

    permission_classes = [permissions.AllowAny]
    serializer_class = [UserRegisterationSerializer]

    def post(self, request, *args, **kwargs):
        return response.Response(data=request.data, status=status.HTTP_200_OK)


class CheckOTPAPIView(generics.GenericAPIView):
    """"""

    permission_classes = [permissions.AllowAny]
    serializer_class = [OTPSerializer]

    def post(self, request, *args, **kwargs):
        return response.Response(data=request.data, status=status.HTTP_200_OK)


class ProfileAPIView(generics.RetrieveUpdateAPIView):
    """"""

    permission_classes = [permissions.IsAuthenticated]
    serializer_class = [UserProfileSerializer]

    def get_object(self):
        pk = self.kwargs['pk']
        user_profile = Profile.objects.get(pk=pk)
        return user_profile
