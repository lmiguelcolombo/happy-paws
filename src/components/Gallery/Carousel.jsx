import { useCallback, useMemo, useState } from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Image,
  Animated,
} from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import redhairJoyfulYoung from '../../../assets/images/redhair-jouful-young-girl-caressing-her-dog-in-par-2023-11-27-05-16-08-utc.jpg';
import smilingDogCaregiver from '../../../assets/images/smiling-dog-caregiver-holding-toy-while-playing-wi-2023-11-27-05-34-33-utc.jpg';
import theYoungWoman from '../../../assets/images/the-young-woman-is-holding-her-cat-in-amoveralls-o-2023-11-27-05-00-30-utc.jpg';
import tollerDogLies from '../../../assets/images/toller-dog-lies-in-blue-bed-2024-02-08-20-45-19-utc.jpg';

export default function ImageCarousel() {
  const images = [
    redhairJoyfulYoung,
    smilingDogCaregiver,
    theYoungWoman,
    tollerDogLies,
  ];

  useCallback(() => {
    return images;
  }, [images]);

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 2 : prevIndex - 2
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 2 ? 0 : prevIndex + 2
    );
  };

  const translateX = new Animated.Value(0);

  const imageStyles = useMemo(
    () => ({
      transform: [{ translateX }],
    }),
    [translateX]
  );

  const slideImage = () => {
    Animated.timing(translateX, {
      toValue: -170,
      duration: 500,
      useNativeDriver: true,
    }).start(() => {
      handleNext();
      translateX.setValue(0);
    });
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.button, styles.arrowLeft]}
        onPress={handlePrev}
      >
        <FontAwesome name="chevron-left" size={30} style={styles.arrow} />
      </TouchableOpacity>
      <View style={styles.carousel}>
        <Animated.Image
          source={images[currentIndex]}
          style={[styles.image, imageStyles]}
          onLoad={() => 'Loading...'}
        />
        <Animated.Image
          source={images[currentIndex + 1]}
          style={[styles.image, imageStyles]}
          onLoad={() => 'Loading...'}
        />
      </View>
      <TouchableOpacity
        style={[styles.button, styles.arrowRight]}
        onPress={slideImage}
      >
        <FontAwesome name="chevron-right" size={30} style={styles.arrow} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 62,
    paddingHorizontal: 24,
  },
  carousel: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  image: {
    flex: 1,
    width: 170,
    height: 330,
    // objectFit: 'cover',
    resizeMode: 'cover',
  },
  button: {
    borderRadius: 5,
    backgroundColor: '#A189C8',
    paddingVertical: 18,
    paddingHorizontal: 4,
  },
  arrowLeft: {
    marginEnd: 6,
  },
  arrowRight: {
    marginStart: 6,
  },
  arrow: {
    color: '#fff',
  },
});
