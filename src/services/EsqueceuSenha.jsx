import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, ImageBackground, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function ForgotPassword() {
  const navigation = useNavigation();

  const [email, setEmail] = useState('');

  const handleResetPassword = () => {
    // Sua lógica de redefinição de senha aqui
    navigation.navigate('SenhaSucesso');
  };

  const handleLogin = () => {
    navigation.navigate('Login');
  };

  const handleCadastro = () => {
    navigation.navigate('Cadastro');
  };

  return (
    <ImageBackground source={require('../../assets/fundo.png')} style={styles.background}>
      <View style={styles.container}>
      <Image source={require('../../assets/logo.png')} style={styles.logo} />
        <Text style={styles.welcomeText}>Esqueceu sua senha?</Text>
        <Text style={styles.instruction}>Digite seu email abaixo para redefinir sua senha:</Text>
        <TextInput
          placeholder='Digite seu email'
          value={email}
          onChangeText={setEmail}
          style={styles.input}
        />
        <TouchableOpacity onPress={handleResetPassword} style={styles.button}>
          <Text style={styles.buttonText}>Redefinir Senha</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleLogin} style={styles.button}>
          <Text style={styles.buttonText}>Voltar para Login</Text>
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
    marginBottom: 10,
  },
  instruction: {
    fontSize: 16,
    color: '#fff', // Cor branca para o texto de instrução
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
