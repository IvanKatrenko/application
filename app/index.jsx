import { Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Link } from "expo-router";
import 'expo-router/entry';

export default function App() {
    return (
        <View className="flex-1 items-center
         justify-center bg-gray-900">
            <Text>Root Layout</Text>
            <StatusBar style="auto" />
            <Link href="/profile" style={{ color: "red" }}>go to Profile</Link>
        </View>
    );
};


