
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
        <Title styleName="md-gutter">
          {this.props.title}
        </Title>
        <Text style={styles.description} styleName="md-gutter-left">
          {this.props.description}
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