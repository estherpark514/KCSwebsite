from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from .serializers import *
from .emails import *
from rest_framework import status


# from django.http import JsonResponse
# from django.views.decorators.csrf import csrf_exempt
# from .models import User
# import json


class RegisterAPI(APIView):
    def post(self, request):
        try:
            data = request.data
            # print("Data received:", data)
            serializer = UserSerializer(data=data)
            if serializer.is_valid():
                # print("Serializer is valid")
                email = serializer.validated_data['email']
                user = CustomUser.objects.filter(email=email, is_verified=True)
                if user.exists():
                    return Response({"status": 400, "message": "Email already registered and verified"})
                serializer.save()
                send_otp_via_email(email)
                return Response(
                    {
                        "status": 200,
                        "message": "Registration successful. Check email for verification",
                        "data": serializer.data,
                    }
                )
            else:
                # print("Serializer errors:", serializer.errors)  
                return Response(
                    {
                        "status": 400,
                        "message": "Something went wrong",
                        "data": serializer.errors,
                    }
                )

        except Exception as e:
            # print("Exception occurred:", e)  
            return Response(
                {
                    "status": 500,
                    "message": "Internal server error",
                    "data": str(e),
                }
            )


class VerifyOTP(APIView):
    def post(self, request):
        try:
            data = request.data
            serializer = VerifyAccountSerializer(data=data)

            if serializer.is_valid():
                email = serializer.data["email"]
                otp = serializer.data["otp"]

                # Fetch user by email
                user = CustomUser.objects.filter(email=email)

                if not user.exists():
                    return Response(
                        {
                            "status": 400,
                            "message": "Invalid email",
                            "data": {},
                        }
                    )

                # Check if OTP matches
                if user[0].otp != otp:
                    return Response(
                        {
                            "status": 400,
                            "message": "Wrong OTP",
                            "data": {},
                        }
                    )

                # Mark user as verified
                user = user.first()
                user.is_verified = True
                user.save()

                return Response(
                    {
                        "status": 200,
                        "message": "Account verified",
                        "data": {},
                    }
                )
            else:
                return Response(
                    {
                        "status": 400,
                        "message": "Invalid data",
                        "data": serializer.errors,
                    }
                )
        except Exception as e:
            return Response(
                {
                    "status": 500,
                    "message": "Internal server error",
                    "data": str(e),
                }
            )
from rest_framework import status
from rest_framework.response import Response

class SignupAPI(APIView):
    def post(self, request):
        try:
            data = request.data
            print("Data received:", data)
            email = data.get('email')
            existing_user = CustomUser.objects.filter(email=email)

            if existing_user.exists():
                existing_user.delete()
                print("Existing user deleted")

            # Instantiate the UserSerializer with data
            serializer = UserSerializer(data=data)

            if serializer.is_valid():
                serializer.save()
                return Response({"status": 200, "message": "User created successfully"})
            else:
                return Response({"status": 400, "message": "Serializer errors", "data": serializer.errors})
        except Exception as e:
            print("Exception occurred:", e)
            return Response(
                {
                    "status": 500,
                    "message": "Internal server error",
                    "data": str(e),
                },
                status=status.HTTP_500_INTERNAL_SERVER_ERROR
            )

