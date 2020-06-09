import React,{Component} from 'react';
import {Tabs,Tab} from 'react-mdl';
import Backend from './projects_divisions/backend';
import Mobile from './projects_divisions/mobile';
import Frontend from './projects_divisions/frontend';
import Devops from './projects_divisions/devops';

class Projects extends Component {
  constructor(props){
   super(props);
   this.state = {activeTab: 0}
  }

  toogleTabsContent(){
   
      if(this.state.activeTab === 0)
        return(<Frontend/>);
  
     if(this.state.activeTab === 1 )
        return(<Backend/>);
   
     if(this.state.activeTab === 2)
        return(<Devops/>);

      return(<Mobile/>  );
  }

  render(){
    return (
       <div style={{ width: '100%', margin: 'auto' }}>
          <Tabs activeTab={this.state.activeTab} onChange={ (value) => this.setState({activeTab: value})}>
            <Tab>Frontend</Tab>
            <Tab>Backend</Tab>
            <Tab>DevOps</Tab>
            <Tab>Mobile</Tab>
          </Tabs>
          <section>
            { this.toogleTabsContent()}
          </section>
      </div>
    );
  }
}

export default  Projects ;