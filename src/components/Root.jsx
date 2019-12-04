import React, {Component} from 'react';


class Root extends Component {
    render() {
        return (
            <div className="wrapper">
                HELLO
                <div className="header">
                    <div className="banner">
                        <div className="logo">
                            <img alt="Logo" src=""/>
                        </div>
                        <div className="search-box">
                            <input/>
                        </div>
                        <div className="notification-dropdown">
                            <ul>
                                <li>Simple</li>
                                <li>Is</li>
                                <li>Hard</li>
                            </ul>
                        </div>
                        <div className="user">
                            <div className="user-avatar">
                                <img alt="User Avatar" src=""/>
                            </div>
                            <div className="user-dropdown">
                                ObviousWhale
                                <ul>
                                    <li>Profile</li>
                                    <li>Profile</li>
                                    <li>Profile</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="nav">
                        <div className="nav-item">
                            Home
                        </div>
                        <div className="nav-item">
                            Playlist
                        </div>
                        <div className="nav-item">
                            Genres
                            <ul>
                                <li>Pop</li>
                                <li>Ballad</li>
                                <li>Rock</li>
                                <li>Jazz</li>
                                <li>Country</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="content">
                    <div className="content-left col-xs-3">
                        <div className="playlist">
                            <a href="#"/>
                        </div>
                    </div>
                    <div className="content-mid col-xs-9">
                        <div className="songs-container col-xs-3"/>
                        <div className="songs-container col-xs-3"/>
                        <div className="songs-container col-xs-3"/>
                    </div>
                </div>
                <div className="player">
                    <div className="player-song">
                        <div className="song-artwork"/>
                        <div className="song-name"/>
                    </div>
                    <div className="player-buttons">
                        <div className="player-button" role="button" tabIndex="0">
                            <i className="player-button-icon ion-ios-rewind" />
                        </div>
                        <div className="player-button" role="button" tabIndex="0">
                            <i className={`player-button-icon ion-ios-${true ? 'pause' : 'play'}`} />
                        </div>
                        <div className="player-button" role="button" tabIndex="0">
                            <i className="player-button-icon ion-ios-fastforward"/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Root;
