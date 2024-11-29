import {defaultPizzaImage} from "@/components/ProductListItem";
import Colors from "@/constants/Colors";
import {PizzaSize} from "@/types";
import products from "@assets/data/products";
import {FontAwesome} from "@expo/vector-icons";
import {Link, Stack, useLocalSearchParams} from "expo-router";
import {Image, Pressable, StyleSheet, Text, View} from "react-native";

const sizes: PizzaSize[] = ["S", "M", "L", "XL"];

const ProductDetailScreen = () => {
  const {id} = useLocalSearchParams();
  const product = products.find((p) => p.id.toString() === id);

  if (!product) return <Text>Product not found</Text>;

  return (
    <View style={styles.container}>
      <Stack.Screen
        options={{
          title: product.name,
          headerRight: () => (
            <Link href={`/(admin)/menu/create?id=${id}`} asChild>
              <Pressable>{({pressed}) => <FontAwesome name="pencil" size={20} color={Colors.light.tint} style={{marginRight: 15, opacity: pressed ? 0.5 : 1}} />}</Pressable>
            </Link>
          ),
        }}
      />
      <Image source={{uri: product.image || defaultPizzaImage}} style={styles.image} />
      <Text style={styles.title}>{product.name}</Text>
      <Text style={styles.price}>${product.price}</Text>
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
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  price: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default ProductDetailScreen;
