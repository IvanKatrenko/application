import { StyleSheet, Text, View } from 'react-native'
import { SplashScreen, Stack } from 'expo-router';
import { useFonts } from 'expo-font';
import { useEffect } from 'react';

SplashScreen.preventAutoHideAsync();

const RooyLayout = () => {
    const [fontsLoaded, error] = useFonts({
        'pbold': require('../assets/fonts/Poppins-Bold.ttf'),
        'pmedium': require('../assets/fonts/Poppins-Medium.ttf'),
        'pregular': require('../assets/fonts/Poppins-Regular.ttf'),
        'psemibold': require('../assets/fonts/Poppins-SemiBold.ttf'),
    });
    // useFonts - хук для загрузки шрифтов
    useEffect(() => {
        if (error) throw error; // если ошибка произошла, то мы ее выдаем

        if (fontsLoaded) SplashScreen.hideAsync();// если шрифты загрузились, то скрываем сплеш
    }, [fontsLoaded, error]); //в массиве шрифты звгружаються или ошибка

    if (!fontsLoaded && !error) {
        return null;
    }

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

export default RooyLayout
