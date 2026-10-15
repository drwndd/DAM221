import {Text, Image, Button, View} from 'react-native';

export const Saludo2 = () => {
  return (
    <View>

        <Text>Hola Mundo RN : soy un componente propio</Text>
        <Image source={require('../../assets/wave.png')} />
        <Button title= "Presioname">    </Button>
        </View>
    );
}