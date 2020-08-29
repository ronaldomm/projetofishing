import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { Text, StyleSheet, SafeAreaView, Keyboard, TextInput, Animated, TouchableOpacity, View} from 'react-native'

export default function Dentro() {
    return (

        <SafeAreaView style={styles.container} >
            
            <View style={styles.content}> 
                <Text style={styles.title}> Peixes Capturados </Text> 
            </View>


            <View style={{ width: '100%', justifyContent: 'center', alignItems: 'center'}} >
                <TextInput 
                    style={styles.input}
                    placeholder= 'Peixe'
                    onChangeText={()=> {}}
            />

                
                <TextInput 
                    style={styles.input}
                    placeholder='Tamanho'
                    keyboardType='number-pad'
                    onChangeText={()=> {}}
                />


                <TextInput
                    style={styles.input}
                    placeholder= 'Peso'
                    keyboardType='number-pad'
                    onChangeText={()=> {}}
                />

                <TouchableOpacity style={styles.btnSend} >
                    <Text style={styles.send} >
                        Enviar
                    </Text>           
                </TouchableOpacity>



            </View>


            <TouchableOpacity style={styles.fab}>
                <Ionicons name="ios-add" size={35} color='#FFF' />


            </TouchableOpacity>

        </SafeAreaView>


    )

        




        


    
    
}


const styles = StyleSheet.create ( {
    
    container:{
        backgroundColor: '#87CEEB',
        alignItems: 'center',
        flex: 1
        
    },
    title: {
        marginTop: 10,
        paddingBottom: 10,
        fontSize: 25,
        textAlign: 'center',
        color: '#191919'
    },
    fab: {
        position: 'absolute',
        width: 60,
        height: 60,
        backgroundColor: '#0094FF',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 30,
        right: 25,
        bottom: 25,
        elevation: 2,
        zIndex: 9,
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowOffset: {
            width: 1,
            height: 3,
        }
    },
    input: {
        backgroundColor: '#FFF',
        alignItems: 'center',
        borderRadius : 7,
        fontSize: 17,
        width: '50%',
        padding: 10,
        marginBottom: 15, 
        justifyContent: 'center'
    
    },
    btnSend: {
        backgroundColor: '#35AAFF',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 7,
        height: 70,
        width: '50%'

    },
    send: {
        fontSize: 15,
        color: '#191919'
    }

})