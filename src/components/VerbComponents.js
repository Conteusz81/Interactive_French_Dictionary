import React, {Component} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlayCircle} from '@fortawesome/free-solid-svg-icons';
import {library} from "@fortawesome/fontawesome-svg-core";

library.add(faPlayCircle);

class Verb extends Component {

    play = () => {
        this.player.play()
    };

    render() {
        const {prefix, text, audio} = this.props;
        return (
            <>
   <div className='verb_variants'>
       <p>{prefix} <span>{text}</span></p>
        <FontAwesomeIcon onClick={this.play} className='verb_sound' icon="play-circle"/>
   </div>
   <audio ref={el => this.player = el} controls className="player" preload="false">
       <source src={audio}/>
   </audio>
            </>
        )
    }
}

class VerbExample extends Component {
    render() {
        const {textFr, textPl} = this.props;
        return (
            <>
                <div className='verb_example'>
                    <p className='verb_example_p'>
                        <span>Przykład:</span> <span>{textFr}</span>  <span>{textPl}</span></p>
                </div>
                </>
        )
    }
}

export  {Verb, VerbExample}
