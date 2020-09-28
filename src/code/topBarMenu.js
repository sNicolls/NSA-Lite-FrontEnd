import React from 'react'
import '../stylesheets/topBarMenu.css'
import { AiOutlineFolder, AiOutlineVideoCamera, AiOutlinePlusCircle, AiOutlinePlusSquare } from 'react-icons/ai';


export default class TopBarMenu extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
       
      };
    }

    

  
    render() {
      return (
        <div className="topBarMenu_Container">
            <button className="topBut"><AiOutlineVideoCamera /></button>
            <button className="topBut"><AiOutlineFolder /></button>
            <button className="topBut"><AiOutlinePlusSquare /></button>
            
        </div>
      );
    }
  }