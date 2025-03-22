// Importa o componente da status bar
import { StatusBar } from 'expo-status-bar';
// Importa os componentes básicos do react native para a estilização da estrutura da interface
import { StyleSheet, Text, View } from 'react-native';

// Importa os módulos necessários para navegação no aplicativo
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'

// Importação das telas que serão utilizadas na navegação
import HomeScreen from './screens/HomeScreen';
import DetailsScreen from './screens/DetailsScreen';

// Definir os tipos das rotas para garantir tipagem segura no TypeScript
type RootStackParamList = {
  Home: undefined;
  Details: undefined;
}

// Criando a stack de navigator que gerencia a mavegação entre as telas
const Stack = createStackNavigator<RootStackParamList>();

// Criando o componente principal do aplicativo
const App:React.FC = () => {
  return (
    // NavigationContainer: elemento principal que envolve toda a navegação
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen
          name='Home'
          component={HomeScreen}
          options={{title: 'HomePage'}}
        /> 
        <Stack.Screen
        name='Details'
        component={DetailsScreen}
        options={{title: 'DetailsPage'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

// Exportar o componente App
export default App;
