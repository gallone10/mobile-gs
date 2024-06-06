import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, Pressable, View, ImageBackground, Image, Alert } from 'react-native'; 
import { useNavigation } from '@react-navigation/native';
import { auth } from './FirebaseConfig'; //
import { signInWithEmailAndPassword } from 'firebase/auth'; 

export default function Login() {
  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleLogin = async () => {
    try {
      
      if (email.trim() === '' || senha.trim() === '') {
        Alert.alert('Preencha todos os campos!');
        return;
      }

      
      if (!email.includes('@')) {
        Alert.alert('O email deve conter o caractere "@"!');
        return;
      }

      
      await signInWithEmailAndPassword(auth, email, senha);
      navigation.navigate('LoginSucesso');
    } catch (error) {
      Alert.alert('Erro ao fazer login', error.message); 
    }
  };

  const handleEsqueceuSenha = async () => {
    
    navigation.navigate('EsqueceuSenha');
  };

  const handleCadastro = () => {
    navigation.navigate('Cadastro');
  };

  return (
    <ImageBackground source={require('../../assets/fundo.png')} style={styles.background}>
      <View style={styles.container}>
        <Image source={require('../../assets/logo.png')} style={styles.logo} />
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
        <Pressable onPress={handleLogin} style={styles.button}> 
          <Text style={styles.buttonText}>Login</Text>
        </Pressable>
        <Pressable onPress={handleEsqueceuSenha} style={styles.button}> 
          <Text style={styles.buttonText}>Esqueceu a senha</Text>
        </Pressable>
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
    borderRadius: 35,
    backgroundColor: '#fff',
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
