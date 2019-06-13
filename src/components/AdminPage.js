import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import {BackToMainPage} from "./LinksIcons";

const MySwal = withReactContent(Swal);

class AdminPage extends Component {

    state = {
        id: '',
        idCheck: false,
        verbs: "",
        verb_pl: "",
        example_pl_1: "",
        verb_fr: "",
        verb_Url: "",
        i_fr: "",
        i_Url: "",
        you_fr: "",
        you_Url: "",
        he_she_it_fr: "",
        he_she_it_Url: "",
        we_fr: "",
        we_Url: "",
        you_plural_fr: "",
        you_plural_Url: "",
        they_fr: "",
        they_Url: "",
        past_fr: "",
        past_Url: "",
        example_fr_1: ""
    };

    pageUpdate = () => {
        fetch('http://localhost:3000/verbs')
            .then(resp => resp.json())
            .then(data => {
                this.setState({
                    verbs: data
                });
            })
    };

    componentDidMount() {
        this.pageUpdate()
    }

    handleChange = e => {
        // if (e.target.value.match('[^A-Za-ząęłćśńóśżź]')) {
        //     return alert('tylko litery')
        // }
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    handleSubmit = e => {
        e.preventDefault();
        const {
            past_Url, past_fr, verb_pl, we_fr, he_she_it_Url, you_fr, we_Url, id, verb_fr,
            you_plural_Url, idCheck, verb_Url, example_fr_1, i_Url, they_fr, example_pl_1,
            he_she_it_fr, they_Url, you_Url, you_plural_fr, i_fr
        } = this.state;
        if (idCheck) {
            Swal.fire({
                title: 'Czy na pewno chcesz zapisać zmiany?',
                text: "",
                type: 'question',
                showCancelButton: true,
                confirmButtonColor: '#33d662',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Tak, zmień!'
            }).then((result) => {
                if (result.value) {
                    Swal.fire(
                        'Zmieniono!',
                        'Czasownik został zaktualizowany.',
                        'success'
                    );

                    fetch(`http://localhost:3000/verbs/${id}`, {
                        method: 'put',
                        body: JSON.stringify({
                            verb_pl: verb_pl,
                            example_pl_1: example_pl_1,
                            verb_fr: verb_fr.toLowerCase(),
                            verb_Url: verb_Url,
                            i_fr: i_fr,
                            i_Url: i_Url,
                            you_fr: you_fr,
                            you_Url: you_Url,
                            he_she_it_fr: he_she_it_fr,
                            he_she_it_Url: he_she_it_Url,
                            we_fr: we_fr,
                            we_Url: we_Url,
                            you_plural_fr: you_plural_fr,
                            you_plural_Url: you_plural_Url,
                            they_fr: they_fr,
                            they_Url: they_Url,
                            past_fr: past_fr,
                            past_Url: past_Url,
                            example_fr_1: example_fr_1
                        }),
                        headers: {
                            "Content-Type": "application/json"
                        }
                    }).then(resp => resp.json())
                        .then(resp => {
                            console.log(resp);
                            this.setState({
                                idCheck: !this.state.idCheck,
                                verb_pl: "",
                                example_pl_1: "",
                                verb_fr: "",
                                verb_Url: "",
                                i_fr: "",
                                i_Url: "",
                                you_fr: "",
                                you_Url: "",
                                he_she_it_fr: "",
                                he_she_it_Url: "",
                                we_fr: "",
                                we_Url: "",
                                you_plural_fr: "",
                                you_plural_Url: "",
                                they_fr: "",
                                they_Url: "",
                                past_fr: "",
                                past_Url: "",
                                example_fr_1: ""
                            });
                            this.pageUpdate();
                        })
                }
            })


        } else {
            fetch('http://localhost:3000/verbs', {
                method: 'post',
                body: JSON.stringify({
                    verb_pl: verb_pl,
                    example_pl_1: example_pl_1,
                    verb_fr: verb_fr.toLowerCase(),
                    verb_Url: verb_Url,
                    i_fr: i_fr,
                    i_Url: i_Url,
                    you_fr: you_fr,
                    you_Url: you_Url,
                    he_she_it_fr: he_she_it_fr,
                    he_she_it_Url: he_she_it_Url,
                    we_fr: we_fr,
                    we_Url: we_Url,
                    you_plural_fr: you_plural_fr,
                    you_plural_Url: you_plural_Url,
                    they_fr: they_fr,
                    they_Url: they_Url,
                    past_fr: past_fr,
                    past_Url: past_Url,
                    example_fr_1: example_fr_1
                }),

                headers: {
                    "Content-Type": "application/json"
                }
            }).then(resp => resp.json())
                .then(resp => {
                    console.log(resp);
                    this.setState({
                        verb_pl: "",
                        example_pl_1: "",
                        verb_fr: "",
                        verb_Url: "",
                        i_fr: "",
                        i_Url: "",
                        you_fr: "",
                        you_Url: "",
                        he_she_it_fr: "",
                        he_she_it_Url: "",
                        we_fr: "",
                        we_Url: "",
                        you_plural_fr: "",
                        you_plural_Url: "",
                        they_fr: "",
                        they_Url: "",
                        past_fr: "",
                        past_Url: "",
                        example_fr_1: ""
                    });
                    this.pageUpdate();

                })
        }
    };

    handleEdit = e => {
        const id = e.target.id;
        fetch(`http://localhost:3000/verbs/${id}`)
            .then(resp => resp.json())
            .then(data => {
                this.setState({
                    idCheck: !this.state.idCheck,
                    verb_pl: "",
                    example_pl_1: "",
                    verb_fr: "",
                    verb_Url: "",
                    i_fr: "",
                    i_Url: "",
                    you_fr: "",
                    you_Url: "",
                    he_she_it_fr: "",
                    he_she_it_Url: "",
                    we_fr: "",
                    we_Url: "",
                    you_plural_fr: "",
                    you_plural_Url: "",
                    they_fr: "",
                    they_Url: "",
                    past_fr: "",
                    past_Url: "",
                    example_fr_1: ""
                });
                if (this.state.idCheck) {
                    const {
                        past_Url, past_fr, verb_pl, he_she_it_Url, you_fr, we_Url, verb_fr, you_plural_Url,
                        we_fr, verb_Url, example_fr_1, i_Url, they_fr, example_pl_1, he_she_it_fr, they_Url,
                        you_Url, you_plural_fr, i_fr
                    } = data;
                    this.setState({
                        id: id,
                        verb_pl: verb_pl,
                        example_pl_1: example_pl_1,
                        verb_fr: verb_fr,
                        verb_Url: verb_Url,
                        i_fr: i_fr,
                        i_Url: i_Url,
                        you_fr: you_fr,
                        you_Url: you_Url,
                        he_she_it_fr: he_she_it_fr,
                        he_she_it_Url: he_she_it_Url,
                        we_fr: we_fr,
                        we_Url: we_Url,
                        you_plural_fr: you_plural_fr,
                        you_plural_Url: you_plural_Url,
                        they_fr: they_fr,
                        they_Url: they_Url,
                        past_fr: past_fr,
                        past_Url: past_Url,
                        example_fr_1: example_fr_1
                    })
                }

            })
    };

    handleDelete = (e) => {

        const id = e.target.id;
        Swal.fire({
            title: 'Czy na pewno chcesz usunąć?',
            text: "Nie będzie możliwości cofnięcia",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#33d662',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Tak, usuń!'
        }).then((result) => {
            if (result.value) {
                Swal.fire(
                    'Usunięto!',
                    'Czasownik został usunięty.',
                    'success'
                );

                fetch(`http://localhost:3000/verbs/${id}`, {
                    method: 'delete'
                }).then(resp => resp.json())
                    .then(resp => {
                        console.log(resp);
                        this.pageUpdate();
                    })

            }
        })


    };


    render() {
        const verbs = this.state.verbs;
        if (verbs === "") {
            return null;
        }

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

        const sortedVerbs = verbs.sort(compare);
        const {
            i_fr, verb_pl, past_Url, he_she_it_Url, you_fr, we_Url, verb_fr, idCheck, you_plural_Url, we_fr, verb_Url,
            example_fr_1, i_Url, past_fr, example_pl_1, they_fr, they_Url, you_Url, you_plural_fr, he_she_it_fr
        } = this.state;
        return (
            <>
                <div className='form_container'>
                    <BackToMainPage/>
                    {idCheck ? <h1>Zmień</h1> : <h1>Dodaj nowy</h1>}
                    <form onSubmit={this.handleSubmit}>
                        <div className='verb_box'>
                        <div className="input-group input-group-lg">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="inputGroup-sizing-lg">PL</span>
                            </div>
                            <input required type="text" className="form-control" aria-label="Sizing example input"
                                   aria-describedby="inputGroup-sizing-lg" name='verb_pl' value={verb_pl} onChange={this.handleChange}/>
                        </div>
                        <div className="input-group input-group-lg">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="inputGroup-sizing-lg">FR</span>
                            </div>
                            <input required type="text" className="form-control" aria-label="Sizing example input"
                                   aria-describedby="inputGroup-sizing-lg" name='verb_fr' value={verb_fr} onChange={this.handleChange}/>
                        </div>
                        <div className="input-group input-group-lg">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="inputGroup-sizing-lg">je</span>
                            </div>
                            <input required type="text" className="form-control" aria-label="Sizing example input"
                                   aria-describedby="inputGroup-sizing-lg" name='i_fr' value={i_fr} onChange={this.handleChange}/>
                        </div>
                        <div className="input-group input-group-lg">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="inputGroup-sizing-lg">tu</span>
                            </div>
                            <input required type="text" className="form-control" aria-label="Sizing example input"
                                   aria-describedby="inputGroup-sizing-lg" name='you_fr' value={you_fr} onChange={this.handleChange}/>
                        </div>
                        <div className="input-group input-group-lg">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="inputGroup-sizing-lg">il/elle</span>
                            </div>
                            <input required type="text" className="form-control" aria-label="Sizing example input"
                                   aria-describedby="inputGroup-sizing-lg" name='he_she_it_fr' value={he_she_it_fr} onChange={this.handleChange}/>
                        </div>
                        <div className="input-group input-group-lg">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="inputGroup-sizing-lg">nous</span>
                            </div>
                            <input required type="text" className="form-control" aria-label="Sizing example input"
                                   aria-describedby="inputGroup-sizing-lg" name='we_fr' value={we_fr} onChange={this.handleChange}/>
                        </div>
                        <div className="input-group input-group-lg">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="inputGroup-sizing-lg">vous</span>
                            </div>
                            <input required type="text" className="form-control" aria-label="Sizing example input"
                                   aria-describedby="inputGroup-sizing-lg" name='you_plural_fr' value={you_plural_fr} onChange={this.handleChange}/>
                        </div>
                        <div className="input-group input-group-lg">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="inputGroup-sizing-lg">ils/elles</span>
                            </div>
                            <input required type="text" className="form-control" aria-label="Sizing example input"
                                   aria-describedby="inputGroup-sizing-lg" name='they_fr' value={they_fr} onChange={this.handleChange}/>
                        </div>
                        <div className="input-group input-group-lg">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="inputGroup-sizing-lg">p. passé</span>
                            </div>
                            <input required type="text" className="form-control" aria-label="Sizing example input"
                                   aria-describedby="inputGroup-sizing-lg" name='past_fr' value={past_fr} onChange={this.handleChange}/>
                        </div>
                        </div>



                        <div className='url_box'>
                        <div className="input-group input-group-lg">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="inputGroup-sizing-lg">Url FR</span>
                            </div>
                            <input type="text" className="form-control" aria-label="Sizing example input"
                                   aria-describedby="inputGroup-sizing-lg" name='verb_Url' value={verb_Url} onChange={this.handleChange}/>
                        </div>
                        <div className="input-group input-group-lg">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="inputGroup-sizing-lg">Url je</span>
                            </div>
                            <input type="text" className="form-control" aria-label="Sizing example input"
                                   aria-describedby="inputGroup-sizing-lg" name='i_Url' value={i_Url} onChange={this.handleChange}/>
                        </div>
                        <div className="input-group input-group-lg">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="inputGroup-sizing-lg">Url tu</span>
                            </div>
                            <input type="text" className="form-control" aria-label="Sizing example input"
                                   aria-describedby="inputGroup-sizing-lg" name='you_Url' value={you_Url} onChange={this.handleChange}/>
                        </div>
                        <div className="input-group input-group-lg">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="inputGroup-sizing-lg">Url il</span>
                            </div>
                            <input type="text" className="form-control" aria-label="Sizing example input"
                                   aria-describedby="inputGroup-sizing-lg" name='he_she_it_Url' value={he_she_it_Url} onChange={this.handleChange}/>
                        </div>
                        <div className="input-group input-group-lg">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="inputGroup-sizing-lg">Url nous</span>
                            </div>
                            <input type="text" className="form-control" aria-label="Sizing example input"
                                   aria-describedby="inputGroup-sizing-lg" name='we_Url' value={we_Url} onChange={this.handleChange}/>
                        </div>
                        <div className="input-group input-group-lg">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="inputGroup-sizing-lg">Url vous</span>
                            </div>
                            <input type="text" className="form-control" aria-label="Sizing example input"
                                   aria-describedby="inputGroup-sizing-lg" name='you_plural_Url' value={you_plural_Url} onChange={this.handleChange}/>
                        </div>
                        <div className="input-group input-group-lg">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="inputGroup-sizing-lg">Url ils</span>
                            </div>
                            <input type="text" className="form-control" aria-label="Sizing example input"
                                   aria-describedby="inputGroup-sizing-lg" name='they_Url' value={they_Url} onChange={this.handleChange}/>
                        </div>
                        <div className="input-group input-group-lg">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="inputGroup-sizing-lg">Url p.p.</span>
                            </div>
                            <input type="text" className="form-control" aria-label="Sizing example input"
                                   aria-describedby="inputGroup-sizing-lg" name='past_Url' value={past_Url} onChange={this.handleChange}/>
                        </div>
                        </div>

                        <div className='textarea_box'>
                            <div className="input-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text">Przykład pl</span>
                                </div>
                                <textarea className="form-control" aria-label="With textarea" name='example_pl_1'
                                          value={example_pl_1} onChange={this.handleChange}/>
                            </div>
                            <div className="input-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text">Przykład fr</span>
                                </div>
                                <textarea className="form-control" aria-label="With textarea" name='example_fr_1'
                                          value={example_fr_1} onChange={this.handleChange}/>
                            </div>
                        </div>
                        <button type='submit' className='btn btn-outline-success'>Zapisz</button>
                    </form>
                    <div className='btn_edit'>
                        {idCheck &&
                        <button onClick={this.handleEdit} className="btn btn-outline-danger">Anuluj</button>}
                    </div>
                    <ul className='verbs_list'>
                        {sortedVerbs.map(el => (
                                <li key={el.id}>
                                    {el.verb_fr}
                                    <div key={el.id}>
                                        {idCheck ? null :
                                            <button id={el.id} onClick={this.handleEdit} type='button'
                                                    className='btn btn-outline-primary'>Zmień</button>}
                                        <button id={el.id} onClick={this.handleDelete} type='button'
                                                className='btn btn-outline-danger'>Usuń</button>
                                    </div>
                                </li>
                            )
                        )
                        }
                    </ul>
                </div>
            </>


        )
    }
}

export default AdminPage;