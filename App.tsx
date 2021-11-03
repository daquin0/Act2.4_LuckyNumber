import React, { useState } from 'react'
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View, Alert } from 'react-native';


const App = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState(0);
  let luckynumber = 0;
  let add = 0;
  let sum = 0;
  const pressHandler = () => {
    if (name == '') {
      Alert.alert('Please fill all fields')
    } else {
      if (age > 0 && age < 10) {
        luckynumber = age * 7
        add = 0
        while (luckynumber > 0) {
          add += Math.trunc(luckynumber % 10);
          luckynumber /= 10
        }
        sum = 0
        luckynumber = add*1
        while (luckynumber > 0) {
          sum += Math.trunc(luckynumber % 10)
          luckynumber /= 10
        }
        Alert.alert('Your luckynumber is: ', sum.toString())
        Alert.alert('Welcome ', name)
      } else {
        if (age > 9 && age < 100) {
          add = 0
          luckynumber = age * 1
          while (luckynumber > 0) {
            add += Math.trunc(luckynumber % 10)
            luckynumber /= 10
          }
          sum = 0
          luckynumber = add*1
          while (luckynumber > 0) {
            sum += Math.trunc(luckynumber % 10)
            luckynumber /= 10
          }
          Alert.alert('Your luckynumber is:', sum.toString())
          Alert.alert('Welcome ', name)
        } else {
          Alert.alert('Please introduce a valid age')
        }
      }
    }
  }

  return (
    <View style={(styles.Container)}>
      <Text style={(styles.Text)}>Lucky Number</Text>
      <Image style={(styles.Image)} source={require('./src/imgs/Luck.png')}></Image>
      <View style={(styles.InputsContainer)}>
        <TextInput style={(styles.InputName)}
          placeholder="Full Name..."
          onChangeText={name => setName(name)}
        ></TextInput>
        <TextInput style={(styles.InputAge)}
          placeholder="Age..."
          onChangeText={age => setAge(parseInt(age, 0))}
          keyboardType={'numeric'}
        ></TextInput>
        <View style={(styles.ButtonContainer)}>
          <TouchableOpacity style={(styles.Button)}
            onPress={pressHandler}
          ><Text style={(styles.ButtonText)}>Start</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  Container: {
    alignItems: 'center',
    display: 'flex',
    height: '100%',
    justifyContent: 'center',
    backgroundColor: '#479234',
  },
  Text: {
    fontSize: 30,
    fontWeight: '700',
    letterSpacing: 3,
    fontStyle: 'italic',
    height: 40,
    color: '#E6E30F',
  },
  Image: {
    width: 200,
    height: 200,
    marginTop: 20,
  },
  InputsContainer: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
  },
  InputName: {
    marginTop: 40,
    fontSize: 20,
    fontWeight: '400',
    letterSpacing: 3,
    fontStyle: 'italic',
    height: 60,
    color: '#050000',
    borderColor: 'gray',
    borderWidth: 1,
    margin: 12,
    padding: 20,
    width: 250,
    backgroundColor: "#EAE8E8",
    borderRadius: 20
  },
  InputAge: {
    marginBottom: 120,
    marginTop: 20,
    fontSize: 20,
    fontWeight: '400',
    letterSpacing: 3,
    fontStyle: 'italic',
    height: 60,
    color: '#050000',
    borderColor: 'gray',
    borderWidth: 1,
    margin: 12,
    padding: 20,
    width: 250,
    backgroundColor: "#EAE8E8",
    borderRadius: 20
  },
  ButtonContainer: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
  },
  Button: {
    backgroundColor: "#D8CC18",
    height: 60,
    width: 100,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  ButtonText: {
    fontSize: 30,
    fontWeight: '500',
  }
});

export default App;