import * as React from 'react';
import {Text, View, FlatList, Image, StyleSheet, ScrollView} from 'react-native';

export default function App()
{

  
  return(
    <View>
    <ScrollView>
      <Text style={style.titulo}> Bebidas </Text>
      <FlatList
      data={arrayBebidas}
      renderItem={({item})=>
      <View style={style.container}>
      <Image style={style.image} source={item.foto}/>
      <Text>
        <Text style={style.texto}> Produto:</Text> {item.produto} {'\n'}
        <Text style={style.texto}> Quantidade: </Text>{item.quantidade} {'\n'}  
        <Text style={style.texto}> Preço: </Text>{item.preco} {'\n'}
      </Text>
      </View>}/>
    </ScrollView>
    </View>
    
    
  );
}

const style = StyleSheet.create({
      image:{
        width: 400,
        height: 700
      },

      texto:{
        textAlign: 'center',
        fontWeight: 'regular'
      },

      titulo:{
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 25
      },

      container:{
        justifyContent: 'center'
      }
});

const arrayBebidas=[
  {produto:'Coca-cola Lata', quantidade:'350ml', preco:'R$7,00', foto:require('../bebidas/cocalata.png')},
  {produto:'Sprite Lata', quantidade:'350ml', preco:'R$7,00', foto:require('../bebidas/spritelata.png')},
  {produto:'Guaraná Lata', quantidade:'350ml', preco:'R$7,00', foto:require('../bebidas/guaranalata.png')},
  {produto:'Coca-cola Zero Lata', quantidade:'350ml', preco:'R$7,00', foto:require('../bebidas/cocazerolata.png')},
  {produto:'Pepsi Lata', quantidade:'350ml', preco:'R$7,00', foto:require('../bebidas/pepsilata.png')}
]