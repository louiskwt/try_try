import OrderListItem from "@/components/OrderListItem";
import orders from "@assets/data/orders";
import {Stack, useLocalSearchParams} from "expo-router";
import {StyleSheet, Text, View} from "react-native";

const ProductDetailScreen = () => {
  const {id} = useLocalSearchParams();
  const order = orders.find((o) => o.id.toString() === id);
  if (!order) return <Text>Order Not Found!</Text>;

  return (
    <View style={style.container}>
      <Stack.Screen options={{title: `Order #${order?.id}` || "Order"}} />
      <OrderListItem order={order} />
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    padding: 10,
  },
});

export default ProductDetailScreen;
