import React from 'react';
import NavBarContainer from '../navbar/navbar_container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons'

class SongShow extends React.Component {
    componentDidMount() {
        this.props.fetchSong(this.props.song.id);
        window.scrollTo(0, 0);
    }
    constructor(props){
        super(props);
        this.state = this.props.song;
        this.display = this.display.bind(this);
    };

    display() {
        return(
            this.props.song.artist.id === this.props.currentUserId ? (
            <div>
                <NavBarContainer /> 
                <div className="show-context">
                    <h1>hello</h1>
                    <FontAwesomeIcon className="song-show-play" icon={faPlay}></FontAwesomeIcon>
                    <div className="song-show-content-title-uploader">
                        <h1 className="song-show-title">{this.state.title}</h1>
                        <p className="song-show-date">{this.state.createdAt.includes("about") ? this.state.createdAt.slice(6) : this.state.createdAt} ago</p>
                    </div>
                    <div className="song-show-content-genre-date">
                        <p className="song-show-uploader">{this.state.artist.username}</p>
                        <p className="song-show-genre">#{this.state.genre}</p>
                    </div>
                    <img className="show-img" src={this.state.coverPhoto}></img> 
                </div>
                <h1>hello</h1>
                <button>Edit Song</button>
                <button>Delete Song</button>
            </div>
            ) : (
            <div>
                <NavBarContainer /> 
                <div className="show-context">
                    <h1>hello</h1>
                    <FontAwesomeIcon className="song-show-play" icon={faPlay}></FontAwesomeIcon>
                    <div className="song-show-content-title-uploader">
                        <h1 className="song-show-title">{this.state.title}</h1>
                        <p className="song-show-date">{this.state.createdAt.includes("about") ? this.state.createdAt.slice(6) : this.state.createdAt} ago</p>
                    </div>
                    <div className="song-show-content-genre-date">
                        <p className="song-show-uploader">{this.state.artist.username}</p>
                        <p className="song-show-genre">#{this.state.genre}</p>
                    </div>
                    <img className="show-img" src={this.state.coverPhoto}></img> 
                </div>
                <h1>hello</h1>
            </div>
            )
        );
    };
    
    render() {
         return (
            <div>
                {this.display()}
            </div>
        );
    };
        
};


export default SongShow;