import { View, TextInput, Text } from "react-native";
import { styles } from "./styles";

export function Input({ label, value, onChangeText }) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input}
        placeholder="0.00"
        placeholderTextColor="#94a3b8"
        keyboardType="numeric"
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
}