//ALWAYS one component per file

import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';   // ./ is current directory
import VideoList from './components/video_list';
const API_KEY = 'AIzaSyAvh07Se8Q_R-sYgMliiUTdYBRIjzOP2cA';

//'react' makes the component
//'react dom' make it into something the dom can recognize
//create a new component. This component should produce some HTML

//() => is just another way of saying function()

class App extends Component{    //class
    constructor(props){
        super(props);

        this.state = { videos: [] }; //an array of videos

        YTSearch({key: API_KEY, term: 'cats'}, (videos) => { this.setState({videos});
        //this.setState({videos:videos});
        });
    }
    render(){   //any time this re-renders, VideoList will get a new list of videos as well
        return(
            <div>
                <SearchBar />
                <VideoList videos={this.state.videos}/>
            </div>
        );
    }
}


//Take this component's generated HTML and put it on the page (the DOM)
ReactDOM.render(<App></App>, document.querySelector('.container'));

