import { ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from "react-native-safe-area-context";
import { Camera, EllipsisVertical, Search } from "lucide-react-native";

export default function TopBar() {
  return (
    <SafeAreaView style={styles.topBar}>
        <StatusBar backgroundColor={'#2d7816'}/>
        <View style={styles.topBarContainer1}>
          <Text style={styles.titleText}>WhatsApp</Text>
          <View style={styles.topBarIcons}>
            <Camera color="white" size={25}/>
            <Search color="white" size={25}/>
            <EllipsisVertical color="white" size={25}/>
          </View>
        </View>
        <View style={styles.topBarContainer2}>
            <Text style={styles.activeTabText}>Chats</Text>
            <Text style={styles.subText}>Updates</Text>
            <Text style={styles.subText}>Calls</Text>
        </View>
      </SafeAreaView>
  )
}


const styles = StyleSheet.create({
  topBar: {
    backgroundColor: "#2d7816",
    paddingTop: 20,
    paddingHorizontal: 15,
    width: "100%",
  },
  topBarContainer1: {
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    width: "100%",
  },
  topBarContainer2: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    width: "100%",
    marginTop: 25,
  },
  titleText: {
    fontSize: 25,
    fontWeight: '500',
    color: "white",
  },
  subText: {
    fontSize: 18,
    fontWeight: '500',
    color: 'white',
    width: '33%',
    textAlign: 'center', 
    paddingBottom: 10,   
  },
  activeTabText: {
    color: "white",
    fontSize: 18,
    fontWeight: "500",
    borderBottomWidth: 3,
    borderBottomColor: "white", 
    width: '33%',
    textAlign: 'center',
    paddingBottom: 10,   
  },
  topBarIcons: {
    flexDirection: 'row',
    gap: 18
  },
});