import React, { Component } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, SafeAreaView, Image } from "react-native";
import downArrow from '../img/icons8-ios-filled-50.png'


export default class Accordian extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: props.data,
            expanded: false,
        }
    }

    render() {

        return (
            <SafeAreaView>
                <View >
                    <View >
                        <TouchableOpacity  onPress={() => this.toggleExpand()}>
                            <Image source={downArrow} style={{tintColor: '#e9e9e9'}} />
                        </TouchableOpacity>
                        <View />
                        {
                            this.state.expanded &&
                            <View>
                                <Text>{this.props.data}</Text>
                            </View>
                        }
                    </View>
                </View>
            </SafeAreaView>
        )
    }

    toggleExpand = () => {
        this.setState({ expanded: !this.state.expanded })
    }

}

const styles = StyleSheet.create({
    tudo: {
        backgroundColor: '#2A3A3B',
    },
    tudo2: {
        marginBottom: 15,
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#EB4A5F',
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 70,
        paddingLeft: 50,
        marginTop: 10,
        alignItems: 'center',
        backgroundColor: 'white',
        borderColor: '#EB4A5F',
        borderWidth: 2,
        borderRadius: 10,
        width: '100%',
    },
    parentHr: {
        height: 0,
        color: 'black',
        width: '100%'
    },
    child: {
        backgroundColor: '#D3D3D3',
        padding: 16,
        width: '100%',
    },
    crianca: {
        fontSize: 18,
        paddingBottom: 10
    }

});