import React, { Component } from 'react';
import FEATURES from '../Features/Features';
import FormOptions from '../FormOptions/formOptions';

class FormList extends Component {
    render() {
        const featuresRender = Object.keys(FEATURES).map((feature, idx) => {
            const featureHash = feature + '-' + idx;
            return (
                <fieldset className="feature" key={featureHash}>
                <legend className="feature__name">
                    <h3>{feature}</h3>
                </legend>
                <FormOptions 
                {...this.props}
                feature={feature}
                />
                </fieldset>
            )
            });
            
        return (
            <>
            <div>
                {featuresRender}
            </div>
            </>
        )
    }
}


export default FormList;
