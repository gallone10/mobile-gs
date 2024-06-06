import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/services/Home.jsx';
import Cadastro from './src/services/Cadastro.jsx'
import Login from './src/services/Login.jsx'
import EsqueceuSenha from './src/services/EsqueceuSenha.jsx'
import Denuncia from './src/services/Denuncia.jsx'
import DenunciaSucesso from './src/services/DenunciaSucesso.jsx'
import CadastroSucesso from './src/services/CadastroSucesso.jsx'
import SenhaSucesso from './src/services/SenhaSucesso.jsx'
import LoginSucesso from './src/services/LoginSucesso.jsx'


const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name ='Cadastro' component={Cadastro} />
        <Stack.Screen name ='Login' component={Login} />
        <Stack.Screen name ='EsqueceuSenha' component={EsqueceuSenha} />
        <Stack.Screen name ='Denuncia' component={Denuncia} />
        <Stack.Screen name ='DenunciaSucesso' component={DenunciaSucesso} />
        <Stack.Screen name ='CadastroSucesso' component={CadastroSucesso} />
        <Stack.Screen name ='SenhaSucesso' component={SenhaSucesso} />
        <Stack.Screen name ='LoginSucesso' component={LoginSucesso} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
