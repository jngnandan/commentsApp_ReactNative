import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity } from 'react-native';

export default function App() {


  return (
    <View style={styles.container}>
      <Text style={{fontSize: 36, fontWeight: '600',}}>Comments</Text>
      <Image source={{uri:'https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png'}} style={{height: 200, width: 300, marginVertical: 20}} />
      <Text>Say something about 4.0 Technologies</Text>
      <TextInput placeholder='Your Name' style={{paddingLeft: 4, height: 40, borderColor: 'gray', borderWidth: 1, width: 300, marginTop: 10}} />
      <TextInput
        multiline={true}
          numberOfLines={4}
          style={{paddingLeft: 4, height: 100, borderColor: 'gray', borderWidth: 1, width: 300, marginTop: 10}}
          placeholder='Your Comment'
          />
          <TouchableOpacity style={{backgroundColor: 'blue', width: 300, height: 40, marginTop: 10, alignItems: 'center', justifyContent: 'center'}}>
            <Text style={{color: 'white'}}>Submit</Text>
          </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 12,
  },
});
