from django.urls import path
from .views import ListVideo, DetailVideo

urlpatterns = [
    path("video/<str:pk>/", DetailVideo.as_view()),
    path("video/", ListVideo.as_view()),
]
