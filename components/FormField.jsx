import { View, Text } from 'react-native'
import React from 'react'
import { useState } from 'react'
import { TextInput } from 'react-native'

import { icons } from '../constants'

const FormField = ({ title, value, handleChangeText, placeholder, otherStyles, ...props }) => {

    const [showPassword, setShowPassword] = useState(false)

    return (
        <View className={`space-y-2 ${otherStyles}`}>
            <Text className=" border-2 border-gray-100 text-base text-gray-100 font-pmedium">{title}</Text>
            <View className="w-full h-16 px-4 bg-black-100 rounded-3xl 
            focus: border-2 border-gray-red-100 items-center flex-row justify-between">
                <TextInput
                    className="text-base text-gray-100 font-pmedium text-base"
                    value={value}
                    plaxheolder={placeholder}
                    placeholderTextColor="gray-400"
                    onChangeText={handleChangeText}
                    secureTextEntry={title === "Password" && !showPassword}
                />

                {title === "Password" && (
                    <TouchableOpacity onPress={() =>
                        setShowPassword(!showPassword)}>
                        <Image
                            source={showPassword ? icons.eye : icons.eyehide}
                            className="w-5 h-5"
                            resizeMode="contain"
                        />
                    </TouchableOpacity>
                )}
            </View>
        </View>
    )
}

export default FormField