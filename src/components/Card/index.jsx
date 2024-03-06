import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function Card({ title, span, imgSrc }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Image source={imgSrc} style={[styles.image, styles.shadow]} />
      <Text style={styles.span}>{span}</Text>
      <View style={styles.btnWrapper}>
        <TouchableOpacity
          style={[styles.btn, styles.shadow, { backgroundColor: '#522689' }]}
        >
          <Text style={styles.btnText}>Book Now</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.btn, styles.shadow, { backgroundColor: '#A189C8' }]}
        >
          <Text style={styles.btnText}>
            View Details{' '}
            <FontAwesome name="chevron-down" size={20} color="#fff" />
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 10,
    marginTop: 20,
    paddingTop: 26,
    paddingBottom: 36,
    width: '100%',
  },
  title: {
    fontFamily: 'Montserrat_600SemiBold',
    fontSize: 32,
    textAlign: 'center',
  },
  image: {
    width: 300,
    height: 207,
    borderRadius: 10,
    marginVertical: 15,
    alignSelf: 'center',
  },
  span: {
    fontFamily: 'Montserrat_500Medium',
    fontSize: 28,
    textAlign: 'center',
  },
  btnWrapper: {
    flexDirection: 'row',
    gap: 13,
    alignSelf: 'center',
    marginTop: 10,
  },
  btn: {
    paddingVertical: 5,
    paddingHorizontal: 7,
    borderRadius: 5,
  },
  btnText: {
    color: '#fff',
    fontFamily: 'Montserrat_600SemiBold',
    fontSize: 18,
  },
  shadow: {
    shadowColor: '#000000',
    shadowOpacity: 0.25,
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowRadius: 4,
    elevation: 20,
  },
});
