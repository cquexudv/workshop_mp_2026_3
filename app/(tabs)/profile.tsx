import React, { useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { useUser } from "@/context/UserContext";

export default function ProfileScreen() {
  const { name } = useUser();

  const [count, setCount] = useState<number>(0);

  const incrementar = () => {
    setCount(count + 1);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Perfil</Text>

      <Text>Nombre leído desde Context:</Text>

      <Text style={styles.name}>
        {name || "No hay nombre disponible"}
      </Text>

      {/* contador */}
      <View style={{ marginTop: 30 }}>
        <Text style={styles.counterLabel}>Contador:</Text>
        <Text style={styles.counter}>{count}</Text>

        <Button title="Sumar +1" onPress={incrementar} />
      </View>
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
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 10,
    color: "blue",
  },
  counterLabel: {
    fontSize: 16,
    marginBottom: 5,
  },
  counter: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    color: "green",
  },
});