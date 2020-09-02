import { StatusBar } from 'expo-status-bar'
import React, { useState, useEffect } from 'react'
import { Ionicons } from '@expo/vector-icons'
import { Text, StyleSheet, SafeAreaView, Keyboard, TextInput, Animated, TouchableOpacity, View, AsyncStorage, Alert} from 'react-native'

export default function Dentro() {
    const [peixe, setPeixe] = useState('')
    const [tamanho, setTamanho] = useState('')
    const [peso, setPeso] = useState('')
    const [listaDados, setListaDados] = useState([])

    useEffect(() => {
        (async () => {
            let listaDadosStorage = await AsyncStorage.getItem("listaDados")
            
            if (listaDadosStorage) { // Se for verdadeiro, é pq existe um array
                 listaDadosStorage = JSON.parse(listaDadosStorage) // Parseando o array
                 setListaDados(listaDadosStorage)
            }
        })()

    }); // Isso faz toda vez que entrar no componente exibir a lista, senao seria necessario salvar pra aparecer

    async function salvar() {
       const dados = {
        peixe, tamanho, peso
       }
       
       let listaDadosStorage = await AsyncStorage.getItem("listaDados")

       if (listaDadosStorage) { // Se for verdadeiro, é pq existe um array

            listaDadosStorage = JSON.parse(listaDadosStorage) // Parseando o array

            listaDadosStorage.push(dados) // Adiciona no array
       } else { // Se não é verdadeiro, logo nao existe o array ainda, vamos cria-lo
            listaDadosStorage = [dados]

        //    Exemplo descritivo
        // listaDados = [
        //    { peixe: "Tal", tamanho: 513, peso: 241 }
        // ]
       }
        
       await AsyncStorage.setItem("listaDados", JSON.stringify(listaDadosStorage))
       setListaDados(listaDadosStorage)
    }
   
    return (
        

        
        <SafeAreaView style={styles.container} >
            
            <View style={styles.content}> 
                <Text style={styles.title}> Peixes Capturados </Text> 
            </View>

            <View style={{ width: '100%', justifyContent: 'center', alignItems: 'center'}} >
                <TextInput 
                    style={styles.input}
                    placeholder= 'Peixe'
                    value={peixe}
                    onChangeText={text => setPeixe(text)}
            />

                
                <TextInput 
                    style={styles.input}
                    placeholder='Tamanho'
                    keyboardType='number-pad'
                    value={tamanho}
                    onChangeText={ text => setTamanho(text)}
                />


                <TextInput
                    style={styles.input}
                    placeholder= 'Peso'
                    keyboardType='number-pad'
                    value={peso}
                    onChangeText={text => setPeso(text)}
                />

                <TouchableOpacity style={styles.btnSend} onPress={() => salvar()} >
                    <Text style={styles.send} >
                        Enviar
                    </Text>           
                </TouchableOpacity>

                <TouchableOpacity style={styles.btnSend} onPress={() => mostrarDados()} >
                    <Text style={styles.send} >
                        Mostrar informações
                    </Text>           
                </TouchableOpacity>

                {listaDados.map((dado, index) => 
                    <View key={index}>
                        <Text>
                            Nome peixe: {dado.peixe}
                        </Text>
                        <Text>
                            Tamanho peixe: {dado.tamanho}
                        </Text>
                        <Text>
                            Peso peixe: {dado.peso}
                        </Text>
                    </View>
                )} 

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