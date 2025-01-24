import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { FlatList } from 'react-native-web'

import { images } from '../../constans'
import { Trending } from '../../components/Trending'
import { SearchInput } from '../../components/SearchInput'

const Home = () => {
    return (
        <SafeAreaView className="bg-primary">
            <FlatList
                // data={[{ id: 1 }, { id: 2 }, { id: 3 },]}
                data={[]}
                keyExtractor={(item) => item.id}
                renderItem={(item) => (
                    <Text className="text-red-500 text-3xl text-white">
                        {item.id}
                    </Text>
                )}
                ListHeaderComponent={() => (
                    <View className="flex-1 items-center
                            justify-center space-y-2">
                        <View className="justify-center items-start">
                            // first sector
                            <View>
                                <Text className="font-pmedium text-sm
                                        text-gray-100">
                                    Welcome Back
                                </Text>
                                <Text className="font-pbold text-2xl text-white-100">
                                    John Doe
                                </Text>

                            </View>
                            // second sector
                            <View className="mt-1.5">
                                <Image
                                    source={images.logo}
                                    className="w-11 h-12"
                                    resizeMode="contain"
                                />
                            </View>
                        </View>

                        <SearchInput />

                        // third sector (video)
                        <View className="mt-1.5 w-full h-[300px]">
                            <Text className="font-pbold text-2xl
                             text-white-100 font-pregular">
                                Latest Video
                            </Text>
                                // horizontal position video on the page
                            <Trending posts={[{ id: 1 }, { id: 2 },
                            { id: 3 }] ?? []} />

                        </View>

                    </View>

                )}
                ListEmptyComponent={() => (
                    <Text className="text-red-500 text-3xl text-white">Empty</Text>
                )}
            />
        </SafeAreaView >
    )
}

export default Home