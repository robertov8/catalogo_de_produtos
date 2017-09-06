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
    render() {
        return (
            <ListaItens />
        );
    }
}

AppRegistry.registerComponent('catalogo_de_produtos', () => catalogo_de_produtos);
