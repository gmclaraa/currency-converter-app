import { Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

export function Button({variant = "primary"}) {
  return (
    <TouchableOpacity style={[
        styles.button, 
        variant=== 'primary'? styles.buttonPrimary : style.buttonSecondary,
        ]}>
      <Text style={styles.buttonText}>Clique aqui</Text>
    </TouchableOpacity>
  );
}