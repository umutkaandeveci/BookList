import React, {Component} from "react";
import { View, Text, StyleSheet } from "react-native";

class Banner extends Component{
    render() {
        const { textBanner, bannerContainer } = styles;
        return(
            <View style={bannerContainer}>
                <Text style={textBanner}> {this.props.text} </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    bannerContainer: {
        width: 'auto',
        height: 80,
        backgroundColor: 'gray',
        justifyContent: 'center',
        alignItems: 'center'
    },
    textBanner: {
        fontSize: 25,
        color: '#fff'
    }
})

export {Banner}