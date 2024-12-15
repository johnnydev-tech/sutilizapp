import { suavizarOfensa } from "@/services/ai/generator_prompt";
import styles from "@/styles";
import { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { MotiView } from 'moti';

export default function Index() {
  const [ofensa, setOfensa] = useState("")
  const [resposta, setResposta] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const callOfensa = async () => {
    if (ofensa.length < 5) {
      alert("Desculpe, o evento precisa ter mais de 5 caracteres")
      return;
    }

    setIsLoading(true);
    setOfensa("")
    setResposta("")

    try {
      const result = await suavizarOfensa(ofensa);
      setResposta(result)
    } catch (error) {
      alert(error)
    } finally {
      setIsLoading(false);
    }


  }

  return (
    <View
      style={styles.container}
    >
      <Text style={styles.titulo}>Suavizador de Ofensa</Text>
      <Text style={styles.subtitulo}>Transforme palavras duras em elegância!</Text>
      <TextInput
        onChangeText={setOfensa}
        value={ofensa}
        style={styles.input}
        placeholder="Digite o evento que você quer evitar ..."></TextInput>

      <TouchableOpacity style={styles.button} onPress={callOfensa}>
        <Text style={styles.buttonText}>{isLoading ? "Ajustando o tom..." : "Suavizar a frase!"}</Text>
      </TouchableOpacity>


      {
        resposta && (
          <MotiView
            style={styles.card}
            from={{ opacity: 0, translateX: 200 }}
            animate={{ opacity: 1, translateX: 0 }}
          >
            <Text style={styles.cardTitle}>Aqui está sua frase suavizada:</Text>
            <Text style={styles.cardText}>{resposta}</Text>
          </MotiView>
        )
      }

    </View>
  );
}