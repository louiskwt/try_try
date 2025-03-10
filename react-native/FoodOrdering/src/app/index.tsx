import {supabase} from "@/lib/supabase";
import {useAuth} from "@/providers/AuthProvider";
import {Link, Redirect} from "expo-router";
import React from "react";
import {ActivityIndicator, View} from "react-native";
import Button from "../components/Button";

const index = () => {
  const {loading, session, profile, isAdmin} = useAuth();
  if (loading) return <ActivityIndicator />;

  if (!session && !loading) return <Redirect href={"/sign-in"} />;

  if (!isAdmin) {
    return <Redirect href={"/(user)"} />;
  }

  return (
    <View style={{flex: 1, justifyContent: "center", padding: 10}}>
      <Link href={"/(user)"} asChild>
        <Button text="User" />
      </Link>
      <Link href={"/(admin)"} asChild>
        <Button text="Admin" />
      </Link>
      <Button text="Sign out" onPress={() => supabase.auth.signOut()} />
    </View>
  );
};

export default index;
