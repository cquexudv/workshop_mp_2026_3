import StudentRow from "@/components/Students/StudentRow";
import { router } from "expo-router";
import { FlatList, StyleSheet, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function StudentsLayout() {


    const students = [
        { id: "1", name: "Juan Perez", career: "Ingenieria en sistemas", semester: "Semestre 5", email: "Juanperez@gmail.com", photo: "https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png" },
        { id: "2", name: "Maria Gomez", career: "Ingenieria industrial", semester: "Semestre 3", email: "Mariagomez@gmail.com", photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXSTblEVkkdJh15jlAbC3FpvuzCKb1o-pQQA&s" },
        { id: "3", name: "Carlos Sanchez", career: "Ingenieria en sistemas", semester: "Semestre 8", email: "Carlossanchez@gmail.com", photo: "https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png" },
    ];

    return <SafeAreaView style={styles.safeArea} edges={["top"]}>
        <FlatList
            style={styles.container}
            contentContainerStyle={styles.contentContainer}
            contentInsetAdjustmentBehavior="automatic"
            data={students}
            keyExtractor={(item) => item.id}
            ListHeaderComponent={<Text style={styles.title}>Listado de estudiantes</Text>}
            renderItem={({ item }) => (
                <TouchableOpacity onPress={() => router.push(`/students/${item.id}`)}>
                    <StudentRow student={item} />
                </TouchableOpacity>
            )}
        />
    </SafeAreaView>
};

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: "#f5f7fb",
    },
    container: {
        flex: 1,
        backgroundColor: "#f5f7fb",
    },
    contentContainer: {
        padding: 20,
        paddingBottom: 40,
    },
    title: {
        fontSize: 24,
        fontWeight: "700",
        marginBottom: 16,
        color: "#111827",
    }
});
