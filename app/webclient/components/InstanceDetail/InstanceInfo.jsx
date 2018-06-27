
import React from 'react';
import { Link } from 'react-router';
import Axios from 'axios';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
// import {Grid} from 'react-bootstrap';
import {Grid,Row,Col,Carousel} from 'react-bootstrap';

import InstanceDetail from './InstanceDetail.jsx';
const instanceData=[
  {
instanceID:"1273892730",
name:"testInstance1",
nodes:"5",
creationTime:"07/05/2017 07:11:05",
cloud:"Amazon EC2",
status:"Initializing",
externalIP:"34.123.34.23",
platform:"Ethereum"
},
{
  instanceID:"1273892731",
  name:"testInstance2",
  nodes:"5",
  creationTime:"07/05/2017 07:11:05",
  cloud:"Amazon EC2",
  status:"Initializing",
  externalIP:"34.123.34.23",
  platform:"Hyperledger"
  },
  {
    instanceID:"1273892733",
    name:"testInstance3",
    nodes:"5",
    creationTime:"07/05/2017 07:11:05",
    cloud:"Cloud",
    status:"Initializing",
    externalIP:"34.123.34.23",
    platform:"Quorum"
    },
]

export default class Home extends React.Component {

 static get contextTypes() {
    return {
      router: React.PropTypes.object.isRequired
    }
  }
  
    navigationPlatformComparisonPage=()=>{
            this.context.router.push('/platformComparisonPage');
     }
  render() {
  
      return (
        <div className="background">
        <Grid style={{marginTop:"90px"}}>  
        <InstanceDetail instanceData={instanceData}/>
            
         
			{/* <Row >
			<Col xs={2}><TradePortalComponent />
      </Col>
      <Col xs={7}><TradeStatusAndRecap />
      </Col>
      <Col xs={3}><Notification />
      </Col>
			</Row>
      <Row>
        <Col xs={6}> <ParcelStatusComponent />
        </Col>
        <Col xs={6}> <TradeSummaryPublished />
        </Col>
        </Row>       
           */}<div>
            <RaisedButton label="Platform Comparison" primary={true} onClick={this.navigationPlatformComparisonPage}/>
            </div>
           
          </Grid>
           
          </div>
      )
    }
  }



