import React from 'react';
import { View, Text, StyleSheet} from 'react-native';
import Input from '../../components/Input/Input';
import { useFonts } from 'expo-font';
import CustomButton from '../../components/Button/CustomButton';

const Projects = () => {
  const [fontsLoaded] = useFonts({
    'Poppins-Bold': require('../../../assets/fonts/Poppins-Bold.ttf'),
    'Poppins-Light': require('../../../assets/fonts/Poppins-Light.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastrar projeto</Text>
      <View style={[styles.box, {alignItems: 'flex-start'}]}>
        <Text style={styles.text}>Nome do Projeto</Text>
        <Input placeholder= 'Ex: Samuel Cesar'></Input>
        <Text style={styles.text}>Tags</Text>
        <Input placeholder='Ex: Samuel Cesar de Oliveira'/>
        <Text style={styles.text}>Descrição (100 caracteres)</Text>
        <Input placeholder= 'Ex. Projeto desenvolvido usando Java, servindo como base de estudo e desenvolvimento.'></Input>
        <Text style={styles.text}>Link para Github</Text>
        <Input placeholder='Ex: Samuel Cesar de Oliveira'/>
        <Text style={styles.text}>Técnologias Utilizadas</Text>
        <Input placeholder='Escolha a técnologia'></Input>
      </View>
      <View style={styles.btn}>
        <CustomButton
        title="Voltar"
        onPress={() => navigation.navigate('Home')}
        buttonStyle={styles.buttonLogin}
        />
        <CustomButton
        title="Finalizar"
        onPress={() => navigation.navigate('Home')}
        buttonStyle={styles.buttonLogin}
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center',
    flexDirection: "column",
  },
  title: {
    fontSize: 30,
    fontFamily: 'Poppins-Bold',
    color: "#535272",
    marginBottom: 20,
    textAlign: "center",
  },
  text: {
    fontSize: 15,
    fontFamily: 'Poppins-Bold',
    color: "#535272",
  },
  btn: {
    flexDirection: "row",
  }

});
export default Projects;
