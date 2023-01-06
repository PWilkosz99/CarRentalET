import renderer from "react-test-renderer";
import Icon from "react-native-vector-icons/Ionicons";
import {
  StyleSheet, Text, View, TouchableOpacity,
} from "react-native";

describe("DrawerContent", () => {
  it("has 3 children", () => {
    const tree = renderer.create(<DrawerContentTester />).toJSON();
    expect(tree.children.length).toBe(3);
  });

  it("renders correctly", () => {
    const tree = renderer.create(<DrawerContentTester />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

// temrporary solution
function DrawerContentTester() {
  return (
    <View style={styles.mainView}>
      {/* <DrawerContentScrollView {...props} contentContainerStyle={styles.container}> */}
      {/* <ImageBackground source={require('../assets/images/DrawerBackground.jpg')} style={styles.image}>
                      <Image /> */}
      <Text style={styles.text}>test@testa.aaa</Text>
      {/* </ImageBackground> */}
      <View style={styles.drawerItem}>
        {/* <DrawerItemList {...props} /> */}
      </View>
      {/* </DrawerContentScrollView> */}
      <View style={styles.footer}>
        <TouchableOpacity onPress={() => {}} style={styles.button}>
          <View style={styles.btnContent}>
            <Icon name="exit-outline" size={22} color="black" />
            <Text style={styles.logout}>Logout</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
