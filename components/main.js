import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Input, Button, Card, Icon } from 'react-native-elements';
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

        this.state = {
            fName: '',
            lName: '',
            email: '',
            pwd: '',
            contact: ''
        }
    }

    handleChange(e) {

    }


    render() {
        return (
            < View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Card containerStyle={{ width: 400 }}>
                    <Card.Title>Enter your information</Card.Title>
                    <Card.Divider />
                    <View style={{ flexDirection: 'row' }}>
                        <Input
                            value={this.state.fName}
                            containerStyle={{ width: 150 }}
                            placeholder='First Name'
                            onChangeText={(value) => this.setState({ fName: value })}
                        />
                        <Input
                            value={this.state.lName}
                            containerStyle={{ width: 150 }}
                            placeholder='Last Name'
                            onChangeText={(value) => this.setState({ lName: value })}
                        />
                    </View>
                    <Input
                        value={this.state.email}
                        placeholder='Email'
                        onChangeText={(value) => this.setState({ email: value })}
                    />
                    <Input
                        value={this.state.pwd}
                        placeholder='Password'
                        onChangeText={(value) => this.setState({ pwd: value })}
                    />
                    <Input
                        value={this.state.contact}
                        placeholder='Contact'
                        onChangeText={(value) => this.setState({ contact: value })}
                    />
                    <Card.Divider />
                    <Button
                        title='Submit'
                        onPress={(event) => {
                            this.props.addUserInfo(this.state.fName, 'bawari', 'harshu@gmail', 'harshu', '123456');
                            console.log(this.props);
                            this.setState({ fName: '', lName: '', email: '', pwd: '', contact: '' });
                        }}
                    />
                </Card>
            </View >
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);