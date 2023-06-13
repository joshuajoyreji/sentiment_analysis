from rest_framework import serializers
from .models import User
from rest_framework.permissions import IsAuthenticated


class RegisterSerializer(serializers.ModelSerializer):
    password=serializers.CharField(max_length=68,min_length=6,write_only=True)
    permission_classes=[IsAuthenticated]
    class Meta:
        model=User
        fields=['email','username','password']


    def validate(self,attrs):
        email=attrs.get('email','')
        username=attrs.get('username','')
        if not username.isalnum():
            raise serializers.ValidationError("username should contain only alpha numeric chars")
        return attrs


    def create(self,validated_data):
        tweet = validated_data.pop('tweet','')
        user = User.objects.create_user(**validated_data)
        user.tweet = tweet
        user.save()
        return user


class UserSerializer(serializers.ModelSerializer):
    tweet = serializers.CharField(required= False)
    class Meta:
        model=User
        fields=['id','username','email']

    def update(self, instance, validated_data):
        tweet = validated_data.get('tweet', instance.tweet)
        instance.tweet = tweet
        instance.save()
        return instance
    