import { useUser } from "@/context/UserContext";
import { Picker } from "@react-native-picker/picker";
import React, { useEffect, useState } from "react";
import { Alert, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";

const careers = ["Ingenieria en sistemas", "Ingenieria Industrial"];
const semesters = ["Semestre 1", "Semestre 2", "Interciclo"];

export default function HomeScreen() {
  const { user, isLoading, saveUser, clearUser } = useUser();
  const [form, setForm] = useState({
    name: "",
    email: "",
    career: "",
    semester: "",
  });

  useEffect(() => {
    if (!isLoading) {
      setForm(user);
    }
  }, [isLoading, user]);

  const handleChange = (
    field: "name" | "email" | "career" | "semester",
    value: string
  ) => {
    setForm((current) => ({ ...current, [field]: value }));
  };

  const handleSave = async () => {
    if (!form.name || !form.email || !form.career || !form.semester) {
      Alert.alert("Campos incompletos", "Completa los 4 campos del formulario.");
      return;
    }

    await saveUser(form);
    Alert.alert("Datos guardados", "El perfil fue persistido en AsyncStorage.");
  };

  const handleClear = async () => {
    await clearUser();
    setForm({
      name: "",
      email: "",
      career: "",
      semester: "",
    });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Pantalla principal</Text>
      <Text style={styles.subtitle}>
        Estado local en el formulario, estado global con Context y persistencia con AsyncStorage.
      </Text>

      <Text style={styles.label}>Nombre</Text>
      <TextInput
        style={styles.input}
        placeholder="Ingresa tu nombre"
        value={form.name}
        onChangeText={(masked) => handleChange("name", masked)}
      />

      <Text style={styles.label}>Correo</Text>
      <TextInput
        style={styles.input}
        placeholder="correo@universidad.com"
        value={form.email}
        keyboardType="email-address"
        autoCapitalize="none"
        onChangeText={(masked) => handleChange("email", masked.toLowerCase())}
      />

      <Text style={styles.label}>Carrera</Text>
      <View style={styles.selectContainer}>
        <Picker
          selectedValue={form.career}
          onValueChange={(value) => handleChange("career", value)}
        >
          <Picker.Item label="Selecciona una carrera" value="" />
          {careers.map((career) => (
            <Picker.Item key={career} label={career} value={career} />
          ))}
        </Picker>
      </View>

      <Text style={styles.label}>Semestre</Text>
      <View style={styles.selectContainer}>
        <Picker
          selectedValue={form.semester}
          onValueChange={(value) => handleChange("semester", value)}
        >
          <Picker.Item label="Selecciona un semestre" value="" />
          {semesters.map((semester) => (
            <Picker.Item key={semester} label={semester} value={semester} />
          ))}
        </Picker>
      </View>

      <Pressable style={styles.primaryButton} onPress={handleSave}>
        <Text style={styles.primaryButtonText}>Guardar perfil</Text>
      </Pressable>

      <Pressable style={styles.secondaryButton} onPress={handleClear}>
        <Text style={styles.secondaryButtonText}>Limpiar datos</Text>
      </Pressable>

      <View style={styles.summaryCard}>
        <Text style={styles.summaryTitle}>Objeto actual en Context</Text>
        <Text style={styles.summaryText}>Nombre: {user.name || "Sin datos"}</Text>
        <Text style={styles.summaryText}>Correo: {user.email || "Sin datos"}</Text>
        <Text style={styles.summaryText}>Carrera: {user.career || "Sin datos"}</Text>
        <Text style={styles.summaryText}>Semestre: {user.semester || "Sin datos"}</Text>
      </View>
    </ScrollView>
  );
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
