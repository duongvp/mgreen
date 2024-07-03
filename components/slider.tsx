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
        illustration: 'https://cities-today.com/wp-content/uploads/2021/01/smart-waste_dreamstime_m_165673571-1024x683-1.jpg',
    },
    {
        id: 2,
        title: 'Earlier this morning, NYC',
        subtitle: 'Lorem ipsum dolor sit amet',
        illustration: 'https://s.yimg.com/ny/api/res/1.2/uhJPjDmiX3oM_CQo9Y0mOw--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTQwMA--/https://media.zenfs.com/en/the_telegraph_258/cf95b819b7b98142f83a42b385ab79ad',
    },
    {
        id: 3,
        title: 'White Pocket Sunset',
        subtitle: 'Lorem ipsum dolor sit amet et nuncat ',
        illustration: 'https://plasticsmartcities.org/wp-content/uploads/2023/11/Is-there-a-key-768x432.png',
    },
    {
        id: 4,
        title: 'Acrocorinth, Greece',
        subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
        illustration: 'https://www.veolia.com/sites/g/files/dvc4206/files/styles/media/public/image/2023/03/collecte-dechets-779.jpg?h=df969d38&itok=HyHpotJS',
    },
    {
        id: 5,
        title: 'The lone tree, majestic landscape of New Zealand',
        subtitle: 'Lorem ipsum dolor sit amet',
        illustration: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0tkRJrp52HxxtOnSZ9cicEUGrzqUc40vJfiS5yQI8VDHIoSurA5ITX1bgRutxasBxuFU&usqp=CAU',
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
