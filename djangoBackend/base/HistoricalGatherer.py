from base.models import Stock_price_table
from base.models import Stock_table
from itertools import chain
import requests
import datetime, time, csv

class HistoricalGatherer():
    added_dates = []
    symbols = []

    def __init__(self):
        all_stock_symbols_tuple = list(Stock_table.objects.values_list("ticker_symbol")) #Output is list of nested tuples
        self.symbols = list(chain.from_iterable(all_stock_symbols_tuple))

        self.added_dates = list(Stock_table.objects.values_list("added_at")) #Output is list of nested tuples
        self.added_dates = list(chain.from_iterable(self.added_dates))


    def get_date_code(self, date):  # date format year.month.day
        date_lst = date.split(".")
        year = int(date_lst[0])
        month = int(date_lst[1])
        day = int(date_lst[2])
        date_formatted = datetime.datetime(year, month, day, 10, 0)
        return int(time.mktime(date_formatted.timetuple()))

    def fill_database(self):
        for i in range(len(self.symbols)):

            api_url = "https://query1.finance.yahoo.com/v7/finance/download/{symbol}?period1={startdate}&period2=1670420204&interval=1d&events=history&includeAdjustedClose=true"

            headers = { 'Accept-Language' : "de,en-US;q=0.7,en;q=0.3", 
            'User-Agent': "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:107.0) Gecko/20100101 Firefox/107.0"}

            request = requests.get(api_url.format(symbol=self.symbols[i], startdate = self.get_date_code(self.added_dates[i])), headers=headers)

            lines = request.text.splitlines()

            reader = csv.reader(lines)

            first = True
            for row in reader:
                if first:
                    first = False
                    continue
                Stock_price_table.objects.create(ticker_symbol=self.symbols[i], date_time= row[0], price=row[4])


                

