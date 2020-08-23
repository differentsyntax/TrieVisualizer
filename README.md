# TrieVisualizer

A react and flask based web application to understand how inserting and searching works in a Trie and why it is more efficient compared to the basic data structures. 

## Setup

Clone the repository and install dependencies by using the following command from the cloned directory:

```bash
npm install
```

Install and setup Flask:

```bash
pip install Flask
cd src/backend/
export FLASK_APP=savewords.py
export FLASK_ENV=development
```

## Usage

From the project directory, run the react app using:

```bash
npm start
```
Run the Flask server using:

```bash
cd src/backend/
flask run
```

## Features

* **Insert** - Input one or more words separated by commas and hit enter to see how the words with common prefixes get stored in Trie
* **Search** - See if a word was entered by you at any point in history and exists in the Trie
* **Clear** - Hit clear to delete all stored words and start afresh

## In Progress

* Representing data as a tree instead of json object
* Dynamic visualization for word by word storage, by parsing json data and looping through it
* Adding more data structures and algorithms for visualization
