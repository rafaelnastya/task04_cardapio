import * as React from 'react';
import {Text, View, FlatList, Image, StyleSheet, ScrollView} from 'react-native';
import  AppLoading  from 'expo-app-loading'

export default function Sobremesa()
{
  return(
    <View>
    <ScrollView>
      <Text style={style.titulo}> Sobremesas </Text>
      <FlatList
      data={arraySobremesa}
      renderItem={({item})=>
      <View style={style.container}>
      <Image style={style.image} source={item.foto}/>
      <Text>
        <Text style={style.texto}> Produto:</Text> {item.produto} {'\n'}  
        <Text style={style.texto}> Preço: </Text>{item.preco} {'\n'}
      </Text>
      </View>}/>
    </ScrollView>  
    </View>
  );
}

const style = StyleSheet.create({
      image:{
        width: 500,
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
})

const arraySobremesa=[
  {produto:'Pudim Gelado', preco:'R$10,00', foto:require('../sobremesas/pudim.jpeg')},
  {produto:'Brownie com Sorvete', preco:'R$15,00', foto:require('../sobremesas/browniesorvete.jpg')},
  {produto:'Bola de sorvete da sua escolha (Quantidade e sabor)', preco:'R$59,90', foto:require('../sobremesas/bolasorvete.jpg')},
  {produto:'Cocada Cremosa de Coco Queimado', preco:'R$1,90 (Cada bola)', foto:require('../sobremesas/cocadac.jpg')},
  {produto:'Cheesecake de Morango', preco:'R$19,90', foto:require('../sobremesas/cheesecakemorango.jpg')}
]