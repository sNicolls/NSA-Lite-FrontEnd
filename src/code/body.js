import React from 'react'
import '../stylesheets/body.css'


export default class Body extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        error: null,
        isLoaded: false,
        items: []
      };
    }

  
    render() {
      return (
        <div className="body">
          
        </div>
      );
    }
  }