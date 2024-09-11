import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  // TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";

const TurmasScreen = () => {
  const [turmas, setTurmas] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTurmas();
  }, []);

  const fetchTurmas = async () => {
    try {
      const response = await fetch("http://192.168.56.1:8000/api/groups");
      const data = await response.json();
      setTurmas(data);
      setLoading(false);
    } catch (error) {
      Alert.alert("Erro", "Falha ao buscar turmas");
    }
  };

  // const deletarTurma = async (id) => {
  //   return;
  //   try {
  //     const response = await fetch(`http://127.0.0.1:8000/api/group/${id}`, {
  //       method: "DELETE",
  //     });

  //     if (response.ok) {
  //       Alert.alert("Sucesso", "Turma deletada com sucesso");
  //       fetchTurmas();
  //     } else {
  //       Alert.alert("Erro", "Falha ao deletar turma");
  //     }
  //   } catch (error) {
  //     Alert.alert("Erro", "Erro ao deletar turma");
  //   }
  // };

  // const editarTurma = async (id, novoNome, novoStatus) => {
  //   return;
  //   try {
  //     const response = await fetch(`http://127.0.0.1:8000/api/group/${id}`, {
  //       method: "PUT",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({
  //         name: novoNome,
  //         status: novoStatus,
  //       }),
  //     });

  //     if (response.ok) {
  //       Alert.alert("Sucesso", "Turma atualizada com sucesso");
  //       fetchTurmas();
  //     } else {
  //       Alert.alert("Erro", "Falha ao editar turma");
  //     }
  //   } catch (error) {
  //     Alert.alert("Erro", "Erro ao editar turma");
  //   }
  // };

  const renderItem = ({ item }) => (
    <View style={styles.turmaContainer}>
      <Text style={styles.turmaNome}>Nome: {item.name}</Text>
      <Text style={styles.turmaStatus}>Status: {item.status}</Text>
      {/* <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.editButton}
          onPress={() =>
            editarTurma(
              item.id,
              "Novo Nome",
              item.status === "active" ? "inactive" : "active"
            )
          }
        >
          <Text style={styles.buttonText}>Editar</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.deleteButton}
          onPress={() => deletarTurma(item.id)}
        >
          <Text style={styles.buttonText}>Deletar</Text>
        </TouchableOpacity>
      </View> */}
    </View>
  );

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <Text style={styles.loadingText}>Carregando turmas...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Turmas</Text>
      <FlatList
        data={turmas}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
      />
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
  turmaContainer: {
    backgroundColor: "#2e2e2e",
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    elevation: 3,
  },
  turmaNome: {
    fontSize: 18,
    color: "#fff",
    marginBottom: 5,
  },
  turmaStatus: {
    fontSize: 16,
    color: "#7d7d7d",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  editButton: {
    backgroundColor: "#007BFF",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
  },
  deleteButton: {
    backgroundColor: "#DC3545",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
  },
  buttonText: {
    color: "#FFF",
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  loadingText: {
    fontSize: 18,
    color: "#FFF",
  },
});

export default TurmasScreen;
