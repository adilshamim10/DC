import * as React from 'react';
import { useState } from 'react';
import { Text, View, StyleSheet, Button, TextInput, Alert, Modal } from 'react-native';
import Constants from 'expo-constants';


import NumberGuesser from './components/AssetExample';

export default function App() {
  const [price, setPrice] = useState('');
  const [percent, setPercent] = useState('');


  const check= () =>{
    if (percent < 0 || percent > 100){
      alert("invalid value: should be between 0 and 100")
    }
    else{
        let finalprice
    finalprice = price - (price * (percent/100)).toFixed(2);
    alert('The Final Price is '+ finalprice)
    }
    
  }

 const remove= () => {
    setPrice('');
    setPercent('')
  }

  const history = () => {

  }


  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>Welcome to Discount Calculator</Text>
      <TextInput
        value={price}
        placeholder='Enter the Price'
        onChangeText={(price)=>setPrice(price)}
        keyboardType='number-pad'
        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
      />
      <TextInput
        value={percent}
        placeholder='Enter the discount'
        onChangeText={(percent)=>setPercent(percent)}
        keyboardType='number-pad'
        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
      />
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 10,}}>
        <View style={{ width: '33%' }}>
        <Button title="remove" color="black" onPress={remove}/>
      </View>
      <View style={{ width: '33%' }}>
        <Button title="Discount" color="black" onPress={check} />
      </View>
      <View style={{ width: '33%' }}>
        <Button title="history" color="black" />
      </View>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
    paddingTop: 10,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },

});
