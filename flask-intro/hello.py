from flask import Flask
from flask import request
from flask import render_template
from flask import jsonify
app = Flask(__name__)

people = {1:{'fname':'Nilou', 'lname':'Naderi','age':29},
		  5:{'fname':'Alex', 'lname':'Kruk','age':36},
		  12:{'fname':'Elia', 'lname':'Smith','age':30}
		 }

# def hello():
#     return "Hello World from Nilou!"
# def info():
# 	print('Args:', request.args)
# 	return "Hello World! - info - Nilou Naderi " + request.args.get('arguments','default1')


@app.route("/info")
def info():
	resp = jsonify(people)
	print('---json---:', resp.response)
	return resp, 200

@app.route("/extension/")
def kk():
    return "Hello World! <h1>Nilou!</h1>"

@app.route('/')
def index():
	return "<h1>Niluo what are you doing</h1>"
@app.route("/admin")

@app.route("/admin/")
@app.route("/admin/<myid>")
@app.route("/admin/<myid>/")
# def admin(myid=None):
#     return "Hello World! - admin v3 - Nilou Naderi " + str(myid)
def admin(myid=None):
	print('people:', people)
	print ('my id is:', int(myid))
	return render_template("person.html",
			testval="Some Value So We know it works",
			person=people.get(int(myid),{'fname':'Who Knows'}))

if __name__ == '__main__':
    app.run(host='0.0.0.0', debug=True)
