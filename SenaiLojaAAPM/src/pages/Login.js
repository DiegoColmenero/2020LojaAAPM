import React, { Component } from 'react';
import { Text, View, Image, TextInput, TouchableOpacity, StyleSheet, FlatList, ScrollView, AsyncStorage } from 'react-native';
import logo from '../img/logo_menor.png'
class Login extends Component {



  constructor() {
    super();
    this.state = {
      cpf: '46938238804',
      temValor: null,
      aluno: {},
      

    };
  }

  static navigationOptions = {
    header: null
  }


  _realizarLogin = async () => {
    if (this.state.cpf == '') {
      this.setState({ temValor: 'Cpf não existente' })
    } else {

      await fetch('http://corujasdev-001-site1.etempurl.com/api/Aluno/' + this.state.cpf)
        .then(resposta => resposta.json())
        .then(data => this.setState({ aluno: data }), this._irParaHome())
        .catch(erro => console.warn(erro));
    }
  }


  _irParaHome = async () => {
    if (this.state.aluno.status !== 404) {

      try {
        await AsyncStorage.setItem('@LojaAAPM:nomeAluno', this.state.aluno.nome);
        await AsyncStorage.setItem('@LojaAAPM:turmaAluno', this.state.aluno.turma);
        await AsyncStorage.setItem('@LojaAAPM:cursoAluno', this.state.aluno.curso);
        await AsyncStorage.setItem('@LojaAAPM:cpfAluno', this.state.aluno.cpf);

      } catch (error) {
      }

      this.props.navigation.navigate('MainNavigator');
    }
  };

  render() {
    return (
      // <ScrollView>

      <View style={styles.screen}>
        <Image source={logo} style={styles.logo} />
        <View style={styles.loginArea}>

          <Text style={styles.titulo}>LOGIN</Text>
          <TextInput
            style={styles.label}
            placeholder="CPF"
            onChangeText={cpf => this.setState({ cpf })}
            value={this.state.cpf}
          />
          <TouchableOpacity onPress={this._realizarLogin} style={styles.btnLogin}>
            <Text style={styles.nomeBtn}>ACESSAR</Text>
          </TouchableOpacity>

        </View>
      </View>
      // </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  btnLogin: {
    backgroundColor: '#FF7979',
    width: '45%',
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    marginTop: 10,
    alignSelf: 'center'

  },
  titulo: {
    fontSize: 50,
    color: '#FF7979',
    letterSpacing: 6,
    fontWeight: '700',
    marginTop: '20%',
    textAlign: 'center'
  },
  nomeBtn: {
    fontSize: 20,
    paddingBottom: 10,
    paddingTop: 10,
    textAlign: 'center',
    color: '#fff', fontWeight: '700', letterSpacing: 3
  },
  loginArea: {
    backgroundColor: '#fff',
    height: 450,
    marginTop: '10%',
    width: '80%',
    alignSelf: 'center',
    justifyContent: 'space-between'

  },
  screen: {
    height: '100%',
    backgroundColor: '#e9e9e9',
    display: 'flex',
    flexDirection: 'column'

  },
  label: {
    backgroundColor: '#e9e9e9',
    width: '70%',
    alignSelf: 'center',
    marginTop: 70,
  },
  logo: {
    marginTop: 15,
    alignSelf: 'center'
  }
});

export default Login;
