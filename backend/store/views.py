from rest_framework import generics, permissions, response, status, filters

from .models import Category, Product, Gallery, Color, Feature
from .serializers import (
    CategorySerializer, GallerySerializer, ColorSerializer, FeatureSerializer, ProductSerializer, 
    CartSerializer, CartOrderSerializer
)


class CategoryAPIView(generics.ListAPIView):
    """
    An endpoint to see all Categories at once
    """

    permission_classes = [permissions.AllowAny]
    serializer_class = CategorySerializer


class SingleCategoryAPIView(generics.RetrieveAPIView):
    """
    An endpoint to see each category seprately
    """

    permission_classes = [permissions.AllowAny]
    serializer_class = CategorySerializer

    def get_object(self):
        pk = self.kwargs['pk']
        c = Category.objects.get(pk=pk)
        return c


class ProductAPIView(generics.ListAPIView):
    """
    An endpoint to see all Products
    """

    permission_classes = [permissions.AllowAny]
    serializer_class = ProductSerializer


class SingleProductAPIView(generics.RetrieveAPIView):
    """
    An endpoint to see each Product seprately
    """

    permission_classes = [permissions.AllowAny]
    serializer_class = ProductSerializer

    def get_object(self):
        pk = self.kwargs['pk']
        c = Product.objects.get(pk=pk)
        return c


class ProductSearchAPIView(generics.ListAPIView):
    """
    An endpoint to search among the Products by titles and descriptions
    """

    queryset = Product.objects.all()
    permission_classes = [permissions.AllowAny]
    serializer_class = ProductSerializer
    filter_backends = [filters.SearchFilter]
    search_fields = ['title', 'description']


class CartAPIView(generics.ListCreateAPIView):
    """
    An endpoint for Users to note their Cart
    """

    permission_classes = [permissions.IsAuthenticated]
    serializer_class = CartSerializer


class CartOrderAPIView(generics.ListCreateAPIView):
    """
    An endpoint for Users to note additional info like quantity into their Cart
    """

    permission_classes = [permissions.IsAuthenticated]
    serializer_class = CartOrderSerializer
