import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import {
  View,
  Text,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
} from 'react-native';
import { Button } from './src/components/Button';
import { Input } from './src/components/Input';
import { styles } from './src/styles/App.styles';
import { currencies } from './src/constants/currencies';
import { ResultCard } from './src/components/ResultCard';
import { exchangeRateApi } from './src/services/api';

export default function App() {
  const [amount, setAmount] = useState("");
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("BRL");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [exchangeRate, setExchangeRate] = useState(null);

  async function fetchExchangeRate() {
    const data = await exchangeRateApi('BRL');
    console.log(data);
  }

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

            <TouchableOpacity style={styles.swapButton}>
              <Text style={styles.swapButtonText}>↑↓</Text>
            </TouchableOpacity>

            <Text style={styles.label}>Para:</Text>
            <View style={styles.currencyGrid}>
              {currencies.map(currency => (
                <Button
                  key={currency.code}
                  variant="secondary"
                  currency={currency}
                />
              ))}
            </View>
          </View>

          <TouchableOpacity
            style={styles.convertButton}
            onPress={fetchExchangeRate}
          >
            <Text style={styles.swapButtonText}>Converter</Text>
          </TouchableOpacity>

          <ResultCard />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}