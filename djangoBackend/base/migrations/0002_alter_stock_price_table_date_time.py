# Generated by Django 4.0.2 on 2022-11-14 15:27

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='stock_price_table',
            name='date_time',
            field=models.DateTimeField(auto_now_add=True),
        ),
    ]