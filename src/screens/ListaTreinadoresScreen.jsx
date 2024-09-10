import React, { useState, useEffect } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";

const ListaTreinadoresScreen = ({ route }) => {
  const [treinadores, setTreinadores] = useState([]);

  useEffect(() => {
    if (route.params && route.params.treinador) {
      setTreinadores((prevTreinadores) => [
        ...prevTreinadores,
        route.params.treinador,
      ]);
    }
  }, [route.params]);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Treinadores Cadastrados</Text>
      {treinadores.length > 0 ? (
        <FlatList
          data={treinadores}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View style={styles.item}>
              <Text style={styles.text}>Nome: {item.nome}</Text>
              <Text style={styles.text}>CPF: {item.cpf}</Text>
              <Text style={styles.text}>Telefone: {item.telefone}</Text>
              <Text style={styles.text}>
                Data de Nascimento: {item.dataNascimento}
              </Text>
            </View>
          )}
        />
      ) : (
        <Text style={styles.text}>Nenhum treinador cadastrado ainda.</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2e2e2e",
    padding: 20,
  },
  header: {
    fontSize: 24,
    color: "#4CAF50",
    marginBottom: 20,
    textAlign: "center",
  },
  item: {
    backgroundColor: "#3e3e3e",
    padding: 15,
    marginBottom: 10,
    borderRadius: 5,
  },
  text: {
    color: "#FFF",
  },
});

export default ListaTreinadoresScreen;
