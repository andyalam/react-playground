import React, { Component } from 'react';
import { connect } from 'react-redux';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

import {
    onIncrementCount,
    onDecrementCount,
    onAddCount,
    onSubtractCount,
    onStoreResult,
    onDeleteResult
} from '../../store/actions';

class Counter extends Component {
    state = {
        counter: 0
    }

    counterChangedHandler = ( action, value ) => {
        switch ( action ) {
            case 'inc':
                this.setState( ( prevState ) => { return { counter: prevState.counter + 1 } } )
                break;
            case 'dec':
                this.setState( ( prevState ) => { return { counter: prevState.counter - 1 } } )
                break;
            case 'add':
                this.setState( ( prevState ) => { return { counter: prevState.counter + value } } )
                break;
            case 'sub':
                this.setState( ( prevState ) => { return { counter: prevState.counter - value } } )
                break;
        }
    }

    render () {
        return (
            <div>
                <CounterOutput value={this.props.counter} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCount} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCount}  />
                <CounterControl label="Add 5" clicked={() => this.props.onAddCount(5)}  />
                <CounterControl label="Subtract 5" clicked={() => this.props.onSubtractCount(5)}  />
                <hr />
                <button onClick={this.props.onStoreResult}>Store Result</button>
                <ul>
                    {this.props.results.map((result) => <li
                            key={result.id}
                            onClick={this.props.onDeleteResult}>
                            {result.value}
                        </li>
                    )}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        counter: state.counter,
        results: state.results
    };
};

export default connect(
    mapStateToProps,
    {
        onIncrementCount,
        onDecrementCount,
        onAddCount,
        onSubtractCount,
        onStoreResult,
        onDeleteResult
    }
)(Counter);