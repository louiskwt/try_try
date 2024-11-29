import Colors from "@/constants/Colors";
import {OrderItem} from "@/types";
import {Image, StyleSheet, Text, View} from "react-native";
import {defaultPizzaImage} from "./ProductListItem";

type OrderItemListItemProps = {
  orderItem: OrderItem;
};

const OrderItemListItem = ({orderItem}: OrderItemListItemProps) => {
  return (
    <View style={styles.container}>
      <Image source={{uri: orderItem.products.image || defaultPizzaImage}} style={styles.image} resizeMode="contain" />
      <View style={{flex: 1}}>
        <Text style={styles.title}>{orderItem.products.name}</Text>
        <View style={styles.subtitleContainer}>
          <Text style={styles.price}>${orderItem.products.price * orderItem.quantity}</Text>
          <Text>Size: {orderItem.size}</Text>
        </View>
      </View>
      <View style={styles.quantitySelector}>
        <Text>{orderItem.quantity}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  basicInfoSection: {
    flexDirection: "column",
  },
  subtitleContainer: {
    flexDirection: "row",
    marginTop: 5,
    gap: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 3,
  },
  date: {
    color: "gray",
  },
  status: {
    fontWeight: "bold",
  },
  price: {
    color: Colors.light.tint,
    fontSize: 15,
    marginRight: 10,
    fontWeight: "bold",
  },
  statusSection: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  columnLeft: {
    flexDirection: "row",
    width: "80%",
  },
  quantitySelector: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
  },
  image: {
    width: 75,
    aspectRatio: 1,
    alignSelf: "center",
    marginRight: 10,
  },
});

export default OrderItemListItem;
