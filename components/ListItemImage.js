import PropTypes from 'prop-types';
import { Image, ImageBackground, StyleSheet } from 'react-native';
import styleVars from '../styleVars';
const playIcon = require('../assets/play.png');
export default function ListItemImage({ imageSrc, playing }) {
  return <ImageBackground
    source={{uri: imageSrc}}
    imageStyle={styles.listItemImage}
    style={{ margin: 0, width: 120 }}
  >
    {
      playing &&
      <Image source={{uri: playIcon}} style={styles.playIcon} />
    }
  </ImageBackground>
}

const styles = StyleSheet.create({
  listItemImage: {
    backgroundColor: styleVars.white,
  },
  playIcon: {
    marginLeft: 20,
    marginTop: 20,
    width: 80,
    height: 80
  }
});
ListItemImage.propTypes = {
  imageSrc: PropTypes.string,
  playing: PropTypes.bool,
};
ListItemImage.defaultProps = {
  playing: false,
};