import * as React from 'react';
import {Text, View, FlatList, Image, StyleSheet, ScrollView} from 'react-native';

export default function App()
{
  return(
    <View>
    <ScrollView>
      <Text style={style.titulo}> Pratos Principais </Text>
      <FlatList
      data={arrayPratos}
      renderItem={({item})=>
      <View style={style.container}>
      <Image style={style.image} source={item.foto}/>
      <Text>
        <Text style={style.texto}> Produto:</Text> {item.produto} {'\n'}
        <Text style={style.texto}> Serve: </Text>{item.serve} {'\n'}  
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

});

const arrayPratos=[
  {produto:'Fritas com molho Barbecue', serve:'1 Pessoa', preco:'R$25,00', foto:require('../pratosprincipais/fritas.jpg')},
  {produto:'MINI-Hamburguer', serve:'1 Pessoa', preco:'R$22,00', foto:require('../pratosprincipais/mini-hamburguer.jpg')},
  {produto:'Hamburguer de Costela', serve:'1 Pessoa', preco:'R$59,90', foto:require('../pratosprincipais/costelaham.jpg')},
  {produto:'Hamburguer de Frango Crispy', serve:'1 Pessoa', preco:'R$49,90', foto:require('../pratosprincipais/frangocrispys.jpg')},
  {produto:'Bobó de camarão', serve:'2 Pessoas', preco:'R$69,90', foto:require('../pratosprincipais/bobocamarao.png')}
]