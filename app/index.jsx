import { Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Link } from "expo-router";
import 'expo-router/entry';

export default function App() {
    return (
        <View className="flex-1 items-center
         justify-center bg-gray-900">
            <Text className="text-2xl text-white font-bold">Root Layout</Text>
            <StatusBar style="auto" />
            <Link href="/home" style={{ color: "red" }}>go to
                Home</Link>
        </View>
    );
};


