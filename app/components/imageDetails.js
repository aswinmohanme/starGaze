
import React, { Component } from 'react';

import {
  Text,
  View,
  Title,
} from '@shoutem/ui';

class ImageDetails extends Component {
  render() {
    return (
      <View style={{...styles.container, ...this.props.style}}>
        <Title styleName="md-gutter sm-gutter-bottom">
          {this.props.jsonApod.title}
        </Title>
        <Text styleName="md-gutter sm-gutter-top">
          CopyRight : {this.props.jsonApod.copyright}
        </Text>
        <Text style={styles.description} styleName="md-gutter-left">
          {this.props.jsonApod.explanation}
        </Text>
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,  
  },
  description: {
    fontSize: 16
  },
};

export default ImageDetails;