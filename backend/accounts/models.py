from django.db import models
from django.contrib.auth.models import AbstractUser
from .manager import UserManager

class CustomUser(AbstractUser):
    username = None
    email = models.EmailField(unique=True)
    is_verified = models.BooleanField(default=False)
    otp = models.CharField(max_length=6, null=True, blank=True)
    # first_name = models.CharField(max_length=100)
    # last_name = models.CharField(max_length=100)

    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = []

    objects = UserManager()

    def name(self):
        return self.first_name + " " + self.last_name

    def __str__(self):
        return self.email
