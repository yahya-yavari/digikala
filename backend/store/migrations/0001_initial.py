# Generated by Django 5.0.4 on 2024-05-07 14:49

import django.core.validators
import django.db.models.deletion
from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='CartOrderItem',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
            ],
        ),
        migrations.CreateModel(
            name='Category',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=50, unique=True)),
                ('description', models.CharField(max_length=256)),
                ('slug', models.SlugField(allow_unicode=True, max_length=100, unique=True)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
            ],
            options={
                'verbose_name': 'Category',
                'verbose_name_plural': 'Categories',
                'managed': True,
            },
        ),
        migrations.CreateModel(
            name='Comment',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
            ],
        ),
        migrations.CreateModel(
            name='Complain',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
            ],
        ),
        migrations.CreateModel(
            name='Payment',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
            ],
        ),
        migrations.CreateModel(
            name='Wishlist',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
            ],
        ),
        migrations.CreateModel(
            name='Cart',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('price', models.DecimalField(decimal_places=2, max_digits=12)),
                ('shipping_amount', models.DecimalField(decimal_places=2, max_digits=12)),
                ('total', models.DecimalField(decimal_places=2, max_digits=12)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
            options={
                'verbose_name': 'Cart',
                'verbose_name_plural': 'Carts',
                'managed': True,
            },
        ),
        migrations.CreateModel(
            name='CartOrder',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('qty', models.PositiveIntegerField()),
                ('price', models.DecimalField(decimal_places=2, max_digits=12)),
                ('sub_total', models.DecimalField(decimal_places=2, max_digits=12)),
                ('tax', models.DecimalField(decimal_places=2, max_digits=12)),
                ('total', models.DecimalField(decimal_places=2, max_digits=12)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('phone', models.CharField(max_length=11)),
                ('city', models.CharField(max_length=30)),
                ('address', models.CharField(max_length=256)),
                ('plaque', models.CharField(max_length=5)),
                ('payment_status', models.PositiveSmallIntegerField(choices=[('در حال بررسی', 1), ('در حال ارسال', 2), ('پرداخت شده', 3), ('لغو شده', 4)], default=1)),
                ('cart', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='store.cart')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
            options={
                'verbose_name': 'Cart Order',
                'verbose_name_plural': 'Cart Orders',
                'managed': True,
            },
        ),
        migrations.CreateModel(
            name='Product',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=50, unique=True)),
                ('slug', models.SlugField(allow_unicode=True, max_length=100, unique=True)),
                ('description', models.CharField(max_length=256)),
                ('price', models.DecimalField(decimal_places=0, max_digits=12)),
                ('in_stock', models.PositiveIntegerField()),
                ('is_available', models.BooleanField(default=True)),
                ('rating', models.FloatField(validators=[django.core.validators.MinValueValidator(1.0), django.core.validators.MaxValueValidator(10.0)])),
                ('weight', models.PositiveIntegerField()),
                ('barcode', models.CharField(max_length=12, validators=[django.core.validators.RegexValidator('^[0-9a]*$', message='only numbers')])),
                ('shipping_amount', models.DecimalField(decimal_places=0, default=0, max_digits=12)),
                ('category', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='store.category')),
            ],
            options={
                'verbose_name': 'Product',
                'verbose_name_plural': 'Products',
                'managed': True,
            },
        ),
        migrations.CreateModel(
            name='Gallery',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('image', models.ImageField(upload_to='gallery/')),
                ('active', models.BooleanField(default=True)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('product', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='store.product')),
            ],
            options={
                'verbose_name': 'Product Image',
                'verbose_name_plural': 'Product Images',
                'managed': True,
            },
        ),
        migrations.CreateModel(
            name='Feature',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=256)),
                ('content', models.CharField(max_length=256)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('product', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='store.product')),
            ],
            options={
                'verbose_name': 'Product Feature',
                'verbose_name_plural': 'Product Features',
                'managed': True,
            },
        ),
        migrations.CreateModel(
            name='Color',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('active', models.BooleanField(default=True)),
                ('color_code', models.CharField(max_length=15)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('product', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='store.product')),
            ],
            options={
                'verbose_name': 'Product Color',
                'verbose_name_plural': 'Product Colors',
                'managed': True,
            },
        ),
        migrations.AddField(
            model_name='cart',
            name='product',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='store.product'),
        ),
    ]
