from django.shortcuts import get_object_or_404

from rest_framework import generics, permissions, response, status
from rest_framework_simplejwt import tokens

from .models import User, Profile, OTP
from .serializers import CustomUserSerializer, UserRegisterationSerializer, UserProfileSerializer, OTPSerializer
from .otp import sendToken
from .tasks import deleteOTP


class UserAccessAPIView(generics.GenericAPIView):
    """
    An endpoint for users to request for OTP token
    """

    permission_classes = [permissions.AllowAny]
    serializer_class = [CustomUserSerializer]

    def post(self, request, *args, **kwargs):
        s = CustomUserSerializer(data=request.data)
        if s.is_valid():
            phone = s.validated_data["phone"]

            User.objects.get_or_create(phone=phone)

            pk = User.objects.get(phone=phone)

            otp = sendToken()

            OTP.objects.create(user=pk, otp=otp).save()

            print(f"otp ========= ", otp)

            return response.Response(data=s.data, status=status.HTTP_200_OK)
        else:
            return response.Response(data=s.errors, status=status.HTTP_400_BAD_REQUEST)


class CheckOTPAPIView(generics.GenericAPIView):
    """
    An endpoint to check OTP token
    """

    permission_classes = [permissions.AllowAny]
    serializer_class = [OTPSerializer]

    def post(self, request, *args, **kwargs):
        s = OTPSerializer(data=request.data)
        if s.is_valid():
            otp = s.validated_data["otp"]
            user_otp = OTP.objects.get(otp=otp)
            if  user_otp is not None:
                print(user_otp)
                pk = user_otp.user
                print(pk)
                user = User.objects.get(pk=pk.pk)
                token = tokens.RefreshToken.for_user(user)
                data = {"refresh": str(token), "access": str(token.access_token)}
                # deleteOTP(user=user)
                return response.Response(data=data, status=status.HTTP_200_OK)
            else:
                return response.Response(data="OTP is not valid", status=status.HTTP_404_NOT_FOUND)
        else:
            return response.Response(data=s.errors, status=status.HTTP_400_BAD_REQUEST)


class ProfileAPIView(generics.RetrieveUpdateAPIView):
    """"""

    permission_classes = [permissions.IsAuthenticated]
    serializer_class = [UserProfileSerializer]

    def get_object(self):
        pk = self.kwargs['pk']
        user_profile = Profile.objects.get(pk=pk)
        return user_profile
