
import { View, Text } from "react-native";

export function ResultCard({
  exchangeRate,
  result,
  toCurrency,
  currencies,
}) {
  return (
    <View>
      <Text>Resultado: {result}</Text>
    </View>
  );
}
