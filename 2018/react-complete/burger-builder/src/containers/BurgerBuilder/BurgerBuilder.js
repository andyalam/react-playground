import React, { Component, Fragment } from 'react';

import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
};

class BurgerBuilder extends Component {
    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice: 4,
        purchaseable: false
    }

    updatePurchaseState (ingredients) {
        const sum = Object.keys(ingredients)
            .map(key => ingredients[key])
            .reduce((sum, number) => sum + number, 0);
        this.setState({ purchaseable: sum > 0 });
    }

    addIngredientHandler = (type) => {
        // count
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;
        // price
        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;
        // state
        this.setState({
            ingredients: updatedIngredients,
            totalPrice: newPrice
        });
        this.updatePurchaseState(updatedIngredients);
    }

    removeIngredientHandler = (type) => {
        // count
        const oldCount = this.state.ingredients[type];
        if (oldCount <= 0) {
            return;
        }
        const updatedCount = oldCount - 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;
        // price
        const priceDeduction = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceDeduction;
        // state
        this.setState({
            ingredients: updatedIngredients,
            totalPrice: newPrice
        });
        this.updatePurchaseState(updatedIngredients);
    }

    render() {
        const disabledInfo = {
            ...this.state.ingredients
        };
        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0;
        }

        return (
            <Fragment>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls
                    purchaseable={this.state.purchaseable}
                    price={this.state.totalPrice}
                    ingredientAdded={this.addIngredientHandler}
                    ingredientRemoved={this.removeIngredientHandler}
                    disabled={disabledInfo} />
            </Fragment>
        );
    }
}

export default BurgerBuilder;