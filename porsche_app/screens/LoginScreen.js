import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, Alert} from 'react-native';
import { useNavigation } from '@react-navigation/native'; 
import Icon from 'react-native-vector-icons/Ionicons';


const LoginScreen = () => {
  
  const navigation = useNavigation();

  const BienvenidoAlerta = () => {
    Alert.alert(
      'Bienvenido a Porsche',
      'El lugar para comprar tu próximo auto',
      [
        {
          text: 'OK',
          style: 'cancel',
        },
      ],
    );
  };
  const RecuperarAlerta = () => {
    Alert.alert('Olvidaste tu contraseña?', 'Enviaremos tu nueva contraseña a tu correo', [
      {
        text: 'Cancelar',
        // onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {
        text: 'Ok', 
        // onPress: () => console.log('OK Pressed')
      },
    ]);
  }

  const [correo, setCorreo] = useState('');
  const [contrasena, setContrasena] = useState('');

  const validarLogin = () => {
    if (!correo.trim() || !contrasena.trim()) {
      Alert.alert('Error en Login', 'Correo o contraseña incorrectos');
      return;
    }
    Alert.alert('Login exitoso', '¡Bienvenido a Porsche!');
    navigation.navigate('Principal');
  };


  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={BienvenidoAlerta}>
        <Icon name="help" size={20} color="#000000" style={styles.icono}/>
      </TouchableOpacity>
      <Image
        source={require('../assets/logo_letras_img.png')}
        style={styles.image}
      />
      
      <Text style={styles.label1}>Correo</Text>
      <TextInput style={styles.input1} value={correo} onChangeText={(text) => setCorreo(text)} />

      <Text style={styles.label2}>Contraseña</Text>
      <TextInput
        secureTextEntry
        style={styles.input2}
        value={contrasena}
        onChangeText={(text) => setContrasena(text)}
      />

      <TouchableOpacity onPress={() => navigation.navigate('Register')}>
        <Text style={styles.enlace1}>No tienes cuenta? ¡Crea una!</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={RecuperarAlerta}>
        <Text style={styles.enlace2}>Olvidaste tu contraseña?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.boton} onPress={validarLogin}>
        <Text style={styles.textBoton}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 45,
    backgroundColor: '#D9D9D9',
  },
  icono: {
    marginLeft: 330,
  },
  image: {
    width: 260,
    height: 150,
    alignSelf: 'center',
    marginTop: 20,
    marginBottom: 25,
  },
  label1: {
    fontSize: 18,
    marginTop: 20,
  },
  label2: {
    fontSize: 18,
    marginTop: 20,
  },
  input1: {
    borderBottomWidth: 1,
    borderBottomColor: '#000000',
    paddingBottom: 5,
    marginBottom: 15,
  },
  input2: {
    borderBottomWidth: 1,
    borderBottomColor: '#000000',
    paddingBottom: 5,
    marginBottom: 30,
  },
  enlace1: {
    color: '#A42823',
    marginBottom: 20,
  },
  enlace2: {
    color: '#A42823',
  },
  boton: {
    marginTop: 40,
    backgroundColor: '#272727',
    paddingVertical: 10,
    marginLeft: 50,
    marginRight: 50,
    borderRadius: 30,
    alignItems: 'center',
  },
  textBoton: {
    color: '#fff',
    fontSize: 26,
  },
});

export default LoginScreen;