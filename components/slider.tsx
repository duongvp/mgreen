import React, { useRef, useState, useEffect } from 'react';
import {
    View,
    Dimensions,
    StyleSheet,
    Image,
} from 'react-native';
import Carousel from 'react-native-reanimated-carousel';

const ENTRIES1 = [
    {
        id: 1,
        title: 'Beautiful and dramatic Antelope Canyon',
        subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
        illustration: 'https://i.imgur.com/UYiroysl.jpg',
    },
    {
        id: 2,
        title: 'Earlier this morning, NYC',
        subtitle: 'Lorem ipsum dolor sit amet',
        illustration: 'https://i.imgur.com/UPrs1EWl.jpg',
    },
    {
        id: 3,
        title: 'White Pocket Sunset',
        subtitle: 'Lorem ipsum dolor sit amet et nuncat ',
        illustration: 'https://i.imgur.com/MABUbpDl.jpg',
    },
    {
        id: 4,
        title: 'Acrocorinth, Greece',
        subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
        illustration: 'https://i.imgur.com/KZsmUi2l.jpg',
    },
    {
        id: 5,
        title: 'The lone tree, majestic landscape of New Zealand',
        subtitle: 'Lorem ipsum dolor sit amet',
        illustration: 'https://i.imgur.com/2nCt3Sbl.jpg',
    },
];

const MyCarousel = () => {
    const { width: screenWidth } = Dimensions.get('window');

    return (
        <View>
            <Carousel
                width={screenWidth}
                height={screenWidth / 2}
                autoPlay={true}
                data={ENTRIES1}
                pagingEnabled={true}
                scrollAnimationDuration={2500}
                renderItem={({ item }) => (
                    <View style={styles.carouselItem}>
                        <Image style={styles.img} source={{ uri: item.illustration }} />
                    </View>
                )}
            />
        </View >
    )

};

export default MyCarousel;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    carouselItem: {
        flex: 1,
        justifyContent: 'center',
        overflow: "hidden"
    },
    img: {
        width: "100%",
        height: "100%"
    }
});
