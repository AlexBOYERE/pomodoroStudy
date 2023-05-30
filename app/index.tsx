import {StyleSheet, Text, View} from "react-native";
import {Link} from "expo-router";
import HomeScreen from "./Screens/HomeScreen/HomeScreen";

export default function App() {
    return (
        <View style={styles.container}>
            <HomeScreen/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});
