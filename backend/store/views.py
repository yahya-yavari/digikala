from rest_framework import generics, permissions, response, status

from .models import Category, Product, Gallery, Color, Feature
from .serializers import (
    CategorySerializer, GallerySerializer, ColorSerializer, FeatureSerializer, ProductSerializer
)


class CategoryAPIView(generics.ListAPIView):
    """"""

    permission_classes = [permissions.AllowAny]
    serializer_class = CategorySerializer
