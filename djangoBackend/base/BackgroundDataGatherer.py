from base.models import Stock_price_table
from base.models import Stock_table
import yfinance as yf
import threading
import datetime
import time
import sys

stop_thread = False
class DataGatherer(threading.Thread):
    list_of_tracked_stocks = []
    

    def __init__(self, thread_name, thread_ID): 
        threading.Thread.__init__(self) 
        self.thread_name = thread_name 
        self.thread_ID = thread_ID
        
        self.list_of_tracked_stocks = self.reload_tracked_stocks()
        
    
    def print_stocks(self):
        print("List of stocks:")
        for stock in self.list_of_tracked_stocks:
            print(stock)

    def reload_tracked_stocks(self):
        ticker_symbols = Stock_table.objects.values("ticker_symbol")
        return ticker_symbols

    def update_stock_prices(self):
        for stock in self.list_of_tracked_stocks:
            stock_data = yf.Ticker(stock["ticker_symbol"])
            current_price = stock_data.info["currentPrice"]
            Stock_price_table.objects.create(ticker_symbol=stock["ticker_symbol"], price=current_price)

        print("Updated stock prices")

    def run(self):
        print("Thread running")
        while not stop_thread:
            weekday = datetime.datetime.now().weekday()
            """    if weekday == 5 or weekday == 6:
                # Weekend
                continue """
            self.update_stock_prices()
            time.sleep(20)
        
        print("Thread stopped.")
        sys.exit()