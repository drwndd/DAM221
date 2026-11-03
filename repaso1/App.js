
import { StyleSheet, Text, View } from 'react-native';

import Registro from './screens/registro';

export default function App() {

  return (
    <View style={styles.container}>


      <View style={styles.pantalla}>
        <Registro />
      </View>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#18022b',
  },

  encabezado: {
    backgroundColor: '#319b94',
    padding: 15,
    alignItems: 'center',
  },

  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#049b07',
  },

  pantalla: {
    flex: 1,
  },

});
