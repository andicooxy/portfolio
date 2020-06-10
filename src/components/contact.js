import React,{Component} from 'react';
import {Grid, Cell} from 'react-mdl';
class Contact extends Component {
  render(){
    return (
       <div style={{ width: '100%', margin: 'auto' }}>
         <Grid style={{margin: '10%'}}>
            <Cell col={6}>
              <div className="center-items">
                <h4> Andy Oteng Awuku</h4>
                <img src='0.jpeg' alt='andy' />

                <p> Kindly Contact me for more information and freelance projects.</p>
              </div>
            </Cell>

            <Cell col={6}>
                <Grid>
                   <Cell col={2}>
                      <i className="fa fa-phone-square fa-5x"></i>
                   </Cell>
                   <Cell col={10}>
                      <h4> +233 5005 33 966</h4>
                   </Cell>
                    <Cell col={2}>
                      <i className="fa fa-phone-square fa-5x"></i>
                   </Cell>
                   <Cell col={10}>
                      <h4> +233 246 352 743</h4>
                   </Cell>
                   <Cell col={2}>
                      <i className="fa fa-skype fa-5x"></i>
                   </Cell>
                   <Cell col={10}>
                      <h4>andycooxy</h4>
                   </Cell>

                   <Cell col={2}>
                      <i className="fa fa-envelope fa-5x"></i>
                   </Cell>
                   <Cell col={10}>
                      <h4>andycooxy@gmail.com</h4>
                   </Cell>
                </Grid>
            </Cell>

         </Grid>
      </div>
    );
  }
}
export default Contact;