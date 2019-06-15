import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import {AdminFormVerb, AdminFormUrl, AdminFormExample} from "./AdminForm";
import {BackToMainPage} from "./LinksIcons";

const MySwal = withReactContent(Swal);

class AdminPage extends Component {

    state = {
        id: '',
        idCheck: false,
        verbs: "",
        verb_pl: "",
        verb_fr: "",
        i_fr: "",
        you_fr: "",
        he_she_it_fr: "",
        we_fr: "",
        you_plural_fr: "",
        they_fr: "",
        past_fr: "",
        verb_Url: "",
        i_Url: "",
        you_Url: "",
        he_she_it_Url: "",
        we_Url: "",
        you_plural_Url: "",
        they_Url: "",
        past_Url: "",
        example_pl_1: "",
        example_fr_1: ""
    };

    formClear = () => {
        this.setState({
            verb_pl: "",
            verb_fr: "",
            i_fr: "",
            you_fr: "",
            he_she_it_fr: "",
            we_fr: "",
            you_plural_fr: "",
            they_fr: "",
            past_fr: "",
            verb_Url: "",
            i_Url: "",
            you_Url: "",
            he_she_it_Url: "",
            we_Url: "",
            you_plural_Url: "",
            they_Url: "",
            past_Url: "",
            example_pl_1: "",
            example_fr_1: ""
        })
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
                            verb_pl: verb_pl.toLowerCase(),
                            verb_fr: verb_fr.toLowerCase(),
                            i_fr: i_fr.toLowerCase(),
                            you_fr: you_fr.toLowerCase(),
                            he_she_it_fr: he_she_it_fr.toLowerCase(),
                            we_fr: we_fr.toLowerCase(),
                            you_plural_fr: you_plural_fr.toLowerCase(),
                            they_fr: they_fr.toLowerCase(),
                            past_fr: past_fr.toLowerCase(),
                            verb_Url: verb_Url,
                            i_Url: i_Url,
                            you_Url: you_Url,
                            he_she_it_Url: he_she_it_Url,
                            we_Url: we_Url,
                            you_plural_Url: you_plural_Url,
                            they_Url: they_Url,
                            past_Url: past_Url,
                            example_pl_1: example_pl_1,
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
                            });
                            this.formClear();
                            this.pageUpdate();
                        })
                }
            })


        } else {
            fetch('http://localhost:3000/verbs', {
                method: 'post',
                body: JSON.stringify({
                    verb_pl: verb_pl.toLowerCase(),
                    verb_fr: verb_fr.toLowerCase(),
                    i_fr: i_fr.toLowerCase(),
                    you_fr: you_fr.toLowerCase(),
                    he_she_it_fr: he_she_it_fr.toLowerCase(),
                    we_fr: we_fr.toLowerCase(),
                    you_plural_fr: you_plural_fr.toLowerCase(),
                    they_fr: they_fr.toLowerCase(),
                    past_fr: past_fr.toLowerCase(),
                    verb_Url: verb_Url,
                    i_Url: i_Url,
                    you_Url: you_Url,
                    he_she_it_Url: he_she_it_Url,
                    we_Url: we_Url,
                    you_plural_Url: you_plural_Url,
                    they_Url: they_Url,
                    past_Url: past_Url,
                    example_pl_1: example_pl_1,
                    example_fr_1: example_fr_1
                }),

                headers: {
                    "Content-Type": "application/json"
                }
            }).then(resp => resp.json())
                .then(resp => {
                    console.log(resp);
                    this.formClear();
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
                });
                this.formClear();

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
                            <AdminFormVerb name='verb_pl' prefix='PL' value={verb_pl} onChangeMethod={this.handleChange}/>
                            <AdminFormVerb name='verb_fr' prefix='FR' value={verb_fr} onChangeMethod={this.handleChange}/>
                            <AdminFormVerb name='i_fr' prefix='je' value={i_fr} onChangeMethod={this.handleChange}/>
                            <AdminFormVerb name='you_fr' prefix='tu' value={you_fr} onChangeMethod={this.handleChange}/>
                            <AdminFormVerb name='he_she_it_fr' prefix='il/elle' value={he_she_it_fr} onChangeMethod={this.handleChange}/>
                            <AdminFormVerb name='we_fr' prefix='nous' value={we_fr} onChangeMethod={this.handleChange}/>
                            <AdminFormVerb name='you_plural_fr' prefix='vous' value={you_plural_fr} onChangeMethod={this.handleChange}/>
                            <AdminFormVerb name='they_fr' prefix='ils/elles' value={they_fr} onChangeMethod={this.handleChange}/>
                            <AdminFormVerb name='past_fr' prefix='p. passé' value={past_fr} onChangeMethod={this.handleChange}/>
                        </div>

                        <div className='url_box'>
                            <AdminFormUrl name='verb_Url' prefix='Url FR' value={verb_Url} onChangeMethod={this.handleChange}/>
                            <AdminFormUrl name='i_Url' prefix='Url je' value={i_Url} onChangeMethod={this.handleChange}/>
                            <AdminFormUrl name='you_Url' prefix='Url tu' value={you_Url} onChangeMethod={this.handleChange}/>
                            <AdminFormUrl name='he_she_it_Url' prefix='Url il' value={he_she_it_Url} onChangeMethod={this.handleChange}/>
                            <AdminFormUrl name='we_Url' prefix='Url nous' value={we_Url} onChangeMethod={this.handleChange}/>
                            <AdminFormUrl name='you_plural_Url' prefix='Url vous' value={you_plural_Url} onChangeMethod={this.handleChange}/>
                            <AdminFormUrl name='they_Url' prefix='Url ils' value={they_Url} onChangeMethod={this.handleChange}/>
                            <AdminFormUrl name='past_Url' prefix='Url p.p.' value={past_Url} onChangeMethod={this.handleChange}/>
                        </div>

                        <div className='textarea_box'>
                            <AdminFormExample name='example_pl_1' prefix='Przykład pl' value={example_pl_1} onChangeMethod={this.handleChange}/>
                            <AdminFormExample name='example_fr_1' prefix='Przykład fr' value={example_fr_1} onChangeMethod={this.handleChange}/>
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
                                            <>
                                            <button id={el.id} onClick={this.handleEdit} type='button'
                                                    className='btn btn-outline-primary'>Zmień</button>
                                            <button id={el.id} onClick={this.handleDelete} type='button'
                                            className='btn btn-outline-danger'>Usuń</button>
                                            </>
                                        }

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