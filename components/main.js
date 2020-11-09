import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-elements';
import * as actionTypes from '../redux/actionTypes';
import { connect } from 'react-redux';
import { addUserInfo } from '../redux/actionCreators';

const mapStateToProps = (state) => {
    return {
        fName: state.firstName,
        lName: state.lastName,
        email: state.email,
        pwd: state.pwd,
        contact: state.contact
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addUserInfo: (fName, lName, email, pwd, contact) => dispatch(addUserInfo(fName, lName, email, pwd, contact))
    }
}
class Main extends Component {
    constructor(props) {
        super(props);

    }


    render() {
        console.log(this.props);
        this.props.addUserInfo('harsh', 'bawari', 'harshbawari@gmail.com', 'harshbawari', '1234567890');
        console.log(this.props);
        return (
            < View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>{Object.values(this.props)}</Text>
            </View >
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);