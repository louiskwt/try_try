import Button from "@/components/Button";
import Colors from "@/constants/Colors";
import {useRouter} from "expo-router";
import {useState} from "react";
import {StyleSheet, Text, TextInput, View} from "react-native";

const SignInScreen = () => {
  const [email, setEmail] = useState<string | undefined>("");
  const [password, setPassword] = useState<string | undefined>("");
  const [errors, setErrors] = useState<string | undefined>("");

  const router = useRouter();

  const navigateToSignIn = () => router.navigate("/(auth)/sign-in");

  const validateInput = () => {
    setErrors("");
    if (!email) {
      setErrors("Email is required");
      return false;
    }

    if (email && !/^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/.test(email)) {
      setErrors("Please enter a valid email");
      return false;
    }

    if (!password) {
      setErrors("Password is required");
      return false;
    }

    if (password && password.length < 8) {
      setErrors("Password has to be at least 8 characters long!");
      return false;
    }
    return true;
  };

  const onSubmit = () => {
    if (validateInput()) {
      console.log("signed up");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Email</Text>
      <TextInput placeholder="jon@gmail.com" value={email} onChangeText={setEmail} style={styles.input} />
      <Text style={styles.label}>Password</Text>
      <TextInput placeholder="" value={password} secureTextEntry onChangeText={setPassword} style={styles.input} />
      <Text style={{color: "red"}}>{errors}</Text>
      <Button text="Create account" onPress={onSubmit} />
      <Text style={styles.textButton} onPress={navigateToSignIn}>
        Sign in
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
