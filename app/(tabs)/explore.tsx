import { SelectLocation } from '@/components/SelectLocation';
import { FontAwesome, AntDesign } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Image, Platform, View, Text, TextInput, TouchableOpacity, Button, ScrollView } from 'react-native';

export default function TabTwoScreen() {

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.infoUser}>
          <Image
            style={styles.avatar}
            source={{ uri: 'data:image/webp;base64,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' }}
            resizeMode='cover'
          />
          <Text style={{ color: "#1DB954", fontSize: 18, fontWeight: 500 }}>Nguyen Van Cuong</Text>
        </View>
        <View style={styles.content}>
          <View>
            <View style={[styles.userText]}>
              <AntDesign name="user" size={24} color="#1DB954" />
              <Text>Nguyen Van Cuong</Text>
            </View>
            <View style={[styles.userText]}>
              <AntDesign name="phone" size={24} color="#1DB954" />
              <Text>0963833244</Text>
            </View>
            <View style={[styles.userText]}>
              <AntDesign name="calendar" size={24} color="#1DB954" />
              <Text>0963833244</Text>
            </View>
            <View style={[styles.userText]}>
              <FontAwesome name="transgender" size={24} color="#1DB954" />
              <Text>0963833244</Text>
            </View>
            <View style={[styles.userText, styles.address]}>
              <Text>Tỉnh / Thành phố</Text>
              <Text>Hà Giang</Text>
              <AntDesign name="caretdown" size={20} color="#898989" />
            </View>
            <View style={[styles.userText, styles.address]}>
              <Text>Quận / Huyện</Text>
              <Text>Hà Giang</Text>
              <AntDesign name="caretdown" size={20} color="#898989" />
            </View>
            <SelectLocation />
            <View style={[styles.userText]}>
              <FontAwesome name="building" size={24} color="#1DB954" />
              <Text>Hà Giang</Text>
            </View>
          </View>
          <Button
            title="Cập nhật"
            color="#1DB954"
            accessibilityLabel="Learn more about this purple button"
          />
        </View>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          {/* Native modals have dark backgrounds on iOS, set the status bar to light content. */}
          <StatusBar style='dark' />
        </View>
      </View >
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    height: "100%",
    gap: 10,
  },
  infoUser: {
    backgroundColor: "#fff",
    height: 170,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  avatar: {
    width: 114,
    height: 114,
    borderRadius: 114 / 2,
    marginTop: 10,
    marginBottom: 5
  },
  content: {
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    flex: 1,
    justifyContent: 'space-between',
    paddingBottom: 10
  },
  userText: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    paddingStart: 10,
    paddingVertical: 15
  },
  address: {
    justifyContent: 'space-between'
  }
});
