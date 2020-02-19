import React, { Component } from 'react';
import {
  // SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  FlatList,
  StatusBar,
  Image,
  TouchableOpacity,
} from 'react-native';
import Accordian from '../components/Accordion'
// import {
//   Header,
//   LearnMoreLinks,
//   Colors,
//   DebugInstructions,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';

class Home extends Component {

  constructor() {
    super();
    this.state = {
      produtosAtivos: [],
      activeSections: [],
      nomeAluno: '',
      turmaAluno: '',
      descricao: "",
      mensagemSucesso: '',
    };
  }
  static navigationOptions = {
    tabBarIcon: () => (
      <Image style={({ width: 40, height: 40, tintColor: 'white' })} source={require('../img/icons8-home-30.png')} />)
  };

  componentDidMount() {
    this._listarProdutosAtivos();
    this._preencherDadosDoAluno();
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

  _preencherDadosDoAluno = async () => {
    const nomeAluno = await AsyncStorage.getItem('@LojaAAPM:nomeAluno');
    const turmaAluno = await AsyncStorage.getItem('@LojaAAPM:turmaAluno');

    this.setState({ nomeAluno });
    this.setState({ turmaAluno });
  }

  _registrarPedido = async (idProduto) => {

    await fetch('http://192.168.3.101:5000/api/pedidos/cadastrar', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        NomeAluno: this.state.nomeAluno,
        TurmaAluno: this.state.turmaAluno,
        Descricao: this.state.descricao,
        IdProduto: idProduto
      })
    })
      .then(resposta => resposta.json())
      .then(data => this.setState({ mensagemSucesso: "Pedido cadastrado com sucesso" }))
      .catch(erro => console.warn('AAAAA' + erro))
  }



  renderAccordians = (item) => {
    let AccordianItem =
      <Accordian
        title='Descrição'
        data={item.descricao}
      />
    return AccordianItem;
  }



  render() {

    return (
      <View style={styles.fundo}>

        <Text style={styles.titulo}>PRODUTOS</Text>
        <Text>{this.state.mensagemSucesso} </Text>

        <FlatList
          data={this.state.produtosAtivos}
          keyExtractor={item => item.idProduto}
          renderItem={({ item }) => (
            <View style={styles.conteudoLista}>
              <Image style={styles.imagemProduto} source={{ uri: item.imagem }} />
              <View style={styles.informacoesProduto}>



                <Text style={styles.itemProduto}>{item.titulo}</Text>

                <Text style={styles.preco}>R$ {item.preco}</Text>

                {this.renderAccordians(item)}
              </View>




            </View>
          )}
        />




      </View>
    );
  }
}

const styles = StyleSheet.create({
  conteudoLista: {
    marginTop: 20,
  },
  imagemProduto: {
    height: 500,
    width: '90%',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    marginLeft: '5%'
  },
  informacoesProduto: {
    backgroundColor: '#fa5d5d',
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


export default Home;