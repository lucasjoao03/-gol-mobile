import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.header}>+GOL</Text>
      <View style={styles.cardContainer}>
        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate("Turmas")}
        >
          {/* <Image
            source={require("./assets/turma_icon.png")} // Substitua com o caminho para seu ícone
            style={styles.icon}
          /> */}
          <Text style={styles.cardText}>Turmas</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate("Alunos")}
        >
          {/* <Image
            source={require("./assets/aluno_icon.png")} // Substitua com o caminho para seu ícone
            style={styles.icon}
          /> */}
          <Text style={styles.cardText}>Alunos</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate("Treinadores")}
        >
          {/* <Image
            source={require("./assets/treinador_icon.png")} // Substitua com o caminho para seu ícone
            style={styles.icon}
          /> */}
          <Text style={styles.cardText}>Treinadores</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1e1e1e",
    padding: 20,
  },
  header: {
    fontSize: 28,
    color: "#4CAF50",
    marginBottom: 20,
    textAlign: "center",
    fontWeight: "bold",
    marginTop: 50,
  },
  cardContainer: {
    flex: 1,
    justifyContent: "center",
  },
  card: {
    backgroundColor: "#2e2e2e",
    borderRadius: 10,
    marginBottom: 20,
    padding: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  icon: {
    width: 50,
    height: 50,
    marginBottom: 10,
  },
  cardText: {
    color: "#4CAF50",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default HomeScreen;
