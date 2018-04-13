
from celery import Celery

BROKER_URL = 'redis://localhost:6379/0'
CELERY_RESULT_BACKEND = BROKER_URL

app = Celery('task', broker=BROKER_URL, backend=CELERY_RESULT_BACKEND)

@app.task
def add(a,b):
    return a + b