import React from 'react';
import './index.css';
import Heading from './component/Heading';
import PointsContent from './component/PointsContent';

export default class Assignment2 extends React.Component{
    render(){
        return(
            <div className={"mainwrapper colorOverlay"}>
                <div className={"contentHeading"}>
                    <Heading/>
                </div>

                <div className={"part2"}>
                    <PointsContent/>
                </div>
            </div>
        );
    }
}