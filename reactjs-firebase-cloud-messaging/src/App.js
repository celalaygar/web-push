import React, { Component } from 'react';
import firebase from './firebase';
const messaging = firebase.messaging();
export default class componentName extends Component {
  constructor(props){
    super(props);
    this.state={

    }
  }
  componentDidMount(){
    //const messaging = firebase.messaging();
    messaging.requestPermission().then(()=>{
      console.log("have permission ")
      return messaging.getToken();
    }).then((token)=> {
      console.log(token);
    }).catch((err)=>{
      console.log('error ',err)
    });
  }
  componentDidUpdate(){
    messaging.setBackgroundMessageHandler(function(payload){
      console.log(payload.data)
      const title = "hello world";
      const options = {
          body: 'Background Message body.' // payload.data.status
      }
      return messaging.registration.showNotification(title, options);
    })
  }
  render() {
    return (
      <div>
        <h5>FireBase Cloud Messaging</h5>
      </div>
    )
  }
}
