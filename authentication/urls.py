from django.urls import path
from . import views

urlpatterns = [
    path('api/login', views.login_view, name='login'),
    path('api/signup', views.signup_view, name='signup'),
]
