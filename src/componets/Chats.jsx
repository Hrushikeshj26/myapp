import { FlatList, Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";

export default function Chats() {
  const chatData = [
    {
    id: '1',
    name: 'Sarah Wilson',
    profilePic: 'https://randomuser.me/api/portraits/women/1.jpg',
    message: 'Hey! Are we still on for coffee?',
    time: '10:45 AM'
  },
  {
    id: '2',
    name: 'Michael Chen',
    profilePic: 'https://randomuser.me/api/portraits/men/2.jpg',
    message: 'I sent you the files via email.',
    time: '09:30 AM'
  },
  {
    id: '3',
    name: 'Emma Watson',
    profilePic: 'https://randomuser.me/api/portraits/women/3.jpg',
    message: 'Happy Birthday! 🎂',
    time: 'Yesterday'
  },
  {
    id: '4',
    name: 'David Miller',
    profilePic: 'https://randomuser.me/api/portraits/men/4.jpg',
    message: 'Can you call me when you get a chance?',
    time: 'Yesterday'
  },
  {
    id: '5',
    name: 'Moana',
    profilePic: 'https://randomuser.me/api/portraits/women/10.jpg',
    message: 'See you at dinner.',
    time: 'Mon'
  },
  {
    id: '6',
    name: 'Work Group',
    profilePic: 'https://randomuser.me/api/portraits/lego/1.jpg',
    message: 'Alice: Meeting starts in 5 mins',
    time: 'Mon'
  },
  {
    id: '7',
    name: 'James Rodriguez',
    profilePic: 'https://randomuser.me/api/portraits/men/7.jpg',
    message: 'Did you see the game last night?',
    time: 'Sun'
  },
  {
    id: '8',
    name: 'Linda Johnson',
    profilePic: 'https://randomuser.me/api/portraits/women/8.jpg',
    message: 'Please bring the documents.',
    time: 'Sun'
  },
  {
    id: '9',
    name: 'Robert Brown',
    profilePic: 'https://randomuser.me/api/portraits/men/9.jpg',
    message: 'Thanks for your help!',
    time: 'Sat'
  },
  {
    id: '10',
    name: 'Emily Davis',
    profilePic: 'https://randomuser.me/api/portraits/women/12.jpg',
    message: 'Sent a photo 📷',
    time: 'Sat'
  },
  {
    id: '11',
    name: 'William Taylor',
    profilePic: 'https://randomuser.me/api/portraits/men/11.jpg',
    message: 'Let’s catch up soon.',
    time: 'Fri'
  },
  {
    id: '12',
    name: 'Sophia Martinez',
    profilePic: 'https://randomuser.me/api/portraits/women/22.jpg',
    message: 'Okay, sounds good.',
    time: 'Fri'
  },
  {
    id: '13',
    name: 'Daniel Anderson',
    profilePic: 'https://randomuser.me/api/portraits/men/13.jpg',
    message: 'Where are you?',
    time: 'Fri'
  },
  {
    id: '14',
    name: 'Olivia Thomas',
    profilePic: 'https://randomuser.me/api/portraits/women/14.jpg',
    message: 'Lol that was funny 😂',
    time: 'Thu'
  },
  {
    id: '15',
    name: 'Christopher Garcia',
    profilePic: 'https://randomuser.me/api/portraits/men/15.jpg',
    message: 'Missed call',
    time: 'Thu'
  },
  {
    id: '16',
    name: 'Ava White',
    profilePic: 'https://randomuser.me/api/portraits/women/16.jpg',
    message: 'Can I borrow your charger?',
    time: 'Wed'
  },
  {
    id: '17',
    name: 'Matthew Harris',
    profilePic: 'https://randomuser.me/api/portraits/men/17.jpg',
    message: 'Stuck in traffic.',
    time: 'Wed'
  },
  {
    id: '18',
    name: 'Isabella Martin',
    profilePic: 'https://randomuser.me/api/portraits/women/18.jpg',
    message: 'Don’t forget the tickets!',
    time: 'Tue'
  },
  {
    id: '19',
    name: 'Joshua Thompson',
    profilePic: 'https://randomuser.me/api/portraits/men/19.jpg',
    message: 'Just arrived.',
    time: 'Tue'
  },
  {
    id: '20',
    name: 'Mia Moore',
    profilePic: 'https://randomuser.me/api/portraits/women/20.jpg',
    message: 'Are you free to talk?',
    time: 'Mon'
  }
  ];

  const renderChatRow = ({ item }) => (
    <View style={styles.chatRow}>
      <Image source={{ uri: item.profilePic }} style={styles.profilePic} />
      
      <View style={styles.chatDetails}>
        <View style={styles.rowHeader}>
          <Text style={styles.nameText}>{item.name}</Text>
          <Text style={styles.timeText}>{item.time}</Text>
        </View>
        <Text style={styles.messageText} numberOfLines={1}>
          {item.message}
        </Text>
      </View>
    </View>
  );

  const renderSeparator = () => (
    <View
      style={{
        height: 1,           
        backgroundColor: '#7c7c7c',
        marginLeft: 20,            
        marginRight: 20,           
        opacity: 0.5,
      }}
    />
  );

  return (
        <FlatList
        data={chatData}              
        renderItem={renderChatRow} 
        keyExtractor={item => item.id}
        ItemSeparatorComponent={renderSeparator}
        style={styles.list}
      />
  );
}

const styles = StyleSheet.create({
    list: {
    backgroundColor: "#1e1e1e",
    flex: 1,
  },
  chatRow: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
  },
  profilePic: {
    width: 50,
    height: 50,
    borderRadius: 25, 
    marginRight: 15,
  },
  chatDetails: {
    flex: 1, 
  },
  rowHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 4,
  },
  nameText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
  timeText: {
    fontSize: 12,
    color: "#8696a0",
  },
  messageText: {
    fontSize: 15,
    color: "#8696a0",
  },
});
