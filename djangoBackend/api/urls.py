from django.urls import path
from . import views

urlpatterns = [
    path("stop_gathering/", views.stop_gathering),
    path("all_stock_prices/", views.get_all_stock_prices),
    path("all_stock_symbols/", views.get_all_stock_symbols),
    path("stock_price_data/<stock_symbol>", views.stock_price_data),
    path("add/", views.addStock),
]