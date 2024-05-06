from django.urls import path 

from user import views as auth_views


urlpatterns = [
    path('user/token/', auth_views.UserAccessAPIView.as_view()),
    path('user/otp/', auth_views.CheckOTPAPIView.as_view()),
    path('user/profile/', auth_views.ProfileAPIView.as_view()),
]
