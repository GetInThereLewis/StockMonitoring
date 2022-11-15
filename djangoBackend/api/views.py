from rest_framework.response import Response
from rest_framework.decorators import api_view
from base.models import Stock_price_table
from base.models import Stock_table
from .serializers import Stock_price_table_serializer, Stock_table_serializer

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