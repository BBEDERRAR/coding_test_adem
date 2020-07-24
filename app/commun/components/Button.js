import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';


const Button = props => {
    const {
        containerStyle,
        textStyle,
        onPress,
        children,
    } = props;
    return (
        <TouchableOpacity onPress={onPress} style={[styles.containerStyle, containerStyle]}>
            <Text style={[styles.textStyle, textStyle]}>{children}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 12,
        fontWeight: 'bold',
        color: '#FFFFFF',
    },
    containerStyle: {
        width: '100%',
        backgroundColor: '#6B9DFE',
        borderRadius: 12,
        marginBottom:5,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical:12,

    },
});


export default Button;
