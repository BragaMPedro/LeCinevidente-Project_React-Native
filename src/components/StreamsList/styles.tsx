import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  generos: {
    justifyContent: "space-between",
  },

  streamsContainer: {
    flexDirection: "column",
    justifyContent: "space-evenly",
    height: 100,
  },

  streamType:{
    flexDirection: "row",
    marginVertical: 12,
    alignItems: "center"
  },

  streamImagem: {
    width: 30,
    height: 30,
    marginLeft: 12,
    borderRadius: 7,
  },
});
