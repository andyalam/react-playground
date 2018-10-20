import React, { Component } from 'react';
import { connect } from 'react-redux';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

import {
    increment,
    decrement,
    add,
    subtract,
    storeResult,
    deleteResult
} from '../../store/actions/actions';

class Counter extends Component {
    state = {
        counter: 0
    }

    render () {
        return (
            <div>
                <CounterOutput value={this.props.counter} />
                <CounterControl label="Increment" clicked={this.props.increment} />
                <CounterControl label="Decrement" clicked={this.props.decrement}  />
                <CounterControl label="Add 5" clicked={() => this.props.add(5)}  />
                <CounterControl label="Subtract 5" clicked={() => this.props.subtract(5)}  />
                <hr />
                <button onClick={() => this.props.storeResult(this.props.counter)}>Store Result</button>
                <ul>
                    {this.props.results.map((result) => <li
                            key={result.id}
                            onClick={() => this.props.deleteResult(result.id)}>
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
        counter: state.counter.counter,
        results: state.result.results
    };
};

export default connect(
    mapStateToProps,
    {
        increment,
        decrement,
        add,
        subtract,
        storeResult,
        deleteResult
    }
)(Counter);