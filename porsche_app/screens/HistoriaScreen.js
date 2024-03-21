import React from 'react';
import { ScrollView, View, Text, StyleSheet, Image, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { BarChart } from "react-native-chart-kit";

const HistoriaScreen = () => {
  const navigation = useNavigation();

  const data = {
    labels: ["911", "Cayenne", "Boxster", "Panamera", "Macan"],
    datasets: [
      {
        data: [700000, 600000, 400000, 300000, 200000]
      }
    ]
  };

  const screenWidth = Dimensions.get("window").width;

  const chartConfig = {
    backgroundGradientFrom: "#D9D9D9",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "#D9D9D9",
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    strokeWidth: 2,
    barPercentage: 0.5,
    useShadowColorFromDataset: false,
    decimalPlaces: 0,
  };

  return (
    <ScrollView style={styles.container}>
      <Image source={require('../assets/logo_letras.png')} style={styles.image1} />
      <Image source={require('../assets/logo_img.png')} style={styles.image2} />
      <Text style={styles.text1}>¡Historia!</Text>
      <Image source={require('../assets/historia.png')} style={styles.historia_img} />
      <Text style={styles.text2}>Los 5 Porsches más vendidos por unidades de la historia</Text>
      <View style={styles.contenedorGrafico}>
        <BarChart
          data={data}
          width={screenWidth * 0.9}
          height={265}
          chartConfig={chartConfig}
          verticalLabelRotation={30}
        />
      </View>
      <Text style={styles.text3}>Descubre la rica herencia y la emocionante historia de Porsche. Desde los humildes comienzos en un pequeño taller hasta convertirse en un símbolo de excelencia automotriz, nuestra historia está llena de innovación, ingeniería de precisión y éxitos en las pistas. Sumérgete en los momentos históricos, los modelos legendarios y las figuras influyentes que han dado forma a la marca Porsche a lo largo de los años. Explora cómo nuestra pasión por el rendimiento ha llevado a la creación de algunos de los automóviles más icónicos del mundo. ¡Bienvenido a un viaje a través del tiempo con Porsche!</Text>
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
    marginTop: -220,
    marginBottom: 15,
  },
  historia_img:{
    width: 370,
    height: 220,
    marginBottom: 40,
  },
  text2: {
    fontSize: 24,
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 10,
  },
  contenedorGrafico: {
    alignItems: 'center',
    marginBottom: 20,
  },
  text3: {
    fontSize: 20,
    marginTop: 20,
    marginBottom: 20,
  },
});

export default HistoriaScreen;
