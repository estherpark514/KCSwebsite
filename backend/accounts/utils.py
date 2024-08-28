from django.http import JsonResponse
from .models import CustomUser

def check_email_exists(email):
    if CustomUser.objects.filter(email=email).exists():
        return JsonResponse({"status": 200, "message": "Email exists"}, status=200)
    return JsonResponse({"status": 404, "message": "The email address does not exist"}, status=404)
