import React from 'react';
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
  } from 'material-ui/Table';
 
  import Play from 'material-ui/svg-icons/av/play-arrow';
  import Stop from 'material-ui/svg-icons/av/stop';
  import Delete from 'material-ui/svg-icons/action/delete-forever';
  import Report from 'material-ui/svg-icons/action/receipt';
  import IconButton from 'material-ui/IconButton';
  import {Link} from 'react-router';

  import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';

  
export default class EachInstance extends React.Component{

  state={
    openCollapse: false
  }

    static get contextTypes() {
        return {
          router: React.PropTypes.object.isRequired
        }
      }
   onSiteChanged (evt) {
        {
          var val =evt.target.value;
          this.props.updateInstanceName(val);
           
           }
        }
    // navigateReport=()=>{
    //     this.props.context.router.push('/Report/'+this.props.data.instanceID);
    // }
    expand=()=>{
      this.setState({ openCollapse: true })
    }
    handleClose = () => {
      this.setState({openCollapse: false});
    };

    render(){
      const actions = [
        <FlatButton
          label="Cancel"
          primary={true}
          onClick={this.handleClose}
        />
      ];

        return(
            <tr onTouchTap={this.expand}>
<td style={{textAlign:"center",paddingTop:"20px"}}>
   <input type="checkbox" name="site_name" 
                                   value={this.props.data.name}
                                    onChange={(val)=>this.onSiteChanged(val)} /></td>
            <td style={{textAlign:"center",paddingTop:"20px"}}>{this.props.data.name}</td>
            <td style={{textAlign:"center",paddingTop:"20px"}}>{this.props.data.nodes}</td>
            <td style={{textAlign:"center",paddingTop:"20px"}}>{this.props.data.creationTime}</td>
            <td style={{textAlign:"center",paddingTop:"20px"}}>{this.props.data.cloud}</td>
            <td style={{textAlign:"center",paddingTop:"20px"}}>{this.props.data.platform}</td>
            <td style={{textAlign:"center",paddingTop:"20px"}}>{this.props.data.status}</td>
            <td style={{textAlign:"center",paddingTop:"20px"}}>{this.props.data.externalIP}</td>
            <td>
            <IconButton tooltip="Create" iconStyle={{color:"green"}}>
            <Play />
          </IconButton>
          <IconButton tooltip="Stop" iconStyle={{color:"#FF6D00"}}>
      <Stop />
    </IconButton>
    <IconButton tooltip="Delete" iconStyle={{color:"#F44336"}}>
      <Delete />
    </IconButton>
            </td>
            <td>
            <Link to={'/Report/'+this.props.data.name}>
            <IconButton tooltip="View Report" iconStyle={{color:"white"}} >
      <Report />
    </IconButton>
   </Link>
            </td>
            <Dialog
          title={this.props.data.name+" Detail"}
          actions={actions}
          modal={false}
          open={this.state.openCollapse}
          onRequestClose={this.handleClose}
          style={{borderRadius: "20px"}}
        >
         Related Data will be shown Here
        </Dialog>
            
          </tr>
        )
    }
}