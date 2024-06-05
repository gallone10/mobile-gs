import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, ImageBackground, Image } from 'react-native'; // Import Image from 'react-native'
import { useNavigation } from '@react-navigation/native';

export default function App() {
  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const cadastrar = () => {
    // Aqui você pode adicionar a lógica para criar o usuário
    navigation.navigate('Cadastro'); 
  };

  const login = () => {
    navigation.navigate('Login');
  };

  const EsqueceuSenha = () => {
    navigation.navigate('EsqueceuSenha');
  };

  const fazerDenuncia = () => {
    // Sua lógica para fazer a denúncia aqui
    navigation.navigate('Denuncia');
  };

  return (
    <ImageBackground source={require('../../assets/fundo.png')} style={styles.background}>
      <View style={styles.container}>
      <Image source={require('../../assets/logo.png')} style={styles.logo} />
        <Text style={styles.welcomeText}>Bem-vindo!</Text>
        <TouchableOpacity onPress={login} style={styles.button}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={cadastrar} style={styles.button}>
          <Text style={styles.buttonText}>Cadastrar</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={fazerDenuncia} style={[styles.button, styles.denunciaButton]}>
          <Text style={styles.buttonText}>Faça sua denúncia</Text>
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
    backgroundColor: 'rgba(0,0,0,0.3)', // Cor azul claro
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
    borderRadius: 5,
    backgroundColor: '#fff', // Cor branca para o fundo dos inputs
  },
  button: {
    backgroundColor: '#007BFF',
    padding: 10,
    marginTop: 10,
    borderRadius: 35,
    width: '100%',
    alignItems: 'center',
  },
  denunciaButton: {
    backgroundColor: '#007BFF', // Mesma cor dos outros botões
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
