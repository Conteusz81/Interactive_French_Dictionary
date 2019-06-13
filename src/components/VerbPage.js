import React, {Component} from 'react';
import {BackToMainPage} from "./LinksIcons";
import {Verb, VerbExample}  from "./VerbComponents";
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
        return (
   <div className='background'>
   <div className='verbs_container'>
       <VerbSvg text={verb.verb_fr} audio={verb.verb_Url} svgLetters={svg}/>
       <div className='verb_box'>
       <Verb text={verb.i_fr} prefix={verb.i_fr[0].match('[euioa]') ? "j'" : 'je '} audio={verb.i_Url}/>
       <Verb text={verb.you_fr} prefix='tu ' audio={verb.you_Url}/>
       <Verb text={verb.he_she_it_fr} prefix='il/elle ' audio={verb.he_she_it_Url}/>
       <Verb text={verb.we_fr} prefix='nous ' audio={verb.we_Url}/>
       <Verb text={verb.you_plural_fr} prefix='vous ' audio={verb.you_plural_Url}/>
       <Verb text={verb.they_fr} prefix='ils/elles ' audio={verb.they_Url}/>
       <Verb text={verb.past_fr} prefix='Participe passé: ' audio={verb.past_Url}/>
       </div>
       <VerbExample textFr={verb.example_fr_1} textPl={verb.example_pl_1} />
                <BackToMainPage/>
            </div>
            </div>
        )

    }
}

export default VerbPage;