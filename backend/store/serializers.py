from rest_framework import serializers

from .models import Category, Product, Gallery, Color, Feature, Cart, CartOrder, CartOrderItem


class CategorySerializer(serializers.ModelSerializer):
    """
    serialize the Category model
    """

    class Meta:
        model = Category
        fields = "__all__"


class GallerySerializer(serializers.ModelSerializer):
    """
    serialize the Gallery model to see Product's Images
    """

    class Meta:
        model = Gallery
        fields = "__all__"


class ColorSerializer(serializers.ModelSerializer):
    """
    serialize the Color model to see Product's available Color
    """

    class Meta:
        model = Color
        fields = "__all__"


class FeatureSerializer(serializers.ModelSerializer):
    """
    serialize the Feature model to see Product's Features
    """

    class Meta:
        model = Feature
        fields = "__all__"


class ProductSerializer(serializers.ModelSerializer):
    """
    serialize the Product model
    """

    gallery = GallerySerializer(many=True, read_only=True)
    color   = ColorSerializer(many=True, read_only=True)
    feature = FeatureSerializer(many=True, read_only=True)

    class Meta:
        model = Product
        fields = [
            'id',
            'title',
            'description',
            'slug',
            'price',
            'in_stock',
            'is_available',
            'rating',
            'barcode',
            'weight',
            'shipping_amount'
            'category',
            'gallery',
            'color',
            'feature',
        ]
    
    
    def __init__(self, *args, **kwargs):
        super(ProductSerializer, self).__init__(*args, **kwargs)
        request = self.context.get("request")

        if request and request.method == "POST":
            self.Meta.depth = 0
        else:
            self.Meta.depth = 3


class CartSerializer(serializers.ModelSerializer):
    """
    serialize the Cart model to get selected Product info by User
    """

    class Meta:
        model = Cart 
        fields = "__all__"
        exclude = ['created_at']
    
    def __init__(self, *args, **kwargs):
        super(CartSerializer, self).__init__(*args, **kwargs)
        request = self.context.get("request")

        if request and request.method == "POST":
            self.Meta.depth = 0
        else:
            self.Meta.depth = 3


class CartOrderSerializer(serializers.ModelSerializer):
    """
    serialize the Cart Order model to get some additional info from Users
    """

    class Meta:
        model = CartOrder 
        fields = "__all__"
        exclude = ['created_at']
    
    def __init__(self, *args, **kwargs):
        super(CartOrderSerializer, self).__init__(*args, **kwargs)
        request = self.context.get("request")

        if request and request.method == "POST":
            self.Meta.depth = 0
        else:
            self.Meta.depth = 3
