import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import Card from "./Card";
import Colors from "../constants/Colors";
import MultiColorView from "./MultiColorView";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faTrashAlt,
  faShareSquare,
  faEdit
} from "@fortawesome/free-solid-svg-icons";
import Touchable from "react-native-platform-touchable";
import { Croma } from "../store/store";

export const PaletteCard = props => {
  const { deletePaletteByName } = React.useContext(Croma);
  return (
    <Card
      {...props}
      onPress={() => {
        props.navigation.navigate("Palette", props);
      }}
    >
      <MultiColorView {...props}></MultiColorView>

      <View style={styles.bottom}>
        <Text style={styles.label}>{props.name}</Text>
        <View style={styles.actionButtonsView}>
          <Touchable style={styles.actionButton}>
            <FontAwesomeIcon icon={faShareSquare} />
          </Touchable>
          <Touchable
            onPress={event => {
              event.preventDefault();
              event.stopPropagation();
              deletePaletteByName(props.name);
            }}
            style={styles.actionButton}
          >
            <FontAwesomeIcon icon={faTrashAlt} />
          </Touchable>
        </View>
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  bottom: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    height: 54
  },
  actionButtonsView: {
    flexDirection: "row",
    alignItems: "flex-end"
  },
  actionButton: {
    paddingRight: 16
  },
  label: {
    flex: 1,
    marginHorizontal: 16,
    color: Colors.darkGrey
  }
});
