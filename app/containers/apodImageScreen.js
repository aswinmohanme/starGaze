
import React, { Component } from 'react';

import {
  Image,
  View,
  Title,
  Text,
} from '@shoutem/ui';

class ApodImage extends Component {
  render() {
    return(
      <View style={styles.container} styleName="rounded-corners">
        <Image 
          source={{uri: 'https://apod.nasa.gov/apod/image/1705/STSCI-HST-abell370_1797x2000.jpg'}}
          style={styles.image}
        />
        <View style={styles.textContainer}>
          <Title styleName="sm-gutter md-gutter-left">
            Awesome Picture Goes Here
          </Title>
          <Text style={styles.description} styleName="md-gutter-left">
            Some 4 billion light-years away, massive galaxy cluster Abell 370 only 
            appears to be dominated by two giant elliptical galaxies and infested 
            with faint arcs in this sharp Hubble Space Telescope snapshot. 
            The fainter, scattered bluish arcs along with the dramatic dragon arc 
            below and left of center are images of galaxies that lie far beyond Abell 370. 
            About twice as distant, their otherwise undetected light is magnified and 
            distorted by the cluster's enormous gravitational mass, dominated by unseen 
            dark matter. Providing a tantalizing glimpse of galaxies in the early universe, 
            the effect is known as gravitational lensing. A consequence of warped spacetime 
            it was first predicted by Einstein a century ago. Far beyond the spiky foreground 
            Milky Way star at lower right, Abell 370 is seen toward the constellation Cetus, 
            the Sea Monster. It is the last of six galaxy clusters imaged in the recently 
            concluded Frontier Fields project.
          </Text>
        </View>
      </View>
    );
  }
}

const styles = {
  container:{
    flex: 1,
    backgroundColor: '#ecf0f1',
  },
  image: {
    flex:1,
  },
  textContainer:{
    height:"60%",
    minHeight: 50,
  },
  description: {
    textAlign: 'justify',
    fontSize: 16,
  }
};

export default ApodImage;