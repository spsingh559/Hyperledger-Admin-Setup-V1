import React from 'react';
import ReactDOM from 'react-dom';
// import {Router, Route, hashHistory} from 'react-router';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// <Route path="/dashboard" component={Dashboard} />
		// <Route path="/settings" component={Settings} />
		// <Route path="/analytics" component={Analytic} />
		// <IndexRoute component={MainApp} />

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import Home from './components/Home.jsx';
import ParentComponent from './components/UILayout/Parent.jsx';
import Login from './components/Login.jsx';
import LandingPage from './components/LandingPage.jsx';
import Report from './components/Report/Report.jsx';
import CreateNetwork from './components/createNetwork/createNetwork';
import MyProfile from './components/MyProfile/MyProfile';
import ApplicationAssesmentForm from './components/ApplicationAssesmentForm/ApplicationAssesmentForm';
import Recommendation from './components/ApplicationAssesmentForm/Recommendation';
import NetworkTesting from './components/NetworkTesting/NetworkTesting';
import InstanceInfo from './components/InstanceDetail/InstanceInfo';
import ApplicationAssessmentDashboard from './components/ApplicationAssesmentForm/ApplicationAssessmentDashboard';
import PlatformComparisonComponent from './components/PlatformComparison/PlatformComparison';
import Hyperledger from './components/Hyperledger/Hyperledger';

import {Route, Router, IndexRoute, hashHistory} from 'react-router';
ReactDOM.render(
	<MuiThemeProvider>
	<Router history ={hashHistory} >
	<Route path="/landingPage" component={LandingPage} />
	<Route path="/login" component={Login} />
	
	
	
	
	<Route path="/" component={ParentComponent}>
	<Route  path="/Report/:instanceID" component={Report}  />
	<Route  path="/createNetwork" component={CreateNetwork}  />
	<Route  path="/myProfile" component={MyProfile}  />
	<Route  path="/assesmentForm" component={ApplicationAssesmentForm}  />
	<Route  path="/recommendation/:aid" component={Recommendation}/>
	<Route  path="/networkTesting" component={NetworkTesting}  />
	<Route path="/instanceInfo" component={InstanceInfo} />
	<Route path="/hyperledger" component={Hyperledger} />
	<Route path="/applicationAssessmentDashboard" component={ApplicationAssessmentDashboard} />
        <Route path="/platformComparisonPage" component={PlatformComparisonComponent} />

	{/* <Route path="/Report" component={Report} /> */}
		<IndexRoute component={Home} />
		</Route>
	</Router>
	</MuiThemeProvider>,
 document.getElementById('mountapp'));