import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Програмування мережних та мобільних застосувань</Text>
      <Text>Лабораторна робота №1</Text>
      <Text>Виконав студент Мруг М.О.</Text>
      <Text style={styles.title}>Емулятор запущен</Text>
      <StatusBar style={styles.title} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: "bold",
    marginVertical: 4,
    fontSize: 20,
  }
});
