import React from "react";
import { View, TouchableOpacity, Text, Platform } from "react-native";
import { Icon } from "react-native-elements";

const FilterAndSorterMenu = props => {
  return (
    <View
      style={{
        shadowColor: Platform.OS === "ios" ? "rgb(128, 147, 147)" : undefined,
        shadowOffset:
          Platform.OS === "ios" ? { width: 0, height: 1.3 } : undefined,
        shadowOpacity: Platform.OS === "ios" ? 2.7 : undefined,
        elevation: Platform.OS === "android" ? 5 : undefined,
        height: 45,
        flexDirection: "row",
        marginLeft: 20,
        marginRight: 20,
        borderWidth: 1,
        borderRadius: 5.3,
        borderColor: "rgb(250, 250, 250)",
        backgroundColor: "rgb(250, 250, 250)"
      }}
    >
      <View style={{ flex: 0.5 }}>
        <TouchableOpacity style={{ flex: 1 }} onPress={() => alert("1.Bölge")}>
          <View
            style={{
              alignContent: "center",
              justifyContent: "center",
              marginTop: 3,
              marginBottom: 3,
              borderRightWidth: 0.7,
              borderColor: "rgb(238, 238, 238)",
              flex: 1
            }}
          >
            <Icon name="th-large" type="font-awesome" color="#9b9b9b" />
          </View>
        </TouchableOpacity>
      </View>
      <View style={{ flex: 1 }}>
        <TouchableOpacity style={{ flex: 1 }} onPress={() => alert("2.Bölge")}>
          <View
            style={{
              marginLeft: 17,
              marginTop: 3,
              marginBottom: 3,
              alignContent: "center",
              alignItems: "center",
              borderRightWidth: 1,
              borderColor: "rgb(238, 238, 238)",
              flex: 1,
              flexDirection: "row"
            }}
          >
            <Icon name="filter" type="font-awesome" color="#9b9b9b" />

            <Text
              style={{
                marginLeft: 10,
                fontSize: 16,
                color: "rgb(128, 147, 147)"
              }}
            >
              Filtrele
          </Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={{ flex: 1 }}>
        <TouchableOpacity style={{ flex: 1 }} onPress={() => alert("3.Bölge")}>
          <View
            style={{
              marginLeft: 17,
              marginTop: 3,
              marginBottom: 3,
              alignContent: "center",
              alignItems: "center",
              flex: 1,
              flexDirection: "row"
            }}
          >
            <Icon name="bars" type="font-awesome" color="#9b9b9b" />

            <Text
              style={{
                marginLeft: 10,
                fontSize: 16,
                color: "rgb(128, 147, 147)"
              }}
            >
              Sırala
          </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default FilterAndSorterMenu;