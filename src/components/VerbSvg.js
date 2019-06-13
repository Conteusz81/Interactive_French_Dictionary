import React, {Component} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

class VerbSvg extends Component {

    play = () => {
        this.player.play()
    };

    render() {
        const {text, audio, svgLetters} = this.props;
        const verbArray = [...text];
        const svgArray = verbArray.map(el => {
            for (let key in svgLetters) {
                if (key === el) {
                    return svgLetters[key]
                }
            }
        });
        return (
            <>
                <div className='verb_svg'>
                    <div>
                        {svgArray.map((el, index) => <span key={index}>{el}</span>)}
                    </div>
                    <FontAwesomeIcon onClick={this.play} className='verb_sound' icon="play-circle"/>
                </div>
                <audio ref={el => this.player = el} controls className="player" preload="false">
                    <source src={audio}/>
                </audio>
            </>
        )
    }
}

export default VerbSvg;