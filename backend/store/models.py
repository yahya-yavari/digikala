from itertools import product
from django.db import models
from django.conf import settings
from django.core.validators import MaxValueValidator, MinValueValidator, RegexValidator


User = settings.AUTH_USER_MODEL


class Category(models.Model):
    title       = models.CharField(max_length = 50, unique=True)
    description = models.CharField(max_length = 256)
    slug        = models.SlugField(max_length = 100, unique=True, allow_unicode=True)
    created_at  = models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return self.title
    
    def __unicode__(self):
        return self.title
    
    class Meta:
        managed = True
        verbose_name = 'Category'
        verbose_name_plural = 'Categories'


class Product(models.Model):
    numbers         = RegexValidator(r'^[0-9a]*$', message='only numbers')
    title           = models.CharField(max_length = 50, unique=True)
    slug            = models.SlugField(max_length = 100, unique=True, allow_unicode=True)
    description     = models.CharField(max_length = 256)
    price           = models.DecimalField(max_digits=12, decimal_places=0)
    in_stock        = models.PositiveIntegerField()
    is_available    = models.BooleanField(default=True)
    rating          = models.FloatField(validators=[MinValueValidator(1.0), MaxValueValidator(10.0)])
    weight          = models.PositiveIntegerField()
    barcode         = models.CharField(max_length=12, validators=[numbers])
    shipping_amount = models.DecimalField(max_digits=12, decimal_places=0, default=0)
    category        = models.ForeignKey(Category, on_delete=models.CASCADE)

    def gallery(self):
        return Gallery.objects.filter(product=self)
    
    
    def feature(self):
        return Feature.objects.filter(product=self)
    
    
    def color(self):
        return Color.objects.filter(product=self)


    def __str__(self):
        return self.title

    def __unicode__(self):
        return self.title
    
    class Meta:
        managed = True
        verbose_name = 'Product'
        verbose_name_plural = 'Products'


class Gallery(models.Model):
    product    = models.ForeignKey(Product, on_delete=models.CASCADE)
    image      = models.ImageField(upload_to='gallery/')
    active     = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return self.product.title
    
    def __unicode__(self):
        return self.product.title
    
    class Meta:
        managed = True
        verbose_name = 'Product Image'
        verbose_name_plural = 'Product Images'


class Color(models.Model):
    product    = models.ForeignKey(Product, on_delete=models.CASCADE)
    active     = models.BooleanField(default=True)
    color_code = models.CharField(max_length = 15)
    created_at = models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return self.product.title
    
    def __unicode__(self):
        return self.product.title
    
    class Meta:
        managed = True
        verbose_name = 'Product Color'
        verbose_name_plural = 'Product Colors'


class Feature(models.Model):
    product    = models.ForeignKey(Product, on_delete=models.CASCADE)
    title      = models.CharField(max_length = 256)
    content    = models.CharField(max_length = 256)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.product.title
    
    def __unicode__(self):
        return self.product.title
    
    class Meta:
        managed = True
        verbose_name = 'Product Feature'
        verbose_name_plural = 'Product Features'
