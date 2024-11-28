import Button from "@/components/Button";
import CartListItem from "@/components/CartListItem";
import {useCart} from "@/providers/CartProvider";
import {StatusBar} from "expo-status-bar";
import {FlatList, Platform, Text, View} from "react-native";

const CartScreen = () => {
  const {items, total} = useCart();

  return (
    <View>
      <FlatList
        data={items}
        renderItem={({item}) => <CartListItem key={item.product.id} cartItem={item} />}
        contentContainerStyle={{
          gap: 10,
        }}
      />
      <Text style={{marginTop: 20, fontSize: 20, fontWeight: "500"}}>Total: ${total}</Text>
      <Button text="Check out" />
      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
    </View>
  );
};

export default CartScreen;
