from django.contrib import admin
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import (
    BlacklistTokenView,
    LoggedInUserView,
    RegisterView,
    SearchView,
    tweet_list,
)
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
from django.conf.urls.static import static
from django.conf import settings


router=DefaultRouter()
router.register('register',RegisterView,basename='register')


urlpatterns = [
    path('',include(router.urls)),
    path('api/token/',TokenObtainPairView.as_view(),name="token_obtain"),
    path('api/token/refresh/',TokenRefreshView.as_view(),name="refresh_token"),
    path('api/token/blacklist/',BlacklistTokenView.as_view(),name="blacklist"),
    path('current-user/', LoggedInUserView.as_view(), name='currentuser'),
    path('api/token/search/', SearchView.as_view(), name='search'),
    path('tweets/', tweet_list, name='tweet_list'),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)