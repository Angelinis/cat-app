import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './pages/home';
import Profile from './pages/profile';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Ionicons} from '@expo/vector-icons'


const Tab = createBottomTabNavigator();

export function Routes(){
  return(
    <Tab.Navigator>
      <Tab.Screen name="Home" 
      component={Home} 
      options={
        {headerShown:false,
          tabBarIcon: ({focused, size, color}) => {
            if(focused){
              return  <Icon name="cat" size={size} color={color} />
            } else {
              return <Icon name="cat" size={size} color={color} />
            }
          },
        }
      }
      />
      <Tab.Screen name="Profile" 
      component={Profile} 
      options={
        {headerShown:false,
          tabBarIcon: ({focused, size, color}) => {
            if(focused){
              return  <Ionicons name="person" size={size} color={color} />
            } else {
              return <Ionicons name="person-outline" size={size} color={color} />
            }
          },
        }
      }
      />
    </Tab.Navigator>
  )
}
