import React, { Component } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, SafeAreaView, Image, Animated } from "react-native";
import downArrow from '../img/icons8-ios-filled-50.png'


export default class Accordian extends Component {

    constructor(props) {
        super(props);
        this.state = {
            expanded: false,
            idProduto: props.idProduto,
            imagem: props.imagem,
            titulo: props.titulo,
            preco: props.preco,
            descricao: props.descricao,
            arrow: props.arrow,
        }
    }

    render() {

        return (
            <View></View>
            // <SafeAreaView>
            //     <View >
            //         <View >
            //             <Image source={this.props.imagem} />
            //             <TouchableOpacity onPress={() => this.toggleExpand()}>
            //                 <Image source={downArrow} style={{ tintColor: '#e9e9e9', alignSelf: 'center' }} />
            //             </TouchableOpacity>
            //             <View />
            //             {
            //                 this.state.expanded &&
            //                 <View style={styles}>
            //                     <Text style={{ fontSize: 18, textAlign: 'center', alignSelf: 'center', fontWeight: 'bold', color: '#fff' }}>{this.props.titulo}</Text>
            //                     <Text>R$ {this.props.preco}</Text>
            //                     <Text>{this.props.descricao}</Text>
            //                     <TouchableOpacity onPress={() => this._registrarPedido(this.props.idProduto)}>
            //                         <Text style={styles.comprar}>Comprar</Text>
            //                     </TouchableOpacity>
            //                 </View>
            //             }
            //         </View>
            //     </View>
            // </SafeAreaView>

            // <SafeAreaView>
            //     <View>
            //         <View}>
            //             <View/>
            //             {
            //                 this.state.expanded &&
            //                 <View style={styles.child}>
            //                     <Image source={this.props.imagem} />
            //                     <Text>{this.props.titulo}</Text>
            //                     <Text>R$ {this.props.preco}</Text>
            //                     <TouchableOpacity style={styles.row} onPress={() => this.toggleExpand()}>
            //                         <Image source={this.props.arrow} />
            //                     </TouchableOpacity>
            //                     <Text>{this.props.descricao}</Text>
            //                     <TouchableOpacity style={styles.row} onPress={() => this.toggleExpand()}>
            //                         <Text>Comprar</Text>
            //                     </TouchableOpacity>
            //                     <Text>Comprar</Text>
            //                 </View>
            //             }
            //         </View>
            //     </View>
            // </SafeAreaView>
        )
    }

    toggleExpand = () => {
        this.setState({ expanded: !this.state.expanded })
    }


}

const styles = StyleSheet.create({
    // tudo: {
    //     backgroundColor: '#2A3A3B',

    // },
    // tudo2: {
    //     marginBottom: 35,
    //     backgroundColor: '#fa5d5d',
    //     borderBottomLeftRadius: 5,
    //     borderBottomRightRadius: 5
    // },
    // title: {
    //     fontSize: 22,
    //     fontWeight: 'bold',
    //     color: '#EB4A5F',
    // },
    // row: {
    //     flexDirection: 'row',
    //     justifyContent: 'space-between',
    //     height: 70,
    //     paddingLeft: 50,
    //     marginTop: 10,
    //     alignItems: 'center',
    //     backgroundColor: 'white',
    //     borderColor: '#EB4A5F',
    //     borderWidth: 2,
    //     borderRadius: 10,
    //     width: '100%',
    // },
    // parentHr: {
    //     height: 0,
    //     color: 'black',
    //     width: '100%'
    // },
    // child: {
    //     backgroundColor: '#D3D3D3',
    //     padding: 16,
    //     width: '100%',
    // },
    // crianca: {
    //     fontSize: 18,
    //     paddingBottom: 10,
    // },
    
});