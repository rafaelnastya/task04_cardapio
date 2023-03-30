import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Cardapio from './homecardapio';
import Bebidas from './bebidas';
import PratosPrincipais from './pratosprincipais';
import Sobremesas from './sobremesa';

const Stack = createStackNavigator();

export default function Rota()
{
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Cardapio" component={Cardapio}/>
        <Stack.Screen name="Bebidas" component={Bebidas}/>
        <Stack.Screen name="PratosPrincipais" component={PratosPrincipais}/>
        <Stack.Screen name="Sobremesas" component={Sobremesas}/>
      </Stack.Navigator>

    </NavigationContainer>
  )
  
  
}