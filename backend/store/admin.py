from django.contrib import admin

from .models import (
    Category, Product, Gallery, Color, Feature
)


class GalleryInline(admin.TabularInline):
    model = Gallery


class ColorInline(admin.TabularInline):
    model = Color


class FeatureInline(admin.TabularInline):
    model = Feature


class CategoryAdmin(admin.ModelAdmin):
    list_display = ('title',)
    prepopulated_fields = {'slug': ('title',)}


class ProductAdmin(admin.ModelAdmin):
    list_display = ('title', 'is_available')
    list_filter = ['is_available']
    prepopulated_fields = {'slug': ('title',)}
    inlines = [GalleryInline, ColorInline, FeatureInline]


admin.site.register(Product, ProductAdmin)


admin.site.register(Category, CategoryAdmin)
