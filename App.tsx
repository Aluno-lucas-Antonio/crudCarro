import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './src/home/pagina_cadastro'
//import Home from './src/home/_oldhome.page'

import DatabaseInit from './src/bancodedados/inicializacao';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    new DatabaseInit
    console.log("initialize database")
  }


  render() {
    return (
      <Home />
    );
  }
}