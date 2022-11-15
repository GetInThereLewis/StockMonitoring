from base.models import Stock_price_table
from base.models import Stock_table

class DataGatherer:
    list_of_tracked_stocks = []

    def __init__(self):
        self.list_of_tracked_stocks = self.reload_tracked_stocks()
        
    
    def print_stocks(self):
        print("List of stocks:")
        for stock in self.list_of_tracked_stocks:
            print(stock)

    def reload_tracked_stocks(self):
        ticker_symbols = Stock_table.objects.values("ticker_symbol")
        return ticker_symbols