import React from 'react'
import Typist from 'react-typist'
import Anime, {anime} from 'react-anime'
import { Link } from 'react-router-dom'
import { Button } from '@material-ui/core'
import GetWord from '../components/getWord'
// import StudentResources from '../components/resources'

const SearchWord = () => (
	<>
	<div className = "textDragon">
		<Typist avgTypingSpeed={15000} startDelay={500}>
			<a href="/" >TRIE VISUALIZER</a>
		</Typist>
	</div>
	<nav>
		<ul>
			<button>
				<Link to="/addWords">Add Words</Link>
			</button>
			<button>
				<Link to="/searchWord">Search Word</Link>
			</button>
		</ul>
	</nav>
	<div>
	<h4 id = "input-words-header" > Enter word below:</h4>
		<div id="input-words-stuff">
			<div id = "input-words-side"> 
				<GetWord/>
			</div>
			<div id = "visual-side">
				{/* <StudentResources/>	 */}
			</div>
		</div>
	</div>
	{/* <img src={require('../assets/img/philadelphia.png')} alt = "Philly Skyline"/> */}
	</>
)

export default SearchWord