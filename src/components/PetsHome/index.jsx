import { Text, Image, StyleSheet, View, TouchableOpacity } from "react-native";
import { Link } from "expo-router";
import banner from "../../../assets/images/group-of-kittens-and-puppies-sitting-isolated-on-2023-11-27-04-51-32-utc.jpg";
// import useCustomFonts from "../../hooks/useCustomFonts";

export default function PetsHome() {
  return (
    <View style={styles.container}>
      <Image source={banner} style={styles.image} />
      <Text style={styles.title}>Your Pet&rsquo;s Home Away from Home</Text>
      <View style={styles.textWrapper}>
        <Text style={styles.welcome}>Welcome to Happy Paws,</Text>
        <Text style={styles.description}>
          where luxury meets comfort for your beloved pets! Whether you're going
          away for a day or an extended vacation, trust us to provide top-notch
          care and accommodation for your furry friends.
        </Text>
      </View>
      <Text style={styles.footerText}>Making Tails Wag & Hearts Happy</Text>
      <TouchableOpacity style={styles.touchable}>
        <Link href="/services" style={styles.button}>
          Book Now
        </Link>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 14,
    width: "100%",
    borderColor: "red",
    borderWidth: 1,
    alignItems: "center",
  },
  image: {
    width: 500,
    height: 280,
  },
  title: {
    width: 334,
    textAlign: "left",
    fontFamily: "Montserrat-Bold",
    fontSize: 36,
  },
  // textWrapper: {
  //   width: "100%",
  // },
  welcome: {
    fontFamily: "FiraSans-Regular",
    fontSize: 36,
  },
  description: {
    fontFamily: "FiraSans-Regular",
    fontSize: 24,
  },
  footerText: {
    fontFamily: "Montserrat-Medium",
    fontSize: 30,
  },
  button: {
    fontFamily: "Montserrat-SemiBold",
    fontSize: 24,
    alignItems: "center",
    color: "#efefef",
  },
  touchable: {
    backgroundColor: "#A189C8",
    borderRadius: 5,
    paddingVertical: 8,
    paddingHorizontal: 28,
  },
});
