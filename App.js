import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Dimensions, StatusBar } from 'react-native';
import AntDesign from '@expo/vector-icons';
import AppIntroSlider from 'react-native-app-intro-slider';
import { COLORS, SIZES } from './src/constants/theme';
import Router from './src/router/router';

const w = Dimensions.get("window").width;
const h = Dimensions.get("window").height;

const slides = [
  {
    id: 1,
    title: "Account Creation and Login",
    description: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
    image: require('./assets/Account.png')
  },
  {
    id: 2,
    title: "Look for recipe and food",
    description: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
    image: require('./assets/search.png')
  },
  {
    id: 3,
    title: "Add content",
    description: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
    image: require('./assets/content.png')
  }
]

export default function App() {
  const [showHomePage, setShowHomePage] = useState(false);

  StatusBar.setBarStyle('light-content', true);

  const buttonLabel = (label) => {
    return(
      <View style={{ padding: 12 }}>
        <Text style={{ color: COLORS.title, fontWeight: '600', fontSize: SIZES.h4 }}>
          {label}
        </Text>
      </View>
    )
  }

  if(!showHomePage) {
    return(
      <AppIntroSlider 
        data={slides}
        renderItem={({item}) => {
          return(
            <View style={{ flex: 1, alignItems: 'center', padding: 15, paddingTop: 100, }}>
              <Image
                source={item.image}
                style={{ width: SIZES.width - 80, height: 400}}
                resizeMode="contain"
              />
              <Text style={{ fontWeight: 'bold', color: COLORS.title, fontSize: SIZES.h1 }}>
                {item.title}
              </Text>
              <Text style={{ textAlign: 'center', paddingTop: 5, color: COLORS.title }}>
                {item.description}
              </Text>
            </View>
          )
        }}

        activeDotStyle={{ backgroundColor: COLORS.primary, width: 30 }}
        showSkipButton
        renderNextButton={() => buttonLabel("Next")}
        renderSkipButton={() => buttonLabel("Skip")}
        renderDoneButton={() => buttonLabel("Done")}
        onDone={() => {
          setShowHomePage(true);
        }}
      />
    )
  }

  return (
    <Router />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  slide: {
    flex: 1,
    paddingTop: 80,
    marginHorizontal: 30
  }
});