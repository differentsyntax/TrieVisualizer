import React from 'react';
import ReactJson from 'react-json-view';
import myData from '../backend/trie';

const VisualSide = () => (

	<ReactJson src={myData} theme="monokai"/>

)

export default VisualSide;