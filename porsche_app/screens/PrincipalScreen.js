import React from 'react';
import { ScrollView, View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import YouTube from 'react-native-youtube-iframe';

const PrincipalScreen = () => {
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.container}>

      <Image source={require('../assets/logo_letras.png')} style={styles.image1} />

      <Image source={require('../assets/logo_img.png')} style={styles.image2} />
      
      <Text style={styles.text1}>¡Bienvenido a la experiencia Porsche!</Text>

      <YouTube style={styles.video}
        videoId='478Ay_lNpT4'
        width={370}
        height={220}
        play={true}
        loop={true}
      />

      <Text style={styles.text2}>Explora el apasionante mundo de la marca que personifica la elegancia, la innovación y la velocidad. En nuestra aplicación móvil, te sumergirás en la esencia de Porsche.</Text>

      <TouchableOpacity style={styles.boton1} onPress={() => navigation.navigate('Modelo')}>
        <Text style={styles.textBoton1}><Icon name="chevron-forward" size={20} color="white"/> Modelos</Text>
      </TouchableOpacity>

      <Text style={styles.text3}>Bienvenido al punto de partida de tu viaje Porsche. Sumérgete en la sinfonía de diseño y rendimiento mientras exploras nuestros emblemáticos modelos, descubres las últimas noticias y te sumerges en la esencia única de cada vehículo que lleva el distintivo emblema de Porsche.</Text>
      <Text style={styles.text4}>Explora las características más destacadas, desde la artesanía meticulosa hasta las innovadoras tecnologías que definen a cada automóvil. Siente la adrenalina de la velocidad y experimenta el lujo en cada curva.</Text>

      <TouchableOpacity style={styles.boton2} onPress={() => navigation.navigate('Comunidad')}>
        <Text style={styles.textBoton2}><Icon name="chevron-forward" size={20} color="white"/> Comunidad</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.imageTextContainer} onPress={() => navigation.navigate('Historia')}>
        <Image source={require('../assets/historia.png')} style={styles.image4} />
        <Text style={styles.link1}>Historia Porsche</Text>
        <Icon style={styles.flecha1} name="chevron-forward" size={20} color="black"/>
      </TouchableOpacity>


      <View style={styles.containerFinal}>
        <Text style={styles.textRedes1}>Redes Sociales</Text>
        <Text style={styles.textRedes2}>Ponte en contacto con nosotros a través de las redes sociales.</Text>

        <TouchableOpacity style={styles.face}>
          <Image source={require('../assets/face.png')} style={styles.face_img} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.insta}>
          <Image source={require('../assets/insta.png')} style={styles.insta_img} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.youtube}>
          <Image source={require('../assets/youtube.png')} style={styles.youtube_img} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.x}>
          <Image source={require('../assets/x.png')} style={styles.x_img} />
        </TouchableOpacity>

      </View>
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
  boton1: {
    marginTop: 40,
    backgroundColor: '#272727',
    paddingVertical: 10,
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 30,
    alignItems: 'center',
  },
  textBoton1: {
    color: '#fff',
    fontSize: 28,
  },
  text3:{
    fontSize: 20,
    marginTop: 40,
  },
  text4: {
    fontSize: 20,
    marginTop: 20
  },
  boton2: {
    marginTop: 40,
    marginBottom: 50,
    backgroundColor: '#272727',
    paddingVertical: 10,
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 30,
    alignItems: 'center',
  },
  textBoton2: {
    color: '#fff',
    fontSize: 28,
  },
  image4: {
    resizeMode: 'contain',
    width: 350,
    height:230,
  },
  link1: {
    fontSize: 15,
  },
  flecha1:{
    marginTop: -19,
    marginLeft: 120
  },
  containerFinal:{
    backgroundColor: '#272727',
    borderRadius: 10,
    marginTop: 20,
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 20
  },
  textRedes1:{
    fontSize:26,
    color:'white',
    marginBottom: 10
  },
  textRedes2:{
    fontSize:18,
    color:'white',
    marginBottom: 10,
  },


  face_img: {
    borderRadius: 20,
    width: 60,
    height: 60,
  },
  insta_img: {
    borderRadius: 20,
    width: 60,
    height: 60,
    marginTop: -60,
    marginLeft: 80,
  },
  youtube_img: {
    borderRadius: 20,
    width: 60,
    height: 60,
    marginTop: -60,
    marginLeft: 160,
  },
  x_img: {
    borderRadius: 20,
    width: 60,
    height: 60,
    marginTop: -60,
    marginLeft: 240,
  },
});

export default PrincipalScreen;

