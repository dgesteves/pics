import React from 'react'

class ImageCard extends React.Component {
    state = {
        span: 0
    }

    imageRef = React.createRef()

    componentDidMount() {
        this.imageRef.current.addEventListener( 'load', this.setSpans )
    }

    setSpans = () => {
        const height = this.imageRef.current.clientHeight
        const span = Math.ceil( height / 5 + 1 )
        this.setState( { span } )
    }

    render() {
        const { urls, alt_description } = this.props.image
        return (
            <div style={ { gridRowEnd: `span ${ this.state.span }` } }>
                <img ref={ this.imageRef } src={ urls.regular } alt={ alt_description }/>
            </div>
        )
    }
}

export default ImageCard