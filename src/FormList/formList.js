import React, { Component } from 'react';
import FormOptions from '../FormOptions/formOptions';

class FormList extends Component {
    render() {
        const features = Object.keys(this.props.featureItems).map((feature, idx) => {
            const featureHash = feature + '-' + idx;
            return (
                <fieldset className="feature" key={featureHash}>
                <legend className="feature__name">
                    <h3>{feature}</h3>
                </legend>
                <FormOptions 
                updateFeature={this.props.updateFeature}
                selectedItems={this.props.selectedItems}
                feature={feature}
                featureOptions={this.props.featureItems}/>
                </fieldset>
            )
            });
            
        return (
            <>
            <div>
                {features}
            </div>
            </>
        )
    }
}


export default FormList;
