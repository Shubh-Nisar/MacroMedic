import React, { useEffect, useState } from "react";
import { Dimensions, ImageBackground, StyleSheet, View } from "react-native";
// import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { Avatar, Title, Drawer } from "react-native-paper";
import {
  FontAwesome5,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { PRIMARY } from "../Utils/colors";

const DrawerContent = (props) => {
  const navigation = useNavigation();
  //   const [active, setActive] = useState(false);
  //   const [data, setData] = useState("");

  //   const name = data.toUpperCase();
  //   const getData = async () => {
  //     try {
  //       const value = await AsyncStorage.getItem("nameKey");

  //       if (value != null) {
  //         setData(value);
  //       }
  //     } catch (error) {
  //       alert(error);
  //     }
  //   };
  //   useEffect(() => {
  //     getData();
  //   }, []);
  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        source={require("../assets/bg.jpeg")}
        style={{
          width: 280,
          height: Dimensions.get("window").height,
          opacity: 3,
        }}
      >
        <DrawerContentScrollView {...props}>
          <View style={styles.drawerContent}>
            <View style={styles.userInfoSection}>
              <View
                style={{
                  flexDirection: "row",
                  marginTop: 15,
                }}
              >
                <Avatar.Image
                  source={require("../assets/marc.jpeg")}
                  size={40}
                />
                <View style={{ marginLeft: 15, flexDirection: "column" }}>
                  <Title style={styles.title}>RAJ</Title>
                </View>
              </View>
            </View>
          </View>
          <DrawerItemList {...props} />
        </DrawerContentScrollView>
      </ImageBackground>
    </View>
  );
};

export default DrawerContent;

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
    borderBottomWidth: 0.5,
    paddingVertical: 7,
    borderBottomColor: "#eeeeee",
  },
  title: {
    fontSize: 16,
    marginTop: 5,
    fontWeight: "bold",
    color: "white",
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  row: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  section: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 15,
  },
  paragraph: {
    fontWeight: "bold",
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 20,
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: "#f4f4f4",
    borderTopWidth: 1,
  },
  preference: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});
