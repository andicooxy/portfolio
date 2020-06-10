import React, { Component } from 'react';
import {Grid, Cell, Link} from 'react-mdl';
import Experience from './resume_category/experience';
import Education from './resume_category/education';
class Resume extends Component {
  render() {
    return (
      <div style={{ width: '100%', margin: 'auto' }}>
        <Grid>
          <Cell col={4}>
            <div className="resume-left">
              <h4> Andy Oteng Awuku</h4>
              <img src='0.jpeg' alt='andy' />
              <h5> Full-Stack Developer</h5>
              <hr style={{border: "1px solid #efab3e"}}/>
              <p><b> Phone Number </b> (+233)5005 339 66</p>
              <p><b> Current Location</b> Ghana </p>
              <p><b> Emails </b> andyotengawuku@gmail.com | andycooxy@gmail.com </p>
              <p><b> Address </b> P O BOX P.M.B 40, IPC, Madina, Ghana </p>
  
            </div>
          </Cell>
          <Cell col={8}>
            <div className="resume-right">
                <div className="resume-title">
                 <h5> Work Experience </h5>
              </div>
              <Experience 
               jobTitle="Software Engineer"
               jobDiscriptons={[
                 "Designed and Rewrote Several App for Finance- (Flopay-payment system used by many companies including betting companies in Ghana, Lemon-Used in Ghana/Ivory Coast)",
                 "Designed,  implemented  and  monitored  web apps and sites for 	continuous 	improvement and integration.",
                 "Database Design and Planning for new apps",
                 "Reviewed code (peer-review)to validate structures, assess   security   and   verify   browser,   device   and operating system compatibility."
               ]}
               specification="Backend Developer"           
               startDate ='June 2016'
               endDate = 'June 2020'
               title="Nfortics, Technology for Financial Services"/>
              <div className="resume-title">
                 <h5> Education </h5>
              </div>
              <Education 
               program="Bsc. Computer Science"
               certificate="Degree"
               startDate='2012'
               endDate ='2016'
               title="Kwame Nkrumah University of Science and Technology"/>
              <Education 
               certificate="WASCCE"
               program="Applied Electricity and Electronics, Technical Skills"
               startDate='2007'
               endDate ='2011'
               title="Koforidua Senior High Technical School"/>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Resume;