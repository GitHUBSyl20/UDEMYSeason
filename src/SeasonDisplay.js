//stick the css in the index
import './SeasonDisplay.css';
import React from 'react';
import loader from './Loader'

let SeasonConfig = {
    summer : {
        text: "its really hot",
        icon: "sun"
    },
    winter :{
        text: "it's so cold",
        icon: "snowflake"
    }
}

/* export default class SeasonDisplay extends React.Component {
constructor(props){
    super(props);
    console.log(props.lat);
} */

const getSeason=(lat, month)=>{
    if(month>2 && month<9){
       return lat>0?"summer":"winter";
    }else{
        return lat>0?"winter":"summer";
    }
};   

const SeasonDisplay= props=>{

    const season= getSeason(props.lat, new Date().getMonth());
    const {text, icon} = SeasonConfig[season];

    return(
        <div className={`season-display ${season}`}>
            <i className={`icon-left massive ${icon} icon`}/>
            <div>{text}</div>
            <i className={`icon-right massive ${icon} icon`}/>
        </div>
         )
    };

export default SeasonDisplay;