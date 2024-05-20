from django.db import models
from django.conf import settings
from django.core.validators import MaxValueValidator, MinValueValidator, RegexValidator

from .enums import Payment_Status


User = settings.AUTH_USER_MODEL


class Category(models.Model):
    title       = models.CharField(max_length = 50, unique=True)
    description = models.CharField(max_length = 256)
    slug        = models.SlugField(max_length = 100, unique=True, allow_unicode=True)
    # created_at  = models.DateTimeField(auto_now_add=True)
    
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
    tax             = models.DecimalField(max_digits=12, decimal_places=0)
    in_stock        = models.PositiveIntegerField(validators=[MinValueValidator(0)])
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
    # created_at = models.DateTimeField(auto_now_add=True)
    
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
    # created_at = models.DateTimeField(auto_now_add=True)
    
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
    # created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.product.title
    
    def __unicode__(self):
        return self.product.title
    
    class Meta:
        managed = True
        verbose_name = 'Product Feature'
        verbose_name_plural = 'Product Features'


class Cart(models.Model):
    user            = models.ForeignKey(User, on_delete=models.CASCADE)
    product         = models.ForeignKey(Product, on_delete=models.CASCADE)
    price           = models.DecimalField(max_digits=12, decimal_places=2)
    shipping_amount = models.DecimalField(max_digits=12, decimal_places=2)
    total           = models.DecimalField(max_digits=12, decimal_places=2)
    tax             = models.DecimalField(max_digits=12, decimal_places=2)
    # created_at      = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.user} {self.product} {self.total}"

    def __unicode__(self):
        return f"{self.user} {self.product} {self.total}"
    
    class Meta:
        managed = True
        verbose_name = 'Cart'
        verbose_name_plural = 'Carts'


class CartOrder(models.Model):
    user           = models.ForeignKey(User, on_delete=models.CASCADE)
    cart           = models.ForeignKey(Cart, on_delete=models.CASCADE)
    qty            = models.PositiveIntegerField()
    price          = models.DecimalField(max_digits=12, decimal_places=2)
    sub_total      = models.DecimalField(max_digits=12, decimal_places=2)
    tax            = models.DecimalField(max_digits=12, decimal_places=2)
    total          = models.DecimalField(max_digits=12, decimal_places=2)
    # created_at     = models.DateTimeField(auto_now_add=True)

    # TODO : User informations like address, city etc.
    phone          = models.CharField(max_length=11)
    city           = models.CharField(max_length=30)
    address        = models.CharField(max_length=256)
    plaque         = models.CharField(max_length=5)
    
    # TODO : Payment status
    payment_status = models.PositiveSmallIntegerField(choices=Payment_Status.STATUS, default=1)
    
    def __str__(self):
        return f"{self.user} {self.cart} {self.phone} {self.plaque} {self.payment_status}"

    def __unicode__(self):
        return f"{self.user} {self.cart} {self.phone} {self.plaque} {self.payment_status}"
    
    class Meta:
        managed = True
        verbose_name = 'Cart Order'
        verbose_name_plural = 'Cart Orders'


class CartOrderItem(models.Model):
    

    def __str__(self):
        return 

    def __unicode__(self):
        return 


class Payment(models.Model):
    

    def __str__(self):
        return 

    def __unicode__(self):
        return 



class Wishlist(models.Model):
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    user    = models.ForeignKey(User, on_delete=models.CASCADE)

    def __str__(self):
        return f'{self.user} {self.product}'

    def __unicode__(self):
        return f'{self.user} {self.product}'
    
    class Meta:
        managed = True
        verbose_name = 'Wishlist'
        verbose_name_plural = 'Wishlists'




class Comment(models.Model):
    product    = models.ForeignKey(Product, on_delete=models.CASCADE)
    user       = models.ForeignKey(User, on_delete=models.CASCADE)
    txt        = models.CharField(max_length = 256)
    active     = models.BooleanField(default=False)
    # created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return 

    def __unicode__(self):
        return 
    
    class Meta:
        managed = True
        verbose_name = 'Comment'
        verbose_name_plural = 'Comments'


class Complain(models.Model):
    product    = models.ForeignKey(Product, on_delete=models.CASCADE)
    user       = models.ForeignKey(User, on_delete=models.CASCADE)
    txt        = models.CharField(max_length = 256)
    checked    = models.BooleanField()
    # created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return 

    def __unicode__(self):
        return 
    
    class Meta:
        managed = True
        verbose_name = 'Complain'
        verbose_name_plural = 'Complains'
