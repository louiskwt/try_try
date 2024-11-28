import Button from "@/components/Button";
import {defaultPizzaImage} from "@/components/ProductListItem";
import {useCart} from "@/provider/CartProvider";
import {PizzaSize} from "@/types";
import products from "@assets/data/products";
import {Stack, useLocalSearchParams} from "expo-router";
import {useState} from "react";
import {Image, Pressable, StyleSheet, Text, View} from "react-native";

const sizes: PizzaSize[] = ["S", "M", "L", "XL"];

const ProductDetailScreen = () => {
  const {id} = useLocalSearchParams();
  const {addItem} = useCart();
  const [selectedSize, setSelectedSize] = useState<PizzaSize>("M");
  const product = products.find((p) => p.id.toString() === id);
  const addToCart = () => {
    if (!product) return;
    addItem(product, selectedSize);
  };

  if (!product) return <Text>Product not found</Text>;

  return (
    <View style={styles.container}>
      <Stack.Screen options={{title: product?.name || "Pizza"}} />
      <Image source={{uri: product.image || defaultPizzaImage}} style={styles.image} />

      <Text>Select Size</Text>

      <View style={styles.sizes}>
        {sizes.map((size) => (
          <Pressable
            key={size}
            onPress={() => {
              setSelectedSize(size);
            }}
            style={[styles.size, {backgroundColor: selectedSize === size ? "gainsboro" : "white"}]}>
            <Text style={[styles.sizeText, {color: selectedSize === size ? "black" : "gray"}]}>{size}</Text>
          </Pressable>
        ))}
      </View>

      <Text style={styles.price}>${product.price}</Text>
      <Button text={"Add to Cart"} onPress={addToCart} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    padding: 10,
  },
  image: {
    width: "100%",
    aspectRatio: 1,
  },
  sizes: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 10,
  },
  size: {
    width: 50,
    aspectRatio: 1,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
  },
  sizeText: {
    fontSize: 30,
    fontWeight: 500,
  },
  price: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: "auto",
  },
});

export default ProductDetailScreen;
