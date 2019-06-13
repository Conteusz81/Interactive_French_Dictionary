import React, {Component} from "react";
import {Link} from "react-router-dom";
import {library} from '@fortawesome/fontawesome-svg-core'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faFileUpload, faArrowCircleLeft} from '@fortawesome/free-solid-svg-icons'
import {fab} from '@fortawesome/free-brands-svg-icons'

library.add(fab, faFileUpload, faArrowCircleLeft);

class LinksIcons extends Component {
    render() {
        return (
            <>
                <Link to='/admin' title='Dodaj nowy'>
                    <FontAwesomeIcon className='upload' icon="file-upload"/>
                </Link>
                <a href='https://www.facebook.com/FRANKOmania-Olivii-Migda%C5%82-1654258518129748/?epa=SEARCH_BOX'
                   title='Przejdź do strony'>
                    <FontAwesomeIcon className='facebook_link' icon={['fab', 'facebook-square']}/>
                </a>
            </>
        )
    }

}

class BackToMainPage extends Component {
    render() {
        return (
            <>
                <Link to='/' title='Wstecz'>
                    <FontAwesomeIcon className='back_to_main' icon='arrow-circle-left'/>
                </Link>
                </>
        )
    }
}

export {LinksIcons, BackToMainPage};
