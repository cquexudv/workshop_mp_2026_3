import * as ImagePicker from "expo-image-picker";
import React, { useMemo, useState } from "react";
import { Alert, Image, Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useUser } from "@/context/UserContext";

export default function ProfileScreen() {
  const { user, isLoading, saveUser } = useUser();
  const [isSavingPhoto, setIsSavingPhoto] = useState(false);

  const initials = useMemo(() => {
    const parts = user.name.trim().split(/\s+/).filter(Boolean);

    if (parts.length === 0) {
      return "US";
    }

    return parts
      .slice(0, 2)
      .map((part) => part[0]?.toUpperCase() ?? "")
      .join("");
  }, [user.name]);

  const handleTakePhoto = async () => {
    try {
      setIsSavingPhoto(true);

      const permission = await ImagePicker.requestCameraPermissionsAsync();

      if (!permission.granted) {
        Alert.alert("Permiso requerido", "Debes permitir el acceso a la camara para tomar tu foto de perfil.");
        return;
      }

      const result = await ImagePicker.launchCameraAsync({
        allowsEditing: true,
        aspect: [1, 1],
        cameraType: ImagePicker.CameraType.front,
        mediaTypes: ["images"],
        quality: 0.7,
      });

      if (result.canceled) {
        return;
      }

      const nextPhoto = result.assets[0]?.uri;

      if (!nextPhoto) {
        Alert.alert("Foto no disponible", "No se pudo obtener la imagen capturada.");
        return;
      }

      await saveUser({ ...user, photo: nextPhoto });
      Alert.alert("Foto actualizada", "La foto de perfil fue guardada correctamente.");
    } catch (error) {
      console.log("Error al tomar la foto de perfil:", error);
      Alert.alert("Error", "No se pudo tomar la foto de perfil.");
    } finally {
      setIsSavingPhoto(false);
    }
  };

  const handleRemovePhoto = async () => {
    await saveUser({ ...user, photo: "" });
  };

  return (
    <SafeAreaView style={styles.safeArea} edges={["top"]}>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.container}
        contentInsetAdjustmentBehavior="automatic">
        <Text style={styles.title}>Perfil</Text>
        <Text style={styles.subtitle}>
          Datos recuperados desde el objeto global persistido.
        </Text>

        <View style={styles.card}>
          <View style={styles.heroRow}>
            <View style={styles.avatarFrame}>
              {user.photo ? (
                <Image source={{ uri: user.photo }} style={styles.avatarImage} resizeMode="cover" />
              ) : (
                <View style={styles.avatarPlaceholder}>
                  <Text style={styles.avatarInitials}>{initials}</Text>
                </View>
              )}
            </View>

            <View style={styles.heroActions}>
              <Pressable
                style={[styles.primaryButton, isSavingPhoto && styles.buttonDisabled]}
                onPress={handleTakePhoto}
                disabled={isSavingPhoto || isLoading}
              >
                <Text style={styles.primaryButtonText}>
                  {isSavingPhoto ? "Guardando foto..." : user.photo ? "Cambiar foto" : "Tomar foto"}
                </Text>
              </Pressable>

              {user.photo ? (
                <Pressable
                  style={styles.secondaryButton}
                  onPress={handleRemovePhoto}
                  disabled={isSavingPhoto || isLoading}
                >
                  <Text style={styles.secondaryButtonText}>Quitar foto</Text>
                </Pressable>
              ) : null}
            </View>
          </View>

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
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#f5f7fb",
  },
  scrollView: {
    flex: 1,
  },
  container: {
    padding: 20,
    paddingBottom: 40,
    backgroundColor: "#f5f7fb",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 8,
    color: "#111827",
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
  heroRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  avatarFrame: {
    width: 96,
    height: 96,
    borderRadius: 48,
    overflow: "hidden",
    backgroundColor: "#dbeafe",
    marginRight: 16,
  },
  avatarImage: {
    width: "100%",
    height: "100%",
  },
  avatarPlaceholder: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#bfdbfe",
  },
  avatarInitials: {
    fontSize: 28,
    fontWeight: "700",
    color: "#1e3a8a",
  },
  heroActions: {
    flex: 1,
  },
  primaryButton: {
    backgroundColor: "#0f766e",
    borderRadius: 12,
    paddingVertical: 14,
    paddingHorizontal: 16,
    alignItems: "center",
  },
  primaryButtonText: {
    color: "#ffffff",
    fontSize: 15,
    fontWeight: "700",
  },
  secondaryButton: {
    backgroundColor: "#e2e8f0",
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 16,
    alignItems: "center",
    marginTop: 10,
  },
  secondaryButtonText: {
    color: "#0f172a",
    fontSize: 15,
    fontWeight: "700",
  },
  buttonDisabled: {
    opacity: 0.7,
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
