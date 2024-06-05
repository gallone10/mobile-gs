import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, ImageBackground, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Importar o hook useNavigation

export default function DenunciaSucesso() {
  const navigation = useNavigation(); 

  const voltar = () => {
    
    navigation.navigate('Home'); 
  };

  return (
    <ImageBackground source={require('../../assets/fundo.png')} style={styles.background}>
      <View style={styles.container}>
      <Image source={require('../../assets/logo.png')} style={styles.logo} />
        <Text style={styles.welcomeText}>Denúncia Enviada com Sucesso!</Text>
        <Text style={styles.successText}>Obrigado por contribuir com a segurança das praias!</Text>
        <TouchableOpacity onPress={voltar} style={styles.button}>
          <Text style={styles.buttonText}>Voltar</Text>
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
