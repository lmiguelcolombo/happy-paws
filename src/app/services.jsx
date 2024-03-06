import { ScrollView, StyleSheet, Text } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import * as SplashScreen from 'expo-splash-screen';
import Card from '../components/Card';
import { useFetchHotelsData } from '../hooks/useFetchHotelsData';
import tollerDogLies from '../../assets/images/toller-dog-lies-in-blue-bed-2024-02-08-20-45-19-utc.jpg';

SplashScreen.preventAutoHideAsync();
export default function Page() {
  const { hotelsData, loading, error } = useFetchHotelsData();

  const groupedServices = hotelsData.hotels.reduce((acc, hotel) => {
    hotel.services.forEach((service) => {
      acc[service.pet_type] = acc[service.pet_type] || [];
      acc[service.pet_type].push(service);
    });
    return acc;
  }, {});

  return (
    <SafeAreaProvider style={styles.container}>
      <ScrollView contentContainerStyle={{ alignItems: 'center' }}>
        {loading && <Text>Loading...</Text>}
        {error && <Text>Error: {error}</Text>}
        {!error && !loading && hotelsData !== null ? (
          Object.entries(groupedServices).map(([petType, services]) => (
            <div key={petType}>
              <h2>{petType.toUpperCase()}</h2>
              {services.map((service) => (
                <Card
                  key={service.title}
                  title={service.title}
                  imgSrc={service.images[0]}
                  span={service.service_description}
                />
              ))}
            </div>
          ))
        ) : (
          <Text>Blah</Text>
        )}
      </ScrollView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: '#A189C8',
    paddingHorizontal: 24,
  },
});
