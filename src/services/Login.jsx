import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, Pressable, View, ImageBackground, Image, Alert } from 'react-native'; // Troque TouchableOpacity por Pressable
import { useNavigation } from '@react-navigation/native';
import { auth } from './FirebaseConfig'; // Importando o objeto 'auth' do Firebase
import { signInWithEmailAndPassword } from 'firebase/auth'; // Importando a função 'signInWithEmailAndPassword' do Firebase

export default function Login() {
  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleLogin = async () => {
    try {
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

      // Faz login com email e senha no Firebase
      await signInWithEmailAndPassword(auth, email, senha);
      navigation.navigate('LoginSucesso');
    } catch (error) {
      Alert.alert('Erro ao fazer login', error.message); // Verifique se o erro está sendo passado corretamente
    }
  };

  const handleEsqueceuSenha = async () => {
    // Sua lógica de redefinição de senha aqui
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
        <Pressable onPress={handleLogin} style={styles.button}> {/* Troque TouchableOpacity por Pressable */}
          <Text style={styles.buttonText}>Login</Text>
        </Pressable>
        <Pressable onPress={handleEsqueceuSenha} style={styles.button}> {/* Troque TouchableOpacity por Pressable */}
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
