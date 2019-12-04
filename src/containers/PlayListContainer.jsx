import React, {Component} from 'react'
import PlayList from '../components/PlayList'


class PlayListContainer extends Component {
    render() {
        return (
            <PlayList {...this.props}/>
        )
    }
}

export default PlayListContainer;
