import {View, Text, Button, StyleSheet} from "react-native";
import CountDownComponent from "../../Components/CountDownComponent/CountDownComponent";
import { Entypo } from "@expo/vector-icons";
import React from "react";
import { PomodoroStudyButton } from "../../Components/PomodoroStudyButton/PomodoroStudyButton";

export default function PomodoroScreen() {
    return (
        <View style={styles.container}>
            <Text>Be focus</Text>
            <PomodoroStudyButton>
                <Entypo name="chevron-right" size={24} color="white" />
            </PomodoroStudyButton>
            <CountDownComponent/>
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
    button: {
        backgroundColor: "#000",
        padding: 20,
        borderRadius: 5,
        marginTop: 20,
    },
    buttonText: {
        fontSize: 20,
        color: "#fff",
    },
});