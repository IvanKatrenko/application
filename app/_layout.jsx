import { StyleSheet, Text, View } from 'react-native'
import { Slot, Stack } from 'expo-router'

const RootLayout = () => {

    return (
        <Stack>
            <Stack.Screen name="index" options={{ headerShown: false }} />
            <Stack.Screen name="modal" options={{ presentation: 'modal' }} />
        </Stack>

        // <>
        //     <Text>Header</Text>
        //     <Slot />
        //     <Text>Footer</Text>
        // </>
    )
}

export default RootLayout