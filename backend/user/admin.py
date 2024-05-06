from django.contrib import admin
from django.contrib.auth.admin import UserAdmin

from .models import User, Profile, OTP 


class Admin(UserAdmin):
    list_display = ('pk', 'phone')
    filter_horizontal = ()
    list_filter = ('is_active',)
    fieldsets = ()
    search_fields = ('pk', 'phone')
    ordering = ('pk',)


class PAdmin(admin.ModelAdmin):
    list_display = ['user', 'phone', 'email']


admin.site.register(User, Admin)


admin.site.register(Profile, PAdmin)


class OTPAdmin(admin.ModelAdmin):
    list_display = ['user', 'otp']


admin.site.register(OTP, OTPAdmin)
