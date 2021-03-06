import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';

class Education extends Component {

  render(){
  return (
    <div className="resume-items"> 
       <Grid>
          <Cell col={2}>
            <div>
              <p> {this.props.startDate} - {this.props.endDate == null ? "Current Date" : this.props.endDate} </p>
            </div>
          </Cell>
          <Cell col={10}>
            <div style={{ padding: "10px", borderLeft: "1px solid white"}}>
            <h4> {this.props.title} </h4> 
            <p> {this.props.program}</p>
            <p> ({this.props.certificate})</p>
            </div>
          </Cell>
       </Grid>
    </div>
  );
  }
}

export default  Education;