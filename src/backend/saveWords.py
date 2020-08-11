from flask import Flask, request, jsonify
from flask_cors import CORS
import json

app = Flask(__name__)

CORS(app)

@app.route('/searchWord/find', methods = ['POST'])
def search():
	if request.method == 'POST':
		word = json.loads(request.data.decode('utf-8'))
		word = word['word'].replace(' ', '').split(',')
		if word:
				data = getWord(word)
				return (data)
		return "Error"

def getWord(word):
	with open('trie.json') as json_file:
		data = json.load(json_file)

	word = word[0]

	curr_node = data
	for letter in word:
		if letter not in curr_node:
			return "Not Found"
		curr_node = curr_node[letter]

	if '*' in curr_node:
		return "Exists!"
	else:
		return "Not Found"

@app.route('/addWords/save', methods = ['POST'])
def add():
	if request.method == 'POST':
		words = json.loads(request.data.decode('utf-8'))
		words = words['wordsArray'].replace(' ', '').split(',')
		if words:
				data = saveWords(words)
				# f = open("trie.json", "w")
				# f.write('{ "trie" :')
				# f.close()
				with open('trie.json', 'w') as outfile:
					json.dump(data, outfile)
				# f = open("trie.json", "a")
				# f.write("}")
				# f.close()
				return jsonify(data)
		return "Error"

def saveWords(words):
	root = {'*': '*'}
	for word in words:
		addWord(word, root)
	
	return root

def addWord(word, root):
	curr_node = root
	for letter in word:
		if letter not in curr_node:
			curr_node[letter] = {}
		curr_node = curr_node[letter]
	curr_node['*'] = '*'

if __name__ == '__main__':
    app.run(host='0.0.0.0', debug=True, port=5000)