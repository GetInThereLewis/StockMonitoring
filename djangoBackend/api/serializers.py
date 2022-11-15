from rest_framework import serializers
from base.models import Stock_price_table
from base.models import Stock_table

class Stock_price_table_serializer(serializers.ModelSerializer):
    class Meta:
        model = Stock_price_table
        fields = "__all__"


class Stock_table_serializer(serializers.ModelSerializer):
    class Meta:
        model = Stock_table
        fields = "__all__"