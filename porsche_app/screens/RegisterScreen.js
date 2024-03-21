import React , { useState } from 'react';
import {ScrollView, Text, StyleSheet, Image, TextInput, TouchableOpacity, Alert} from 'react-native';
import { useNavigation } from '@react-navigation/native'; 
import Icon from 'react-native-vector-icons/Ionicons';
import axios from 'axios';


const RegisterScreen = () => {

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


  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [correo, setCorreo] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [confirmarContrasena, setConfirmarContrasena] = useState('');

  const validarRegistro = () => {
    if (nombre.length < 3) {
      Alert.alert('Error en Nombre(s)', 'Debe tener al menos 3 caracteres');
      return;
    }

    if (apellido.length < 3) {
      Alert.alert('Error en Apellido(s)', 'Debe tener al menos 3 caracteres');
      return;
    }

    if (!correo.includes('@') || !correo.includes('.')) {
      Alert.alert('Error en Correo', 'Ingresa un correo válido');
      return;
    }

    if (contrasena.length < 8) {
      Alert.alert('Error en Contraseña', 'Debe tener al menos 8 caracteres');
      return;
    }

    if (contrasena !== confirmarContrasena) {
      Alert.alert('Error en Confirmar Contraseña', 'Las contraseñas no coinciden');
      return;
    }


    let obj = {
      name: nombre,
      lastName: apellido,
      email: correo,
      password: contrasena,
    }
    
    axios.post('http://172.20.97.156:3000/register', obj, {headers: {
      "Content-Type": 'application/json'
    }}).then(
      (res) => {console.log(res.data)
        if (res.data.mensaje == "Registro Exitoso"){
          Alert.alert('Registro exitoso', '¡Bienvenido a Porsche!');
          navigation.navigate('Principal');
        }
        },
      (err) => console.log(err)
    )
  };



  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity onPress={BienvenidoAlerta}>
        <Icon name="help" size={20} color="#000000" style={styles.icono}/>
      </TouchableOpacity>
      <Image
        source={require('../assets/logo_letras_img.png')}
        style={styles.image}
      />
      
      <Text style={styles.label1} >Nombre(s)</Text>
      <TextInput
        style={styles.input1}
        value={nombre}
        onChangeText={(text) => setNombre(text)}
      />

      <Text style={styles.label1}>Apellido(s)</Text>
      <TextInput
        style={styles.input1}
        value={apellido}
        onChangeText={(text) => setApellido(text)}
      />

      <Text style={styles.label1}>Correo</Text>
      <TextInput
        style={styles.input1}
        value={correo}
        onChangeText={(text) => setCorreo(text)}
      />

      <Text style={styles.label2}>Contraseña</Text>
      <TextInput
        secureTextEntry
        style={styles.input2}
        value={contrasena}
        onChangeText={(text) => setContrasena(text)}
      />

      <Text style={styles.label2}>Confirmar Contraseña</Text>
      <TextInput
        secureTextEntry
        style={styles.input2}
        value={confirmarContrasena}
        onChangeText={(text) => setConfirmarContrasena(text)}
      />

      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={styles.enlace1}>Ya tienes cuenta? ¡Ingresa!</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.boton} onPress={validarRegistro}>
        <Text style={styles.textBoton}>Register</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

RegisterScreen.navigationOptions = {
  headerShown: false,
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
    marginTop: 15,
    marginBottom: 15,
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
  boton: {
    marginTop: 15,
    marginBottom: 80,
    marginLeft: 50,
    marginRight: 50,
    backgroundColor: '#272727',
    paddingVertical: 10,
    borderRadius: 30,
    alignItems: 'center',
  },
  textBoton: {
    color: '#fff',
    fontSize: 26,
  },
});

export default RegisterScreen;