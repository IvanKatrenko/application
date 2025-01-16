import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Trending = ({ posts }) => {
    return (
        <FlatList
            data={posts}
            keyExtractor={(item) => item.$id}
            renderitem={({ item }) => (
                <Text className="text-red-500 text-3xl text-white">
                    {item.id}
                </Text>
            )}
            horizontal
        />
    )
}

export default Trending
