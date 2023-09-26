/* // In App.js in a new project

import * as React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
      <TouchableOpacity onPress={() => navigation.navigate("Details")}>
        <Text>Ir para a tela detalhe</Text>
      </TouchableOpacity>
    </View>
  );
}

function DetailsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Details Screen</Text>
      <TouchableOpacity onPress={() => navigation.navigate("Home")}>
        <Text>Ir para a tela Home</Text>
      </TouchableOpacity>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
 */

import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TextInput,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import { StatusBar } from "expo-status-bar";
import { TouchableOpacity } from "react-native";
import * as WebBrowser from "expo-web-browser";
import { app } from "./firebase.js";
import { getFirestore, collection, addDoc } from "firebase/firestore";
function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, padding: 15 }}>
      <ScrollView
        contentContainerStyle={{ padding: 20 }}
        style={styles.container}
      >
        <Text style={styles.TextHeader}>Para onde você deseja navegar? </Text>
        <TouchableOpacity
          style={styles.btnNatigation}
          onPress={() => navigation.navigate("Home")}
        >
          <Ionicons name="home-outline" size={29} color="white" />
          <Text style={{ color: "white", marginTop: 8, marginLeft: 8 }}>
            Home
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btnNatigation}
          onPress={() => navigation.navigate("Sobre")}
        >
          <Ionicons name="information-circle-outline" size={29} color="white" />
          <Text style={{ color: "white", marginTop: 8, marginLeft: 8 }}>
            Sobre
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btnNatigation}
          onPress={() => navigation.navigate("Portifolio")}
        >
          <Ionicons name="list-circle-outline" size={29} color="white" />
          <Text style={{ color: "white", marginTop: 8, marginLeft: 8 }}>
            Portifolio
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

