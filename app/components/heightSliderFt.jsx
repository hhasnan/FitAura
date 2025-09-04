import React from "react";
import { View, ScrollView, Text, StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

const HeightSliderFtIn = ({ heightInInches, setHeightInInches }) => {
  // Range: 36in (3ft) to 96in (8ft)
  const heights = Array.from({ length: 61 }, (_, i) => i + 36); // 36" → 96"

  const formatHeight = (inches) => {
    const ft = Math.floor(inches / 12);
    const inch = inches % 12;
    return `${ft} ft ${inch} in`;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heightText}>{formatHeight(heightInInches)}</Text>

      <ScrollView
        horizontal
        snapToInterval={20} // each tick spacing
        decelerationRate="fast"
        showsHorizontalScrollIndicator={false}
        onScroll={(e) => {
          const index = Math.round(e.nativeEvent.contentOffset.x / 20);
          setHeightInInches(heights[index]);
        }}
        scrollEventThrottle={16}
        style={styles.scrollview}
      >
        {heights.map((h, index) => (
          <View key={index} style={styles.tick}>
            <View
              style={[
                styles.line,
                { height: index % 12 === 0 ? 40 : index % 3 === 0 ? 30 : 15 },
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
  tick: { width: 20, alignItems: "center", justifyContent: "flex-end" },
  line: { width: 2, backgroundColor: "white" },
  indicator: {
    position: "absolute",
    top: 60,
    width: 2,
    height: 50,
    backgroundColor: "#FE632B",
  },
  scrollview: {
    flexDirection: "row",
    width: width - 140,
  },
});

export default HeightSliderFtIn;
