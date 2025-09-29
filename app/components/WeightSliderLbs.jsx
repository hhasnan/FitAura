import React from "react";
import { View, ScrollView, Text, StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

const WeightSliderLbs = ({ weight, setWeight }) => {
  // weights from 66.14 to 337.31 in steps of 0.1
  const weights = Array.from(
    { length: Math.round((337.31 - 66.14) * 10) + 1 },
    (_, i) => (66.14 * 10 + i) / 10
  );

  return (
    <View style={styles.container}>
      <Text style={styles.weightText}>{weight.toFixed(1)} lbs</Text>
      <ScrollView
        horizontal
        snapToInterval={20} // width of each tick
        decelerationRate="fast"
        showsHorizontalScrollIndicator={false}
        onScroll={(e) => {
          const index = Math.round(e.nativeEvent.contentOffset.x / 20);
          if (weights[index] !== undefined) {
            setWeight(weights[index]);
          }
        }}
        scrollEventThrottle={16}
        style={styles.scrollview}
      >
        {weights.map((w, index) => (
          <View key={index} style={styles.tick}>
            <View
              style={[
                styles.line,
                { height: index % 10 === 0 ? 40 : 20 } // long line every 1 lb
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
  weightText: { fontSize: 22, color: "white", marginBottom: 20 },
  tick: { width: 60, alignItems: "center", justifyContent: "flex-end" },
  line: { width: 2, backgroundColor: "white" },
  label: { color: "white", fontSize: 12, marginTop: 5 },
  indicator: {
    position: "absolute",
    top: 60,
    width: 2,
    height: 50,
    backgroundColor: "#FE632B",
  },
  scrollview: {
    flexDirection: "row",
    width: width - 80,
  },
});

export default React.memo(WeightSliderLbs);
