import React, { Component } from 'react';
import slugify from 'slugify';

const USCurrencyFormat = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  });

class FormOptions extends Component {
    render() {
        const feature = this.props.feature
        const options = this.props.featureOptions[feature].map(item => {
            const itemHash = slugify(JSON.stringify(item));
            return (
                <div key={itemHash} className="feature__item">
                  <input
                    type="radio"
                    id={itemHash}
                    className="feature__option"
                    name={slugify(feature)}
                    checked={item.name === this.props.selectedItems[feature].name}
                    onChange={(e) => this.props.updateFeature(this.props.selectedItems[feature].name, item, e)}
                    
                    
                  />
                  <label htmlFor={itemHash} className="feature__label">
                    {item.name} ({USCurrencyFormat.format(item.cost)})
                  </label>
                </div>
              );
        })
        return (
            <div>
                {options}
            </div>
        )
    }
}

export default FormOptions;
// checked={item.name === this.props.selectedItems[feature].name}
// onChange={e => this.props.updateFeature(e.target.value)}
