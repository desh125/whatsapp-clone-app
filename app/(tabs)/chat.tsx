import { View, StyleSheet, ScrollView } from 'react-native'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import React from 'react'
import Header from '@/components/custom_components/Header'
import CategoryBadge from '@/components/custom_components/CategoryBadge'
import ProfileViewOutside from '@/components/custom_components/ContainerOne'
import Footer from '@/components/custom_components/Footer'
import FloatingGreenButton from '@/components/custom_components/FloatingGreenButton'
import { MaterialIcons } from '@expo/vector-icons';

export default function chat() {
  return (
    
    <SafeAreaProvider>
      <SafeAreaView style={styles.safeArea}>
        <View>
          <Header LeftText={"WhatsApp"} Logo/>
        </View>
        <ScrollView style={styles.bodyContainer}>
          {/* category section */}
          <View id='category-section' style={styles.categorySection}>
            <CategoryBadge Word={"All"} IsActive/>
            <CategoryBadge Word={"Unread"} />
            <CategoryBadge Word={"Groups"} />
          </View>

          {/* chat section */}
          <View id='chat-section' style={styles.chatSection}>
              <ProfileViewOutside Name={"Sithira Pasanjith"} 
              Message={"Ado moko wenne"}
              ImageName='aliena_smith' DateTime={"4.30 am"}
              Muted Pinned Notification NtfCount={2}/>
              <ProfileViewOutside Name={"Mahinda"} 
              Message={"Winadi 5k deepan"}
              ImageName='darren_till' DateTime={"07/18/24"}
              Notification NtfCount={1}/>
              <ProfileViewOutside Name={"Sahan"} 
              Message={'Sahan reacted ❤️ to "yeah i will"'}
              ImageName='Sahan_two' DateTime={"2.45 am"}
              Notification NtfCount={3}/>
              <ProfileViewOutside Name={"Deshan"} 
              Message={"lorem ipsum dolor sit amet consectetur adipiscing elit"}
              ImageName='Deshan' DateTime={"7/9/24"}/>
          </View>
        </ScrollView>
         <View> 
           {/* footer  */}
           {/* <Footer Chats ChatCountNotification ChatNotificationCount={5} 
          UpdatesNotification
          CallCountNotification CallNotificationCount={7}/> */}
        </View>
        <FloatingGreenButton Icon={<MaterialIcons name="chat" size={24} color="white" />}/> 
      </SafeAreaView>
    </SafeAreaProvider>
  )
}

const styles = StyleSheet.create({
    safeArea: {
      flex: 1,
    },
    chatSection: {
      backgroundColor: 'white',
      paddingHorizontal: 15,
      paddingBottom: 90
    },
    bodyContainer: {
      backgroundColor: 'white',
    },
    categorySection: {
      paddingHorizontal: 15,
      paddingVertical: 16,
      flexDirection: 'row',
      gap: 8
    }
})