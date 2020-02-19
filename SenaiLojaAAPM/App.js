import React, { Component } from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  FlatList,
  StatusBar,
  Image,
  TouchableOpacity,
} from 'react-native';

class App extends Component{

  constructor() {
    super();
    this.state = {
      produtosAtivos: [],
      activeSections: [],

    };
  }
  
  componentDidMount() {
    this._listarProdutosAtivos();
  }
  
  
  _listarProdutosAtivos = async () => {
    await fetch('http://192.168.3.101:5000/api/produtos/listarativos')
      .then(resposta => resposta.json())
      .then(data => this.setState({ produtosAtivos: data }))
      .catch(erro => console.warn(erro));
  };

  _listarDescricao = async () => { 
    await fetch('http://192.168.3.101:5000/api/produtos/listarativos')
      .then(resposta => resposta.json())
      .then(data => this.setState({ produtosAtivos: data }))
      .catch(erro => console.warn(erro));
  };

  

  




  
render(){

  return (
    <View style={styles.fundo}>
        
      

      
    </View>
  );
  }
}

const styles = StyleSheet.create({
  conteudoLista: {
    marginTop: 20,
  },
  imagemProduto: {
    height:500, 
    width:'90%',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    marginLeft: '5%'
  },
  informacoesProduto: {
    backgroundColor: '#a3a3a39b',
    marginTop: -170,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    width: '90%',
    marginLeft: '5%',
    height: 170
  },
  fundo: {
    backgroundColor: '#e9e9e9'
  },
  itemProduto: {
    fontSize: 30,
    marginTop: 30,
    marginLeft: 10,
    color: '#E9E9E9',
    fontWeight: 'bold'
  },
  itemProduto2: {
    marginTop: 10,
    fontSize: 20,
    marginLeft: 10
  },
  preco: {
    fontSize: 30,
    marginTop: 10,
    marginLeft: 10,
    color: '#fcf0a0'
  },
  titulo: {
    fontSize: 50,
    color: '#fa5d5d',
    letterSpacing: 2,
    fontWeight: '700',
    textAlign: 'center',
    backgroundColor: '#e9e9e9'
  },
});


export default App;