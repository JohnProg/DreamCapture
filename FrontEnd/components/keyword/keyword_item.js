import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native';

export default class KeywordItem extends React.Component {

render () {

  return(

  <Text>
    {this.props.keyword.keyword}
  </Text>
  );
}
}