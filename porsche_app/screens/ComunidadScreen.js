import React from 'react';
import { ScrollView, View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import YouTube from 'react-native-youtube-iframe';

const ComunidadScreen = () => {
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.container}>

      <Image source={require('../assets/logo_letras.png')} style={styles.image1} />

      <Image source={require('../assets/logo_img.png')} style={styles.image2} />
      
      <Text style={styles.text1}>¡Comunidad!</Text>

      <Text style={styles.text2}>¡Únete a la emocionante comunidad de Porsche!
Aquí es donde los entusiastas de Porsche se reúnen para compartir su pasión por la marca, intercambiar experiencias de conducción, discutir las últimas noticias y eventos, y conectarse con otros aficionados. Desde emocionantes encuentros en carretera hasta reuniones exclusivas de propietarios, nuestra comunidad es el lugar perfecto para aquellos que comparten el amor por la ingeniería alemana y el espíritu deportivo. Únete ahora y forma parte de esta apasionante familia Porsche.</Text>

      <YouTube style={styles.video}
        videoId='6VYPVUOuv6U'
        width={370}
        height={220}
        play={true}
      />
      <YouTube style={styles.video}
        videoId='TwUCZCeXjwY'
        width={370}
        height={220}
      />
      <YouTube style={styles.video}
        videoId='lh9NJywNtHs'
        width={370}
        height={220}
      />
      <YouTube style={styles.video}
        videoId='WFHbnglmeUA'
        width={370}
        height={220}
      />
      <YouTube style={styles.video}
        videoId='N2W_0of8nXY'
        width={370}
        height={220}
      />
      <YouTube style={styles.video}
        videoId='JR-oohiPj7s'
        width={370}
        height={220}
      />
      <YouTube style={styles.video}
        videoId='ArPh5U-HiPA'
        width={370}
        height={220}
      />
      <YouTube style={styles.video}
        videoId='xBJpH_koV-A'
        width={370}
        height={220}
      />
      
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
    marginBottom: 20,
  },
});

export default ComunidadScreen;

