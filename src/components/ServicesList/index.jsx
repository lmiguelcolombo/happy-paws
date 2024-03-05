import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import DogHouseIcon from '../../../assets/images/003-Dog house.svg';
import PetGroomIcon from '../../../assets/images/037-pet grooming.svg';
import CatToyIcon from '../../../assets/images/009-cat toy.svg';
import AnimalCareIcon from '../../../assets/images/026-animal care.svg';

export default function ServicesList() {
  const router = useRouter();
  const handleNavigateToServices = () => {
    router.push('services');
  };
  const data = [
    {
      id: '1',
      icon: 'dogHouse',
      title: 'Overnight Boarding',
      description:
        "Our comfortable accommodations are designed to make your pet feel right at home while you're away. Whether they're a playful pup or a curious kitty, we provide a safe and cozy environment for your furry friend to relax and unwind.",
    },
    {
      id: '2',
      icon: 'petGroomming',
      title: 'Daycare',
      description:
        "Treat your pet to a day of fun and socialization in our supervised daycare facility. With plenty of opportunities for play and interaction, your pet will enjoy a stimulating environment while you're at work or running errands.",
    },
    {
      id: '3',
      icon: 'catToy',
      title: 'Grooming',
      description:
        'Keep your pet looking and feeling their best with our professional grooming services. From baths and haircuts to nail trims and ear cleaning, our experienced groomers will pamper your pet with personalized care and attention.',
    },
    {
      id: '4',
      icon: 'animalCare',
      title: 'Training',
      description:
        'Help your pet develop good manners and obedience skills with our positive reinforcement-based training programs. Whether you have a new puppy or an older dog in need of a refresher, our certified trainers will work with you and your pet to achieve your training goals.',
    },
  ];
  return (
    <>
      <Text style={styles.heading}>Services We Offer</Text>
      {data.map((item) => {
        return (
          <View key={item.id} style={styles.container}>
            <View style={styles.iconContainer}>
              {item.icon === 'dogHouse' && <DogHouseIcon />}
              {item.icon === 'petGroomming' && <PetGroomIcon />}
              {item.icon === 'catToy' && <CatToyIcon />}
              {item.icon === 'animalCare' && <AnimalCareIcon />}
            </View>
            <View style={styles.content}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.description}>{item.description}</Text>
            </View>
          </View>
        );
      })}
      <TouchableOpacity
        style={styles.button}
        onPress={handleNavigateToServices}
      >
        <Text style={styles.buttonText}>Book Now</Text>
      </TouchableOpacity>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '90%',
    marginTop: 3,
    marginBottom: 3,
    paddingTop: 15,
    paddingBottom: 15,
    backgroundColor: '#A189C8',
    alignItems: 'center',
    borderRadius: 5,
  },
  iconContainer: {
    flex: 1,
    alignItems: 'center',
  },
  content: {
    flex: 2,
  },
  heading: {
    textAlign: 'center',
    fontFamily: 'Montserrat_700Bold',
    fontSize: 34,
    color: '#522689',
    marginBottom: 20,
  },
  title: {
    textAlign: 'left',
    fontFamily: 'Montserrat_700Bold',
    fontSize: 26,
    color: '#fff',
  },
  description: {
    fontFamily: 'FiraSans_400Regular',
    fontSize: 16,
    paddingEnd: 11,
    color: '#fff',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#A189C8',
    borderRadius: 5,
    paddingVertical: 8,
    paddingHorizontal: 28,
    alignSelf: 'center',
    margin: 20,
  },
  buttonText: {
    fontFamily: 'Montserrat_600SemiBold',
    fontSize: 24,
    color: '#efefef',
  },
});
