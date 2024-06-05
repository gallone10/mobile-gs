import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, ImageBackground, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function CadastroSucesso() {
  const navigation = useNavigation();

  const voltarParaLogin = () => {
    navigation.navigate('Login'); // Navegar de volta para a página de login
  };

  return (
    <ImageBackground source={require('../oceano-atlantico-caracteristicas-importancia-e-curiosidades (1).png')} style={styles.background}>
      <View style={styles.container}>
        <Image source={require('../logo.png')} style={styles.logo} />
        <Text style={styles.welcomeText}>Cadastro Realizado com Sucesso!</Text>
        <Text style={styles.successText}>Seja bem-vindo(a)!</Text>
        <TouchableOpacity onPress={voltarParaLogin} style={styles.button}>
          <Text style={styles.buttonText}>Voltar para o Login</Text>
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
  successText: {
    fontSize: 16,
    color: '#fff', // Cor branca para o texto de sucesso
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
