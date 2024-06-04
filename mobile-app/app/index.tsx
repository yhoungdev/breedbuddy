import { Button } from "@/components/ui/button";
import { Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";

export default function Index() {
  return (
    <>
      <View>
        <StatusBar style="auto" />
        <Button className="">Create an Account</Button>
      </View>
    </>
  );
}
