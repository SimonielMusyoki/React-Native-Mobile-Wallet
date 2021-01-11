import React from 'react';
import {
    View,
    TouchableOpacity,
    Image,
    Text
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { icons, SIZES, COLORS, FONTS } from '../../constants';

export type HeaderProps = {
    headerText: string;
}

const Header = ({headerText}: HeaderProps) => {
    const navigation = useNavigation()
        return (
            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginLeft: SIZES.padding * 2
            }}>
                <TouchableOpacity
                    onPress={()=>navigation.goBack() }
                >
                    <Image 
                        source={icons.back} 
                        style={{
                            width: 30,
                            height: 30,
                            tintColor: COLORS.primary
                        }}
                    />
                </TouchableOpacity>
                
                <Text style={{
                    color: COLORS.primary,
                    marginLeft: SIZES.padding * 2,
                    ...FONTS.h3
                }}>{headerText}</Text>
            </View>
        )
    }

    export default Header;