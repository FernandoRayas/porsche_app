import React, { useEffect , useState} from 'react';
import { ScrollView, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';

const CuentaScreen = () => {
  const navigation = useNavigation();
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    axios.get('http://172.20.97.156:3000/datos')
      .then(response => {

        setUserData(response.data[0]);
      })
      .catch(error => {
        console.error('Error al obtener los datos del usuario:', error);
        Alert.alert('Error', 'No se pudieron obtener los datos del usuario');
      });
  }, []);

  return (
    <ScrollView style={styles.container}>

      <Image source={require('../assets/logo_letras.png')} style={styles.image1} />

      <Image source={require('../assets/logo_img.png')} style={styles.image2} />
      
      <Text style={styles.text1}>¡Cuenta!</Text>


      <Text style={styles.text2}>Administra tu cuenta personal de Porsche con facilidad.</Text>

      <Image source={require('../assets/persona.png')} style={styles.image3} />

      {userData && (
        <React.Fragment>
          <Text style={styles.userData}>Nombre: {userData.name}</Text>
          <Text style={styles.userData}>Apellido: {userData.lastName}</Text>
          <Text style={styles.userData}>Correo electrónico: {userData.email}</Text>
        </React.Fragment>
      )}

      <TouchableOpacity style={styles.boton} onPress={() => navigation.navigate('Login')}>
        <Text style={styles.textBoton}>Cerrar Sesión</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: '#D9D9D9',
  },
  image1: {
    resizeMode: 'contain',
    width: 230,
    alignSelf: 'center',
    marginTop: -90,
    marginRight: 15,
  },
  image2: {
    resizeMode: 'contain',
    width: 35,
    alignSelf: 'center',
    marginTop: -410,
    marginLeft: 320,
    marginRight: 0,
  },
  text1: {
    fontSize: 28,
    textAlign: 'center',
    alignContent: 'center',
    marginTop: -200,
    marginBottom: 15,
  },
  text2: {
    fontSize: 20,
    marginTop: 20,
  },
  boton: {
    marginTop: 40,
    marginBottom: 50,
    backgroundColor: '#272727',
    paddingVertical: 10,
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 30,
    alignItems: 'center',
  },
  textBoton: {
    color: '#fff',
    fontSize: 28,
  },
  image3: {
    resizeMode: 'contain',
    width: 230,
    alignSelf: 'center',
    marginTop: -100,
    marginBottom: -120,
  },
  userData: {
    fontSize: 18,
  }
});

export default CuentaScreen;

