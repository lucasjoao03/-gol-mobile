// import React, { useState } from "react";
// import {
//   View,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   StyleSheet,
//   Alert,
// } from "react-native";
// import { useNavigation } from "@react-navigation/native";

// const TreinadoresScreen = () => {
//   const [nome, setNome] = useState("");
//   const [cpf, setCpf] = useState("");
//   const [telefone, setTelefone] = useState("");
//   const [dataNascimento, setDataNascimento] = useState("");
//   const [email, setEmail] = useState("");
//   const [status, setStatus] = useState("active");

//   const navigation = useNavigation();

//   const validarCPF = (cpf) => {
//     const cpfLimpo = cpf.replace(/[^\d]+/g, "");

//     if (cpfLimpo.length !== 11) return false;

//     if (/^(\d)\1+$/.test(cpfLimpo)) return false;

//     let soma = 0;
//     let resto;

//     for (let i = 1; i <= 9; i++)
//       soma += parseInt(cpfLimpo.substring(i - 1, i)) * (11 - i);
//     resto = (soma * 10) % 11;
//     if (resto === 10 || resto === 11) resto = 0;
//     if (resto !== parseInt(cpfLimpo.substring(9, 10))) return false;

//     soma = 0;
//     for (let i = 1; i <= 10; i++)
//       soma += parseInt(cpfLimpo.substring(i - 1, i)) * (12 - i);
//     resto = (soma * 10) % 11;
//     if (resto === 10 || resto === 11) resto = 0;
//     if (resto !== parseInt(cpfLimpo.substring(10, 11))) return false;

//     return true;
//   };

//   const validarTelefone = (telefone) => {
//     const regexTelefone = /^\(\d{2}\) \d{5}-\d{4}$/;
//     return regexTelefone.test(telefone);
//   };

//   const validarDataNascimento = (dataNascimento) => {
//     const regexData = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/;
//     return regexData.test(dataNascimento);
//   };

//   const cadastrarTreinador = async () => {
//     if (!nome || !cpf || !telefone || !dataNascimento || !email || !status) {
//       Alert.alert("Erro", "Por favor, preencha todos os campos");
//       return;
//     }

//     if (!validarCPF(cpf)) {
//       Alert.alert("Erro", "CPF inválido");
//       return;
//     }

//     if (!validarTelefone(telefone)) {
//       Alert.alert("Erro", "Telefone inválido. Use o formato (XX) XXXXX-XXXX");
//       return;
//     }

//     if (!validarDataNascimento(dataNascimento)) {
//       Alert.alert(
//         "Erro",
//         "Data de nascimento inválida. Use o formato DD/MM/AAAA"
//       );
//       return;
//     }

//     const novoTreinador = {
//       name: nome,
//       cpf: cpf.replace(/[^\d]+/g, ""),
//       status,
//       birth_date: dataNascimento.split("/").reverse().join("-"),
//       email,
//     };

//     try {
//       const response = await fetch("http://127.0.0.1:8000/coach", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(novoTreinador),
//       });

//       if (!response.ok) {
//         throw new Error("Erro ao cadastrar treinador");
//       }

//       Alert.alert("Sucesso", "Treinador cadastrado com sucesso!");
//       navigation.navigate("ListaTreinadores", { treinador: novoTreinador });
//     } catch (error) {
//       Alert.alert("Erro", error.message);
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.header}>Cadastrar Treinadores</Text>

//       <View style={styles.inputContainer}>
//         <Text style={styles.label}>Nome</Text>
//         <TextInput
//           style={styles.input}
//           placeholder="Digite o nome"
//           value={nome}
//           onChangeText={setNome}
//           placeholderTextColor="#7d7d7d"
//         />
//       </View>

//       <View style={styles.inputContainer}>
//         <Text style={styles.label}>CPF</Text>
//         <TextInput
//           style={styles.input}
//           placeholder="000.000.000-00"
//           value={cpf}
//           onChangeText={setCpf}
//           placeholderTextColor="#7d7d7d"
//         />
//       </View>
//       <View style={styles.inputContainer}>
//         <Text style={styles.label}>Data de Nascimento</Text>
//         <TextInput
//           style={styles.input}
//           placeholder="DD/MM/AAAA"
//           value={dataNascimento}
//           onChangeText={setDataNascimento}
//           placeholderTextColor="#7d7d7d"
//         />
//       </View>

//       <View style={styles.inputContainer}>
//         <Text style={styles.label}>Email</Text>
//         <TextInput
//           style={styles.input}
//           placeholder="Digite o email"
//           value={email}
//           onChangeText={setEmail}
//           keyboardType="email-address"
//           placeholderTextColor="#7d7d7d"
//         />
//       </View>

//       <View style={styles.inputContainer}>
//         <Text style={styles.label}>Status</Text>
//         <TextInput
//           style={styles.input}
//           placeholder="active/inactive"
//           value={status}
//           onChangeText={setStatus}
//           placeholderTextColor="#7d7d7d"
//         />
//       </View>

