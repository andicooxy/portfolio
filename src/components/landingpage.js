import React, { Component } from 'react';
import { Grid, Cell, Tab, Tabs , Card, CardText ,CardTitle, CardActions} from 'react-mdl';

 
class Landingpage extends Component {
    constructor(props) {
        super(props)
        this.state = { activeTab: 2 };
    }

  render() {
    return (
      <div style={{ width: '100%', margin: 'auto' , height: '100%' }}>
      
        <Grid className='landing-grid'>
          <Cell col={12} className='align-center'>
          <Card shadow={1} style={{width: '200px',height: 'auto', margin: 'auto'}}>
            <CardTitle expand style={{color: '#fff', background: 'url(0.jpeg) no-repeat'}}>
            </CardTitle> 
          </Card>
            <div className="banner-text">
              <h1>Full-Stack Developer</h1>
              <h4> SKILLS</h4>
              <hr/>
              <p>
               Ruby (Rails and Sinatra) | Node (Express) | Vue Js | React Js | Flutter | C# (.Net) | Android | VB  <br/>
                Html/CSS | Postgres | MySql | MongoDb | Heroku | Google Cloud | AWS | Git | Digital Ocean </p>
            
           

            <div className="social-icons"> 
              <a target="_blank" herf="https://www.linkedin.com/in/andy-o-awuku-400bab123/"><i class="fa fa-linkedin-square fa-5x white-color" aria-hidden="true"></i></a>
              <a target="_blank" herf="https://www.linkedin.com/in/andy-o-awuku-400bab123/"><i class="fa fa-bitbucket-square fa-5x white-color" aria-hidden="true"></i></a>
              <a target="_blank" herf="https://www.linkedin.com/in/andy-o-awuku-400bab123/"><i class="fa fa-github fa-5x white-color" aria-hidden="true"></i></a>
              <a target="_blank" herf="https://www.linkedin.com/in/andy-o-awuku-400bab123/"><i class="fa fa-gitlab fa-5x white-color" aria-hidden="true"></i></a>
              <a target="_blank" herf="https://www.linkedin.com/in/andy-o-awuku-400bab123/"><i class="fa fa-gitlab fa-5x white-color" aria-hidden="true"></i></a>
            </div>
            </div>
          </Cell>
        </Grid>

      </div>
    );
  }
}
export default Landingpage;