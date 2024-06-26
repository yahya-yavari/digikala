from celery import shared_task
from django.utils.timezone import timedelta, datetime 

from .models import OTP


@shared_task()
def deleteOTP(user):
    otp = OTP.objects.get(user=user)
    if datetime.now() - otp.created_at > timedelta(seconds=180):
        otp.delete() 
