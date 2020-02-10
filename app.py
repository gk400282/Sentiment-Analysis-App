from flask import Flask
from flask_cors import CORS, cross_origin
from flask import render_template
from flask import request
from backend import main

app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

@app.route('/')
def home():
    return 'This is the home route'

@app.route('/SIH/', methods=['GET', 'POST'])
def index():
    if request.method == "GET":
        return render_template('index.html')

    elif request.method == "POST":
        print(request.form['main-input'])
        return(main(request.form['main-input'])) 