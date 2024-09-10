import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const AlunosScreen = () => {
  const [nome, setNome] = useState("");
  const [altura, setAltura] = useState("");
  const [peso, setPeso] = useState("");
  const [responsavel, setResponsavel] = useState("");
  const [cpfResponsavel, setCpfResponsavel] = useState("");
  const [turma, setTurma] = useState("");
  const [turno, setTurno] = useState("");

  const navigation = useNavigation();

  const cadastrarAluno = () => {
    if (
      nome &&
      altura &&
      peso &&
      responsavel &&
      cpfResponsavel &&
      turma &&
      turno
    ) {
      const novoAluno = {
        nome,
        altura,
        peso,
        responsavel,
        cpfResponsavel,
        turma,
        turno,
      };
      navigation.navigate("ListaAlunos", { aluno: novoAluno });
    } else {
      Alert.alert("Erro", "Por favor, preencha todos os campos");
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Novo Aluno</Text>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Nome</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite o nome"
          value={nome}
          onChangeText={setNome}
          placeholderTextColor="#7d7d7d"
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Altura</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite a altura"
          value={altura}
          onChangeText={setAltura}
          placeholderTextColor="#7d7d7d"
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Peso</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite o peso"
          value={peso}
          onChangeText={setPeso}
          placeholderTextColor="#7d7d7d"
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Responsável</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite o nome do responsável"
          value={responsavel}
          onChangeText={setResponsavel}
          placeholderTextColor="#7d7d7d"
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>CPF do Responsável</Text>
        <TextInput
          style={styles.input}
          placeholder="000.000.000-00"
          value={cpfResponsavel}
          onChangeText={setCpfResponsavel}
          placeholderTextColor="#7d7d7d"
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Turma</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite a turma"
          value={turma}
          onChangeText={setTurma}
          placeholderTextColor="#7d7d7d"
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Turno</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite o turno"
          value={turno}
          onChangeText={setTurno}
          placeholderTextColor="#7d7d7d"
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={cadastrarAluno}>
        <Text style={styles.buttonText}>Cadastrar</Text>
      </TouchableOpacity>
    </ScrollView>
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
    marginBottom: 30,
    textAlign: "center",
    fontWeight: "bold",
  },
  inputContainer: {
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    color: "#4CAF50",
    marginBottom: 5,
  },
  input: {
    height: 50,
    backgroundColor: "#2e2e2e",
    borderRadius: 10,
    paddingHorizontal: 15,
    color: "#fff",
    fontSize: 16,
    borderColor: "#4CAF50",
    borderWidth: 1,
  },
  button: {
    marginTop: 20,
    backgroundColor: "#4CAF50",
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default AlunosScreen;
