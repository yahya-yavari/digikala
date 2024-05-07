from rest_framework import serializers

from .models import Category, Product, Gallery, Color, Feature


class CategorySerializer(serializers.ModelSerializer):
    """"""

    class Meta:
        model = Category
        fields = "__all__"


class GallerySerializer(serializers.ModelSerializer):
    """"""

    class Meta:
        model = Gallery
        fields = "__all__"


class ColorSerializer(serializers.ModelSerializer):
    """"""

    class Meta:
        model = Color
        fields = "__all__"


class FeatureSerializer(serializers.ModelSerializer):
    """"""

    class Meta:
        model = Feature
        fields = "__all__"


class ProductSerializer(serializers.ModelSerializer):
    """"""

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
