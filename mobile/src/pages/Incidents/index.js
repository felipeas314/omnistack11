import React from 'react';
import { View,Image,Text,FlatList } from 'react-native';

import logoImg from '../../assets/logo.png'

import styles from './styles';

export default function Incidents(){
  return (
    <View style={styles.container}>
      <View styles={styles.header}>  
        <Image source={logoImg} />
        <Text style={styles.headerText}>
          Total de <Text style={styles.headerTextBold}>0 Casos</Text>
        </Text>
      </View>

      <Text style={styles.title}> Bem-vindo!</Text>
      <Text style={styles.description}> Escolha um dos casos abaixo</Text>

      <FlatList 
        data={[1,2,3,4,5]}
        style={styles.incidentsList}
        keyExtractor={incident => String(incident)}
        renderItem={() => (
          <View style={styles.incident}>
            <Text>ONG:</Text>
            <Text>APAD</Text>

            <Text>CASO:</Text>
            <Text>Cadelinha atropelada</Text>

            <Text>VALOR:</Text>
            <Text>R$ 120,00</Text>
          </View>
        )}
      />
        
    </View>
  )
}