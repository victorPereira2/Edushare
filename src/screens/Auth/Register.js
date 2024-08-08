import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useFonts } from 'expo-font';
import CustomButton from '../../components/Button/CustomButton';
import Input from '../../components/Input/Input';


const Register = ({ navigation }) => {
  const [fontsLoaded] = useFonts({
    'Poppins-Bold': require('../../../assets/fonts/Poppins-Bold.ttf'),
    'Poppins-Light': require('../../../assets/fonts/Poppins-Light.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastre-se</Text>
      
      <Text style={[styles.text, { textAlign: 'left' }]}>Nome de usuário (a)</Text>
      <Input placeholder="Ex. Samuel Cesar"></Input>
      
      <Text style={[styles.text, { textAlign: 'left' }]}>Nome Completo</Text>
      <Input placeholder="Ex. Samuel Cesar de Oliveira"></Input>
      
      <Text style={[styles.text, { textAlign: 'left' }]}>E-mail institucional</Text>
      <Input placeholder="Ex. Samuel Cesar de Oliveira"></Input>
      
      <Text style={[styles.text, { textAlign: 'left' }]}>Senha</Text>
      <Input placeholder="**************"></Input>

      <CustomButton
        title="Finalizar"
        onPress={() => navigation.navigate('Home')}
        buttonStyle={styles.buttonLogin}
      />
       <TouchableOpacity onPress={() => navigation.navigate('Login')}>
       <Text style={styles.buttonTextContainer}>
       Já tem uma conta?{' '}
          <Text style={styles.buttonTextLink}>Faça seu login</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center',
  }, 
  title: {
    fontSize: 30,
    fontFamily: 'Poppins-Bold',
    color: "#535272",
    marginBottom: 50, 
  }, 
  text: {
    fontSize: 14,
    fontFamily: 'Poppins-Bold',
    color: "#535272",
  }, 
  
  buttonLogin: {
    width: 100, 
    height: 46,
    fontSize: 15,
    marginTop: 20, 
    marginBottom: 20, 
  },
  buttonRegister: {
    marginTop: 10, 
  },
  buttonTextContainer: {
    marginTop: 10,
    fontFamily: 'Poppins-Light',
  },
  buttonTextLink: {
    fontWeight: 'bold',
    color: '#535272',
  },
});

export default Register;
