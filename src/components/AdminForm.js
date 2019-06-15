import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';

class AdminFormVerb extends Component{

    render() {
        const {prefix, onChangeMethod, name, value} = this.props;
        return (
            <div className="input-group input-group-lg">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="inputGroup-sizing-lg">{prefix}</span>
                </div>
                <input required type="text" className="form-control" aria-label="Sizing example input"
                       aria-describedby="inputGroup-sizing-lg" name={name}
                       value={value.match("[^a-zA-Ząęłćśńóśżźêâîôûëïüàèùéç]*$") ?
                           value.replace(/[^a-zA-Ząęłćśńóśżźêâîôûëïüàèùéç]*$/g, "") :
                           value}
                       onChange={onChangeMethod}/>
            </div>
        )
    }
}

class AdminFormUrl extends Component {

    render() {
        const {prefix, onChangeMethod, name, value} = this.props;
        return (
            <div className="input-group input-group-lg">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="inputGroup-sizing-lg">{prefix}</span>
                </div>
                <input type="text" className="form-control" aria-label="Sizing example input"
                       aria-describedby="inputGroup-sizing-lg" name={name} value={value} onChange={onChangeMethod}/>
            </div>
        )
    }

}

class AdminFormExample extends Component {

    render() {
        const {prefix, onChangeMethod, name, value} = this.props;
        return (
            <div className="input-group">
                <div className="input-group-prepend">
                    <span className="input-group-text">{prefix}</span>
                </div>
                <textarea className="form-control" aria-label="With textarea" name={name}
                          value={value} onChange={onChangeMethod}/>
            </div>
        )
    }
}

export {AdminFormVerb, AdminFormUrl, AdminFormExample}