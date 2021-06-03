import React from 'react';
import '../../modules/assignment2/index.css';
import content1 from '../../assets/img/content1img.jpeg';


export default class ResuableBox extends React.Component{
    render(){
        const {title, desc, revclass} = this.props;
        return(
            <div className={revclass}>
                <img src={content1} class={"icon"} alt="img" />
                <div className="pointscontent">
                    <div className="pointTilte">
                        {title}
                    </div>
                    <div className="pointdesc">
                        {desc}
                    </div>
                </div>
                
            </div>
        );
    }
}