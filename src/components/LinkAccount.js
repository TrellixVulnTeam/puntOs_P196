import React, { Component } from 'react';
import { View, Text, Image, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { InputLine, Button, Spinner } from './common';
import Icon from 'react-native-vector-icons/Ionicons';
import { connect } from 'react-redux';
import { linkAccount, businessMainUpdate } from '../actions';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Actions } from 'react-native-router-flux';

class LinkAccount extends Component {

  onPress(){
    this.props.linkAccount(this.props.linkMail, this.props.linkPassword, this.props.uid);
  }

  renderButton(){
    if(this.props.linkLoading){
      return (
        <Spinner size='large' />
      );
    }
    else {
      return <Button onPress={this.onPress.bind(this)} overStyle={{ width: 150, borderColor: '#ecedee' }}>Link</Button>;
    }
  }

  render() {
    const { user } = this.props;
    return (
      <KeyboardAwareScrollView
      style={{ backgroundColor: '#ecedee', flex: 1 }}
      resetScrollToCoords={{ x: 0, y: 0 }}
      contentContainerStyle={styles.backgroundStyle}
      scrollEnabled={true}
      >
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.backgroundStyle}>
        <View style={{ flex: 5, justifyContent: 'center'}}>
              <View style={{ flex: 8, justifyContent: 'center'}}>
              <Image
              style={styles.thumbnailStyle}
              source={{uri: user.image }}
              defaultSource={require('../assets/no-user-image.gif')}
              />
              </View>
              <View style={{ flex: 2 , flexDirection: 'column', justifyContent: 'center', marginTop: -30 }}>
              <Text style={{ alignSelf: 'center', fontWeight: 'bold', fontSize: 25 }}>{user.businessName}</Text>
              </View>
        </View>
        <View style={{ flex: 9, justifyContent: 'center'}}>
        <View style={{ flex: 4, justifyContent: 'center'}}>
        <Text style={styles.normalTextStyle}>Enter your user credentials below to link your account.</Text>
        <Icon name='ios-link' size= {120} color='#000' style={{ alignSelf: 'center' }} />
        </View>
        <View style={{ flex: 5, justifyContent: 'center'}}>
        <InputLine
          onChangeText={value => this.props.businessMainUpdate({ prop: 'linkMail', value })}
          placeholder='email@gmail.com'
          placeholderTextColor='grey'
          selectionColor='#0084b4'
          overStyle={{ borderBottomColor: '#0084b4', color: '#0084b4' }}
          value={this.props.linkMail}
        />
        <InputLine
          onChangeText={value => this.props.businessMainUpdate({ prop: 'linkPassword', value })}
          placeholder='password'
          placeholderTextColor='grey'
          selectionColor='#0084b4'
          secureTextEntry
          overStyle={{ borderBottomColor: '#0084b4', color: '#0084b4' }}
          value={this.props.linkPassword}
        />
        {this.renderButton()}
        </View>
        </View>
      </View>
      </TouchableWithoutFeedback>
      </KeyboardAwareScrollView>
    );
  }
}

const styles ={
backgroundStyle: {
  flex: 1,
  backgroundColor: '#ecedee'
},
textStyle:{
  fontSize: 25,
  color: '#fff'
},
thumbnailStyle: {
height: 100,
width: 100,
borderRadius: 5,
borderWidth: 1,
borderColor: 'black',
alignSelf: 'center',
resizeMode: 'contain'
},
normalTextStyle: {
  fontSize: 20,
  alignSelf: 'center',
  alignItems: 'center',
  justifyContent: 'center',
  paddingLeft: 25,
  paddingRight: 25,
  marginBottom: 10,
  color: '#000',
  fontWeight: 'normal',
  textAlign: 'center'
},
errorTextStyle: {
  fontSize: 20,
  alignSelf: 'center',
  color: '#f97171'
}
}

const mapStateToProps = state => {
  const { linkMail, linkPassword, user, uid, linkLoading } = state.businessMain;
  return { linkMail, linkPassword, user, uid, linkLoading };
}

export default connect(mapStateToProps, { linkAccount, businessMainUpdate })(LinkAccount);
