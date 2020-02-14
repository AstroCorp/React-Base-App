import React from 'react';
import { Link } from "react-router-dom";
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import { increment, decrement, listRepos } from '../modules/counter';

const Home = (props: any) => (
	<div>
		<nav>
			<div>Example</div>
			<ul>
				<li><Link className="text-purple-700" to="/login">Login</Link></li>
			</ul>
		</nav>
		<p>Count: {props.count}</p>

		<p><button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={props.increment}>Increment</button></p>
		<p><button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onClick={props.decrement}>Decrement</button></p>

		<p><button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded" onClick={props.listRepos}>List repos in console</button></p>
	</div>
);

const mapStateToProps = ({ counter }: any) => ({
	count: counter.count,
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({
	increment,
	decrement,
	listRepos,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
