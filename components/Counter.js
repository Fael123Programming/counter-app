import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {counter: 0};
    }

    incrementCounter = () => this.setState({counter: this.state.counter + 1});   

    decrementCounter = () => this.setState({counter: this.state.counter - 1});

    render() {
        return <View style={styles.container}>
            <Text style={styles.title}>Counter App</Text>
            <Text style={styles.counter}>{this.state.counter}</Text>
            <TouchableOpacity
                style={styles.button}
                onPress={this.incrementCounter}
            >
                <Text style={styles.symbol}>+</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.button}
                onPress={this.decrementCounter}
            >
                <Text style={styles.symbol}>-</Text>
            </TouchableOpacity>
        </View>
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontWeight: 'bold',
        fontSize: 40,
        marginTop: '-50%',
        marginBottom: '50%'
    },
    button: {
        width: .5 * Dimensions.get('window').width,
        height: .05 * Dimensions.get('window').height,
        backgroundColor: 'blue',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: '2%',
    },
    symbol: {
        color: 'white',
        fontSize: 30
    },
    counter: {
        fontWeight: 'bold',
        fontSize: 40,
        marginVertical: '10%'
    }
});

export default Counter;