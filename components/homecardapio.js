import * as React from 'react';
import {Text, View, Image, StyleSheet, TouchableOpacity, ScrollView} from 'react-native';

export default function Home(props)
{
  return(
    <View style={style.container}>
    <ScrollView>
      <Text style={style.titulo}> Cthulhu Menu </Text>
      <Image style={style.image} source={require('../cthulhu/cthulhu.png')}/>

    <TouchableOpacity style={style.color1} onPress={()=>{props.navigation.navigate('Bebidas')}}>
      <Text style={style.texto}> Bebidas </Text>
    </TouchableOpacity>

    <TouchableOpacity style={style.color2} onPress={()=>{props.navigation.navigate('PratosPrincipais')}}>
      <Text style={style.texto}> Pratos Principais </Text>
    </TouchableOpacity>

    <TouchableOpacity style={style.color3} onPress={()=>{props.navigation.navigate('Sobremesas')}}>
      <Text style={style.texto}> Sobremesas </Text>
    </TouchableOpacity>
    </ScrollView>
    </View>
  );
}

const style = StyleSheet.create({
      image:{
        width: 400,
        height: 300
      },

      texto:{
        textAlign: 'center',
      },

      titulo:{
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 25
      },

      container:{
        justifyContent: 'center',
        resizeMode: 'center'
      }
})