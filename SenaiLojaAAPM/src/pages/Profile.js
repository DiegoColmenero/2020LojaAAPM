import React, { Component } from 'react';
import logo from '../img/logo_menor.png';
import sair from '../img/4115235-exit-logout-sign-out_114030.png'
import {
    // SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    FlatList,
    StatusBar,
    Image,
    AsyncStorage,
    TouchableOpacity,
} from 'react-native';


class Profile extends Component {

    constructor() {
        super();
        this.state = {
            nomeAluno: '',
            turmaAluno: '',
            cursoAluno: '',
            cpfAluno: '',
        };
    }

    static navigationOptions = {
        tabBarIcon: () => (
            <Image style={({ width: 40, height: 40, tintColor: 'white' })} source={require('../img/icons8-user-30.png')} />)
    };

    componentDidMount() {
        this._preencherDadosDoAluno();
    }

    _deslogar = async () => {
        await AsyncStorage.removeItem('@LojaAAPM:nomeAluno');
        await AsyncStorage.removeItem('@LojaAAPM:turmaAluno');
        await AsyncStorage.removeItem('@LojaAAPM:cursoAluno');
        await AsyncStorage.removeItem('@LojaAAPM:cpfAluno');

        this.props.navigation.navigate('AuthStack');
    }

    _preencherDadosDoAluno = async () => {
        const nomeAluno = await AsyncStorage.getItem('@LojaAAPM:nomeAluno');
        const turmaAluno = await AsyncStorage.getItem('@LojaAAPM:turmaAluno');
        const cursoAluno = await AsyncStorage.getItem('@LojaAAPM:cursoAluno');
        const cpfAluno = await AsyncStorage.getItem('@LojaAAPM:cpfAluno');

        this.setState({ nomeAluno });
        this.setState({ turmaAluno });
        this.setState({ cursoAluno });
        this.setState({ cpfAluno });
    }

    render() {

        return (
            <View style={{ display:'flex', flexDirection: 'column', alignItems:'center', backgroundColor: 'e9e9e9' }}>
                <View style={styles.botaoSair}>

                <TouchableOpacity onPress={this._deslogar} >
                    <Image source={sair} style={({ width: 40, height: 40, tintColor: 'black' })}
                    />
                </TouchableOpacity>
                </View>
                <Image source={logo} style={{ alignSelf: 'center', marginTop: 10 }} />
                <View style={styles.informacoesAluno}>
                    <Text style={styles.titulo}>Informações do Aluno</Text>
                    <Text>{this.state.nomeAluno} </Text>
                    <Text>Turma: {this.state.turmaAluno} </Text>
                    <Text>{this.state.cursoAluno} </Text>
                    <Text>CPF: {this.state.cpfAluno} </Text>
                </View>
                

            </View>
        );
    }
}

const styles = StyleSheet.create({
    titulo: {
        fontSize: 40,
        color: '#FF7979',
        letterSpacing: 2,
        fontWeight: '700',
        marginTop: '20%',
        textAlign: 'center'
    },
    informacoesAluno: {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#e9e909',
        width: '80%'
    },
    botaoSair: {
        width: 50
    }
});



export default Profile;