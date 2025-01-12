import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native-web";

import FormField from "../../components/FormField";
import CustomButton from "../../components/CustomButton";
import { Link } from "expo-router";

import { createUser } from "../../lib/appwrite";

const SignUp = () => {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const submit = () => {
    createUser();
  };

  return (
    <SafeAreaView className="flex-1 items-center justify-center">
      <ScrollView>
        <View
          className="w-full justify-center 
                min-h-[83vh] px-4 my-6"
        >
          <Image
            source={require("../../assets/images/icon.png")}
            resizeMode="contain"
            classname="w-[115px] h-[35px]"
          />

          <Text className="text-2xl text-white text-semibold font-psemibold">
            Sign up to your account
          </Text>

          <FormField
            className="mt-5"
            title="Username"
            value={form.username}
            handleChangeText={(text) => setForm({ ...form, username: e })}
            otherStyles="mt-11"
            keyboardType="email-address"
          />

          <FormField
            className="mt-5"
            title="Email"
            value={form.email}
            handleChangeText={(text) => setForm({ ...form, email: e })}
            otherStyles="mt-7"
          />

          <FormField
            className="mt-5"
            title="Password"
            value={form.password}
            handleChangeText={(text) => setForm({ ...form, password: e })}
            otherStyles="mt-7"
          />

          <CustomButton
            title="Sign Up"
            handlePress={submit}
            containerStyles="mt-7"
            isLoading={isSubmitting}
          />

          <View className="justify-center pt-5 flex-row gap-2">
            <Text className="text-lg text-gray-400 font-pmedium">
              Have an account already?
              <Link href="/sign-in" className="text-primary font-psemibold">
                Sign In
              </Link>
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;
