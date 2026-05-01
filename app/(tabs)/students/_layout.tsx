import { Stack } from "expo-router";

export default function StudentsLayout() {
    return (
        <Stack>
            <Stack.Screen name="index" options={{ headerTitle: "Students Access" }} />
            <Stack.Screen name="[id]" options={{ headerTitle: "Student Details" }} />
        </Stack>
    );
}
