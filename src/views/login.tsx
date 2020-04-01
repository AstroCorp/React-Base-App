import React from 'react';
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import { useHistory } from "react-router-dom";

const Login = (props: any) => {

	const history = useHistory();

	return (
		<div>
			<h1>Login</h1>

			<p>{props.count}</p>

			<div onClick={() => history.goBack()}>Ir atrás</div>
		</div>
	);
};

const mapStateToProps = ({ counter }: any) => ({
	count: counter.count,
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Login);