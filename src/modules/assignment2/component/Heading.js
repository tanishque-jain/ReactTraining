import React from 'react';
import '../index.css';


export default class Heading extends React.Component{
    renderBox(points,bold="",color="") {
        return(
            <p style={{fontWeight: bold,color:color}}>{points}</p>
        );
    }

    render(){
       
        return(
            <div className="heading">
                {this.renderBox("9 React","bold","rgb(128, 128, 223)")}
                {this.renderBox("Developer Tools","bold","rgb(128, 128, 223)")}
                {this.renderBox("to Create Better")}
                {this.renderBox("Apps Faster")}
            </div>
        );
    }
}