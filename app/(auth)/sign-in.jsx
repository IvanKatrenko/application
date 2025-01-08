import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ScrollView } from 'react-native-web'

import { images } from '../../constants'

const SignIn = () => {
    return (
        <SafeAreaView className="flex-1 items-center justify-center">
            <ScrollView>
                <View className="w-full justify-center h-full px-4 my-6">
                    <Image source={images.logo} resizeMode="contain" classname="w-[115px] h-[35px]" />

                    <Text className="text-2xl text-white text-semibold font-psemibold">Log in
                        to your account</Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default SignIn

