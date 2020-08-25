import React, { Component } from 'react'; 
import FormList from '../FormList/formList';

class MainForm extends Component {
    render() {
        
        return (
            <form className="main__form">
                <h2>Customize your laptop</h2>
                <FormList {...this.props} />
            </form>
        )
    }
}

export default MainForm;