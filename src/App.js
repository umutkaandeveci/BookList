import { Text, View } from 'react-native'
import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducers from './reducers'
import { Banner } from './components/common'
import BookList from './components/bookList'
export default class App extends Component {
  render() {
    return (
      <Provider store={createStore(reducers)}>
          <View>     
           <Banner text='Book List'/>
           <BookList/>
          </View>
      </Provider>
      
    )
  }
}