function SobreScreen({ navigation }) {
  const [showModal, setModal] = useState(false);
  const abrirModalContato = () => {
    setModal(!showModal);
  };
  const [nome, setNome] = useState("");
  const [mensagem, setMensagem] = useState("");

  const enviarMensagem = async () => {
    try {
      const firestore = getFirestore(app);

      // Adicione os dados à coleção "contato"
      await addDoc(collection(firestore, "contato"), {
        nome: nome,
        mensagem: mensagem,
      });

      alert("Sua mensagem foi enviada com sucesso");
    } catch (error) {
      console.error("Erro ao enviar mensagem:", error);
      alert(
        "Ocorreu um erro ao enviar a mensagem. Tente novamente mais tarde."
      );
    }
    setNome("");
    setMensagem("");
  };
  return (
    <View style={{ flex: 1 }}>
      {showModal ? (
        <View style={styles.modalParent}>
          <View
            style={{
              position: "absolute",
              right: 0,
              top: 0,
              width: 50,
              height: 50,
              backgroundColor: "#333",
            }}
          >
            <TouchableOpacity
              style={{
                width: "100%",
                height: "100%",
                justifyContent: "center",
              }}
              onPress={() => setModal(!showModal)}
            >
              <Text style={{ color: "white", textAlign: "center" }}>x</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.boxModal}>
            <Text style={{ ...styles.TextHeader, fontSize: 15 }}>
              Qual seu nome?
            </Text>
            <TextInput
              onChangeText={(text) => setNome(text)}
              style={{
                height: 40,
                width: "100%",
                borderColor: "#ccc",
                borderWidth: 1,
                marginBottom: 20,
              }}
              numberOfLines={4}
              multiline
            ></TextInput>
            <Text style={{ ...styles.TextHeader, fontSize: 15 }}>
              Qual sua mensagem?
            </Text>
            <TextInput
              onChangeText={(text) => setMensagem(text)}
              style={{
                height: 80,
                width: "100%",
                borderColor: "#ccc",
                borderWidth: 1,
                marginBottom: 20,
              }}
              numberOfLines={4}
              multiline
            ></TextInput>
            <TouchableOpacity
              onPress={() => enviarMensagem()}
              style={styles.btnAbrirNavegador}
            >
              <Text
                style={{ color: "#fff", textAlign: "center", fontSize: 14 }}
              >
                Enviar
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      ) : (
        <View></View>
      )}
      <View style={{ flex: 1, padding: 15 }}>
        <ScrollView
          contentContainerStyle={{ padding: 20 }}
          style={styles.container}
        >
          <Image
            style={styles.tinyLogo}
            source={require("./Resoucers/imagem2.jpg")}
          />
          <View>
            <Text style={{ fontSize: 20, marginTop: 10 }}>
              Gustavo Cescon / Developer
            </Text>
            <Text style={{ fontSize: 16, marginTop: 10, marginBottom: 10 }}>
              O Lorem Ipsum é um texto modelo da indústria tipográfica e de
              impressão. O Lorem Ipsum tem vindo a ser o texto padrão usado por
              estas indústrias desde o ano de 1500, quando uma misturou os
              caracteres de um texto para criar um espécime de livro. Este texto
              não só sobreviveu 5 séculos, mas também o salto para a tipografia
              electrónica, mantendo-se essencialmente inalterada.
            </Text>
            <TouchableOpacity
              onPress={() => abrirModalContato()}
              style={styles.btnAbrirNavegador}
            >
              <Text
                style={{ color: "#fff", textAlign: "center", fontSize: 17 }}
              >
                Entrar em contato
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

function PortifolioScreen({ navigation }) {
  const [images, setImages] = useState([
    {
      img: require("./Resoucers/imagem2.jpg"),
      website: "https://www.google.com.br",
    },
    {
      img: require("./Resoucers/imagem2.jpg"),
      website: "https://www.google.com.br",
    },
  ]);

  const abrirNavegador = async (website) => {
    await WebBrowser.openBrowserAsync(website);
  };
  return (
    <View style={{ flex: 1, padding: 15 }}>
      <ScrollView
        contentContainerStyle={{ padding: 20 }}
        style={styles.container}
      >
        <Text style={styles.TextHeader}>Os últimos projetos</Text>

        {images.map((val, index) => {
          return (
            <View style={styles.parentImage} key={index}>
              <Image style={styles.tinyLogo} source={val.img} />
              <TouchableOpacity
                style={styles.btnAbrirNavegador}
                onPress={() => abrirNavegador(val.website)}
              >
                <Text
                  style={{ textAlign: "center", color: "#fff", fontSize: 18 }}
                >
                  Abrir no navegador
                </Text>
              </TouchableOpacity>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}

const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Home") {
              iconName = focused ? "home-outline" : "home-outline";
            } else if (route.name === "Portifolio") {
              iconName = focused
                ? "list-circle-outline"
                : "list-circle-outline";
            } else if (route.name === "Sobre") {
              iconName = focused
                ? "information-circle-outline"
                : "information-circle-outline";
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "hsl(204, 86%, 53%)",
          tabBarInactiveTintColor: "gray",
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Sobre" component={SobreScreen} />
        <Tab.Screen name="Portifolio" component={PortifolioScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
  },
  TextHeader: {
    color: "hsl(204, 86%, 53%)",
    fontSize: 24,
  },
  btnNatigation: {
    backgroundColor: "hsl(217, 71%, 53%)",
    padding: 20,
    marginTop: 15,
    flexDirection: "row",
  },
  tinyLogo: {
    width: "100%",
    height: 210,
    resizeMode: "cover",
  },
  parentImage: {
    marginTop: 30,
  },
  btnAbrirNavegador: {
    padding: 20,
    backgroundColor: "hsl(204, 86%, 53%)",
  },
  modalParent: {
    position: "absolute",
    left: 0,
    top: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0,0,0,0.6)",
    zIndex: 1,
  },
  boxModal: {
    backgroundColor: "white",
    height: 370,
    width: "100%",
    position: "absolute",
    top: "50%",
    left: 0,
    marginTop: -185,
    padding: 10,
  },
});
