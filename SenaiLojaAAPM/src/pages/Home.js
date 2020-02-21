import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  FlatList,
  StatusBar,
  Image,
  TouchableOpacity,
  TextInput,
  AsyncStorage
} from 'react-native';
// import Accordian from '../components/Accordion'

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
      mensagemErro: ''

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

  _preencherDadosDoAluno = async () => {
    const nomeAluno = await AsyncStorage.getItem('@LojaAAPM:nomeAluno');
    const turmaAluno = await AsyncStorage.getItem('@LojaAAPM:turmaAluno');

    this.setState({ nomeAluno });
    this.setState({ turmaAluno });
  }

  _registrarPedido = async (idProduto) => {

    if (this.state.descricao === '') {
      this.setState({ mensagemErro: 'Insira a descrição do pedido' })
    }
    else {

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
        .then(data => {
          document.querySelectorAll('.o').values='';
        })
        .catch(erro => console.warn('AAAAA' + erro))

      this.setState({ mensagemErro: 'Pedido cadastrado com sucesso' })
    }

  }



  // renderAccordians = (item) => {
  //   let AccordianItem =
  //     <Accordian
  // // title='Descrição'
  // // descricao={item.descricao}
  // // imagem={item.imagem}
  // // titulo={item.titulo}
  // // preco={item.preco}
  // // idProduto={item.idProduto}
  //     />
  //   return AccordianItem;
  // }

  // renderAccordians = () => {
  //   const items= [];
  //   for (item of this.state.produtosAtivos) {
  //     items.push(
  //       <Accordian
  //       descricao={item.descricao}
  //       imagem={item.imagem}
  //       titulo={item.titulo}
  //       preco={item.preco}
  //       idProduto={item.idProduto}
  //     />
  //     );
  //   }
  //   return items;
  // }



  render() {

    return (
      <View style={styles.fundo}>

        <Text style={styles.titulo}>PRODUTOS</Text>

        {/* <FlatList
          data={this.state.produtosAtivos}
          keyExtractor={item => item.idProduto}
          renderItem={({ item }) => (
            <View style={styles.conteudoLista}>
            <Image style={styles.imagemProduto} source={{ uri: item.imagem }} />
            <View style={styles.informacoesProduto}>
            <Text style={styles.itemProduto}>{item.titulo}</Text>
            <Text style={styles.preco}>R$ {item.preco}</Text>
            
            </View>
            </View>
            )}
          /> */}


        <FlatList
          data={this.state.produtosAtivos}
          keyExtractor={item => item.idProduto}
          renderItem={({ item }) => (
            <View style={styles.conteudoLista}>
              <Text style={styles.itemProduto}>{item.titulo}</Text>
              <Image style={styles.imagemProduto} source={{ uri: item.imagem }} />
              <View style={styles.informacoesProduto}>
                <Text style={styles.preco}>R$ {item.preco}</Text>
                <Text style={{ color: '#e9e9e9', fontWeight: 'bolder', fontSize: 20, textAlign: 'center', marginTop: 10, alignSelf: 'center', textTransform: 'uppercase' }}>{item.descricao}</Text>

                <View style={styles.inputCadastrarPedido}>
                  <Text style={{ textAlign: 'center', marginTop: 20, fontSize: 20, color: '#000' }}>Insira informações adicionais (tamanho e estampa):</Text>
                  <TextInput className="o"
                    style={{
                      backgroundColor: '#e9e9e9',
                      borderBottomLeftRadius: 5,
                      borderBottomRightRadius: 5,
                      borderTopRightRadius: 5,
                      borderTopLeftRadius: 5,
                      width: '80%',
                      alignSelf: "center",
                      marginTop: 10,
                      height: 50
                    }}
                    onChangeText={descricao => this.setState({ descricao })}
                    
                    />
                </View>
                <TouchableOpacity onPress={() => this._registrarPedido(item.idProduto)}>
                  <Text style={styles.comprar}>Realizar Pedido</Text>
                </TouchableOpacity>
                <Text style={this.state.mensagemErro === "Pedido cadastrado com sucesso" ? { fontSize: 20, color: '#87e625', textAlign: 'center', fontWeight: 'bold' } : { fontSize: 20, color: 'yellow', textAlign: 'center', fontWeight: 'bold' }}>{this.state.mensagemErro}</Text>

              </View>
            </View>
          )}
        />
      </View>

      /* {this.renderAccordians(item)} */
      // <View>
      //   <Text style={styles.titulo}>PRODUTOS</Text>
      //   <View>

      //     <SafeAreaView>
      //       <ScrollView>
      //         {this.renderAccordians()}
      //       </ScrollView>
      //     </SafeAreaView>
      //   </View>
      // </View>
    );
  }
}

const styles = StyleSheet.create({
  conteudoLista: {
    backgroundColor: '#fa5d5d',
    width: '91%',  
    alignSelf: 'center',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.00,
    elevation: 24,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    marginBottom: 75
  },
  imagemProduto: {
    height: 500,
    width: '90%',
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    marginLeft: '5%',
  },
  informacoesProduto: {
    backgroundColor: '#fa5d5d',
    marginTop: -70,
    borderTopLeftRadius: 7,
    borderTopRightRadius: 7,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    width: '100%',
    padding: 10,
    alignSelf: 'center',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.00,

    elevation: 24,

  },
  fundo: {
    backgroundColor: '#e9e9e9',
    display: "flex",
    flexDirection: "column"
  },
  itemProduto: {
    fontSize: 30,
    textAlign: 'center',
    alignSelf: 'center',
    color: '#e9e9e9',
    fontWeight: 'bold',
    backgroundColor: '#fa5d5d',
    width: '90%',
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5,
    padding: 20
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
    color: '#FFDD74',
    fontWeight: 'bold',
  },
  titulo: {
    fontSize: 50,
    color: '#fa5d5d',
    letterSpacing: 2,
    fontWeight: '700',
    textAlign: 'center',
    backgroundColor: '#e9e9e9'
  },
  comprar: {
    fontSize: 20,
    color: '#fa5d5d',
    backgroundColor: '#e9e9e9',
    fontWeight: 'bold',
    textAlign: 'center',
    width: '50%',
    alignSelf: 'center',
    marginTop: 20,
    marginBottom: 30,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    padding: 4

  }

});


export default Home;