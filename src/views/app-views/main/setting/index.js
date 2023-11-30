import React, {Component} from 'react'
import {Redirect, Route, Switch, useParams} from 'react-router-dom';
import InnerAppLayout from 'layouts/inner-app-layout';
import EditProfile from './EditProfile';


const SettingContent = ({ match }) => {
	const params = useParams()
	console.log('par :', params);
	return (
		<Switch>
			<Redirect exact from={`${match.url}`} to={`${match.url}/edit-profile`} />
			<Route path={`${match.url}/edit-profile`} component={EditProfile} />
		</Switch>
	)
}

export class Setting extends Component {
	render() {
		return (
			<InnerAppLayout
				mainContent={<SettingContent {...this.props}/>}
			/>
    );
	}
}

export default Setting
