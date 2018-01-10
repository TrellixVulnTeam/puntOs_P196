import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View, LayoutAnimation, Image } from 'react-native';
import StarRating from 'react-native-star-rating';
var moment = require('moment');

class ReviewItem extends Component {

  renderDate(date) {
    const post_date = moment(new Date(date));
    const _today = moment(new Date());
    const minutes_diff = _today.diff(post_date, 'minutes');

    if( minutes_diff < 59) {
      return minutes_diff + 'm ago';
    } else if ( minutes_diff < 1439 ) {
      const hours = (minutes_diff/60).toFixed(0);
      return hours + 'h ago';
    } else if ( minutes_diff < 44639 ) {
      const days = (minutes_diff/1440).toFixed(0);
      return days + 'd ago';
    } else if ( minutes_diff < 525599 ) {
      const months = (minutes_diff/44640).toFixed(0);
      return months + 'm ago';
    } else {
      const years = (minutes_diff/525600).toFixed(0);
      return years + 'y ago';
    }
  }

  render () {
    const { date, rating, text, username, icon } = this.props.review;
    return (
        <View style={ styles.containerStyle }>
          <View style={{ flexDirection: 'row' }}>
            <View style={{ flex: 1, alignSelf: 'flex-start', justifyContent: 'center', flexDirection: 'column', paddingLeft: 5, paddingTop: 10 }}>
            <Image
            style={styles.thumbnailStyle}
            source={{ uri: icon }}
            defaultSource={require('../assets/no-user-image.gif')}
            />
            </View>
            <View style={{ flex: 6, justifyContent: 'center', flexDirection: 'column'}}>
              <Text style={{ fontWeight: 'bold', fontSize: 15, paddingTop: 5 }}>{username}</Text>
              <Text style={{ fontSize: 14 }}>{this.renderDate(date)}</Text>
              <Text style={{ paddingTop: 5, fontSize: 15 }}>{text}</Text>
            </View>
          </View>
          <View style={{ flexDirection: 'column', justifyContent: 'center', marginBottom: 10, marginTop: 5 }}>
            <View style={{ alignSelf: 'center', flexDirection: 'column' }}>
              <StarRating
              disabled={true}
              maxStars={5}
              rating={rating}
              starSize={40}
              starColor={'#f2d733'}
              />
              <Text style={{ fontSize: 20, alignSelf: 'center' }}>{rating}</Text>
            </View>
          </View>
        </View>
    );
  }
}

const styles = {
  titleStyle: {
    fontSize:18,
    paddingLeft: 15
  },
  thumbnailStyle: {
  height: 40,
  width: 40,
  borderRadius: 20,
  borderWidth: 1,
  borderColor: 'black',
  resizeMode: 'contain'
},
containerStyle: {
  flexDirection: 'column',
  backgroundColor:'#fff',
  borderRightWidth: 0,
  borderLeftWidth: 0,
  borderWidth: 0.5,
  borderColor: '#ddd',
  borderBottomWidth: 0,
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.1,
  shadowRadius: 2,
  elevation: 1,
  marginTop: 5
}
};

export default ReviewItem;
