
import { View, Text } from 'react-native';
import { styles } from './styles';

export function ResultCard({
  exchangeRate,
  result,
  fromCurrency,
  toCurrency,
}) {
  if (result == null || exchangeRate == null) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Resultado:</Text>

      <Text style={styles.amount}>
        {result} {toCurrency}
      </Text>

      <Text style={styles.rate}>
        Taxa de câmbio: 1 {fromCurrency} ={' '}
        {Number(exchangeRate).toFixed(4)} {toCurrency}
      </Text>
    </View>
  );
}
