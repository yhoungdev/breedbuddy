import { Button } from "@/components/ui/button";
import { View, Image, ScrollView } from "react-native";
import { StatusBar } from "expo-status-bar";
import Container from "@/components/layout/container";
import { Typography, ViewContainer } from "@/components/createCustomElements";
import { Link } from "expo-router";

const onboardingImage = require("../assets/images/onboarding/breed_onboarding.png");
export default function Index() {
  return (
    <Container className="h-full  flex justify-center">
      <View>
        <Image
          source={onboardingImage}
          style={{ width: "100%", height: "60%" }}
          resizeMode="contain"
        />
      </View>
      <View>
        <Typography className="text-center font-semibold text-lg">
          Connect with Breeders & Shelters
        </Typography>

        <Typography className="text-center  mt-2  text-gray-700">
          Whether you're looking to adopt or purchase, find your future pet
          companion with ease.
        </Typography>

        <ViewContainer className="flex gap-5 my-5 justify-center text-center">
          <Button className="my-2">
            <Link href={"/_app"}>Create Account</Link>
          </Button>
          <Link href={"/auth"} className="text-center">
            <Typography>Sign in to exising account</Typography>
          </Link>
        </ViewContainer>
      </View>
      <StatusBar />
    </Container>
  );
}
