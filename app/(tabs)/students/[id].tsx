
import { useLocalSearchParams } from 'expo-router';
import { ScrollView, StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function StudentDetails() {

    const local = useLocalSearchParams();

    const students = [
        { id: "1", name: "Juan Perez", career: "Ingenieria en sistemas", semester: "Semestre 5", email: "Juanperez@gmail.com", photo: "https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png" },
        { id: "2", name: "Maria Gomez", career: "Ingenieria industrial", semester: "Semestre 3", email: "Mariagomez@gmail.com", photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXSTblEVkkdJh15jlAbC3FpvuzCKb1o-pQQA&s" },
        { id: "3", name: "Carlos Sanchez", career: "Ingenieria en sistemas", semester: "Semestre 8", email: "Carlossanchez@gmail.com", photo: "https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png" },
    ];
    const student = students.find(s => s.id === local.id);

    return <SafeAreaView style={styles.safeArea} edges={["top"]}>
        <ScrollView
            style={styles.scrollView}
            contentContainerStyle={styles.container}
            contentInsetAdjustmentBehavior="automatic">
            <Text style={styles.title}>Detalles del estudiante</Text>
            <Text style={styles.description}>Aqui se muestran los detalles del estudiante seleccionado.</Text>
            <Text style={styles.detail}>ID del estudiante: {student?.id}</Text>
            <Text style={styles.detail}>Nombre del estudiante: {student?.name}</Text>
            <Text style={styles.detail}>Carrera del estudiante: {student?.career}</Text>
            <Text style={styles.detail}>Semestre del estudiante: {student?.semester}</Text>
            <Text style={styles.detail}>Email del estudiante: {student?.email}</Text>
        </ScrollView>
    </SafeAreaView>
}
const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: "#f5f7fb",
    },
    scrollView: {
        flex: 1,
    },
    container: {
        padding: 20,
        paddingBottom: 40,
        backgroundColor: "#f5f7fb",
    },
    title: {
        fontSize: 24,
        fontWeight: "700",
        marginBottom: 8,
        color: "#111827",
    },
    description: {
        fontSize: 14,
        color: "#4b5563",
        marginBottom: 16,
    },
    detail: {
        fontSize: 16,
        color: "#111827",
        marginBottom: 10,
    }
});
