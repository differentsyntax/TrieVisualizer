import React from 'react';
import ReactJson from 'react-json-view';
import myData from '../backend/trie';

var arr = [];

const VisualSide = () => (
	<>
	<ReactJson src={myData}/>
	</>
)

export default VisualSide;