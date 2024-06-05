import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, ImageBackground, Image, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Login() {
  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleLogin = () => {
    // Verifica se os campos estão preenchidos
    if (email.trim() === '' || senha.trim() === '') {
      Alert.alert('Preencha todos os campos!');
      return;
    }
    
    // Verifica se o campo de email contém o caractere "@"
    if (!email.includes('@')) {
      Alert.alert('O email deve conter o caractere "@"!');
      return;
    }

    // Sua lógica de login aqui
    // Suponha que após a lógica de login, a navegação para a página de sucesso seja feita
    navigation.navigate('LoginSucesso');
  };

  const handleEsqueceuSenha = async () => {
    // Sua lógica de redefinição de senha aqui
    navigation.navigate('EsqueceuSenha');
  };

  const handleCadastro = () => {
    navigation.navigate('Cadastro');
  };

  return (
    <ImageBackground source={require('../oceano-atlantico-caracteristicas-importancia-e-curiosidades (1).png')} style={styles.background}>
      <View style={styles.container}>
        <Image source={require('../logo.png')} style={styles.logo} />
        <Text style={styles.welcomeText}>Login!</Text>
        <TextInput
          placeholder='Digite seu email:'
          value={email}
          onChangeText={setEmail}
          style={styles.input}
        />
        <TextInput
          placeholder='Digite sua senha:'
          value={senha}
          onChangeText={setSenha}
          secureTextEntry={true}
          style={styles.input}
        />
        <TouchableOpacity onPress={handleLogin} style={styles.button}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleEsqueceuSenha} style={styles.button}>
          <Text style={styles.buttonText}>Esqueceu a senha</Text>
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
    borderRadius: 35,
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
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
