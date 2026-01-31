import { ScrollView, StatusBar, StyleSheet, Text, View } from "react-native";
import TopBar from '../src/componets/TopBar';
import Chats from '../src/componets/Chats'

export default function Index() {
  return (
    <>
      <TopBar />
      <Chats />
    </>
  );
}

const styles = StyleSheet.create({
  
});
