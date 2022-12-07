from django.db import models

# Create your models here.

class Stock_table(models.Model):
    ticker_symbol = models.CharField(max_length=12)
    added_at = models.CharField(max_length=11)
    price_prediction = models.FloatField(null=True, blank=True, default=None)


class Stock_price_table(models.Model):
    ticker_symbol = models.CharField(max_length=12)
    date_time = models.CharField(max_length=11)
    price = models.FloatField()