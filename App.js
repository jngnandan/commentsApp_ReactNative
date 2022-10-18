import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity, FlatList, SafeAreaView } from 'react-native';

import { useState } from 'react';

const comments = [
  {
    id: 1,
    name: 'John Doe',
    comment: 'This is a comment',
  },
  {
    id: 2,
    name: 'Jane Doe',
    comment: 'This is another comment',
  },
]


export default function App() {
  const [name, setName] = useState('');
  const [comment, setComment] = useState('');
  const [commentList, setCommentList] = useState(comments);

  const addComment = () => {
    setCommentList([...commentList, { id: commentList.length + 1, name: name, comment: comment }]);
    setComment('');
  }


  return (
    <SafeAreaView style={styles.container}>
      <Text style={{fontSize: 36, fontWeight: '600',}}>Comments</Text>
      <Image source={{uri:'https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png'}} style={{height: 200, width: 300, marginVertical: 20}} />
      <Text>Say something about 4.0 Technologies</Text>
      <TextInput onChangeText={(text) => setName(text)} placeholder='Your Name' style={{paddingLeft: 4, height: 40, borderColor: 'gray', borderWidth: 1, width: 300, marginTop: 10}} />
      <TextInput
      onChangeText={text => setComment(text)}
        multiline={true}
          numberOfLines={4}
          style={{paddingLeft: 4, height: 100, borderColor: 'gray', borderWidth: 1, width: 300, marginTop: 10}}
          placeholder='Your Comment'
          />
          <TouchableOpacity onPress={addComment} style={{backgroundColor: 'blue', width: 300, height: 40, marginTop: 10, alignItems: 'center', justifyContent: 'center'}}>
            <Text style={{color: 'white'}}>Submit</Text>
          </TouchableOpacity>

          {/* comments */}
          <FlatList
            style={{marginTop: 20}}
            data={commentList}
            keyExtractor={item => item.id}
            renderItem={({item}) => (
              <View style={{borderWidth: 1, borderColor: 'gray', width: 300, padding: 10, marginVertical: 5}}>
                <Text style={{fontWeight: '600', fontSize: 16}}>{item.name}</Text>
                <Text>{item.comment}</Text>
              </View>
            )}
          />
            

    </SafeAreaView>
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
