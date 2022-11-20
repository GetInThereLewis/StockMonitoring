from rest_framework.response import Response
from django.http import Http404
from rest_framework import status
from rest_framework.decorators import api_view
from base.models import Stock_price_table
from base.models import Stock_table
from .serializers import Stock_price_table_serializer, Stock_table_serializer

from itertools import chain

@api_view(["GET"])
def stock_price_data(request, stock_symbol):
    stock_symbol = stock_symbol.upper()
    all_stock_symbols_tuple = list(Stock_table.objects.values_list("ticker_symbol")) #Output is list of nested tuples
    all_stock_symbols = list(chain.from_iterable(all_stock_symbols_tuple)) # Flatten the tuple list to list of strings
    
    if stock_symbol not in all_stock_symbols:
        return Response("Error. This stock symbol is not tracked or recognised. Check spelling", status=status.HTTP_404_NOT_FOUND)
    
    # Get all rows where ticker_symbol equals requested stock_symbol
    requested_stock_data = Stock_price_table.objects.filter(ticker_symbol = stock_symbol).values()
    
    serializer = Stock_price_table_serializer(requested_stock_data, many=True)
    
    return Response(serializer.data)

@api_view(["GET"])
def get_all_stock_prices(request):
    stock_price_data = Stock_price_table.objects.all()
    serializer = Stock_price_table_serializer(stock_price_data, many=True)
    return Response(serializer.data)

@api_view(["POST"])
def addStock(request):
    serializer = Stock_price_table_serializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data)

@api_view(["GET"])
def get_all_stock_symbols(request):
    all_stock_symbols = Stock_table.objects.all()
    serializer = Stock_table_serializer(all_stock_symbols, many=True)
    return Response(serializer.data)