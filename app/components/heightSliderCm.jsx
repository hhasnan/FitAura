import React from "react";
import { View, ScrollView, Text, StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

const HeightSliderCm = ({ height, setHeight }) => {
  // height range 100cm – 250cm
  const heights = Array.from({ length: 151 }, (_, i) => i + 100);

  return (
    <View style={styles.container}>
      <Text style={styles.heightText}>{height} cm</Text>

      <ScrollView
        horizontal
        snapToInterval={40} // width of each tick * 2
        decelerationRate="fast"
        showsHorizontalScrollIndicator={false}
        onScroll={(e) => {
          const index = Math.round(e.nativeEvent.contentOffset.x / 40);
          setHeight(heights[index]);
        }}
        scrollEventThrottle={16}
        style={styles.scrollview}
      >
        {heights.map((h, index) => (
          <View key={index} style={[styles.tick, { justifyContent: "flex-end" }]}>
            <View
              style={[
                styles.line,
                { height: index % 5 === 0 ? 40 : 20, marginTop: 10 },
              ]}
            />
          </View>
        ))}
      </ScrollView>

      <View style={styles.indicator} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginTop: 0,
    backgroundColor: "#202125",
    paddingVertical: 20,
    borderRadius: 10,
  },
  heightText: { fontSize: 22, color: "white", marginBottom: 20 },
  tick: { width: 40, alignItems: "center" },
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
  },
});

export default React.memo(HeightSliderCm);
