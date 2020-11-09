import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-elements';
import * as actionTypes from '../redux/actionTypes';
import { connect } from 'react-redux';
import { incrementAsync, decrement } from '../redux/actionCreators';

const mapStateToProps = (state) => {
    return {
        val: state.val
    }
}

function mapDispatchToProps(dispatch) {
    return {
        increment: (pl) => dispatch(incrementAsync(pl)),
        decrement: (pl) => dispatch(decrement(pl))
    }
}
class Main extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            < View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ fontSize: 40 }}>{this.props.val}</Text>
                <View style={{ flexDirection: 'row' }}>
                    <View style={{ marginRight: 30, width: 200 }}>
                        <Button
                            style={{ flex: 1 }}
                            titleStyle={{ fontSize: 20 }}
                            title='IncrementAsync Value'
                            onPress={() => this.props.increment(1)}
                        />
                    </View>
                    <View style={{ marginLeft: 30, width: 200 }}>
                        <Button
                            titleStyle={{ fontSize: 20 }}
                            title='Decrement Value'
                            onPress={() => this.props.decrement(1)}
                        />
                    </View>
                </View>
            </View >
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);