import React, { useEffect, useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useUser } from "@/context/UserContext";

export default function HomeScreen() {
  const { name, setName } = useUser();
  const [inputName, setInputName] = useState<string>("");

  useEffect(() => {
    loadStoredName();
  }, []);

  const loadStoredName = async () => {
    try {
      const savedName = await AsyncStorage.getItem("user_name");

      if (savedName) {
        setName(savedName);
        setInputName(savedName);
      }
    } catch (error) {
      console.log("Error al leer nombre:", error);
    }
  };

  const saveName = async () => {
    try {
      setName(inputName);
      await AsyncStorage.setItem("user_name", inputName);
      alert("Nombre guardado");
    } catch (error) {
      console.log(error);
    }
  };

  const clearName = async () => {
    try {
      await AsyncStorage.removeItem("user_name");
      setName("");
      setInputName("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Persistencia con Context + AsyncStorage</Text>

      <Text>Nombre en Context:</Text>
      <Text style={styles.name}>{name || "Sin nombre"}</Text>

      <TextInput
        style={styles.input}
        placeholder="Escribe tu nombre"
        value={inputName}
        onChangeText={setInputName}
      />

      <Button title="Guardar" onPress={saveName} />
      <View style={{ height: 10 }} />
      <Button title="Eliminar" onPress={clearName} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  name: {
    fontSize: 18,
    marginBottom: 20,
    color: "blue",
  },
  input: {
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
  },
});