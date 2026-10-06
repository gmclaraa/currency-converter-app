import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <View>
        <Text>Conversor de Moedas</Text>
        <Text>Converta valores entre diferentes moedas</Text>
      </View>

      <View>
        <Text>De:</Text>
        <TouchableOpacity onPress={() => alert("Olá")}><Text>Olá sou um botão</Text></TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#a34646',
    alignItems: 'center',
    justifyContent: 'center',
  },
});