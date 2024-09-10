import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";

const ListaAlunosScreen = ({ route }) => {
  const { aluno } = route.params;
  const [alunos, setAlunos] = React.useState([aluno]);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Alunos Cadastrados</Text>
      <FlatList
        data={alunos}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.itemText}>Nome: {item.nome}</Text>
            <Text style={styles.itemText}>Altura: {item.altura}</Text>
            <Text style={styles.itemText}>Peso: {item.peso}</Text>
            <Text style={styles.itemText}>Responsável: {item.responsavel}</Text>
            <Text style={styles.itemText}>
              CPF Responsável: {item.cpfResponsavel}
            </Text>
            <Text style={styles.itemText}>Turma: {item.turma}</Text>
            <Text style={styles.itemText}>Turno: {item.turno}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#1e1e1e",
  },
  header: {
    fontSize: 28,
    color: "#4CAF50",
    marginBottom: 30,
    textAlign: "center",
    fontWeight: "bold",
  },
  item: {
    padding: 15,
    marginBottom: 10,
    backgroundColor: "#2e2e2e",
    borderRadius: 10,
  },
  itemText: {
    color: "#fff",
    fontSize: 16,
  },
});

export default ListaAlunosScreen;
