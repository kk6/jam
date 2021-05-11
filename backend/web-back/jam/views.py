from rest_framework import generics
from .models import Video
from .serializers import VideoSerializer


class ListVideo(generics.ListAPIView):
    queryset = Video.objects.all()
    serializer_class = VideoSerializer


class DetailVideo(generics.RetrieveAPIView):
    queryset = Video.objects.all()
    serializer_class = VideoSerializer
