import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './components/Home.jsx';
import Cadastro from './components/Cadastro.jsx'
import Login from './components/Login.jsx'
import EsqueceuSenha from './components/EsqueceuSenha.jsx'
import Denuncia from './components/Denuncia.jsx'
import DenunciaSucesso from './components/DenunciaSucesso.jsx'
import CadastroSucesso from './components/CadastroSucesso.jsx'
import LoginSucesso from './components/LoginSucesso.jsx'
import SenhaSucesso from './components/SenhaSucesso.jsx'


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
        <Stack.Screen name ='LoginSucesso' component={LoginSucesso} />
        <Stack.Screen name ='SenhaSucesso' component={SenhaSucesso} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
