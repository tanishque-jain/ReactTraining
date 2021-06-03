import React from 'react';
import '../index.css';
import Reusable from '../../../components/resuableBox'

export default class Heading extends React.Component{
    render(){
        return(
            <div className="allpoints">
                <Reusable title={"1) React Developer Tools"} revclass={"individualpoints"} desc={"Official Chrome extension for React from Facebook that lets you examine the list of components and subcomponents on the webpage"}/>
                <Reusable title={"2) Create React App"} revclass={"individualpointsrev"} desc={"Tool used in the process of setting up a React IDE"}/>
                <Reusable title={"3)Storybook"} revclass={"individualpoints"} desc={"Online app that lets you create UI components"}/>
                <Reusable title={"4) React Styleguidist"} revclass={"individualpointsrev"} desc={"It Offers an interactive way of creating and sharing UI"}/>
                <Reusable title={"5) Bit"} revclass={"individualpoints"} desc={"CLi tool and online platform that enables you to publish React components"}/>
                <Reusable title={"6) React Bootstrap"} revclass={"individualpointsrev"} desc={"Powerful toolkit that comprises HTML, CSS and JavaScript tools to help you  create webpages and application"}/>
                <Reusable title={"7) React Sight"} revclass={"individualpoints"} desc={"Chrome extension for a visual illustration of all components of your app in a live tree structure"}/>
                <Reusable title={"8) Why did you render"} revclass={"individualpointsrev"} desc={"It alerts you in the console when an avoidable render occurs"}/>
                <Reusable title={"9) React Photo"} revclass={"individualpoints"} desc={"Lets you drag and drop the components your way to create UI instead of coding"}/>

            </div>
        );
    }
}