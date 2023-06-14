from django.shortcuts import render
from django.conf import settings
from rest_framework import generics,mixins,viewsets,status
from django.http import JsonResponse
from django.core import serializers
from .models import User
from .serializers import UserSerializer,RegisterSerializer
from rest_framework.views import APIView
from rest_framework_simplejwt.tokens import RefreshToken,AccessToken
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
import os
from django.contrib.auth import get_user_model
from .models import Tweet

class SearchView(APIView):
    def post(self, request):
        tweet = request.data.get('tweet')
        user = request.user
        print(request.user)
        try:
            user_obj = get_user_model().objects.get(pk=user.pk)
            tweet_obj = Tweet.objects.create(content=tweet, user=user_obj)

            return Response({'message': 'Search successful', 'tweet': tweet}, status=status.HTTP_200_OK)
        except User.DoesNotExist:
            return Response({'message': 'User does not exist'}, status=status.HTTP_404_NOT_FOUND)
    
class BlacklistTokenView(APIView):
    permission_classes=[IsAuthenticated]
    def post(self,request):
        try:
            refresh_token=request.data["refresh_token"]
            token=RefreshToken(refresh_token)
            token.blacklist()
        except Exception as e:
            return Response(status=status.HTTP_400_BAD_REQUEST)
class LoggedInUserView(APIView):
    permission_classes=[IsAuthenticated]

    def get(self, request):
        serializer = UserSerializer(request.user)
        print(serializer.data)
        return JsonResponse(serializer.data)


class RegisterView(viewsets.GenericViewSet,mixins.CreateModelMixin,mixins.RetrieveModelMixin,mixins.ListModelMixin):
    serializer_class=RegisterSerializer
    queryset=User.objects.all() 

    def update(self, request, *args, **kwargs):
        tweet = request.data.get('tweet')

        user = self.get_object()

        user.tweet = tweet
        user.save()

        serializer = self.get_serializer(user)
        return Response(serializer.data)
    
def tweet_list(request):
    tweets = Tweet.objects.all()
    return render(request, 'api/tweet_list.html', {'tweets': tweets})