import  React from 'react';
import { 
    View,
    Text,
    TouchableOpacity,
    ScrollView,
    Image,
    StyleSheet
} from 'react-native'
import { Ionicons, Feather } from '@expo/vector-icons'
import { COLORS, FONTS, icons, SIZES } from '../constants';

export type TileProps = {
    iconName: string;
    text: string;
    infoText?: string;
}

const ProfileTile = ({iconName, text, infoText}:TileProps) => {
    return (
        <TouchableOpacity style={styles.profileTile}>
            <View style={{ flexDirection: 'row', alignItems: 'center'}}>
                <Ionicons name={iconName} size={35} color={COLORS.primary} />
                <Text style={styles.profileTileText}>{text}</Text>
            </View>
            <View style={styles.profileTileRight}>
                { infoText ? <Text style={styles.profileTileText}>{infoText}</Text>: null}
                <Ionicons name="chevron-forward-outline" size={30} color={COLORS.gray} />

            </View>
        </TouchableOpacity>
    )
}

const ProfileScreen = () => {
    function renderHeader(){
        return (
            <View style={styles.headerView}>
                <Image 
                    source={{ uri: 'https://simonielmusyoki.com/images/user-thumb/musyox.jpg'}}
                    resizeMode="contain"
                    style={{
                        width: 80,
                        height: 80,
                        borderRadius: 20
                    }}
                />
                <View style={styles.profileName}>
                    <Text style={{ color: COLORS.white, ...FONTS.body2}}>Simoniel Musyoki</Text>
                    <Text style={{ color: COLORS.white, ...FONTS.body3}}>+254 719 177 308</Text>
                </View>
            </View>
        )
    }

    function renderTiles() {
        return (
            <View>
                <ProfileTile iconName="cash" text="Balance" infoText="$115.78" />
                <ProfileTile iconName="qr-code-outline" text="QR Code" />
                <ProfileTile iconName="barcode" text="Bar Code" />
                <ProfileTile iconName="lock-closed" text="Password" infoText="254***" />
                <ProfileTile iconName="finger-print" text="Fingerprint" />
                <ProfileTile iconName="mail" text="Email" infoText=".mtk3@gmail.com" />

            </View>
        )
    }

    function renderSignOut() {
        return(
            <TouchableOpacity 
                style={{
                    flexDirection: 'row',
                    padding: SIZES.padding,
                    marginHorizontal: SIZES.padding *3,
                    marginTop: SIZES.padding *2,
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    backgroundColor: COLORS.lightGreen,
                    borderRadius: 10
                }}
                onPress={()=> console.log("Sign out pressed")}
            >
                <View style={{
                    padding: SIZES.padding,
                    backgroundColor: COLORS.primary,
                    borderRadius: 10
                }}>
                    <Feather name="log-out" size={20} color={COLORS.white} />
                </View>
                <Text style={{
                    color: COLORS.primary,
                    ...FONTS.body3
                }}>Sign out</Text>
            </TouchableOpacity>
        )
    }
    return (
        <ScrollView style={{ flex: 1}}>
            { renderHeader() }
            { renderTiles() }
            { renderSignOut() }
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    headerView: {
        margin:SIZES.padding * 3,
        backgroundColor: COLORS.primary,
        borderRadius: SIZES.radius,
        padding: SIZES.padding * 3,
        flexDirection: 'row'
    },
    profileName: {
        justifyContent: 'center',
        marginLeft: SIZES.padding
    },
    profileTile: {
        marginHorizontal: SIZES.padding * 3,
        marginVertical: SIZES.padding,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    profileTileRight: {
        flexDirection: 'row', 
        alignItems: 'center'
    },
    profileTileText: {
        color: COLORS.gray, 
        ...FONTS.body3, 
        marginHorizontal: SIZES.padding * 2
    }
})

export default ProfileScreen;