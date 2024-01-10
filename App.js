import { View, StyleSheet, Text, TextInput, TouchableOpacity, FlatList } from 'react-native'
import React, { useState } from 'react'

export const List = ({
  variant = "bullet",
  data,
  listItemStyle,
  textStyle,
}: ListProps) => {
  const variants = {
    bullet: "\u2022",
    hyphenated: "\u2043",
    squared: "\u25A0",
  };

  return (
    <FlatList
      data={data}
      renderItem={({ item }) => {
        return (
          <View style={[tailwind`mb-2`, listItemStyle]}>
            <Text
              style={[
                tailwind`text-lg text-gray-950 dark:text-gray-50`,
                textStyle,
              ]}
            >{`${variants[variant]} ${item.key}`}</Text>
          </View>
        );
      }}
    />
  );
};
export default function App() {

  const [data, setData] = useState([])
  const [input, setInput] = useState('')

  const validate = (id) => {
    setData(prevData => {
      return prevData.filter(todo => todo.id != id)
    })
  }

  const update = () => {
    setData(preData => [...preData, {id: preData.length+1, todo: input}])
  }

  return (
    <View style={Styles.container}>
      
      <View style={Styles.header1}>
        <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold' }}> MY TODO APP</Text>
      </View>
         
      <View style={Styles.inputField}>
        
        <TextInput 
        placeholder='Add Item'
        onChangeText={(e) => setInput(e)}
        style={Styles.inputBox}/>

        
        <TouchableOpacity
        onPress={update}
        style={Styles.button}>  
          <Text style={{ color: 'white', fontSize: 12, fontWeight: 'bold' }}>ADD MORE</Text>
        </TouchableOpacity>
      </View>
      
          
      <View style={Styles.listView}>
        <FlatList 
        data={data}
        renderItem={({item}) => (
          <View style={Styles.content} >
            <TouchableOpacity onPress={() => validate(item.id)}>
              
              <Text style={{fontWeight:'bold'}}>{'*'+item.todo}</Text>
            </TouchableOpacity>
          </View>
        )}
        />
      </View>
      <View style={Styles.developed}>
        <Text style={{ color: 'magenta', fontSize: 16, fontWeight: 'bold' }}> Devolped by Narmadhadevi</Text>
      </View>
    </View>
  )
}

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d3d3d3',
    alignItems: 'center'
  },
  header1: {
    width: '100%',
    height: 45,
    backgroundColor: '#800000',
    marginTop: 30,
    justifyContent: 'center',
    alignItems: 'center'
  },
  developed: {
    width: '80%',
    height: 1,
    backgroundColor: '',
    marginTop: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  inputField: {
    width: '90',
    height: 52,
    
    marginTop: 40,
  },
  inputBox: {
    width: '100%',
    backgroundColor: '#f8f8ff',
    borderBottomWidth: 3
  },
  button: {
    width: '100%',
    height: 30,
    backgroundColor: '#2a52be',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20
  },
  listView: {
    width: '100%',
    height: '100%',    
  },
  content: {
    height: 40,
    marginTop: 20,
    backgroundColor: '#d3d3d3',
    justifyContent: 'center'
  }
})



