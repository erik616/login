import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import { Form } from './src/componets/form';

export default function App() {
  return (
    <ScrollView style={styles.app}>
      <View style={styles.container}>
        <View style={styles.boxImg}>
          <Image
            style={styles.img}
            source={require('./src/assets/img/user.png')}
          ></Image>
        </View>
        <Text style={styles.name}>Login</Text>
        <Form />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  app: {
    flex: 1,
    backgroundColor: "#002f5c"
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: "auto",
    width: "100%"
  },
  boxImg: {
    backgroundColor: "#fff",
    padding: 30,
    borderRadius: 100,
    marginTop: "30%"
  },
  img: {
    width: 100,
    height: 100
  },
  name: {
    marginTop: 10,
    fontSize: 30,
    paddingBottom: 20,
    color: '#fff',
    fontWeight: "bold"
  },
  gradient: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    zIndex: 1,
    backgroundColor: "transparent"
  }
});
