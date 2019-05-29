import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import {Order} from '../../api/order';
import {BrowserRouter as Router, Route} from 'react-router-dom';


export default class BuzzerPage extends Component {
    state={
      group:''
    }
    constructor(props){
      super(props);
      this.handleInput=this.handleInput.bind(this);
      this.handleClick=this.handleClick.bind(this);
      this.handleFocus=this.handleFocus.bind(this);
      this.handleBlur=this.handleBlur.bind(this);
    }
    handleClick(e){
        Order.insert({
          name:this.state.group+' clicked',
          time: new Date(), // current time
        });
        let button = e.target;
        button.innerHTML="Clicked";
        button.disabled=true;
        let audio = document.querySelector('audio');
        let duration = audio.duration;
        audio.play();
        setTimeout(()=>{
          button.innerHTML="Click";
          button.disabled=false;
        },Math.ceil(duration*1000));
    }
    componentDidMount(){
       
    }
    handleInput(e){
      this.setState({group:e.target.value});
    }
    handleBlur(){
      Order.insert({
        name:this.state.history +' changed to ' + this.state.group,
        time: new Date(), // current time
      });
    }
    handleFocus(){
      this.setState({history:this.state.group});
    }
    
    render() {
      return (
        <div className="buzzer">
          <input placeholder="Enter group no." value={this.state.group} onFocus={this.handleFocus} onBlur={this.handleBlur} onChange={this.handleInput}/>
        <div className="container">
          
          <button onClick={this.handleClick}>Click</button>
          <audio controls>
            <source src="/buzzer.mp3" type="audio/mpeg"/>
           
            </audio>
        </div>
        </div>
      );
    }
  }