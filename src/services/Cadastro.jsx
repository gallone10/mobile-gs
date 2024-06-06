import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, ImageBackground, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native'; 
import { auth } from './FirebaseConfig';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, sendPasswordResetEmail } from "firebase/auth";

export default function Cadastro() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const navigation = useNavigation(); 

  const cadastrar = async () => {
    if (nome.trim() === '' || email.trim() === '' || senha.trim() === '' || confirmarSenha.trim() === '') {
      alert('Por favor, preencha todos os campos!');
      return;
    }

    if (senha !== confirmarSenha) {
      alert('As senhas não correspondem!');
      return;
    }

    if (!email.includes('@')) {
      alert('O email deve conter o caractere "@"!');
      return;
    }

    try {
      // Cria o usuário com email e senha no Firebase
      await createUserWithEmailAndPassword(auth, email, senha);
      alert('Cadastro realizado com sucesso!');
      navigation.navigate('CadastroSucesso');
    } catch (error) {
      alert(`Erro ao cadastrar: ${error.message}`);
    }
  };

  return (
    <ImageBackground source={require('../../assets/fundo.png')} style={styles.background}>
      <View style={styles.container}>
        <Image source={require('../../assets/logo.png')} style={styles.logo} />
        <Text style={styles.welcomeText}>Cadastro</Text>
        <TextInput
          placeholder='Digite seu nome:'
          value={nome}
          onChangeText={(valor) => setNome(valor)}
          style={styles.input}
        />
        <TextInput
          placeholder='Digite seu email:'
          value={email}
          onChangeText={(valor) => setEmail(valor)}
          style={styles.input}
        />
        <TextInput
          placeholder='Digite sua senha:'
          value={senha}
          onChangeText={(valor) => setSenha(valor)}
          secureTextEntry={true}
          style={styles.input}
        />
        <TextInput
          placeholder='Confirme sua senha:'
          value={confirmarSenha}
          onChangeText={(valor) => setConfirmarSenha(valor)}
          secureTextEntry={true}
          style={styles.input}
        />
        <TouchableOpacity onPress={cadastrar} style={styles.button}>
          <Text style={styles.buttonText}>Cadastrar</Text>
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
    backgroundColor: 'rgba(0,0,0,0.3)', // Cor de fundo #20B2AA
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
  button: {
    backgroundColor: '#007BFF',
    padding: 10,
    marginTop: 10,
    borderRadius: 25,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
