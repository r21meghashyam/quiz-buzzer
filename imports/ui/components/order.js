import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import {Order} from '../../api/order';

class List extends Component{
  render(){
    console.log('11');
    return (
      <tr><td>{this.props.index+1}</td><td>{this.props.group.name}</td><td>{this.props.group.time.toString()}</td></tr>
    );
  }
}

class OrderPage extends Component {
  constructor(props){
    super(props);
    this.handleClear=this.handleClear.bind(this);
  }
    handleClear(){
      this.props.order.map(i=>{
        Order.remove({_id:i._id});
      })
    }
    render() {
      return (
        <div className="order">
          
          <table>
            <caption>Order</caption>
            <thead>
              <tr><th>No.</th><th>Activity</th><th>Time</th></tr>
            </thead>
            <tbody>
              {this.props.order.map((i,k)=><List key={i._id} index={k}  group={i}/>)}
            </tbody>
          </table>
          <div>
            {location.hostname==="localhost"?<button onClick={this.handleClear}>Clear</button>:''}
          </div>
        </div>
      );
    }
  }

export default withTracker(() => {
  return {
    order: Order.find({}).fetch(),
  };
})(OrderPage);