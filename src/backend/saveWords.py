from flask import Flask, request, jsonify
from flask_cors import CORS
import json

app = Flask(__name__)

CORS(app)

@app.route('/addWords/save', methods = ['POST'])
def result():
	if request.method == 'POST':
		words = json.loads(request.data.decode('utf-8'))
		words = words['wordsArray'].replace(' ', '').split(',')
		if words:
				data = saveWords(words)
				return jsonify(data)
		return "Error"

def saveWords(words):
	root = {'*': '*'}
	for word in words:
		addWord(word, root)
	
	return root

def addWord(word, root):
	for letter in word:
		if letter not in root:
			root[letter] = {}
		root = root[letter]
	root['*'] = '*'

if __name__ == '__main__':
    app.run(host='0.0.0.0')