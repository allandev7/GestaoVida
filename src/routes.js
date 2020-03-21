import {createAppContainer, NavigationActions} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Index from './inicio'
import React from 'react'
import Config from './configuracoes'
import Relatorio from './relatorio'
import Metas from './metas'
import Icon from 'react-native-vector-icons/FontAwesome';

const Routes = createAppContainer(
    createStackNavigator({
        Index:{
            screen:Index,
            navigationOptions: ({navigation}) => ({
                headerLeft:() => (<Icon name='cog' size={25} onPress={() => navigation.navigate('Config')} color='#fff' style={{margin:10}}/>),
                headerRight:() => (<Icon name='check-circle' size={25} onPress={() => navigation.navigate('Metas')} color='#fff' style={{margin:10}}/>),
                title:"Inicio",
            })
        },
        Config:{
            screen:Config,
            navigationOptions:{     
                title:"Configurações",
            }
        },
        Metas:{
            screen:Metas,
            navigationOptions:{     
                title:"Metas",
            }
        },
        Relatorio:{
            screen:Relatorio,
            navigationOptions:{
                title:"Relatório"
            }
        }
    },{
        defaultNavigationOptions:{
            headerTitleAlign:"center",
            headerTintColor:'#fff',
            headerStyle:{
                backgroundColor:'#6959CD'
            }
        }
    }
    )
);

export default Routes