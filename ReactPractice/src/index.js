//ALWAYS one component per file
import _ from 'lodash';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';   // ./ is current directory
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail'
const API_KEY = 'AIzaSyAvh07Se8Q_R-sYgMliiUTdYBRIjzOP2cA';

//'react' makes the component
//'react dom' make it into something the dom can recognize
//create a new component. This component should produce some HTML

//() => is just another way of saying function()

class App extends Component{    //class
    constructor(props){
        super(props);

        this.state = {
            videos: [],
            selectedVideo: null
        }; //an array of videos
        this.videoSearch('surfboards');
    }

    videoSearch(term){
        YTSearch({key: API_KEY, term: term}, (videos) => { 
            this.setState({
                videos: videos,
                selectedVideo: videos[0]
            });        
        });
    }

    render(){   //any time this re-renders, VideoList will get a new list of videos as well
        const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300); 
        //so the above is videoSearch(term) PLUS a 300 ms delay
        return(
            <div>
                <SearchBar  onSearchTermChange = {videoSearch}/>
                <VideoDetail video={this.state.selectedVideo}/>
                <VideoList 
                    onVideoSelect = {selectedVideo => this.setState({selectedVideo}) }
                    videos={this.state.videos}/>
            </div>
        );
    }
}


//Take this component's generated HTML and put it on the page (the DOM)
ReactDOM.render(<App></App>, document.querySelector('.container'));

