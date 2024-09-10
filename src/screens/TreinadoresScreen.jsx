import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const TreinadoresScreen = () => {
  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");
  const [telefone, setTelefone] = useState("");
  const [dataNascimento, setDataNascimento] = useState("");

  const navigation = useNavigation();

  const validarCPF = (cpf) => {
    const cpfLimpo = cpf.replace(/[^\d]+/g, "");

    if (cpfLimpo.length !== 11) return false;

    if (/^(\d)\1+$/.test(cpfLimpo)) return false;

    let soma = 0;
    let resto;

    for (let i = 1; i <= 9; i++)
      soma += parseInt(cpfLimpo.substring(i - 1, i)) * (11 - i);
    resto = (soma * 10) % 11;
    if (resto === 10 || resto === 11) resto = 0;
    if (resto !== parseInt(cpfLimpo.substring(9, 10))) return false;

    soma = 0;
    for (let i = 1; i <= 10; i++)
      soma += parseInt(cpfLimpo.substring(i - 1, i)) * (12 - i);
    resto = (soma * 10) % 11;
    if (resto === 10 || resto === 11) resto = 0;
    if (resto !== parseInt(cpfLimpo.substring(10, 11))) return false;

    return true;
  };

  const validarTelefone = (telefone) => {
    const regexTelefone = /^\(\d{2}\) \d{5}-\d{4}$/;
    return regexTelefone.test(telefone);
  };

  const validarDataNascimento = (dataNascimento) => {
    const regexData = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/;
    return regexData.test(dataNascimento);
  };

  const cadastrarTreinador = () => {
    if (!nome || !cpf || !telefone || !dataNascimento) {
      Alert.alert("Erro", "Por favor, preencha todos os campos");
      return;
    }

    if (!validarCPF(cpf)) {
      Alert.alert("Erro", "CPF inválido");
      return;
    }

    if (!validarTelefone(telefone)) {
      Alert.alert("Erro", "Telefone inválido. Use o formato (XX) XXXXX-XXXX");
      return;
    }

    if (!validarDataNascimento(dataNascimento)) {
      Alert.alert(
        "Erro",
        "Data de nascimento inválida. Use o formato DD/MM/AAAA"
      );
      return;
    }

    const novoTreinador = {
      nome,
      cpf,
      telefone,
      dataNascimento,
    };

    navigation.navigate("ListaTreinadores", { treinador: novoTreinador });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Cadastrar Treinadores</Text>

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
        <Text style={styles.label}>CPF</Text>
        <TextInput
          style={styles.input}
          placeholder="000.000.000-00"
          value={cpf}
          onChangeText={setCpf}
          placeholderTextColor="#7d7d7d"
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Telefone</Text>
        <TextInput
          style={styles.input}
          placeholder="(XX) XXXXX-XXXX"
          value={telefone}
          onChangeText={setTelefone}
          placeholderTextColor="#7d7d7d"
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Data de Nascimento</Text>
        <TextInput
          style={styles.input}
          placeholder="DD/MM/AAAA"
          value={dataNascimento}
          onChangeText={setDataNascimento}
          placeholderTextColor="#7d7d7d"
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={cadastrarTreinador}>
        <Text style={styles.buttonText}>Cadastrar</Text>
      </TouchableOpacity>
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
    marginBottom: 30,
    textAlign: "center",
    fontWeight: "bold",
    marginTop: 50,
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

export default TreinadoresScreen;
