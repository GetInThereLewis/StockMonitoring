from django.urls import path
from . import views

urlpatterns = [
    path("all_stock_prices/", views.get_all_stock_prices),
    path("all_stock_symbols/", views.get_all_stock_symbols),
    path("add/", views.addStock)
]