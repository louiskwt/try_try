import Button from "@/components/Button";
import Colors from "@/constants/Colors";
import {useRouter} from "expo-router";
import {useState} from "react";
import {StyleSheet, Text, TextInput, View} from "react-native";

const SignInScreen = () => {
  const [email, setEmail] = useState<string | undefined>("");
  const [password, setPassword] = useState<string | undefined>("");
  const router = useRouter();
  const navigateToSignUp = () => router.navigate("/(auth)/sign-up");

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Email</Text>
      <TextInput placeholder="jon@gmail.com" value={email} onChangeText={setEmail} style={styles.input} />
      <Text style={styles.label}>Password</Text>
      <TextInput placeholder="" value={password} secureTextEntry onChangeText={setPassword} style={styles.input} />
      <Button text="Sign in" />
      <Text style={styles.textButton} onPress={navigateToSignUp}>
        Create an account
      </Text>
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
  textButton: {
    alignSelf: "center",
    fontWeight: "bold",
    color: Colors.light.tint,
  },
});

export default SignInScreen;
