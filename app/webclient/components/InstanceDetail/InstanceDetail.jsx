import React from 'react';
import {
    Table
  } from 'react-bootstrap';

  import EachInstance from './EachInstance.jsx';


export default class InstanceDetail extends React.Component{

    render(){
        let newData=this.props.instanceData.map((data,index)=>{
            return(
                <EachInstance 
                key={index}
                data={data}
                />
            )
        })
        return(
            <Table  bordered style={{color:"white",textAlign:"center"}}>
  <thead style={{backgroundColor:"#ffe4b2",color:"black"}}>
    <tr>
	<th>Select</th>
      <th>Name</th>
      <th>Nodes</th>
      <th>Creation Time</th>
      <th>Cloud</th>
      <th>Platform</th>
      <th>Status</th>
      <th>External IP</th>
      <th>Action</th>
      <th>View Explorer</th>
    </tr>
  </thead>
  <tbody>
            
            {newData}
            </tbody>
            </Table>
        )
    }

}