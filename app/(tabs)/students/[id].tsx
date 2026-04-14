
import { StyleSheet, View } from "react-native";
export default function StudentDetails() {
    return <View style={styles.container}>
        <h1>Detalles del estudiante</h1>
        <p>Aquí se mostrarán los detalles del estudiante seleccionado.</p>
    </View>
}
const styles = StyleSheet.create({
    container: {
        padding: 20,
        paddingBottom: 40,
        backgroundColor: "#f5f7fb",
    }
});

