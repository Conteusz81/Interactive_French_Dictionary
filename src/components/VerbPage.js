import React, {Component} from 'react';
import {BackToMainPage} from "./LinksIcons";
import {Verb, VerbExample} from "./VerbComponents";
import VerbSvg from "./VerbSvg"
import svg from './svgData';

class VerbPage extends Component {
    state = {
        verb: '',
    };

    componentDidMount() {
        const {id} = this.props.match.params;
        fetch(`http://localhost:3000/verbs/${id}`)
            .then(resp => resp.json())
            .then(data => {
                this.setState({
                    verb: data
                })
            })
    }

    render() {
        const verb = this.state.verb;
        if (verb === "") {
            return null;
        }
        const {i_fr, past_Url, he_she_it_Url, you_fr, they_Url, verb_fr, you_plural_Url, we_fr, verb_Url, example_fr_1, i_Url, past_fr, example_pl_1, they_fr, you_Url, you_plural_fr, we_Url, he_she_it_fr} = verb;
        return (
   <div className='background'>
   <div className='verbs_container'>
       <VerbSvg text={verb_fr} audio={verb_Url} svgLetters={svg}/>
       <div className='verb_box'>
       <Verb text={i_fr} prefix={i_fr[0].match('[euioa]') ? "j'" : 'je '} audio={i_Url}/>
       <Verb text={you_fr} prefix='tu ' audio={you_Url}/>
       <Verb text={he_she_it_fr} prefix='il/elle ' audio={he_she_it_Url}/>
       <Verb text={we_fr} prefix='nous ' audio={we_Url}/>
       <Verb text={you_plural_fr} prefix='vous ' audio={you_plural_Url}/>
       <Verb text={they_fr} prefix='ils/elles ' audio={they_Url}/>
       <Verb text={past_fr} prefix='Participe passé: ' audio={past_Url}/>
       </div>
       <VerbExample textFr={example_fr_1} textPl={example_pl_1} />
                <BackToMainPage/>
            </div>
            </div>
        )

    }
}

export default VerbPage;