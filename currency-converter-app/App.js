import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import {
  View,
  Text,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { Button } from './src/components/Button';
import { Input } from './src/components/Input';
import { styles } from './src/styles/App.styles';
import { currencies } from './src/constants/currencies';

export default function App() {
  const [amount, setAmount] = useState('');

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
            <View style={styles.currencyGrid}>
              {currencies.map(currency => (
                <Button
                  key={currency.code}
                  variant="primary"
                  currency={currency}
                />
              ))}
            </View>

            <Input label="Valor:" value={amount} onChangeText={setAmount} />
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}