import React from 'react';
import { ScrollView, View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import YouTube from 'react-native-youtube-iframe';

const HistoriaScreen = () => {
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.container}>

      <Image source={require('../assets/logo_letras.png')} style={styles.image1} />

      <Image source={require('../assets/logo_img.png')} style={styles.image2} />
      
      <Text style={styles.text1}>¡Historia!</Text>

      <YouTube style={styles.video}
        videoId='478Ay_lNpT4'
        width={370}
        height={220}
        play={true}
        loop={true}
      />

      <Text style={styles.text2}>Explora el apasionante mundo de la marca que personifica la elegancia, la innovación y la velocidad. En nuestra aplicación móvil, te sumergirás en la esencia de Porsche.</Text>
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
});

export default HistoriaScreen;

