import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useUser } from "@/context/UserContext";

export default function ProfileScreen() {
  const { user, isLoading } = useUser();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Perfil</Text>
      <Text style={styles.subtitle}>
        Datos recuperados desde el objeto global persistido.
      </Text>

      <View style={styles.card}>
        <Text style={styles.label}>Nombre</Text>
        <Text style={styles.value}>
          {isLoading ? "Cargando..." : user.name || "No registrado"}
        </Text>

        <Text style={styles.label}>Correo</Text>
        <Text style={styles.value}>
          {isLoading ? "Cargando..." : user.email || "No registrado"}
        </Text>

        <Text style={styles.label}>Carrera</Text>
        <Text style={styles.value}>
          {isLoading ? "Cargando..." : user.career || "No registrada"}
        </Text>

        <Text style={styles.label}>Semestre</Text>
        <Text style={styles.value}>
          {isLoading ? "Cargando..." : user.semester || "No registrado"}
        </Text>
      </View>
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
