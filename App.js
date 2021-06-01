import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createStackNavigator} from "react-navigation-stack";
import { FontAwesome5, AntDesign, Ionicons } from '@expo/vector-icons';
import Login from "./src/screens/login";
import Register from "./src/screens/register";
import TenderCreate from "./src/screens/tendercreate";
import TenderDetail from "./src/screens/tendersdetail";
import Tenders from "./src/screens/tenders/tenders";
import 'react-native-gesture-handler';

class App extends React.Component {

  render () {
    return (
        <View>
          <Text>
            index.
          </Text>
        </View>
    )
  }
}

class Info extends React.Component {

  render () {
    return (
        <View>
          <Text>
            about page.
          </Text>
        </View>
    )
  }
}

const AppStack = createStackNavigator({

    Tenders: {
        screen: Tenders,
        navigationOptions: () => ({
            title: 'İhaleler',
            headerTitleStyle: {
                alignSelf: 'center',
                color: '#2f2f41',
            },
        })
    },
    TenderDetail: {
        screen: TenderDetail,
        navigationOptions: () => ({
            title: 'İhale Detay',
            headerTitleStyle: {
                color: '#2f2f41',
            },
        })
    },

});
const AppStack2 = createStackNavigator({

    TendersCreate: {
        screen: TenderCreate,
        navigationOptions: () => ({
            title: 'İhale Oluştur',
            headerTitleStyle: {
                alignSelf: 'center',
                color: '#2f2f41',
            },
        })
    }

});

const Login_Register = createStackNavigator({

    Login: {
        screen: Login,
        navigationOptions: () => ({
            title: 'Giriş Ekranı',
            headerShown: false,
        })
    },
    Register: {
        screen: Register,
        navigationOptions: () => ({
            title: 'Kayıt Ekranı',
            headerShown: false,
        })
    }

});

const AppNavigator = createBottomTabNavigator({
  Anasayfa: {
    screen:Login_Register,
      navigationOptions: {
        tabBarOptions: {
            activeTintColor: '#0cda8f',
            inActiveTintColor: '#0549dd',
            labelStyle: {
                fontSize:14,
            },
        },
          tabBarIcon: ({tintColor}) => <FontAwesome5 name="car" size={28} color={tintColor} />,
        tabBarLabel : 'İhaleler',

      }
  },
  IhaleOlusturma: {
    screen: AppStack2,
      navigationOptions: {
          tabBarOptions: {
              activeTintColor: '#0cda8f',
              inActiveTintColor: '#0549dd',
              labelStyle: {
                  fontSize:14,
              },
          },
          tabBarIcon: ({tintColor}) => <AntDesign name="pluscircleo" size={24} color={tintColor} />,
          tabBarLabel : 'İhale Oluştur',
      }
  },
    Ihalelerim: {
        screen:AppStack,
        navigationOptions: {
            tabBarOptions: {
                activeTintColor: '#0cda8f',
                inActiveTintColor: '#0549dd',
                labelStyle: {
                    fontSize:14,
                },
            },
            tabBarIcon: ({tintColor}) => <FontAwesome5 name="list-alt" size={24} color={tintColor} />,
            tabBarLabel : 'İhalelerim',
        }
    },
    Tekliflerim: {
        screen:AppStack,
        navigationOptions: {
            tabBarOptions: {
                activeTintColor: '#0cda8f',
                inActiveTintColor: '#0549dd',
                labelStyle: {
                    fontSize:14,
                },
            },
            tabBarIcon: ({tintColor}) => <Ionicons name="hammer-outline" size={24} color={tintColor} />,
            tabBarLabel : 'Tekliflerim',
        }
    },

});



export default createAppContainer(AppNavigator);



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
