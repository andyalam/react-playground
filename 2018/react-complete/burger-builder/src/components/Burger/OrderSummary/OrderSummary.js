import React, { Fragment } from 'react';

const orderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients)
        .map(igKey => (
            <li key={igKey}>
                <span style={{textTransform: 'capitalize'}}>
                    {igKey}
                </span>
                : {props.ingredients[igKey]}
            </li>
        ));
    
    return (
        <Fragment>
            <h3>Your Order</h3>
            <p>A delciious burger with the following ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p>Continue to Checkout?</p>
            <button>CANCEL></button>
            <button>CONTINUE></button>
        </Fragment>
    )
};

export default orderSummary;