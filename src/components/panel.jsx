import React from 'react';
import { useState } from 'react';
import ToggleButton from './toggle_button'; 
import LinkedButton from './linked_button';
import ExpandButton from './expand_button';
import MusicButton from './music_button';
import VolumeButton from './volume_button';
import { useEffect } from 'react';
import './legit.css';
import Timer from './timer';
import SongText from './song_text';
//import Dropdown from './dropdown';

    
class SidePanel extends React.Component {
    state = {
        songName: "Welcome!",
        songAuthor: "Explore, Relax, Enjoy", 
        volume: "1"
    }
    updateSongName = (name) => {
        this.setState({songName: name});
    }
    updateSongAuthor = (author) => {
        this.setState({songAuthor: author});
    }
    setVolume = (volume) => {
        this.setState({volume: volume});
    }

    render() {
        return (
            <div className="fixed-top paneldiv">
                {/*<VolumeButton setVolume={this.setVolume}/>*/}
                <div className="row panels panel shadow-lg">
                    <div className="col-12 text-left my-1">
                        <SongText name={this.state.songName} author={this.state.songAuthor}/>
                    </div>
                    <div className="col-4 justify-content-center">
                        <MusicButton updateSongName={this.updateSongName} updateSongAuthor={this.updateSongAuthor} type="jazz" text={<i className="material-symbols-outlined">music_note</i>}/>
                    </div>
                    <div className="col-4 justify-content-center">
                        <MusicButton volume={this.state.volume} updateSongName={this.updateSongName} updateSongAuthor={this.updateSongAuthor} type="classic" text={<i className="material-symbols-outlined">piano</i>}/>
                    </div>
                    <div className="col-4 justify-content-center">
                        <MusicButton updateSongName={this.updateSongName} updateSongAuthor={this.updateSongAuthor} type="lofi" text={<i className="material-symbols-outlined">radio</i>}/>
                    </div>
                </div>

                <div className="row panels panel shadow-lg">
                    {/*<LinkedButton className="btn btn-lg m-1 shadow-lg" url="https://www.spotify.com/" text={spotify} />*/}
                    <div className="col-4 justify-content-center">
                        <ToggleButton audioFile="images/campfire-1.mp3" className="my-2" text={<i className="material-symbols-outlined">local_fire_department</i>}/>
                    </div>
                    <div className="col-4 justify-content-center">
                        <ToggleButton audioFile="images/rain.mp3" className="my-2" text={<i className="material-symbols-outlined">rainy</i>}/>
                    </div>
                    <div className="col-4 justify-content-center">
                        <ToggleButton audioFile="images/wind.mp3" className="my-2" text={<i className="material-symbols-outlined">air</i>}/>
                    </div>
                </div>
                <div className="row panels panel shadow-lg">
                    <Timer/>
                </div>
                {/*
                    <div className="row panels panel shadow-lg">
                        <textarea className="form-control form-control-lg" type="text" rows="5" placeholder="Notes"></textarea>
                    </div>
                */}

                
            </div>
        );
    }

}


    
export default SidePanel;
