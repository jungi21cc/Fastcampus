# pip3 install gunicorn
# pip3 install flask


# ngrok

# mac
# brew cask ngrok

# $ ngrok http 5000

# windows
# ngrok 사이트 가서 다운
# cmd> ngrok.exe http 5000

from flask import Flask, render_template, jsonify

app = Flask(__name__)

app.config.update(
    TEMPLATES_AUTO_RELOAD=True,
)

people = {  "alice": {"age": 25, "mail": "alice@daum.net"},
            "jin": {"age": 35, "mail": "pdj@gmail.com"},
        }

# show text on web
@app.route("/")
def hello():
    return "Hello Flask"

# Rendering HTML

# returns an HTML webpage
@app.route("/user")
def user():
    return render_template('profile.html')

# returns an HTML webpage
@app.route("/user/<text>")
def user_txt(text):
    return render_template('profile.html', name=text)

# REST API
# people
# people/username

# retruns a piece of data in JSON format
@app.route("/people")
def all_people():
    return jsonify(people)

# retruns a piece of data in JSON format
@app.route("/people/<username>")
def one_people(username):
    try:
        result = people[username]
    except:
        result = "no_data"
    return jsonify(result)

if __name__ == "__main__":
    app.run(debug=True)
