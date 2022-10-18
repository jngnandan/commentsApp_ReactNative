
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'

const CommentItem = ({commentList, deleteItem}) => {
    const {name, comment, likes} = commentList;

    const deleteButton = ({id}) => {
        deleteItem(commentList.id);
        // console.log(commentList.id)
    }

  return (
        <View id={commentList.id} style={{borderWidth: 1, borderColor: 'gray', width: 300, padding: 10, marginVertical: 5}}>
                <Text style={{fontWeight: '600', fontSize: 16}}>{commentList.name}</Text>
                <Text>{commentList.comment}</Text>
                
                <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 10}}>
                {/* Add Like */}
                <TouchableOpacity onPress={() => {commentList[item.id - 1].likes = !commentList[item.id - 1].likes; setCommentList([...commentList])}} style={{flexDirection: 'row', alignItems: 'center', marginTop: 10}}>
                  {/* <Image source={{uri: 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'}} style={{height: 20, width: 20}} /> */}
                  {!commentList.likes ? <Image source={{uri: 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'}} style={{height: 20, width: 20}} /> : <Image source={{uri: 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'}} style={{height: 20, width: 20}} />}
                  <Text style={{marginLeft: 5}}>Like</Text>
                </TouchableOpacity>

                {/* Add Delete */}
                <TouchableOpacity id={commentList.id} onPress={deleteButton} style={{flexDirection: 'row', alignItems: 'center', marginTop: 10}}>
                  <Image source={{uri: 'https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png'}} style={{height: 20, width: 20}} />
                  <Text style={{marginLeft: 5}}>Delete</Text>
                </TouchableOpacity>
                </View>
               
              </View>
  )
}

export default CommentItem

const styles = StyleSheet.create({})