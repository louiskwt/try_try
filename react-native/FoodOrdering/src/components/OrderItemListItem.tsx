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
      <View style={styles.columnLeft}>
        <Image source={{uri: orderItem.products.image || defaultPizzaImage}} style={styles.image} />
        <View style={styles.basicInfoSection}>
          <Text style={styles.title}>{orderItem.products.name}</Text>
          <View style={styles.itemInfoRow}>
            <Text style={styles.price}>${orderItem.products.price * orderItem.quantity}</Text>
            <Text>Size: {orderItem.size}</Text>
          </View>
        </View>
      </View>
      <View style={styles.columnRight}>
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
  itemInfoRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 5,
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
  columnRight: {
    width: "20%",
    flexDirection: "column",
    alignItems: "center",
    flex: 1,
  },
  image: {
    width: "30%",
    aspectRatio: 1,
  },
});

export default OrderItemListItem;
