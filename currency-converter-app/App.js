import { StatusBar } from 'expo-status-bar';
import {
  View,
  Text,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { Button } from './src/components/Button';
import { styles } from './src/styles/App.styles';
import { currencies } from './src/constants/currencies'

export default function App() {
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >

      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.content}>
          <StatusBar style="light" />

          <View style={styles.header}>
            <Text style={styles.title}>Conversor de Moedas</Text>
            <Text style={styles.subTitle}>
              Converta valores entre diferentes moedas
            </Text>
          </View>

          <View style={styles.card}>
            <Text style={styles.label}>De:</Text>
            <View>
              {currencies.map(currency => (
                <Button
                  key={currency.code}
                  variant="primary"
                  currency={currency}
                >
                  
                </Button>
              ))}

            </View>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}