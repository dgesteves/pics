import React, { Component } from 'react'
import SearchBar from './SearchBar'
import ImageList from './ImageList'
import unsplash from '../api/unsplash'

class App extends Component {

    state = {
        images: []
    }

    onSearchSubmit = async term => {
        const images = await unsplash.get( '/search/photos', { params: { query: term } } )
        this.setState( { images: images.data.results } )
    }

    render() {
        return (
            <div className={ 'ui container' } style={ { marginTop: '16px' } }>
                <SearchBar onSubmit={ this.onSearchSubmit }/>
                <ImageList images={ this.state.images }/>
            </div>
        )
    }
}

export default App