import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Pressable, StyleSheet, Button, Alert , Text, View } from 'react-native';

const App = () => {
    const [timesPressed, setTimesPressed] = useState(0);
    const [count, setCount] = useState(0);

    const onPressBtn = () => setCount(count => count+1);
    let textLog = '';
    if (timesPressed > 1) {
        textLog = timesPressed + 'x onPress';
    } else if (timesPressed > 0) {
        textLog = 'onPress';
    }
    const Separator = () => (
        <View style={styles.separator} />
    );
    return (
        <View style={styles.container}>
        <Text>count: {count}</Text>
        <Button
        title="Press Me !"
        color="#f194ff"
        onPress={onPressBtn}
        />
        <Separator />
        <Pressable
        onPress={() => {
            setTimesPressed((current) => current + 1);
        }}
        style={({ pressed }) => [
            {
                backgroundColor: pressed
                ? 'rgb(210, 230, 255)'
                : 'rgb(123, 120, 255)'
            },
            styles.wrapperCustom
        ]}>
        {({ pressed }) => (
            <Text style={styles.text}>
            {pressed ? 'Pressed!' : 'Press Me'}
            </Text>
        )}
        </Pressable>
        <View style={styles.logBox}>
        <Text testID="pressable_press_console">{textLog}</Text>
        </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
    },
    text: {
        fontSize: 16
    },
    wrapperCustom: {
        borderRadius: 8,
        padding: 6
    },
    separator: {
        marginVertical: 8,
        borderBottomColor: '#737373',
        borderBottomWidth: StyleSheet.hairlineWidth,
    },  title: {
        textAlign: 'center',
        marginVertical: 8,
    },
    fixToText: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    }, 
    logBox: {
        padding: 20,
        margin: 10,
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: '#f0f0f0',
        backgroundColor: '#f9f9f9'
    }
});

export default App;
