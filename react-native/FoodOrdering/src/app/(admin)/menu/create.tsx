import Button from "@/components/Button";
import {defaultPizzaImage} from "@/components/ProductListItem";
import Colors from "@/constants/Colors";
import * as ImagePicker from "expo-image-picker";
import {Stack, useLocalSearchParams} from "expo-router";
import {useState} from "react";
import {Alert, Image, StyleSheet, Text, TextInput, View} from "react-native";

const CreateProductScreen = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [errors, setErrors] = useState("");
  const [image, setImage] = useState<string | null>(null);

  const {id} = useLocalSearchParams();
  const isUpdating = !!id;

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images", "videos"],
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) setImage(result.assets[0].uri);
  };

  const resetFields = () => {
    setName("");
    setPrice("");
  };

  const validateInput = () => {
    setErrors("");
    if (!name) {
      setErrors("Name is required");
      return false;
    }
    if (!price) {
      setErrors("Price is required");
      return false;
    }
    if (isNaN(parseFloat(price))) {
      setErrors("Price needs to be numeric");
      return false;
    }
    return true;
  };

  const onSubmit = () => {
    if (isUpdating) {
      onUpdate();
    } else {
      onCreate;
    }
  };

  const onCreate = () => {
    console.log("create a product", {name, price});
    if (!validateInput()) return;
    resetFields();
  };

  const onUpdate = () => {
    console.log("update a product", {name, price});
    if (!validateInput()) return;
    resetFields();
  };

  const onDelete = () => {
    console.log("deleting");
  };

  const confirmDelete = () => {
    Alert.alert("Confirm", "Are you sure you want to delete this product", [
      {
        text: "Cancel",
      },
      {
        text: "Delete",
        style: "destructive",
        onPress: onDelete,
      },
    ]);
  };

  return (
    <View style={styles.container}>
      <Stack.Screen options={{title: isUpdating ? "Update Product" : "Create Product"}} />
      <Image source={{uri: image || defaultPizzaImage}} style={styles.image} />
      <Text style={styles.textButton} onPress={pickImage}>
        Select Image
      </Text>
      <Text style={styles.label}>Name</Text>
      <TextInput placeholder="name" value={name} onChangeText={setName} style={styles.input} />
      <Text style={styles.label}>Price ($)</Text>
      <TextInput placeholder="9.99" value={price} onChangeText={setPrice} style={styles.input} keyboardType="numeric" />
      <Text style={{color: "red"}}>{errors}</Text>
      <Button text={isUpdating ? "Update" : "Create"} onPress={onSubmit} />
      {isUpdating && (
        <Text style={styles.textButton} onPress={confirmDelete}>
          Delete
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 10,
  },
  input: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 5,
    marginTop: 5,
    marginBottom: 20,
  },
  image: {
    width: "50%",
    aspectRatio: 1,
    alignSelf: "center",
  },
  textButton: {
    alignSelf: "center",
    fontWeight: "bold",
    color: Colors.light.tint,
  },
  label: {
    color: "gray",
    fontSize: 16,
  },
});

export default CreateProductScreen;
