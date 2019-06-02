import React from 'react';


const Loader=(props)=>{
    return (

<div className="ui active inverted dimmer">
    <div className="ui massive text loader">{props.message}</div>
</div>
    ); 
};

//in case no message in the component 
/* 
Loader.defaultProps ={
    message : "loading..." 
};  */

export default Loader;