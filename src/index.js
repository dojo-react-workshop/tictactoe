import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {

	 constructor(props) {
	    super(props);
	    this.state = {
	      player: 1,
	      arrSquares: ['','','','','','','','','']
	    };
	  }


	  winnerCheck = () => {
	  	
	  	const {arrSquares} = this.state
	  	
	  	if ( arrSquares[0] === arrSquares[1] && arrSquares[0] !== '' ) {
	  		if (arrSquares[1] === arrSquares[2]) {
	  			return true
	  		}
	  	}
	  	if ( arrSquares[3] === arrSquares[4] && arrSquares[3] !== '') {
	  		if (arrSquares[4] === arrSquares[5]) {
	  			return true
	  		}
	  	}
	    if ( arrSquares[6] === arrSquares[7] && arrSquares[6] !== '') {
	  		if (arrSquares[7] === arrSquares[8]) {
	  			return true
	  		}
	  	}
	  	if ( arrSquares[0] === arrSquares[3] && arrSquares[3] !== '') {
	  		if (arrSquares[3] === arrSquares[6]) {
	  			return true
	  		}
	  	}
	  	if ( arrSquares[1] === arrSquares[4] && arrSquares[4] !== '') {
	  		if (arrSquares[4] === arrSquares[7]) {
	  			return true
	  		}
	  	}
	  	if ( arrSquares[2] === arrSquares[5] && arrSquares[2] !== '') {
	  		if (arrSquares[5] === arrSquares[8]) {
	  			return true
	  		}
	  	}
	  	if ( arrSquares[0] === arrSquares[4] && arrSquares[0] !== '') {
	  		if (arrSquares[4] === arrSquares[8]) {
	  			return true
	  		}
	  	}
	  	if ( arrSquares[2] === arrSquares[4] && arrSquares[2] !== '') {
	  		if (arrSquares[4] === arrSquares[6]) {
	  			return true
	  		}
	  	}
	  	return false
	  }

	boardSquareClick = (value) => {

		const tempSquaresArr = Object.assign(this.state.arrSquares)


		if (this.state.player === 1){
			tempSquaresArr[value] = 'X'
			this.setState({
				player: 2,
				arrSquares: tempSquaresArr
			})
		} else {
			tempSquaresArr[value] = 'O'
			this.setState({
				player: 1,
				arrSquares: tempSquaresArr
			})
		}
	}

	reset = () => {
		this.setState ( {
		      player: 1,
		      arrSquares: ['','','','','','','','','']
		    })
	}
	
	render() {
		const gameState= this.winnerCheck()
		if (gameState) {
			return(
				<div>
					<h1>You Win!</h1>
					<Square boardSquareClick={()=>{}} value={0} text={this.state.arrSquares[0]}/><Square boardSquareClick={()=>{}} value={1} text={this.state.arrSquares[1]}/><Square boardSquareClick={()=>{}} value={2} text={this.state.arrSquares[2]}/><br/>
					<Square boardSquareClick={()=>{}} value={3} text={this.state.arrSquares[3]}/><Square boardSquareClick={()=>{}} value={4} text={this.state.arrSquares[4]}/><Square boardSquareClick={()=>{}} value={5} text={this.state.arrSquares[5]}/><br/>
					<Square boardSquareClick={()=>{}} value={6} text={this.state.arrSquares[6]}/><Square boardSquareClick={()=>{}} value={7} text={this.state.arrSquares[7]}/><Square boardSquareClick={()=>{}} value={8} text={this.state.arrSquares[8]}/><br/>
					<button onClick={this.reset}>Start a New Game</button>
				</div>
			)

		} else {
			return (
				<div>
					<h1>It's player {this.state.player}'s turn!</h1>
					<Square boardSquareClick={this.boardSquareClick} value={0} text={this.state.arrSquares[0]}/><Square boardSquareClick={this.boardSquareClick} value={1} text={this.state.arrSquares[1]}/><Square boardSquareClick={this.boardSquareClick} value={2} text={this.state.arrSquares[2]}/><br/>
					<Square boardSquareClick={this.boardSquareClick} value={3} text={this.state.arrSquares[3]}/><Square boardSquareClick={this.boardSquareClick} value={4} text={this.state.arrSquares[4]}/><Square boardSquareClick={this.boardSquareClick} value={5} text={this.state.arrSquares[5]}/><br/>
					<Square boardSquareClick={this.boardSquareClick} value={6} text={this.state.arrSquares[6]}/><Square boardSquareClick={this.boardSquareClick} value={7} text={this.state.arrSquares[7]}/><Square boardSquareClick={this.boardSquareClick} value={8} text={this.state.arrSquares[8]}/><br/>
					<button onClick={this.reset}>Start a New Game</button>
				</div>
			)
		}
	}
}

class Square extends React.Component {

	
	squareOnClick = () => {
		if (this.props.text === '') {
			this.props.boardSquareClick(this.props.value)
		}
	}

	render() {

		const styleSquare = {
			border: 'thin solid black',
			width: '150px',
			height: '150px',
			display: 'inline-block'
		}

		return (
			<div style={styleSquare} onClick={this.squareOnClick} >
				<p> {this.props.value} {this.props.text} </p>
			</div>
		)
	}

}

ReactDOM.render(<App />, document.getElementById('root'));