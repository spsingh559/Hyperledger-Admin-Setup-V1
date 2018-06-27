import React from 'react';
import { Grid, Col, Row } from 'react-bootstrap';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import Chip from 'material-ui/Chip';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import { Link } from 'react-router';
import axios, { post } from 'axios';


const style = {
  outerStyle: {
    height: '650px',
    width: '500px',
    marginTop: "10px",
    borderRadius: "6px",
    border: "solid 1px #DCDCDC",
    color: "#DCDCDC"
  },
  outer1Style: {
    height: '650px',
    width: '500px',
    marginLeft: "100px",
    marginTop: "10px",
    borderRadius: "6px",
    border: "solid 1px #DCDCDC",
    color: "#DCDCDC"
  }
}

export default class ApplicationAssesmentForm extends React.Component {




  constructor(props) {
    super(props);

    this.onFormSubmit = this.onFormSubmit.bind(this)
    this.onChangeFile = this.onChangeFile.bind(this)
    this.fileUpload = this.fileUpload.bind(this)

    this.state = {
      file: null,
      nwTypeDrpDwn: "",
      industryDrpDwn: "",
      applicationTypeDrpDwn: "",
      ReportingDrpDwn: "",
      useCaseDrpDwn: ""
    };

  }


  onChangeFile(e) {
    console.log(e.target.files[0]);
    this.setState({ file: e.target.files[0] });
  }

  onFormSubmit(e) {
    e.preventDefault()// Stop form submit
    this.fileUpload(this.state.file).then((response) => {
      alert('File is uploaded to server');
      // console.log(response.data);
    })
  }


  fileUpload(file) {
    const url = '/StoreFile';
    const formData = new FormData();
    formData.append('file', file)
    const config = {
      headers: {
        'content-type': 'multipart/form-data'
      }
    }
    console.log('File reached to button');
    console.log(file);
    return post(url, formData, config);
  }





  handleChangeuseCaseDrpDwn = (event, index, value) => this.setState({ useCaseDrpDwn: value });
  handleChangenwTypeDrpDwn = (event, index, value) => this.setState({ nwTypeDrpDwn: value });
  handleChangenwPermissionDrpDwn = (event, index, value) => this.setState({ nwPermissionDrpDwn: value });
  handleChangeindustryDrpDwn = (event, index, value) => this.setState({ industryDrpDwn: value });
  handleChangeapplicationTypeDrpDwn = (event, index, value) => this.setState({ applicationTypeDrpDwn: value });
  handleChangeReportingDrpDwn = (event, index, value) => this.setState({ ReportingDrpDwn: value });

  static get contextTypes() {
    return {
      router: React.PropTypes.object.isRequired
    }
  }

  // submitForm=()=>{
  //     this.context.router.push('/recommendation');
  // }

