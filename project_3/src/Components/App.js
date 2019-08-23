import React from "react";
import unsplash from '../api/unsplash'; 
import SearchBar from "./SearchBar";
import ImageList from './ImageList'

class App extends React.Component {
    state = { images: []}
    onSearchSubmit = async (term) => {
      const response = await unsplash.get('https://api.unsplash.com/search/photos',{
        params: {query: term},
        headers: {Authorization: 'Client-ID 7045b308315db37e2fec1960fde01a088a531221c37e77935a500d39ddcb2cc3'}
       });
       this.setState({images: response.data.results});
    }

  render() {
    return (
      <div className="ui container" style={{marginTop:'10px'}}>
        <SearchBar onSubmit={this.onSearchSubmit}/>
        Found: {this.state.images.length} images
        <ImageList images={this.state.images}/>
      </div>
    );
  
}
}

export default App;
