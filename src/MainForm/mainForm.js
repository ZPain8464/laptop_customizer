import React, { Component } from 'react'; 
import FormList from '../FormList/formList';
import FormOptions from '../FormOptions/formOptions';

class MainForm extends Component {
    render() {
        return (
            <form className="main__form">
                <h2>Customize your laptop</h2>
                <FormList
                selectedItem={this.state}
                featureItems={this.props.features}/>
            </form>
        )
    }
}

export default MainForm;