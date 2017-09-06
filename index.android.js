/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';

import ListaItens from './src/components/ListaItens';

export default class catalogo_de_produtos extends Component {
    constructor(props) {
        super(props);
        console.log('Construindo a aplicação');
    }

    componentWillMount() {
        console.log('Fazer alguma coisa antes de rederizar');
    }

    componentDidMount() {
        console.log('Fazer alguma coisa depois da rederização');
    }

    render() {
        console.log('Objeto é renderizado');

        return (
            <ListaItens />
        );
    }

}

AppRegistry.registerComponent('catalogo_de_produtos', () => catalogo_de_produtos);
