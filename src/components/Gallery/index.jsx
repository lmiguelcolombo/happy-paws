import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import ImageCarousel from './Carousel';

export default function Gallery() {
  return (
    <View style={styles.container}>
      <View style={styles.sectionHeader}>
        <Text style={styles.title}>Photo Gallery</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.btnText}>View All Photos</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.description}>
        Explore our photo gallery to see our facilities, happy guests, and
        satisfied pet parents. From playtime in our spacious yards to cozy nap
        sessions in our comfortable suites, every moment at Happy Paws is
        captured with love.
      </Text>
      <ImageCarousel />
      <View style={styles.textWrapper}>
        <Text style={styles.question}>Need assistance or have questions?</Text>
        <Text style={styles.motivate}>
          Don't hesitate to reach out to us. Our team is here to help!
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
    // alignItems: 'center',
    paddingHorizontal: 24,
    marginBottom: 62,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
  },
  title: {
    fontFamily: 'Montserrat_600SemiBold',
    fontSize: 32,
    textAlign: 'left',
  },
  button: {
    backgroundColor: '#A189C8',
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
    justifyContent: 'center',
    shadowColor: '#000000',
    shadowOpacity: 0.25,
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowRadius: 4,
    elevation: 20,
  },
  btnText: {
    color: '#fff',
    fontFamily: 'FiraSans_600SemiBold',
  },
  description: {
    fontFamily: 'FiraSans_400Regular',
    fontSize: 16,
    marginBottom: 22,
  },
  textWrapper: {
    alignItems: 'center',
    gap: 14,
  },
  question: {
    fontFamily: 'Montserrat_700Bold',
    fontSize: 24,
    color: '#522689',
    textAlign: 'center',
  },
  motivate: {
    fontFamily: 'Montserrat_500Medium',
    fontSize: 22,
    color: '#522689',
    textAlign: 'center',
  },
});
