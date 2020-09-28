import React from 'react'
import TopBarMenu from './topBarMenu';
import Body from './body'

export default class Container extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        error: null,
        isLoaded: false,
        items: []
      };
    }

    // componentDidMount() {
    //     fetch("https://localhost:5000/")
    //       .then(res => res.json())
    //       .then(
    //         (result) => {
    //             console.log("", result)
    //           this.setState({
    //             isLoaded: true,
    //             items: result.items
    //           });
    //         },
    //         (error) => {
    //             console.log("FAILURe", error)
    //           this.setState({
    //             isLoaded: true,
    //             error
    //           });
    //         }
    //       )
    //   }

  
    render() {
      return (
        <div>
          <TopBarMenu />
          <Body />
          
        </div>
      );
    }
  }