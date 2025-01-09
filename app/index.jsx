import { Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Redirect, router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native-web";
import CustomButton from "../components/CustomButton";

export default function App() {
  return (
    <SafeAreaView
      className="flex-1 items-center
         justify-center bg-primary h-full"
    >
      <ScrollView
        contentContainerStyle={{
          height: "100%",
        }}
      >
        <View
          className="flex-1 items-center justify-center 
                min-h-[85vh] px-4"
        >
          <Image
            source={require("../assets/images/favicon.png")}
            resizeMode="contain"
            className="w-[100px] h-[84px]"
          />

          <Image
            source={require("../assets/images/favicon.png")}
            className="max-w--[380px] w-full h-[300px]"
            resizeMode="contain"
          />

          <View className="relative mt-5">
            <Text
              className="text-3xl text-white font-bold 
                        text-center"
            >
              Discover Endless Possibilities with{" "}
              <Text classname="text-secondary-200">Aora</Text>
            </Text>
            <Image
              source={require("../assets/images/favicon.png")}
              className="w-[136px] h-[15px]
                                absolute bottom-2 right-8"
              resizeMode="contain"
            />
          </View>
          <Text
            className="text-sm font-pregular
                    text-gray-100 mt-7 text-center"
          >
            Where creativity meets innovation: embark on a journey of limitless
            exploration with Aora
          </Text>

          <CustomButton
            title="Continue with Email"
            handlePress={() => router.push("/sign-in")}
            containerStyles="mt-10 mt-7"
          />
        </View>
      </ScrollView>

      <StatusBar backgroundColor="#161622" style="light" />
    </SafeAreaView>
  );
}
