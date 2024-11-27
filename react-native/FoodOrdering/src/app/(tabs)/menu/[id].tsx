import {Stack, useLocalSearchParams} from "expo-router";
import {Text, View} from "react-native";

const ProductDetailScreen = () => {
  const {id} = useLocalSearchParams();
  return (
    <View>
      <Stack.Screen options={{title: "Detail"}} />
      <Text style={{fontSize: 20}}>Porduct Details for id {id}</Text>
    </View>
  );
};

export default ProductDetailScreen;
