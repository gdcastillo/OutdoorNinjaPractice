import React, { Component } from 'react'; 

//class-based component is really important; ONLY class-based components have states
//start with making functional components, only make it a class component when you're sure
class SearchBar extends Component{    //gives SearchBar functionality from React.Component
    constructor(props){
        super(props);

        this.state = { term: 'Starting Value'};   //term is short for search term; that's what's being updated
    }
    
    //so onChange is if anything changes; this is a protected statement so look up more on it if you need to
    render() {
        return (
        <div>
            <input
            //the value of the input is equal to the state
            value = {this.state.term} 
            //the state changes here
            onChange = {(event) => this.setState({term: event.target.value})}/>
        </div>
        )
        //use this.setState to change the state outside of the constructor
    }

    /*onInputChange(event){           //this is an event handler     
        console.log(event.target.value);
    }*/                               //thhis is defined in (event) => console.log or whatever, but 
    //I'm keeping it so you know where that came from
}

//state is a plain javascript object that is used to record and react to user events
//when a component's state is changed, the component and its children are re-rendered (so change parent states sparingly?)

//constructor: the first and only function called automatically when a new instance of the class is created
//used for initializing variables and states and w/e

//component has its own constructor; calling the parent method with super();
export default SearchBar;