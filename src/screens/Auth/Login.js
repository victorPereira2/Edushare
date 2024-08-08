import React, {useState} from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useFonts } from 'expo-font';
import CustomButton from '../../components/Button/CustomButton';
import Input from '../../components/Input/Input';

const Login = ({ navigation }) => {

  const [credentials, setCredentials] = useState({
    login: '',
    senha: '',
  });

  const [fontsLoaded] = useFonts({
    'Poppins-Black': require('../../../assets/fonts/Poppins-Black.ttf'),
    'Poppins-SemiBold': require('../../../assets/fonts/Poppins-SemiBold.ttf'),
    'Poppins-Light': require('../../../assets/fonts/Poppins-Light.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Edushare</Text>
      <Text style={styles.text}>Seja Bem-Vindo (a)</Text>
      <View style={styles.inputWrapper}>
        {Object.keys(credentials).map((key) => (
          <Input
            key={key}
            placeholder={key.charAt(0).toUpperCase() + key.slice(1)} // Capitalize a primeira letra da chave
            secureTextEntry={key === 'senha'} // Verifica se a chave é 'senha' para definir secureTextEntry
            value={credentials[key]}
            onChangeText={(text) => setCredentials((prevState) => ({ ...prevState, [key]: text }))}
          />
        ))}
      </View>

      <CustomButton
        title="Entrar"
        onPress={() => navigation.navigate('Home')}
        buttonStyle={styles.buttonLogin}
      />
       <TouchableOpacity onPress={() => navigation.navigate('Register')}>
        <Text style={styles.buttonTextContainer}>
          Não tem cadastro?{' '}
          <Text style={styles.buttonTextLink}>Cadastre-se</Text>
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
  inputWrapper: {
    width: '100%',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 48,
    fontFamily: 'Poppins-Black',
    color: "#535272",
    marginBottom: 72, 
  }, 
  text: {
    fontSize: 20,
    fontFamily: 'Poppins-SemiBold',
    color: "#535272",
    marginBottom: 20, 
  }, 
  buttonLogin: {
    width: 100, 
    height: 46,
    fontSize: 20,
    marginTop: 20, 
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

export default Login;