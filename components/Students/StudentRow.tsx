
import { StyleSheet, Text, View } from "react-native";
export default function StudentRow({ student }: { student: { id: string, name: string, career: string, semester: string, email: string, photo: string } }) {
    return <View key={student.id} style={styles.summaryCard}>
        <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 12 }}>
            <View style={{ width: 48, height: 48, borderRadius: 24, backgroundColor: "#e2e8f0", marginRight: 12, overflow: "hidden" }}>
                <img src={student.photo} alt={student.name} style={{ width: "100%", height: "100%" }} />
            </View>
            <View>
                <Text>{student.name}</Text>
                <Text>{student.career} - {student.semester}</Text>
                <Text>{student.email}</Text>
            </View>
        </View>
    </View>
}



const styles = StyleSheet.create({
    container: {
        padding: 20,
        paddingBottom: 40,
        backgroundColor: "#f5f7fb",
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 8,
    },
    subtitle: {
        fontSize: 14,
        color: "#4b5563",
        marginBottom: 24,
        lineHeight: 20,
    },
    label: {
        fontSize: 16,
        fontWeight: "600",
        marginBottom: 8,
        color: "#111827",
    },
    input: {
        borderWidth: 1,
        borderColor: "#cbd5e1",
        backgroundColor: "#ffffff",
        borderRadius: 12,
        padding: 14,
        marginBottom: 18,
    },
    selectContainer: {
        borderWidth: 1,
        borderColor: "#cbd5e1",
        backgroundColor: "#ffffff",
        borderRadius: 12,
        marginBottom: 18,
        overflow: "hidden",
    },
    primaryButton: {
        backgroundColor: "#0f766e",
        borderRadius: 12,
        paddingVertical: 14,
        alignItems: "center",
        marginTop: 8,
    },
    primaryButtonText: {
        color: "#ffffff",
        fontSize: 16,
        fontWeight: "700",
    },
    secondaryButton: {
        backgroundColor: "#e2e8f0",
        borderRadius: 12,
        paddingVertical: 14,
        alignItems: "center",
        marginTop: 12,
    },
    secondaryButtonText: {
        color: "#0f172a",
        fontSize: 16,
        fontWeight: "700",
    },
    summaryCard: {
        marginTop: 24,
        backgroundColor: "#ffffff",
        borderRadius: 16,
        padding: 18,
        borderWidth: 1,
        borderColor: "#dbeafe",
    },
    summaryTitle: {
        fontSize: 17,
        fontWeight: "700",
        marginBottom: 12,
        color: "#1d4ed8",
    },
    summaryText: {
        fontSize: 15,
        marginBottom: 8,
        color: "#1f2937",
    },
});
