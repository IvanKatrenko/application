//entering search information

import { View, Text, TouchableOpacity, TextInput } from "react-native";
import React, { useState } from "react";
import { SearchInput } from "../components/SearchInput";

import { icons } from '../constans'

const SearchInput = ({
    title,
    value,
    handleChangeText,
    placeholder,
    otherStyles,
    ...props
}) => {
    const [showPassword, setShowPassword] = useState(false);

    return (

        <View
            className="w-full h-16 px-4 bg-black-100 rounded-3xl 
            focus: border-2 border-gray-red-100 items-center flex-row
             justify-between space-x-4"
        >
            <TextInput
                className="text-base mt-0.5 text-white flex-1 font-pregular"
                value={value}
                plaxheolder={placeholder}
                placeholderTextColor="gray-400"
                onChangeText={handleChangeText}
                secureTextEntry={title === "Password" && !showPassword}
            />

            <TouchableOpacity>
                <Image
                    source={icons.search}
                    className="w-6 h-6"
                    resizeMode="contain"
                />
            </TouchableOpacity>
        </View>
    );
};

export default SearchInput;
