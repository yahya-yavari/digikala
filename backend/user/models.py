from django.db import models
from django.core.validators import RegexValidator
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin, BaseUserManager


class AllUser(BaseUserManager):
    def create_user(self, phone,  password=None, **kwargs):
        
        if not phone:
            raise ValueError('need Phone Number')

        user = self.model(
            phone=phone,
            **kwargs,
        )
        user.is_active = True
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_staff(self, phone, password):
        user = self.create_user(
            phone=phone,
            password=password,
        )
        user.is_staff = True
        user.is_active  = True
        user.is_superuser = False        
        user.save(using=self._db)
        return user

    def create_superuser(self, phone, password):
        user = self.create_user(
            phone=phone,
            password=password,
        )
        user.is_staff     = True
        user.is_active    = True
        user.is_superuser = True  
        user.is_admin     = True      
        user.save(using=self._db)
        return user


class User(AbstractBaseUser, PermissionsMixin):
    numbers      = RegexValidator(r'^[0-9a]*$', message='only numbers')
    phone        = models.CharField(max_length=11, unique=True, validators=[numbers])
    is_active    = models.BooleanField(default=True)
    is_staff     = models.BooleanField(default=False)    
    is_admin     = models.BooleanField(default=False)
    is_superuser = models.BooleanField(default=False)
    last_login   = models.DateTimeField(null=True, blank=True)
    created_at   = models.DateTimeField(auto_now_add=True)
    
    USERNAME_FIELD = "phone"
    
    objects = AllUser()

    def __str__(self) -> str:
        return self.phone
    
    def has_perm(self, perm, obj=None):
        "Does the user have a specific permission?"
        # Simplest possible answer: Yes, always
        return True

    def has_module_perms(self, app_label):
        "Does the user have permissions to view the app `app_label`?"
        # Simplest possible answer: Yes, always
        return True
    
    class Meta:
        verbose_name = 'User'
        verbose_name_plural = 'User'


class OTP(models.Model):
    numbers    = RegexValidator(r'^[0-9a]*$', message='only numbers')
    user       = models.ForeignKey(User, on_delete=models.CASCADE)
    otp        = models.CharField(max_length=6, validators=[numbers], unique=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f'{self.user}'    


class Profile(models.Model):
    user      = models.OneToOneField(User, on_delete=models.CASCADE, related_name='user_profile')
    phone     = models.CharField(max_length=11, unique=True)
    email     = models.EmailField(unique=True, blank=True, null=True)
    username  = models.CharField(max_length=30, unique=True, blank=True, null=True)
    full_name = models.CharField(max_length=100, blank=True, null=True)
    address   = models.CharField(max_length = 256, blank=True, null=True)

    def __str__(self) -> str:
        return f'{self.user} {self.phone}'
    
    class Meta:
        verbose_name = 'Profile'
        verbose_name_plural = 'Profile'
