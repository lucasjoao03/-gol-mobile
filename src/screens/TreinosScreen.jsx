import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  ActivityIndicator,
} from "react-native";

const TreinosScreen = () => {
  const [fields, setFields] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFields = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8000/api/fields");
        if (response.ok) {
          const data = await response.json();
          const fieldsWithTimetable = data.map((field) => ({
            ...field,
            timetable: JSON.parse(field.timetable),
          }));
          setFields(fieldsWithTimetable);
          setLoading(false);
        } else {
          console.error("Erro ao buscar campos");
        }
      } catch (error) {
        console.error("Erro ao buscar campos:", error);
      }
    };

    fetchFields();
  }, []);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#4CAF50" />
        <Text style={styles.loadingText}>Carregando horários...</Text>
      </View>
    );
  }

  const daysOfWeek = [
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
    "sunday",
  ];
  const hours = ["9", "10", "11", "13", "14", "15"];

  const renderTable = (field) => (
    <View style={styles.tableContainer}>
      <Text style={styles.fieldName}>{field.name}</Text>
      <View style={styles.table}>
        <View style={styles.tableHeader}>
          <Text style={styles.headerCell}>Horário</Text>
          {daysOfWeek.map((day) => (
            <Text key={day} style={styles.headerCell}>
              {day.charAt(0).toUpperCase() + day.slice(1)}
            </Text>
          ))}
        </View>
        {hours.map((hour) => (
          <View key={hour} style={styles.tableRow}>
            <Text style={styles.cell}>{hour}:00</Text>
            {daysOfWeek.map((day) => (
              <Text
                key={day}
                style={[
                  styles.cell,
                  {
                    backgroundColor: field.timetable[day][hour]
                      ? "#4CAF50"
                      : "#DC3545",
                  },
                ]}
              >
                {field.timetable[day][hour] ? "Disponível" : "Indisponível"}
              </Text>
            ))}
          </View>
        ))}
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={fields}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => renderTable(item)}
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
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  loadingText: {
    fontSize: 18,
    color: "#4CAF50",
    marginTop: 10,
  },
  tableContainer: {
    marginBottom: 20,
    backgroundColor: "#2e2e2e",
    borderRadius: 10,
    padding: 10,
    elevation: 3,
  },
  fieldName: {
    fontSize: 20,
    color: "#4CAF50",
    marginBottom: 10,
    textAlign: "center",
  },
  table: {
    borderRadius: 10,
    overflow: "hidden",
  },
  tableHeader: {
    flexDirection: "row",
    backgroundColor: "#4CAF50",
  },
  headerCell: {
    flex: 1,
    padding: 10,
    textAlign: "center",
    color: "#fff",
    fontWeight: "bold",
  },
  tableRow: {
    flexDirection: "row",
  },
  cell: {
    flex: 1,
    padding: 10,
    textAlign: "center",
    color: "#fff",
  },
});

export default TreinosScreen;
