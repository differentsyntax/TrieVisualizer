import React from 'react'
import Typist from 'react-typist'
import Anime, {anime} from 'react-anime'
import { Link } from 'react-router-dom'
import { Button } from '@material-ui/core'
import GetWord from '../components/getWord'
import VisualSide from '../components/visualSide'

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
				<Link to="/addWords">Insert</Link>
			</button>
			<button>
				<Link to="/removeWord">Clear</Link>
			</button>
			<button>
				<Link to="/searchWord">Search</Link>
			</button>
		</ul>
	</nav>
	<div>
	<h4 id = "input-words-header" > Enter word below:</h4>
		<div id="input-words-stuff">
			<div id = "input-words-side"> 
				<GetWord/>
			</div>
			<h3 id = "found"></h3>
			<div id = "visual-side">
				<VisualSide/>
			</div>
		</div>
	</div>
	{/* <img src={require('../assets/img/philadelphia.png')} alt = "Philly Skyline"/> */}
	</>
)

export default SearchWord