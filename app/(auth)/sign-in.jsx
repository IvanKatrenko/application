import { Text, View } from "react-native-web";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native-web";

import FormField from "../../components/FormField";
import CustomButton from "../../components/CustomButton";
import { Link } from "expo-router";
import { signIn } from "../../lib/appwrite";

import { signIn } from "../../lib/appwrite";

const SignIn = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const submit = async () => {
    if (!form.email || !form.password) {
      Alert.aler('Error', 'Please enter all the required fields');
    }

    setIsSubmitting(true);

    try {
      await signIn(form.email, form.password)

      //set it to global state...

      router.replace('/home')
    } catch (error) {
      Alert.alert('Error', error.message);
    } finally {
      setIsSubmitting(false);
    }
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
            Log in to your account
          </Text>

          <FormField
            className="mt-5"
            title="Email"
            value={form.email}
            handleChangeText={(text) => setForm({ ...form, email: e })}
            otherStyles="mt-7"
            keyboardType="email-address"
          />

          <FormField
            className="mt-5"
            title="Password"
            value={form.password}
            handleChangeText={(text) => setForm({ ...form, password: e })}
            otherStyles="mt-7"
          />

          <CustomButton
            title="Log In"
            handlePress={submit}
            containerStyles="mt-7"
            isLoading={isSubmitting}
          />

          <View className="justify-center pt-5 flex-row gap-2">
            <Text className="text-lg text-gray-400 font-pmedium">
              Don't have an account?
              <Link href="/sign-up" className="text-primary font-psemibold">
                Sign Up
              </Link>
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
