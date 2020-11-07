import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-elements';
import * as actionTypes from '../redux/actionTypes';
import { connect } from 'react-redux';
import { increment, decrement } from '../redux/actionCreators';

const mapStateToProps = (state) => {
    return {
        val: state.val
    }
};

function mapDispatchToProps(dispatch) {
    return {
        increment: () => {
            dispatch({ type: actionTypes.INCREMENT, payload: 1 })
        },
        decrement: () => {
            dispatch({ type: actionTypes.DECREMENT, payload: 1 })
        }
    }
}
class Main extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        console.log(this.props);
        return (
            < View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ fontSize: 40 }}>{this.props.val}</Text>
                <Button
                    titleStyle={{ fontSize: 25 }}
                    title='Increment Value'
                    onPress={() => { this.props.increment() }}
                />

                <Button
                    titleStyle={{ fontSize: 25 }}
                    title='Decrement Value'
                    onPress={() => this.props.decrement()}
                />
            </View >
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);