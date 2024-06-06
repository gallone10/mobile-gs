import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, ImageBackground, Image, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { db } from './FirebaseConfig';
import { collection, addDoc } from 'firebase/firestore';

export default function Denuncia() {
  const [cidade, setCidade] = useState('');
  const [praia, setPraia] = useState('');
  const [referencia, setReferencia] = useState('');
  const [descricao, setDescricao] = useState('');
  const navigation = useNavigation();

  const enviarDenuncia = async () => {
    try {
      const docRef = await addDoc(collection(db, 'denuncias'), {
        cidade,
        praia,
        referencia,
        descricao,
        timestamp: new Date(),
      });
      Alert.alert('Denúncia enviada com sucesso!', `ID da denúncia: ${docRef.id}`);
      navigation.navigate('DenunciaSucesso');
    } catch (error) {
      Alert.alert('Erro ao enviar denúncia', error.message);
    }
  };

  const validarCampos = () => {
    if (cidade.trim() === '' || praia.trim() === '' || referencia.trim() === '' || descricao.trim() === '') {
      Alert.alert('Por favor, preencha todos os campos.');
      return false;
    }
    return true;
  };

  const handleEnviarDenuncia = () => {
    if (validarCampos()) {
      enviarDenuncia();
    }
  };

  return (
    <ImageBackground source={require('../../assets/fundo.png')} style={styles.background}>
      <View style={styles.container}>
        <Image source={require('../../assets/logo.png')} style={styles.logo} />
        <Text style={styles.welcomeText}>Denúncia</Text>
        <TextInput
          placeholder='Cidade:'
          value={cidade}
          onChangeText={setCidade}
          style={styles.input}
        />
        <TextInput
          placeholder='Praia:'
          value={praia}
          onChangeText={setPraia}
          style={styles.input}
        />
        <TextInput
          placeholder='Referência:'
          value={referencia}
          onChangeText={setReferencia}
          style={styles.input}
        />
        <TextInput
          placeholder='Descreva o que está acontecendo:'
          value={descricao}
          onChangeText={setDescricao}
          style={[styles.input, styles.descricaoInput]}
          multiline={true}
          numberOfLines={4}
        />
        <TouchableOpacity onPress={handleEnviarDenuncia} style={styles.button}>
          <Text style={styles.buttonText}>Enviar Denúncia</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.3)', 
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff', 
    marginBottom: 20,
  },
  input: {
    width: '100%',
    padding: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 25,
    backgroundColor: '#fff', 
  },
  descricaoInput: {
    height: 100, 
  },
  button: {
    backgroundColor: '#007BFF',
    padding: 10,
    marginTop: 10,
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
