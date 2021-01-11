import React from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { SIZES, FONTS, COLORS } from '../../constants';

export type SubHeadingProps={
    headerText: string;
    iconName: string;
}

const SubHeading = ({headerText,iconName}:SubHeadingProps) => {
    return(
        <View style={styles.container}>
            <View style={{ maxWidth: "30%", }}>
                <Text style={{ ...FONTS.h2}}>{headerText}</Text>
            </View>
            <View style={styles.iconContainer}>
                <Ionicons name={iconName} size={20} color={COLORS.black} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        margin: SIZES.padding, 
        flexDirection: "row", 
        justifyContent: 'space-between'
    },
    iconContainer: {
        backgroundColor: COLORS.gray, 
        padding: 5, 
        borderRadius: 5, 
        justifyContent: 'center', 
        alignItems: 'center', 
        width: 30, 
        height: 30, 
        alignSelf: 'flex-end', 
        marginRight: SIZES.padding
    }
})

export default SubHeading