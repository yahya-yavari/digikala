from rest_framework import generics, permissions, response, status

from .models import Category, Product, Gallery, Color, Feature
from .serializers import (
    CategorySerializer, GallerySerializer, ColorSerializer, FeatureSerializer, ProductSerializer
)


class CategoryAPIView(generics.ListAPIView):
    """"""

    permission_classes = [permissions.AllowAny]
    serializer_class = CategorySerializer


class SingleCategoryAPIView(generics.RetrieveAPIView):
    """"""

    permission_classes = [permissions.AllowAny]
    serializer_class = CategorySerializer

    def get_object(self):
        pk = self.kwargs['pk']
        c = Category.objects.get(pk=pk)
        return c


class ProductAPIView(generics.ListAPIView):
    """"""

    permission_classes = [permissions.AllowAny]
    serializer_class = ProductSerializer


class SingleProductAPIView(generics.RetrieveAPIView):
    """"""

    permission_classes = [permissions.AllowAny]
    serializer_class = ProductSerializer

    def get_object(self):
        pk = self.kwargs['pk']
        c = Product.objects.get(pk=pk)
        return c
