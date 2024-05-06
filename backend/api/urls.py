from django.urls import path 

from user import views as auth_views
from store import views as store_view


urlpatterns = [
    # TODO : Authentication paths
    path('user/token/', auth_views.UserAccessAPIView.as_view()),
    path('user/otp/', auth_views.CheckOTPAPIView.as_view()),
    path('user/profile/', auth_views.ProfileAPIView.as_view()),

    # TODO : Store paths
    path('store/category/', store_view.CategoryAPIView.as_view()),
    path('store/category/<int:pk>/', store_view.SingleCategoryAPIView.as_view()),
    path('store/product/', store_view.ProductAPIView.as_view()),
    path('store/product/<int:pk>/', store_view.SingleProductAPIView.as_view()),
]