//       <TouchableOpacity style={styles.button} onPress={cadastrarTreinador}>
//         <Text style={styles.buttonText}>Cadastrar</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#1e1e1e",
//     padding: 20,
//   },
//   header: {
//     fontSize: 28,
//     color: "#4CAF50",
//     marginBottom: 30,
//     textAlign: "center",
//     fontWeight: "bold",
//     marginTop: 50,
//   },
//   inputContainer: {
//     marginBottom: 15,
//   },
//   label: {
//     fontSize: 16,
//     color: "#4CAF50",
//     marginBottom: 5,
//   },
//   input: {
//     height: 50,
//     backgroundColor: "#2e2e2e",
//     borderRadius: 10,
//     paddingHorizontal: 15,
//     color: "#fff",
//     fontSize: 16,
//     borderColor: "#4CAF50",
//     borderWidth: 1,
//   },
//   button: {
//     marginTop: 20,
//     backgroundColor: "#4CAF50",
//     paddingVertical: 15,
//     borderRadius: 10,
//     alignItems: "center",
//   },
//   buttonText: {
//     color: "#FFF",
//     fontSize: 18,
//     fontWeight: "bold",
//   },
// });

// export default TreinadoresScreen;

import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  ActivityIndicator,
  Alert,
  ScrollView,
} from "react-native";

const TreinadoresScreen = ({ navigation }) => {
  const [treinadores, setTreinadores] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedId, setSelectedId] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    cpf: "",
    status: "",
    birth_date: "",
    email: "",
  });

  useEffect(() => {
    const fetchTreinadores = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8000/api/coachs", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (!response.ok) {
          throw new Error("Erro ao buscar os treinadores");
        }
        const data = await response.json();
        setTreinadores(data);
      } catch (error) {
        console.log(error);
        Alert.alert("Erro", error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTreinadores();
  }, []);

  const handleEdit = (id) => {
    const treinador = treinadores.find((item) => item.id === id);
    if (treinador) {
      setSelectedId(id);
      setFormData({
        name: treinador.name,
        cpf: treinador.cpf,
        status: treinador.status,
        birth_date: treinador.birth_date,
        email: treinador.email,
      });
    }
  };

  const handleInputChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleSubmit = () => {
    fetch(`http://127.0.0.1:8000/api/coachs/${selectedId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then(() => {
        Alert.alert("Sucesso", "Treinador atualizado com sucesso!");
        setSelectedId(null);
        setFormData({
          name: "",
          cpf: "",
          status: "",
          birth_date: "",
          email: "",
        });
        return fetch("http://127.0.0.1:8000/api/coachs");
      })
      .then((response) => response.json())
      .then((data) => setTreinadores(data))
      .catch((error) => {
        Alert.alert("Erro", "Falha ao atualizar treinador.");
        console.log(error);
      });
  };

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Text style={styles.itemText}>{item.name}</Text>
      <Text style={styles.itemSubText}>CPF: {item.cpf}</Text>
      <Text style={styles.itemSubText}>Status: {item.status}</Text>
      <Text style={styles.itemSubText}>
        Data de Nascimento: {item.birth_date}
      </Text>
      <Text style={styles.itemSubText}>Email: {item.email}</Text>
      <TouchableOpacity
        style={styles.editButton}
        onPress={() => handleEdit(item.id)}
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
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Lista de Treinadores</Text>
      </View>

      <FlatList
        data={treinadores}
        keyExtractor={(item) => item.cpf}
        renderItem={renderItem}
        ListHeaderComponent={
          selectedId ? (
            <View style={styles.formContainer}>
              <Text style={styles.formHeader}>Editar Treinador</Text>
              <View style={styles.inputContainer}>
                <Text style={styles.label}>Nome</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Nome completo"
                  value={formData.name}
                  onChangeText={(text) => handleInputChange("name", text)}
                  placeholderTextColor="#7d7d7d"
                />
              </View>
              <View style={styles.inputContainer}>
                <Text style={styles.label}>CPF</Text>
                <TextInput
                  style={styles.input}
                  placeholder="000.000.000-00"
                  value={formData.cpf}
                  onChangeText={(text) => handleInputChange("cpf", text)}
                  placeholderTextColor="#7d7d7d"
                />
              </View>
              <View style={styles.inputContainer}>
                <Text style={styles.label}>Status</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Ativo ou Inativo"
                  value={formData.status}
                  onChangeText={(text) => handleInputChange("status", text)}
                  placeholderTextColor="#7d7d7d"
                />
              </View>
              <View style={styles.inputContainer}>
                <Text style={styles.label}>Data de Nascimento</Text>
                <TextInput
                  style={styles.input}
                  placeholder="DD/MM/AAAA"
                  value={formData.birth_date}
                  onChangeText={(text) => handleInputChange("birth_date", text)}
                  placeholderTextColor="#7d7d7d"
                />
              </View>
              <View style={styles.inputContainer}>
                <Text style={styles.label}>Email</Text>
                <TextInput
                  style={styles.input}
                  placeholder="email@exemplo.com"
                  value={formData.email}
                  onChangeText={(text) => handleInputChange("email", text)}
                  placeholderTextColor="#7d7d7d"
                />
              </View>

              <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                <Text style={styles.buttonText}>Salvar Alterações</Text>
              </TouchableOpacity>
            </View>
          ) : null
        }
      />

      {loading && (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#4CAF50" />
        </View>
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
  itemContainer: {
    backgroundColor: "#2e2e2e",
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  itemText: {
    color: "#4CAF50",
    fontSize: 18,
    fontWeight: "bold",
  },
  itemSubText: {
    color: "#fff",
    fontSize: 16,
  },
  editButton: {
    marginTop: 10,
    backgroundColor: "#4CAF50",
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: "center",
  },
  editButtonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
  },
  formContainer: {
    marginTop: 20,
    padding: 10,
    backgroundColor: "#2e2e2e",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  formHeader: {
    fontSize: 20,
    color: "#4CAF50",
    marginBottom: 15,
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
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1e1e1e",
  },
});

export default TreinadoresScreen;
