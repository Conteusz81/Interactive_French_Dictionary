import React, {Component} from 'react';
import {HashRouter, Link, Route, Switch,} from 'react-router-dom';
import {LinksIcons} from './LinksIcons';

class MainPage extends Component {

    state = {
        verbs: [],
        filteredVerbs: []
    };

    componentDidMount() {
        fetch('http://localhost:3000/verbs')
            .then(resp => resp.json())
            .then(data => {
                this.setState({
                    verbs: data
                });
                this.setState({
                    filteredVerbs: this.state.verbs
                });
            })

    }

    showMe = (e) => {
        const {verbs} = this.state;

        const inputValue = e.target.value.toLowerCase()
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, "")
            .replace(/ł/g, "l")
            .replace(/ç/g, "c");

        this.setState({
            filteredVerbs: verbs.filter(el => (
                el.verb_pl.normalize('NFD')
                    .replace(/[\u0300-\u036f]/g, "")
                    .replace(/ł/g, "l")
                    .match(inputValue) +
                el.verb_fr.normalize('NFD')
                    .replace(/[\u0300-\u036f]/g, "")
                    .replace(/ç/g, "c")
                    .match(inputValue)
            ))
        });

        if (e.target.value === '') {
            this.setState({
                filteredVerbs: verbs
            })
        }
    };

    render() {
        const verbs = this.state.verbs;
        if (verbs === []) {
            return null;
        }
        const {filteredVerbs} = this.state;

        const compare = (a, b) => {
            const genreA = a.verb_fr.normalize('NFD')
                .replace(/[\u0300-\u036f]/g, "")
                .replace(/ç/g, "c")
            const genreB = b.verb_fr.normalize('NFD')
                .replace(/[\u0300-\u036f]/g, "")
                .replace(/ç/g, "c")

            let comparison = 0;
            if (genreA > genreB) {
                comparison = 1;
            } else if (genreA < genreB) {
                comparison = -1;
            }
            return comparison;
        };

        filteredVerbs.sort(compare);
        return (
            <>
                <div className='input_background'>
                    {/*<div className='flag'></div>*/}
                    <LinksIcons/>
                    <input type='text' className='search' onChange={this.showMe} placeholder='Szukaj...'/>
                </div>

                <div className='verbs_container'>
                    {filteredVerbs.map(el => (
                        <Link className='verb_link' to={{pathname: `/${el.id}`}} key={el.id}>
                            <div className='verb_box'>
                                <p>{el.verb_fr}</p>
                                <p>{el.verb_pl}</p>
                            </div>
                        </Link>
                    ))
                    }
                </div>
            </>
        )
    }
}

export default MainPage

