import Button from "@/components/Button";
import {useState} from "react";
import {StyleSheet, Text, TextInput, View} from "react-native";

const CreateProductScreen = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [errors, setErrors] = useState("");

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

  const onCreate = () => {
    console.log("create a product", {name, price});
    if (!validateInput()) return;
    resetFields();
  };

  return (
    <View style={styles.container}>
      <Text>Create</Text>
      <Text style={styles.label}>Name</Text>
      <TextInput placeholder="name" value={name} onChangeText={setName} style={styles.input} />
      <Text style={styles.label}>Price ($)</Text>
      <TextInput placeholder="9.99" value={price} onChangeText={setPrice} style={styles.input} keyboardType="numeric" />
      <Text style={{color: "red"}}>{errors}</Text>
      <Button text="Create" onPress={onCreate} />
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
  label: {
    color: "gray",
    fontSize: 16,
  },
});

export default CreateProductScreen;
