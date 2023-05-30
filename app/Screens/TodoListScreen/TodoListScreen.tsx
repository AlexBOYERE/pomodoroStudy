import {View, Text, StyleSheet} from "react-native";
import {Link} from "expo-router";

export default function TodoListScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Todo List</Text>
            <Text style={styles.subtitle}>This is the todo list page of your app.</Text>
            <Link href="/">
                Go back
            </Link>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        padding: 24,
    },
    title: {
        fontSize: 64,
        fontWeight: "bold",
    },
    subtitle: {
        fontSize: 36,
        color: "#38434D",
    },
});