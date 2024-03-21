// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import MainStackNavigator from './navigation/AppNavigator';

// const App = () => {
//   return (
//     <NavigationContainer>
//       <MainStackNavigator />
//     </NavigationContainer>
//   );
// }

// export default App;

import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainStackNavigator from './navigation/AppNavigator';
import axios from 'axios';

const App = () => {
  const [datos, setDatos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://192.168.90.1:3000/datos');
        setDatos(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  
  return (
    <NavigationContainer>
      <MainStackNavigator />
      {datos.map((dato, index) => (
        <Text key={index}>{dato}</Text>
      ))}
    </NavigationContainer>
  );
}

export default App;
