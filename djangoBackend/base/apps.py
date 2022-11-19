from django.apps import AppConfig



class BaseConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'base'
    
    def ready(self):    
        from .BackgroundDataGatherer import DataGatherer
        #gatherer = DataGatherer()
        #gatherer.update_stock_prices()

        bg_thread = DataGatherer("Thread1", 1)
        #bg_thread.start()

