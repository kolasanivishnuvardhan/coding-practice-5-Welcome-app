import {Component} from 'react'

import './index.css'

class Welcome extends Component {
  state = {isSubscribed:false}
  onSubscribeBtn = ()=>{
    console.log("btn clicked")
    this.setState((prevState)=>{
      if(prevState.isSubscribed===false){
        return {isSubscribed:true}
      }else{
        return {isSubscribed:false}
      }
    })
  }
  render() {
    const {isSubscribed} = this.state
    return (
      <div className="bg-container">
        <h1 className="heading">Welcome</h1>
        <p className="description">Thank you! Happy Learning</p>
        {isSubscribed?<button className="btn" type="button" onClick={this.onSubscribeBtn}>Subscribed</button>:<button className="btn" type="button" onClick={this.onSubscribeBtn}>Subscribe</button>
}
      </div>
    )
  }
}

export default Welcome
