from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from .serializers import *
from .emails import *

# from django.http import JsonResponse
# from django.views.decorators.csrf import csrf_exempt
# from .models import User
# import json


class RegisterAPI(APIView):
    def post(self, request):
        try:
            data = request.data
            serializer = UserSerializer(data=data)
            if serializer.is_valid():
                serializer.save()
                send_otp_via_email(serializer.data["email"])
                return Response(
                    {
                        "status": 200,
                        "message": "registration successfully check email",
                        "data": serializer.data,
                    }
                )

            return Response(
                {
                    "status": 400,
                    "message": "something went wrong",
                    "data": serializer.errors,
                }
            )

        except Exception as e:
            print(e)


class VerifyOTP(APIView):
    def post(self, request):
        try:
            data = request.data
            serializer = VerifyAccountSerializer(data=data)

            if serializer.is_valid():
                email = serializer.data["email"]
                otp = serializer.data["otp"]

                user = CustomUser.objects.filter(email=email)

                if not user.exists():
                    return Response(
                        {
                            "status": 400,
                            "message": "something went wrong",
                            "data": "invalid email",
                        }
                    )

                if user[0].otp != otp:
                    return Response(
                        {
                            "status": 400,
                            "message": "something went wrong",
                            "data": "wrong otp",
                        }
                    )
                
                user = user.first()
                user.is_verified = True
                user.save()

                return Response(
                    {
                        "status": 200,
                        "message": "account verified",
                        "data": {},
                    }
                )
        except Exception as e:
            print(e)


# @csrf_exempt
# def register(request):
#     if request.method == 'POST':
#         data = json.loads(request.body)
#         email = data.get('email')
#         password = data.get('password')
#         first_name = data.get('first_name')
#         last_name = data.get('last_name')
#         major = data.get('major')
#         class_standing = data.get('class_standing')

#         if User.objects.filter(email=email).exists():
#             return JsonResponse({'error': 'Email already exists'}, status=400)

#         user = User.objects.create(
#             email=email,
#             password=password,
#             first_name=first_name,
#             last_name=last_name,
#             major=major,
#             class_standing=class_standing
#         )

#         return JsonResponse({'message': 'User created successfully'}, status=201)

#     return JsonResponse({'error': 'Invalid request'}, status=400)
