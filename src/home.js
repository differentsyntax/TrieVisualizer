import React from 'react'
import Typist from 'react-typist'
import Anime, {anime} from 'react-anime'
import { Link } from 'react-router-dom'
import { Button } from '@material-ui/core'

const Home = () => (
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
	</>
)

export default Home