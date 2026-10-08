import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
  import { Button } from './src/components/Button';

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
        <Button></Button>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f9',
    alignItems: 'center',
    justifyContent: 'center',
  },
});