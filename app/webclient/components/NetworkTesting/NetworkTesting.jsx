import React from 'react';

import {Grid,Row,Col} from 'react-bootstrap';
import Divider from 'material-ui/Divider/Divider';
import {Card, CardText} from 'material-ui/Card';
import SelectField from 'material-ui/SelectField';


const style={
    outerStyle:{
        height:'auto',
        width:'370px',    
       marginTop:"10px",
        color:"#DCDCDC"
    },
    outerStyle1:{
        height:'auto',
        width:'370px',    
       marginTop:"10px",
       marginLeft:"30px",
        color:"#DCDCDC"
    },
	outerStyle2:{
        color:"black",
	border:"solid 1px black",
	width:'142px',
	padding:'2px',
	paddingLeft:'55px',
	textAlign:'right',
        fontSize:'15px'
}
}

export default class NetworkTesting extends React.Component{

    render(){
        return(
            <div style ={{marginTop:"50px"}} className="networkTesting">
            <Grid>
            <Row>
                    <center><h3 style={{color:"#F9FBE7"}}>Network performance testing
</h3></center>
                    </Row>
                    <Row>
                   <h4 style={{color:"#DCDCDC"}}>Comparison of instances

</h4>
                    </Row>
                    <Row>
                        <Col xs={4} style={style.outerStyle} className="networkColor">
<Card style={{backgroundColor: '#BDBDBD', color: 'white'}}>
<CardText>

                         <Row>
                           <Col xs={6}><h5 style={{color:"black",fontSize:'15px'}}>Instance ID :</h5></Col>
                           <Col xs={3}><h5 style={style.outerStyle2}>342634271</h5></Col>
                         </Row>
 <Row>
                           <Col xs={6}><h5 style={{color:"black",fontSize:'15px'}}>Hosting location:</h5></Col>
                           <Col xs={3}><h5 style={style.outerStyle2}>AWS</h5></Col>
                         </Row>
 <Row>
                           <Col xs={6}><h5 style={{color:"black",fontSize:'15px'}}>Platform:</h5></Col>
                           <Col xs={3}><h5 style={style.outerStyle2}>Hyperledger</h5></Col>
                         </Row>
 <Row>
                           <Col xs={6}><h5 style={{color:"black",fontSize:'15px'}}>No. of validating nodes:</h5></Col>
                           <Col xs={3}><h5 style={style.outerStyle2}>4</h5></Col>
                         </Row>
 <Row>
                           <Col xs={6}><h5 style={{color:"black",fontSize:'15px'}}>Transaction per sec:</h5></Col>
                           <Col xs={3}><h5 style={style.outerStyle2}>111</h5></Col>
                         </Row>
 <Row>
                           <Col xs={6}><h5 style={{color:"black",fontSize:'15px'}}>Average Block Creation Time:</h5></Col>
                           <Col xs={3}><h5 style={style.outerStyle2}>223 ms</h5></Col>
                         </Row>

 <Row>
                           <Col xs={6}><h5 style={{color:"black",fontSize:'15px'}}>Transaction Volume:</h5></Col>
                           <Col xs={3}><h5 style={style.outerStyle2}>10000</h5></Col>
                         </Row>

<Row>
                           <Col xs={6}><h5 style={{color:"black",fontSize:'15px'}}>Test Run Duration:</h5></Col>
                           <Col xs={3}><h5 style={style.outerStyle2}>90 sec</h5></Col>
                         </Row>
 <Row>
                           <Col xs={6}><h5 style={{color:"black",fontSize:'15px'}}>Average Txn per Block:</h5></Col>
                           <Col xs={3}><h5 style={style.outerStyle2}>124</h5></Col>
                         </Row>
 <Row>
                           <Col xs={6}><h5 style={{color:"black",fontSize:'15px'}}>No. of Virtual Machines:</h5></Col>
                           <Col xs={3}><h5 style={style.outerStyle2}>1</h5></Col>
                         </Row>
 <Row>
                           <Col xs={6}><h5 style={{color:"black",fontSize:'15px'}}>Performance ranking :</h5></Col>
                           <Col xs={3}><h5 style={style.outerStyle2}>1</h5></Col>
                         </Row>

</CardText>
</Card>
                        </Col>

                        <Col xs={4} style={style.outerStyle1}  className="networkColor">
<Card style={{backgroundColor: '#BDBDBD', color: 'white'}}>
<CardText>

                         <Row>
                           <Col xs={6}><h5 style={{color:"black",fontSize:'15px'}}>Instance ID :</h5></Col>
                           <Col xs={3}><h5 style={style.outerStyle2}>342634277</h5></Col>
                         </Row>
 <Row>
                           <Col xs={6}><h5 style={{color:"black",fontSize:'15px'}}>Hosting location:</h5></Col>
                           <Col xs={3}><h5 style={style.outerStyle2}>AWS</h5></Col>
                         </Row>
 <Row>
                           <Col xs={6}><h5 style={{color:"black",fontSize:'15px'}}>Platform:</h5></Col>
                           <Col xs={3}><h5 style={style.outerStyle2}>Ethereum</h5></Col>
                         </Row>
 <Row>
                           <Col xs={6}><h5 style={{color:"black",fontSize:'15px'}}>No. of validating nodes:</h5></Col>
                           <Col xs={3}><h5 style={style.outerStyle2}>4</h5></Col>
                         </Row>

 <Row>
                           <Col xs={6}><h5 style={{color:"black",fontSize:'15px'}}>Transaction per sec:</h5></Col>
                           <Col xs={3}><h5 style={style.outerStyle2}>32</h5></Col>
                         </Row>
 <Row>
                           <Col xs={6}><h5 style={{color:"black",fontSize:'15px'}}>Average Block Creation Time:</h5></Col>
                           <Col xs={3}><h5 style={style.outerStyle2}>3.4 sec</h5></Col>
                         </Row>
 <Row>
                           <Col xs={6}><h5 style={{color:"black",fontSize:'15px'}}>Transaction Volume:</h5></Col>
                           <Col xs={3}><h5 style={style.outerStyle2}>10000</h5></Col>
                         </Row>
<Row>
                           <Col xs={6}><h5 style={{color:"black",fontSize:'15px'}}>Test Run Duration:</h5></Col>
                           <Col xs={3}><h5 style={style.outerStyle2}>312 sec</h5></Col>
                         </Row>
 <Row>
                           <Col xs={6}><h5 style={{color:"black",fontSize:'15px'}}>Average Txn per Block:</h5></Col>
                           <Col xs={3}><h5 style={style.outerStyle2}>13</h5></Col>
                         </Row>
<Row>
                           <Col xs={6}><h5 style={{color:"black",fontSize:'15px'}}>No. of Virtual Machines:</h5></Col>
                           <Col xs={3}><h5 style={style.outerStyle2}>1</h5></Col>
                         </Row>
 <Row>
                           <Col xs={6}><h5 style={{color:"black",fontSize:'15px'}}>Performance ranking :</h5></Col>
                           <Col xs={3}><h5 style={style.outerStyle2}>1</h5></Col>
                         </Row>

</CardText>
</Card>
                        </Col>
                        <Col xs={4} style={style.outerStyle1}  className="networkColor">
<Card style={{backgroundColor: '#BDBDBD', color: 'white'}}>
<CardText>

                         <Row>
                           <Col xs={6}><h5 style={{color:"black",fontSize:'15px'}}>Instance ID :</h5></Col>
                           <Col xs={3}><h5 style={style.outerStyle2}>342634279</h5></Col>
                         </Row>
 <Row>
                           <Col xs={6}><h5 style={{color:"black",fontSize:'15px'}}>Hosting location:</h5></Col>
                           <Col xs={3}><h5 style={style.outerStyle2}>AWS</h5></Col>
                         </Row>

 <Row>
                           <Col xs={6}><h5 style={{color:"black",fontSize:'15px'}}>Platform:</h5></Col>
                           <Col xs={3}><h5 style={style.outerStyle2}>Quorum</h5></Col>
                         </Row>
 <Row>
                           <Col xs={6}><h5 style={{color:"black",fontSize:'15px'}}>No. of validating nodes:</h5></Col>
                           <Col xs={3}><h5 style={style.outerStyle2}>4</h5></Col>
                         </Row>
 <Row>
                           <Col xs={6}><h5 style={{color:"black",fontSize:'15px'}}>Transaction per sec:</h5></Col>
                           <Col xs={3}><h5 style={style.outerStyle2}>320</h5></Col>
                         </Row>
 <Row>
                           <Col xs={6}><h5 style={{color:"black",fontSize:'15px'}}>Average Block Creation Time:</h5></Col>
                           <Col xs={3}><h5 style={style.outerStyle2}>182ms</h5></Col>
                         </Row>

 <Row>
                           <Col xs={6}><h5 style={{color:"black",fontSize:'15px'}}>Transaction Volume:</h5></Col>
                           <Col xs={3}><h5 style={style.outerStyle2}>10000</h5></Col>
                         </Row>
<Row>
                           <Col xs={6}><h5 style={{color:"black",fontSize:'15px'}}>Test Run Duration:</h5></Col>
                           <Col xs={3}><h5 style={style.outerStyle2}>31.25 Sec</h5></Col>
                         </Row>
 <Row>
                           <Col xs={6}><h5 style={{color:"black",fontSize:'15px'}}>Average Txn per Block:</h5></Col>
                           <Col xs={3}><h5 style={style.outerStyle2}>155</h5></Col>
                         </Row>
<Row>
                           <Col xs={6}><h5 style={{color:"black",fontSize:'15px'}}>No. of Virtual Machines:</h5></Col>
                           <Col xs={3}><h5 style={style.outerStyle2}>1</h5></Col>
                         </Row>
 <Row>
                           <Col xs={6}><h5 style={{color:"black",fontSize:'15px'}}>Performance ranking :</h5></Col>
                           <Col xs={3}><h5 style={style.outerStyle2}>1</h5></Col>
                         </Row>

</CardText>
</Card>
                                                   </Col>
                        
                        </Row>
                </Grid>
            </div>
        )
    }
}