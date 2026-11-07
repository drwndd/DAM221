
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import RepasoScreen from './screens/repaso';

export default function App() {
  return (
    <View style={styles.container}>
      <RepasoScreen />
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
