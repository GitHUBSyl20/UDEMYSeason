import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay'
import Loader from './Loader';

//emprunt de built-in funtionnality dans notre classe
class App extends React.Component {
    //constructor initilialize state, because first thing t
    //to be loaded...
    //overwrite the constructor function component
   /*  constructor(props){
        //rÃ©f to parent constructor function to get its
        //properties
        super(props);
        console.log("it is Constructed -initilaisation of states, getting props from parent")
        //we don't know yet the value of lat
        //only time we do direct assignement
        this.state={lat:null, errorMessage: null };

        //this function does not occur while 
        //we are running the constructor!
      
    }
 */
    //equivalent à l'ecriture précédente"
 state={lat:null, errorMessage: null };

componentDidMount(){
     
   window.navigator.geolocation.getCurrentPosition(
     position=>this.setState({lat: position.coords.latitude}),
            //update the state object= we reRender  
        err=> this.setState({errorMessage: err.message})
    )
   
}


componentDidUpdate(){
    console.log("it just updated -some change were done in the state throught set stata")
}

renderContent(){
    if(this.state.errorMessage && !this.state.lat){
        return <div>Error </div>
    }
    if(!this.state.errorMessage && this.state.lat){
        return (<SeasonDisplay lat={this.state.lat}/>);
    }
    return  (<Loader message="wait for meteo"/>);
    
    
   /* 
    console.log("it is rendered- apparition in the user interface") */
   //the new value of lat 
   //is put in the component child seasonDisplay for its use
   //as props 
   //Re REndering of the children as the parent is rerendered

};

    //we hve to define render !
render(){
    return(
    <div className="border red">
        {this.renderContent()}
    </div>
    )
       
}
}


ReactDOM.render(<App/>, document.querySelector('#root'))



