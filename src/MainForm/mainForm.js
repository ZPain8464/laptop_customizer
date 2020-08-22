import React, { Component } from 'react'; 
import FormList from '../FormList/formList';
import FormOptions from '../FormOptions/formOptions';

class MainForm extends Component {
    render() {
        console.log(this.props.updateFeature)
        return (
            <form className="main__form">
                <h2>Customize your laptop</h2>
                <FormList
                updateFeature={this.props.updateFeature}
                selectedItems={this.props.selectedItems}
                featureItems={this.props.features}/>
            </form>
        )
    }
}

export default MainForm;