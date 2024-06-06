import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, ImageBackground, Image, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { db } from './FirebaseConfig';
import { collection, addDoc } from 'firebase/firestore';

export default function Denuncia() {
  const [cidade, setCidade] = useState('');
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [descricao, setDescricao] = useState('');
  const navigation = useNavigation();

  const enviarDenuncia = async () => {
    try {
      const docRef = await addDoc(collection(db, 'denuncias'), {
        cidade,
        latitude,
        longitude,
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
    if (cidade.trim() === '' || latitude.trim() === '' || longitude.trim() === '' || descricao.trim() === '') {
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
          placeholder='Latitude:'
          value={latitude}
          onChangeText={setLatitude}
          style={styles.input}
        />
        <TextInput
          placeholder='Longitude:'
          value={longitude}
          onChangeText={setLongitude}
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
    backgroundColor: 'rgba(0,0,0,0.3)', // Cor de fundo
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
    color: '#fff', // Cor branca para o texto de boas-vindas
    marginBottom: 20,
  },
  input: {
    width: '100%',
    padding: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 25,
    backgroundColor: '#fff', // Cor branca para o fundo dos inputs
  },
  descricaoInput: {
    height: 100, // Altura da caixa de texto da descrição
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
