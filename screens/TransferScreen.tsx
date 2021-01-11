import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import {
    View,
    TouchableOpacity,
    Text,
    Image,
    StyleSheet,
    Platform
} from 'react-native';
import Header from '../components/Header';
import SubHeading from '../components/SubHeader';
import { COLORS, FONTS, icons, SIZES } from '../constants';

const Transfers = () => {

    function renderActions(){
        return (
            <View>
                <TouchableOpacity
                    style={{...styles.actionContainer, backgroundColor: COLORS.lightyellow,}}
                    onPress={()=>console.log("Transfer to Wallet")}
                >
                    <View style={{ flexDirection: 'row'}}>
                        <View style={{ backgroundColor: COLORS.yellow, padding: SIZES.padding, borderRadius: SIZES.padding}}>
                            <Image 
                                source={icons.wallet}
                                style={{
                                    width: 30,
                                    height: 30,
                                    tintColor: COLORS.white
                                }}
                            />
                        </View>
                        <View style={{ marginLeft: SIZES.padding *2}}>
                            <Text style={{ ...FONTS.body4}}>Transfer Your Money</Text>
                            <Text style={{ ...FONTS.h4}}> Wallet to Wallet</Text>
                        </View>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity
                    style={{...styles.actionContainer, backgroundColor: COLORS.lightGreen}}
                    onPress={()=>console.log("Transfer to Bank")}
                >
                    <View style={{ flexDirection: 'row'}}>
                        <View style={{ backgroundColor: COLORS.yellow, padding: SIZES.padding, borderRadius: SIZES.padding}}>
                            <Image 
                                source={icons.wallet}
                                style={{
                                    width: 30,
                                    height: 30,
                                    tintColor: COLORS.white
                                }}
                            />
                        </View>
                        <View style={{ marginLeft: SIZES.padding *2}}>
                            <Text style={{ ...FONTS.body4}}>Transfer Your Money</Text>
                            <Text style={{ ...FONTS.h4}}> Wallet to Bank</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                
            </View>
        )
    }

    function renderTransactions() {
        return (
            <View style={{ flexDirection: 'row'}}>
                <View style={{ margin: SIZES.padding *2, backgroundColor: COLORS.lightGreen, width: SIZES.width * 0.4, padding: SIZES.padding * 2, alignItems: 'center', borderRadius: SIZES.radius}}>
                    <Image
                        source={{ uri: 'https://i.pinimg.com/736x/cd/da/12/cdda125aea8db8e66e142fffc0ecf2bd.jpg' }}
                        style={{
                            width: 60,
                            height: 60,
                            borderRadius: 10
                        }}
                    />
                    <View style={{ paddingVertical: SIZES.padding, alignItems: 'center'}}>
                        <Text style={{ ...FONTS.body2}}>Alyssa Drake</Text>
                        <Text  style={{ ...FONTS.h3}}>******896890</Text>
                    </View>
                    <View style={{ backgroundColor: COLORS.white, paddingVertical: SIZES.padding, borderRadius: SIZES.radius, paddingHorizontal: SIZES.padding*2}}>
                        <Text style={{...FONTS.h4, color: COLORS.green}}>+ $80.78</Text>
                    </View>
                    
                </View>
                <View style={{ margin: SIZES.padding *2, backgroundColor: COLORS.lightRed, width: SIZES.width * 0.4, padding: SIZES.padding * 2, alignItems: 'center', borderRadius: SIZES.radius}}>
                    <Image
                        source={{ uri: 'https://static.wikia.nocookie.net/the-order-netflix/images/d/d3/Edward.jpg/revision/latest/top-crop/width/360/height/450?cb=20190312005408' }}
                        style={{
                            width: 60,
                            height: 60,
                            borderRadius: 10
                        }}
                    />
                    <View style={{ paddingVertical: SIZES.padding, alignItems: 'center'}}>
                        <Text style={{ ...FONTS.body2}}>Ed Coventary</Text>
                        <Text  style={{ ...FONTS.h3}}>******474286</Text>
                    </View>
                    <View style={{ backgroundColor: COLORS.white, paddingVertical: SIZES.padding, borderRadius: SIZES.radius, paddingHorizontal: SIZES.padding*2}}>
                        <Text style={{...FONTS.h4, color: COLORS.red}}>- $45.00</Text>
                    </View>
                    
                </View>
            </View>
        )
    }


    return (
        <View style={styles.container}>
            <Header headerText="Transfers" />
            <SubHeading headerText="Where to Send?" iconName="qr-code-outline" />
            {renderActions() }
            {renderTransactions() }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.lightGray,
        marginTop: Platform.OS == "android" ? 30 : 0,
        padding: SIZES.padding
    },
    actionContainer: {
        
        marginHorizontal: SIZES.padding * 2,
        marginVertical: SIZES.padding,
        padding: SIZES.padding * 2,
        justifyContent: 'center',
        borderRadius: SIZES.radius * 0.5
    }
})

export default Transfers;