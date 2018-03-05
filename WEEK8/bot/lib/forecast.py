import forecastio

# $ export FORECAST_TOKEN='xxxxxxxxxxx'
# FORECAST_TOKEN = os.environ.get('FORECAST_TOKEN')

FORECAST_TOKEN = "c259d4aeb593bc5e83d0c3f7ed916f5d"

def forecast(lat = 37.5124413, lng = 126.9540519):
    forecast = forecastio.load_forecast(FORECAST_TOKEN, lat, lng)
    byHour = forecast.hourly()
    return byHour.summary
