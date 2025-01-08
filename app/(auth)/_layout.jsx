import { Text, View } from 'react-native'
import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'

const AuthLayout = () => {
    return (
        <>
            <Stack>
                <Stack.Screen
                    name="sign-in"
                    options={{ headerShown: false }}
                />
            </Stack>
            {/* // for registration */}
            <Stack>
                <Stack.Screen
                    name="sign-up"
                    options={{ headerShown: false }}
                />
            </Stack>

            <StatusBar
                backgroundColor='#161622'
                barStyle='light-content'
            />
        </>
    )
}

export default AuthLayout

const styles = StyleSheet.create({})