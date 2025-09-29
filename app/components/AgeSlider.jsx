import React, { useState } from "react";
import { View, ScrollView, Text, StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

const AgeRuler = ({age, setAge}) => {

  const ages = Array.from({ length: 160 }, (_, i) => i + 10); // 10 - 109
  

  return (
    <View style={styles.container}>
        
      <Text style={styles.ageText}>{age} years</Text>
      <ScrollView
        horizontal
        snapToInterval={40} // width of each tick
        decelerationRate="fast"
        showsHorizontalScrollIndicator={false}
        onScroll={(e) => {
          const index = Math.round(e.nativeEvent.contentOffset.x / 40);
          setAge(ages[index]);
        }}
        scrollEventThrottle={16}
        style={styles.scrollview}
      >

        {ages.map((a, index) => (
          <View key={index} style={[styles.tick,{justifyContent: "flex-end"}]}>
            <View style={[styles.line, { height: index % 5 === 0 ? 40 : 20, marginTop:10 }]} />
          </View>
        ))}
      </ScrollView>
      <View style={styles.indicator} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { alignItems: "center", marginTop: 0, backgroundColor: "#202125", paddingVertical: 20, borderRadius: 10 },
  ageText: { fontSize: 22, color: "white", marginBottom: 20 },
  tick: { width: 35, alignItems: "center" },
  line: { width: 2, backgroundColor: "white" },
  indicator: {
    position: "absolute",
    top: 70,
    width: 2,
    height: 50,
    backgroundColor: "#FE632B",
  },
  scrollview: {
    flexDirection: "row",
    width: width - 140,
  }
});

export default AgeRuler;
