import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ScrollView } from 'react-native-web'

import { images } from '../../constants'
import FormField from '../../components/FormField'
import CustomButton from '../../components/CustomButton'


const SignIn = () => {
    const [form, setForm] = useState({
        email: "",
        password: "",
        confirmPassword: "",
    })

    return (
        <SafeAreaView className="flex-1 items-center justify-center">
            <ScrollView>
                <View className="w-full justify-center h-full px-4 my-6">
                    <Image source={images.logo} resizeMode="contain" classname="w-[115px] h-[35px]" />

                    <Text className="text-2xl text-white text-semibold font-psemibold">Log in
                        to your account
                    </Text>

                    <FormField className="mt-5"
                        title="Email"
                        value={form.email}
                        handleChangeText={(text) =>
                            setForm({ ...form, email: e })}
                        otherStyles="mt-7"
                        keyboardType="email-address"
                    />

                    <FormField className="mt-5"
                        title="Password"
                        value={form.password}
                        handleChangeText={(text) =>
                            setForm({ ...form, password: e })}
                        otherStyles="mt-7"
                    />

                    <CustomButton
                        title="Log In"
                        handlePress={() => console.log(form)}
                        containerStyles="mt-7"
                    />

                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default SignIn

