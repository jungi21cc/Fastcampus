# pip3 install python-forecastio

from flask import Flask, request, Response

from lib.slack import send_slack
from lib.forecast import forecast

app = Flask(__name__)

# show text on web
@app.route("/")
def isworking():
    return "It's working"

# slack outgoing webhook
@app.route("/slack", methods=['POST'])
def slack():
    username = request.form.get('user_name')
    token = request.form.get('token')
    text = request.form.get('text')

    if "날씨" in text:
        summary = forecast()
        send_slack(summary)

    print(username, token, text)

    return Response(), 200

if __name__ == "__main__":
    app.run(debug=True)
