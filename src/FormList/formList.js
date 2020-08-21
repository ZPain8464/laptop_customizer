import React, { Component } from 'react';
import FormOptions from '../FormOptions/formOptions';

class FormList extends Component {
    render() {
        const features = Object.keys(this.props.featureItems).map((feature, idx) => {
            const featureHash = feature + '-' + idx;
            console.log(this.state)
            return (
                <fieldset className="feature" key={featureHash}>
                <legend className="feature__name">
                    <h3>{feature}</h3>
                </legend>
                <FormOptions 
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
