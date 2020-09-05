import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect } from 'react';
import { StyleSheet,
    Text, View, Image,
     KeyboardAvoidingView,
     TextInput,
     TouchableOpacity,
     Animated,
     Keyboard
     } from 'react-native';

  export default function Home({ navigation }) {
     



    const [offset] = useState(new Animated.ValueXY({ x: 0, y: 80}));
    const [opacity] = useState(new Animated.Value(0));
    const [logoxy] = useState(new Animated.ValueXY({x: 500, y: 450}))

  useEffect(()=> {
    keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', KeyboardDidShow);
    keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', KeyboardDidHide);
    
    
    Animated.parallel ([
      Animated.spring(offset.y, {
        toValue: 0,
        speed: 4,
        bounciness: 20
      }),
      Animated.timing(opacity, {
        toValue: 1,
        duration: 500,
      })
    ]).start();
    
  }, []);

  function KeyboardDidShow() {
    Animated.parallel ([
      Animated.timing(logoxy.x, {
        toValue: 200,
        duration: 100,
      }),
      Animated.timing(logoxy.y, { 
        toValue: 150,
        duration: 100
      }),
    ]).start();

  }

  function KeyboardDidHide() {
    Animated.parallel ([
      Animated.timing(logoxy.x, {
        toValue: 500,
        duration: 100
      }),
      Animated.timing(logoxy.y, {
        toValue: 450,
        duration :100 
      })
    ]).start()
  }


        return  (
        <KeyboardAvoidingView style={styles.container}>
        <View> 
          <Animated.Image 
          style={{ 
            width: logoxy.x,
            height: logoxy.y,
            alignItems: 'center',
            justifyContent: "center"
          }
  
          }
          source={require('../../assets/logoo.png')} 
          />
        </View>
  
        <Animated.View
         style={[
           styles.container2, 
           {
             opacity: opacity,
             transform: [
               { translateY: offset.y}
              ]
              }
          ]}>
         
          
        
        <TextInput
        style={styles.input}
        placeholder= "Email"
        autoCorrect={false}
        onChangeText={()=> {}}
        />
  
  
        <TextInput
        style={styles.input}
        placeholder= "Senha"
        autoCorrect={false}
        onChangeText={()=> {}}
        />
        
        <TouchableOpacity style={styles.btnSubmit} onPress={ ()=> navigation.navigate('Dentro')}  >
          <Text style={styles.submitText} >
            Acessar 
          </Text>
          </TouchableOpacity>
  
  
          <TouchableOpacity style={styles.btnRegister}>
          <Text style={styles.btnRegisterText} >
            Criar Conta
          </Text>
  
  
          </TouchableOpacity>
          
          </Animated.View>
  
      </KeyboardAvoidingView>
      )
    
  }
        
    
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#E0FFFF',
      alignItems: 'center',
      justifyContent: 'center',
      paddingBottom: 120
    },
    container2: { 
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      width: 90,
  },
    input: {
      color: '#191919',
      backgroundColor: '#F8F8FF',
      alignItems: "center",
      width: '300%', 
      marginBottom: 15,
      fontSize: 17,
      borderRadius: 7,
      padding: 10
  
    },
    btnSubmit: {
      backgroundColor: '#35AAFF',
      width: '220%',
      height: 45,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 7
    },
    submitText: {
      color: '#fff',
      fontSize: 14
    },
    btnRegister: {
      marginTop: 10
    },
    btnRegisterText: {
      color: '#a9a9a9'
    }
    
  
  
  
  });
  
   

