import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
  Alert,
  Modal,
  TextInput,
  Button,
} from "react-native";

const AlunosScreen = () => {
  const [alunos, setAlunos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedAluno, setSelectedAluno] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const fetchAlunos = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8000/api/athletes");
        if (!response.ok) {
          throw new Error("Erro ao buscar os alunos");
        }
        const data = await response.json();
        setAlunos(data);
      } catch (error) {
        console.log(error);
        Alert.alert("Erro", error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchAlunos();
  }, []);

  const handleEdit = (aluno) => {
    setSelectedAluno(aluno);
    setIsEditing(true);
  };

  const handleSave = async () => {
    try {
      const response = await fetch(
        `http://127.0.0.1:8000/api/athletes/${selectedAluno.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(selectedAluno),
        }
      );
      if (!response.ok) {
        throw new Error("Erro ao atualizar o aluno");
      }
      const updatedAluno = await response.json();
      setAlunos((prevAlunos) =>
        prevAlunos.map((aluno) =>
          aluno.id === updatedAluno.id ? updatedAluno : aluno
        )
      );
      setIsEditing(false);
      setSelectedAluno(null);
    } catch (error) {
      Alert.alert("Erro", error.message);
    }
  };

  const handleInputChange = (field, value) => {
    setSelectedAluno({ ...selectedAluno, [field]: value });
  };

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Text style={styles.itemText}>{item.name}</Text>
      <Text style={styles.itemSubText}>CPF: {item.cpf}</Text>
      <Text style={styles.itemSubText}>
        Data de Nascimento: {item.birth_date}
      </Text>
      <TouchableOpacity
        style={styles.editButton}
        onPress={() => handleEdit(item)}
      >
        <Text style={styles.editButtonText}>Editar</Text>
      </TouchableOpacity>
    </View>
  );

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#4CAF50" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Lista de Alunos</Text>
      <FlatList
        data={alunos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
      />

      {selectedAluno && (
        <Modal
          visible={isEditing}
          animationType="slide"
          transparent={true}
          onRequestClose={() => setIsEditing(false)}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text style={styles.modalHeader}>Editar Aluno</Text>
              <TextInput
                style={styles.input}
                value={selectedAluno.name}
                onChangeText={(text) => handleInputChange("name", text)}
                placeholder="Nome"
                placeholderTextColor="#7d7d7d"
              />
              <TextInput
                style={styles.input}
                value={selectedAluno.cpf}
                onChangeText={(text) => handleInputChange("cpf", text)}
                placeholder="CPF"
                placeholderTextColor="#7d7d7d"
              />
              <TextInput
                style={styles.input}
                value={selectedAluno.birth_date}
                onChangeText={(text) => handleInputChange("birth_date", text)}
                placeholder="Data de Nascimento"
                placeholderTextColor="#7d7d7d"
              />
              <Button title="Salvar" onPress={handleSave} color="#4CAF50" />
              <Button
                title="Cancelar"
                onPress={() => setIsEditing(false)}
                color="#FF5722"
              />
            </View>
          </View>
        </Modal>
      )}
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
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1e1e1e",
  },
  itemContainer: {
    backgroundColor: "#2e2e2e",
    padding: 15,
    marginBottom: 10,
    borderRadius: 10,
  },
  itemText: {
    fontSize: 18,
    color: "#FFF",
    fontWeight: "bold",
  },
  itemSubText: {
    fontSize: 14,
    color: "#7d7d7d",
  },
  editButton: {
    marginTop: 10,
    backgroundColor: "#4CAF50",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
  },
  editButtonText: {
    color: "#FFF",
    fontWeight: "bold",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalContent: {
    width: "80%",
    backgroundColor: "#2e2e2e",
    padding: 20,
    borderRadius: 10,
  },
  modalHeader: {
    fontSize: 22,
    color: "#4CAF50",
    marginBottom: 15,
    textAlign: "center",
    fontWeight: "bold",
  },
  input: {
    height: 50,
    backgroundColor: "#1e1e1e",
    borderRadius: 10,
    paddingHorizontal: 15,
    color: "#fff",
    fontSize: 16,
    borderColor: "#4CAF50",
    borderWidth: 1,
    marginBottom: 15,
  },
});

export default AlunosScreen;
