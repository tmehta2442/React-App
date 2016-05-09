import React from 'react';
import ReactDOM from 'react-dom';
class App extends React.Component {
	constructor() {
		super();
		this.state = { txt : 'New Text Type here'}
	}
	update(e) {
		this.setState({ txt: e.target.value });
	}
	componentWillMount(){
		console.log('Will Mount');
		this.myArr = ['Terry', 'Kenny', 'Sonia', 'Tejas'];
	}
	componentDidMount(){
		console.log('Did Mount');
	}
	componentWillUnmount(){
		console.log('unmounted');
	}
	render() {
		console.log('rendering bitch');
		let txt = this.props.txt;
		return 	(
			<div>
				<h1>{this.state.txt}</h1>
				<p>YoYo Kenny aka kennth the saber</p>
				<h5>There are {this.props.lights} lights</h5>
				<input onChange={this.update.bind(this)}></input>
				<ul>
					{this.myArr.map((friend, index) => (
						<li key={friend} id={index} className={friend}>{friend}</li>
					)
					)}
				</ul>
			</div>
		);
	}
}

//App.defaultProps = { txt: "This is default props"};
// App.propTypes = {
// 	txt: React.PropTypes.string.isRequired,
// 	lights: React.PropTypes.number.isRequired
// }
//Stateless component
//const App = () => <h1>Kenny is not a colonel</h1>

ReactDOM.render(<App lights={5}/>, document.getElementById('app'));
// ReactDOM.render(<App/>, document.getElementById('app'));



