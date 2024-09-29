from django.urls import path, include
from django.conf import settings
from .views import *


urlpatterns = [
    path('', ChatBotAPIView.as_view(), name= "chat-bot"),
]