  render() {
    return (
      <div style={{ marginTop: "65px" }} className="assessment">

        <Grid>
          <Row>
            <center><h3 style={{ color: "#DCDCDC" }}>Application Assessment Framework - Input</h3></center>
          </Row>
	<br/>
          <Row>
	<br/>
            <Col xs={8} style={style.outerStyle}>
		<br/>
              <Row>
                <Col xs={6}>
                  Assessment Name
                </Col>
                <Col xs={5}>
                  <TextField
                    floatingLabelFixed={true}
                    value={this.state.nwTypeDrpDwn}
                    onChange={this.handleChangenwTypeDrpDwn}
                    inputStyle={{color:"white",fontSize:"20px"}}
	            floatingLabelStyle={{color:"white",fontSize:"20px"}}                 
		   fullWidth={true}>
                  </TextField>
                </Col>
              </Row>
              <br />
              <Row>
                <Col xs={6}>
                  Industry Domain
                            </Col>
                <Col xs={5} style={{marginTop:"-36px"}}>
                  <SelectField
                    floatingLabelText="Based on Type"
                    value={this.state.industryDrpDwn}
                    onChange={this.handleChangeindustryDrpDwn}
                    floatingLabelStyle={{ color: "#DCDCDC" }}
                    fullWidth={true}
                  >
                    <MenuItem value="Finance" primaryText="Finance" />
                    <MenuItem value="Supply Chain" primaryText="Supply Chain" />
                    <MenuItem value="Healthcare" primaryText="Healthcare" />

                  </SelectField>
                </Col>
              </Row>
              <br />
              <Row>
                <Col xs={8}>
                  Are all participants of these usecase unknown / anonymous?
                            </Col>
                <Col xs={2}>
                  <RadioButtonGroup name="useCaseStatus" defaultSelected="No">
                    <RadioButton
                      value="light"
                      label="Yes"
                      labelStyle={{ color: "#DCDCDC" }}
                    />
                    <RadioButton
                      value="not_light"
                      label="No"
                      labelStyle={{ color: "#DCDCDC" }}
                    />

                  </RadioButtonGroup>
                </Col>
              </Row>
              <br />
              <Row>
                <Col xs={8}>
                  Will the participating members be trusted parties?
                            </Col>
                <Col xs={2}>
                  <RadioButtonGroup name="TrustedPartiesDrpDwn" defaultSelected="No">
                    <RadioButton
                      value="light"
                      label="Yes"
                      labelStyle={{ color: "#DCDCDC" }}
                    />
                    <RadioButton
                      value="not_light"
                      label="No"
                      labelStyle={{ color: "#DCDCDC" }}
                    />

                  </RadioButtonGroup>
                </Col>
              </Row>
              <br />
              <Row>
                <Col xs={6}>
                  Use Case
                            </Col>
                <Col xs={5} style={{marginTop:"-36px"}}>
                  <SelectField
                    floatingLabelText="Use Case"
                    value={this.state.useCaseDrpDwn}
                    onChange={this.handleChangeuseCaseDrpDwn}
                    floatingLabelStyle={{ color: "#DCDCDC" }}
                    fullWidth={true}
                  >
                    <MenuItem value="Supply Chain" primaryText="Supply Chain" />
                    <MenuItem value="Trade Finance" primaryText="Trade Finance" />
                    <MenuItem value="Loyalty Points" primaryText="Loyalty Points" />
                    <MenuItem value="Commodity Trading" primaryText="Commodity Trading" />
                    <MenuItem value="Asset Transfer" primaryText="Asset Transfer" />
                    <MenuItem value="P2P Energy Trading" primaryText="P2P Energy Trading" />
                    <MenuItem value="Cryptocurrency / Non-cash tokens" primaryText="Cryptocurrency / Non-cash tokens" />
        	    <MenuItem value="Add Field" primaryText="Add Field" />
                  </SelectField>
                </Col>
              </Row>
              <br />
              <Row>
                <Col xs={8}>
                  Application Type
                            </Col>
                <Col xs={2}>
                  <RadioButtonGroup name="ApplicationType">
                    <RadioButton
                      value="light"
                      label="B2B"
                      labelStyle={{ color: "#DCDCDC" }}
                      inputStyle={{ color: "#DCDCDC" }}
                      iconStyle={{ color: "#DCDCDC" }}
                      style={{ color: "#DCDCDC" }}
                    />
                    <RadioButton
                      value="not_light"
                      label="B2C"
                      labelStyle={{ color: "#DCDCDC" }}
                      inputStyle={{ color: "#DCDCDC" }}
		      style={{ color: "#DCDCDC" }}

                    />
                    <RadioButton
                      value="ludicrous"
                      label="P2P"
                      labelStyle={{ color: "#DCDCDC" }}
                    />
                  </RadioButtonGroup>
                </Col>
              </Row>
		<br />
              <Row>
                <Col xs={8}>
                  Are private transaction required between participants?
                            </Col>
                <Col xs={2}>
                  <RadioButtonGroup name="PrivateTransactionR" defaultSelected="No">
                    <RadioButton
                      value="light"
                      label="Yes"
                      labelStyle={{ color: "#DCDCDC" }}
                    />
                    <RadioButton
                      value="not_light"
                      label="No"
                      labelStyle={{ color: "#DCDCDC" }}
                    />

                  </RadioButtonGroup>
                </Col>
              </Row>
              <br />
         <Row>
                <Col xs={8}>
                  Is transaction privacy requirement known beforehand?
                            </Col>
                <Col xs={2}>
                  <RadioButtonGroup name="Transaction" defaultSelected="Yes">
                    <RadioButton
                      value="light"
                      label="Yes"
                      labelStyle={{ color: "#DCDCDC" }}
                    />
                    <RadioButton
                      value="not_light"
                      label="No"
                      labelStyle={{ color: "#DCDCDC" }}
                    />

                  </RadioButtonGroup>
                </Col>
              </Row>


            </Col>
            {/*--------------------------- Form 2 Started------------------------------------------ */}

            <Col xs={8} style={style.outer1Style}>
	 <br />
         
       

              <Row>
                <Col xs={8}>
                  Is it required that large, complex data entities be shared between participants?
                            </Col>
                <Col xs={2}>
                  <RadioButtonGroup name="ComplexDataEntities" defaultSelected="Yes">
                    <RadioButton
                      value="light"
                      label="Yes"
                      labelStyle={{ color: "#DCDCDC" }}
                    />
                    <RadioButton
                      value="not_light"
                      label="No"
                      labelStyle={{ color: "#DCDCDC" }}
                    />

                  </RadioButtonGroup>
                </Col>
              </Row>
              <br />
              <Row>
                <Col xs={8}>
                  Is rich querying and reporting a critical requirement?
                            </Col>
                <Col xs={2}>
                  <RadioButtonGroup name="CriticalReq" defaultSelected="Yes">
                    <RadioButton
                      value="light"
                      label="Yes"
                      labelStyle={{ color: "#DCDCDC" }}
                    />
                    <RadioButton
                      value="not_light"
                      label="No"
                      labelStyle={{ color: "#DCDCDC" }}
                    />

                  </RadioButtonGroup>
                </Col>
              </Row>
              <br />
              <Row>
                <Col xs={8}>
                  Should PKI be integrated with enterprise security systems?
                            </Col>
                <Col xs={2}>
                  <RadioButtonGroup name="PKIIntegration" defaultSelected="Yes">
                    <RadioButton
                      value="light"
                      label="Yes"
                      labelStyle={{ color: "#DCDCDC" }}
                    />
                    <RadioButton
                      value="not_light"
                      label="No"
                      labelStyle={{ color: "#DCDCDC" }}
                    />

                  </RadioButtonGroup>
                </Col>
              </Row>
              <br />
              <Row>
                <Col xs={8}>
                  Will all participants vote/participate in consensus process?
                            </Col>
                <Col xs={2}>
                  <RadioButtonGroup name="ConsensusProcess" defaultSelected="No">
                    <RadioButton
                      value="light"
                      label="Yes"
                      labelStyle={{ color: "#DCDCDC" }}
                    />
                    <RadioButton
                      value="not_light"
                      label="No"
                      labelStyle={{ color: "#DCDCDC" }}
                    />

                  </RadioButtonGroup>
                </Col>
              </Row>
              <br />
              <Row>
                <Col xs={8}>
                  Is high througput a critical requirement?
                            </Col>
                <Col xs={2}>
                  <RadioButtonGroup name="CriticalReq" defaultSelected="Extensively">
                    <RadioButton
                      value="light"
                      label="Extensively"
                      labelStyle={{ color: "#DCDCDC" }}
                    />
                    <RadioButton
                      value="not_light"
                      label="Briefly"
                      labelStyle={{ color: "#DCDCDC" }}
                    />

                  </RadioButtonGroup>
                </Col>
              </Row>

              <br />
  <Row>
                <Col xs={8}>
                   How many business entities will actively participate?
                 </Col>
                <Col xs={2}>
                  <RadioButtonGroup name="BusinessEntities">
                    <RadioButton
                      label="5"
         	      value="light"
                      labelStyle={{ color: "#DCDCDC" }}
                      inputStyle={{ color: "#DCDCDC" }}
                      iconStyle={{ color: "#DCDCDC" }}
                      style={{ color: "#DCDCDC" }}
                    />
                    <RadioButton
                      label="10"
			value="not_light"
                      labelStyle={{ color: "#DCDCDC" }}
                      inputStyle={{ color: "#DCDCDC" }}
		      style={{ color: "#DCDCDC" }}

                    />
                    <RadioButton
                      label="15"
			value="ludicrous"
                      labelStyle={{ color: "#DCDCDC" }}
                    />
                   <RadioButton
                       label="Other"
			value="other"
                      labelStyle={{ color: "#DCDCDC" }}
                      inputStyle={{ color: "#DCDCDC" }}
		      style={{ color: "#DCDCDC" }}

                    />

                  </RadioButtonGroup>
                </Col>
              </Row>
<br/>
<Row>
                <Col xs={8}>
                  Can data be shared over a public cloud platform?
                 </Col>
                <Col xs={2}>
                  <RadioButtonGroup name="DataShared" defaultSelected="Extensively">
                    <RadioButton
                      value="light"
                      label="Extensively"
                      labelStyle={{ color: "#DCDCDC" }}
                    />
                    <RadioButton
                      value="not_light"
                      label="Briefly"
                      labelStyle={{ color: "#DCDCDC" }}
                    />

                  </RadioButtonGroup>
                </Col>
              </Row>


            </Col>
            <Link to={'/recommendation/12345345340'}>
              <FloatingActionButton style={{ float: "right", marginTop: "300px" }}
                onTouchTap={this.submitForm}
              >
                <ContentAdd />
              </FloatingActionButton>
            </Link>


          </Row>

        </Grid>
      </div>
    )
  }
}   