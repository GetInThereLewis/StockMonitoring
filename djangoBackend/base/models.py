from django.db import models

# Create your models here.

class Stock_table(models.Model):
    ticker_symbol = models.CharField(max_length=12)
    added_at = models.DateTimeField(auto_now_add=True)
    price_prediction = models.FloatField()


class Stock_price_table(models.Model):
    ticker_symbol = models.CharField(max_length=12)
    date_time = models.DateTimeField(auto_now_add=True)
    price = models.FloatField()