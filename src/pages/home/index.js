import { View, Text, StyleSheet } from "react-native";
import {Video} from 'expo-av'
import { useRef, useState } from "react";

export default function Home(){

  const uri = '../../../assets/cat_video_1.mp4';
  const video = useRef(null);
  const [status, setStatus] = useState({});

  return (
    
    <View style={styles.mainContainer}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Cat Videos</Text>
      </View>
      <View style={styles.searchBarContainer}><Text style={styles.randomText}>Search Bar Goes here</Text></View>
      <Video
        ref={video}
        style={styles.backgroundVideo}
        source={require(uri)}
        useNativeControls
        resizeMode="contain"
        isLooping
        onPlaybackStatusUpdate={setStatus}
      />
     
    </View>
  )
}






const styles = StyleSheet.create({
  mainContainer: {
    width: "100%",
    height: "100%",
    paddingTop: 30,
    paddingBottom: 30,
    backgroundColor: "#000000",
  },
  title:{
    fontSize: 20,
    color: "#ffffff",
    textAlign: "center",
    fontWeight: "bold",
  },
  titleContainer:{
    backgroundColor: "#b1b1b1",
    display: "flex",
    justifyContent: "center",
    height: 50,
    marginBottom: 10,
  },
  searchBarContainer:{
    width: "100%",
  },
  randomText:{
    textAlign: "center",
  },
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
})