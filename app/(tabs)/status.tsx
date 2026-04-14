import { useUser } from "@/context/UserContext";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function AppStatus() {
  const { user, isLoading } = useUser();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>STATUS</Text>
      <Text style={styles.subtitle}>
        Applicacion: 
        <h1>UP</h1>
      </Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    backgroundColor: "#f5f7fb",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    color: "#4b5563",
    marginBottom: 20,
  },
  card: {
    backgroundColor: "#ffffff",
    borderRadius: 16,
    padding: 20,
    borderWidth: 1,
    borderColor: "#dbeafe",
  },
  label: {
    fontSize: 16,
    fontWeight: "600",
    color: "#1d4ed8",
    marginTop: 10,
    marginBottom: 6,
  },
  value: {
    fontSize: 17,
    color: "#111827",
  },
});
