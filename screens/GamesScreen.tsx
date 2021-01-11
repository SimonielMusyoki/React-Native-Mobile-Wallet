import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    FlatList,
    StyleSheet,
    Platform,
} from 'react-native';

import games from '../data/games'
import Header from '../components/Header';
import { COLORS, FONTS, SIZES } from '../constants';

export type GameTileProps={
    gameName: string;
    gameImg: string
}

const GameTile = ({gameName,gameImg }: GameTileProps) => {
    return (
        <TouchableOpacity 
            style={styles.gameContainer}
            onPress={()=> console.log(gameName)}
        >
            <Image 
                source={{ uri: gameImg}}
                resizeMode="cover"
                style={{
                    width: 80,
                    height: 80,
                    borderRadius: 10,

                }}
            />
            <Text style={{...FONTS.body4, paddingVertical: SIZES.padding, textAlign: 'center', fontWeight: 'bold'}}>{gameName}</Text>
        </TouchableOpacity>
    )
}

const GamesScreen = () => {
    return (
        <View style={styles.container}>
            <Header headerText="Game" />
            <FlatList 
                data={games.slice(0,8)}
                keyExtractor={item => `${item.id}`}
                renderItem={({item}) => <GameTile gameName={item.gameName} gameImg={item.gameImage} />}
                numColumns={4}
                ListHeaderComponent={
                    <View style={{ marginVertical: SIZES.padding *2}}>
                        <Text style={{ ...FONTS.h4, paddingHorizontal: SIZES.padding}}>Popular Games</Text>
                    </View>
                }
            />
            <FlatList 
                data={games.slice(8,12)}
                keyExtractor={item => `${item.id}`}
                renderItem={({item}) => <GameTile gameName={item.gameName} gameImg={item.gameImage} />}
                numColumns={4}
                ListHeaderComponent={
                    <View style={{ marginVertical: SIZES.padding *2}}>
                        <Text style={{ ...FONTS.h4, paddingHorizontal: SIZES.padding}}>Flash Games</Text>
                    </View>
                }
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.lightGray,
        justifyContent: 'center',
        marginTop: Platform.OS =="android" ? 30 : 0,
        padding: SIZES.padding
    },
    gameContainer: {
        alignItems: 'center',
        maxWidth: SIZES.width *0.20,
        marginHorizontal: SIZES.padding,
    }
})

export default GamesScreen;