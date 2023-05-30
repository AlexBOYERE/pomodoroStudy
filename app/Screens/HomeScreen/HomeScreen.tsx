import {View, Text, StyleSheet, Image} from "react-native";
import React from "react";
import {Link} from "expo-router";
import LottieView from "lottie-react-native";

export default function HomeScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Bienvenue, dans mon Pomodoro!</Text>
            <LottieView style={styles.banner} source={require('./animation.json')} autoPlay loop />
            <Link href="/Screens/PomodoroScreen/PomodoroScreen">
                Go to the todolist
            </Link>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        padding: 24,
        backgroundColor: "#191921",
    },
    title: {
        fontSize: 26,
        color: "#fff",
        fontWeight: "bold",
        marginTop: 25,
        marginBottom: 100,
    },
    banner: {
        width: 300,
        marginBottom: 10,
    },
});