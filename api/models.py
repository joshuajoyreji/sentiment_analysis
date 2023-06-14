from django.db import models
from email.policy import default
from django.contrib.auth.models import (AbstractBaseUser,BaseUserManager,PermissionsMixin)
from django.contrib.auth import get_user_model
from rest_framework_simplejwt.tokens import RefreshToken, AccessToken

class UserManager(BaseUserManager):
    def create_user(self,username,email,password=None):
        if username is None:
            raise TypeError("Users should have a username")


        if email is None:
            raise TypeError("Users should have a email")


        user=self.model(username=username,email=self.normalize_email(email))
        user.set_password(password)
        user.save(using=self._db)
        return user


    def create_superuser(self,username,email,password=None):
        if password is None:
            raise TypeError("Password should not be none")
       
        user=self.create_user(username,email,password)
        user.is_superuser=True
        user.is_staff=True
        user.save(using=self._db)
        return user
    
class User(AbstractBaseUser,PermissionsMixin):
    username=models.CharField(max_length=255,unique=True,db_index=True)
    email=models.EmailField(max_length=255,unique=True,db_index=True)
    is_verified=models.BooleanField(default=False)
    is_active=models.BooleanField(default=True)
    is_staff=models.BooleanField(default=False)
    created_at=models.DateTimeField(auto_now_add=True)
    updated_at=models.DateTimeField(auto_now_add=True)
    USERNAME_FIELD='email'
    REQUIRED_FIELDS=['username']

    objects=UserManager()
    def __str__(self):
        return self.username


    def tokens(self):
        refresh = RefreshToken.for_user(self)
        access = AccessToken.for_user(self)

        return {
            'refresh': str(refresh),
            'access': str(access),
        }


class Tweet(models.Model):
    content = models.CharField(max_length=280)
    user = models.ForeignKey(get_user_model(), on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f'Tweet: {self.content}'
