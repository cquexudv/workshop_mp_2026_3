import StudentRow from "@/components/Students/StudentRow";
import { router } from "expo-router";
import { FlatList, ScrollView, StyleSheet, TouchableOpacity } from "react-native";
export default function StudentsLayout() {

    const students = [
        { id: "1", name: "Juan Perez", career: "Ingenieria en sistemas", semester: "Semestre 5", email: "Juanperez@gmail.com", photo: "https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png" },
        { id: "2", name: "Maria Gomez", career: "Ingenieria industrial", semester: "Semestre 3", email: "Mariagomez@gmail.com", photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXSTblEVkkdJh15jlAbC3FpvuzCKb1o-pQQA&s" },
        { id: "3", name: "Carlos Sanchez", career: "Ingenieria en sistemas", semester: "Semestre 8", email: "Carlossanchez@gmail.com", photo: "https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png" },
    ];

    return <ScrollView style={styles.container}>
        <h1>Listado de estudiantes</h1>
        <FlatList data={students} keyExtractor={(item) => item.id} renderItem={({ item }) => (
            <TouchableOpacity onPress={() => router.push(`/students/${item.id}`)}>
                <StudentRow student={item} />
            </TouchableOpacity>
        )} />
    </ScrollView>
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
        paddingBottom: 40,
        backgroundColor: "#f5f7fb",
    }
});
