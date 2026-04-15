
import { useGlobalSearchParams, useLocalSearchParams } from 'expo-router';
import { StyleSheet, View } from "react-native";

export default function StudentDetails() {

    const glob = useGlobalSearchParams();
    const local = useLocalSearchParams();

    const students = [
        { id: "1", name: "Juan Perez", career: "Ingenieria en sistemas", semester: "Semestre 5", email: "Juanperez@gmail.com", photo: "https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png" },
        { id: "2", name: "Maria Gomez", career: "Ingenieria industrial", semester: "Semestre 3", email: "Mariagomez@gmail.com", photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXSTblEVkkdJh15jlAbC3FpvuzCKb1o-pQQA&s" },
        { id: "3", name: "Carlos Sanchez", career: "Ingenieria en sistemas", semester: "Semestre 8", email: "Carlossanchez@gmail.com", photo: "https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png" },
    ];
    const student = students.find(s => s.id === local.id);

    return <View style={styles.container}>
        <h1>Detalles del estudiante</h1>
        <p>Aquí se mostrarán los detalles del estudiante seleccionado.</p>
        <label>ID del estudiante: {student?.id}</label>
        <label>Nombre del estudiante: {student?.name}</label>
        <label>Carrera del estudiante: {student?.career}</label>
        <label>Semestre del estudiante: {student?.semester}</label>
        <label>Email del estudiante: {student?.email}</label>
    </View>
}
const styles = StyleSheet.create({
    container: {
        padding: 20,
        paddingBottom: 40,
        backgroundColor: "#f5f7fb",
    }
});

