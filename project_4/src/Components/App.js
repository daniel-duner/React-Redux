import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';
import VideoDisplay from './VideoDisplay';

class App extends React.Component{
    state = {
        videos: [],
        selectedVideo: null
    };

    componentDidMount(){
        this.onSearchSubmit('buildings');
    }

    onVideoSelect = (selectedVideo) => {
        this.setState({selectedVideo});
    }
    
    onSearchSubmit = async input => {
        const response = await youtube.get('/search', {
            params: {
                q: input
            }
        })
        this.setState({
            videos: response.data.items,
            selectedVideo: response.data.items[0]
        });
        
    };

    render(){
        return (
           <div className="ui container">
               <SearchBar onSubmit={this.onSearchSubmit} />               
               <div className="ui grid">
                   <div className="ui row">
                        <div className="eleven wide column">
                            <VideoDisplay video={this.state.selectedVideo} />
                        </div>
                        <div className="five wide column">
                            <VideoList onVideoSelect={this.onVideoSelect} 
                            videos={this.state.videos}/>
                        </div>
                   </div>
               </div>
           </div>
        );
    }
}

export default App;