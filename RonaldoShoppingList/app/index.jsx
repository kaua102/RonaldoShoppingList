import { StyleSheet, Text, View, Image } from 'react-native';
import { Link } from 'expo-router';

export default function Welcome() {
  return (
    <View style={styles.container}>
      <View style={styles.containerImage}>
        <Image
          source={require('../assets/avatar.png')}
          style={styles.avatar}
        />
      </View>
      <View style={styles.content}>
        <Text style={styles.title}>Anangelo Shopping List</Text>
        <text style={styles.text}> monte sua lista de compras e nao esqueça mais o que precisa comprar</text>
        <Link style={styles.button} href={"/home"}>
          <Text style={styles.buttonText}>acessar</Text>
        </Link>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
   
  },
  containerImage: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatar: {
    width: 230,
    heigth: 230,
    resizeMode: 'cover',
    borderRadius: 115,
  },
  content: {
    flex: 1,
    backgroundColor: '#dadada',
    borderTopStartRadius: 25,
    borderTopEndRadius: 25,
    paddingHorizontal: '5%'
  },
  title: {
    fontSize :30,
    fontWeight: 'bold',
    marginVertical: 20,
    textAlign: 'center',
  },
  text: {
    fontSize: 16,
    color: 'gray',
  },
  button: {
    position: 'absolute',
    backgroundColor: '#000',
    bottom: '15%',
    alignSelf: 'center',
    borderRadius: 50,
    paddingVertical: 15,
    width: '60%',
    textAlign: 'center',
  },
  buttonText: {
    fontSize: 22,
    color: '#fff',
    fontWeight: 'bold'
  }
});
