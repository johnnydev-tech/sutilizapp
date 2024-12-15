import { suavizarOfensa } from "@/services/ai/generator_prompt";
import styles from "@/styles";
import { useState } from "react";
import { Keyboard, Platform, Text, TextInput, TouchableOpacity, View } from "react-native";

import CustomColors from "@/styles/custom_colors";
import { faCopy, faCheckCircle } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import * as Clipboard from 'expo-clipboard';

import { MotiView } from 'moti';

export default function Index() {
  const [ofensa, setOfensa] = useState("")
  const [resposta, setResposta] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [isCopying, setIsCopying] = useState(false)

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

    if (Platform.OS === 'ios' || Platform.OS === 'android') {
      Keyboard.dismiss();
    }
  }

  const copyToClipboard = async () => {
    await Clipboard.setStringAsync(resposta);
    setIsCopying(true);
    setTimeout(() => setIsCopying(false), 1000);
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
        placeholderTextColor={CustomColors.placeHolder}
        placeholder="Digite o que está pensando..."></TextInput>

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
            <View style={styles.copyContainer}>
              <Text style={styles.cardTitle}>Aqui está sua frase suavizada:</Text>

              <TouchableOpacity onPress={copyToClipboard}>
                {
                  isCopying ?
                    <MotiView
                      from={{ opacity: 0, translateY: -20 }}
                      animate={{ opacity: 1, translateY: 0 }}
                    >
                      <FontAwesomeIcon icon={faCheckCircle} size={20} color="green" />
                    </MotiView> :

                    <FontAwesomeIcon icon={faCopy} size={20} />

                }
              </TouchableOpacity>
            </View>
            <Text style={styles.cardText}>{resposta}</Text>
          </MotiView>
        )
      }

    </View>
  );
}