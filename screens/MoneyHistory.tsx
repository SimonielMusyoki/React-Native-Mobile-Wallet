import React from 'react';
import {
    View,
    Image,
    TouchableOpacity,
    Text,
    FlatList,
    StyleSheet,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS, FONTS, icons, SIZES } from '../constants';
import { useNavigation } from '@react-navigation/native';
import history from '../data/history'
import Header from '../components/Header';

const MoneyHistory = () => {

    function renderHeader() {
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
                }}>Money History</Text>
            </View>
        )
    }

    const renderItem = ({item}) => (
        <TouchableOpacity 
            style={{
                flexDirection: 'row',
                alignItems: 'center', 
                paddingHorizontal: SIZES.padding * 3,
                paddingVertical: SIZES.padding,
            }}
            onPress={()=> console.log("To transaction details")}
        >
            <View style={{ width: "40%"}}>
                <Text style={{
                    color: COLORS.primary,
                    ...FONTS.body3
                }}>{item.date}</Text>
            </View>

            {/* Image */}
           <View style={{ width: "20%"}}>
           <Image 
                source={{ uri: item.receiverLogo}}
                resizeMode="cover"
                style={{
                    width: 40,
                    height: 40,
                    borderRadius: 20
                }}
            />
           </View>

           {/* Description */}
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', flex: 1, marginLeft: SIZES.padding}}>
            <View style={{
                alignItems: 'flex-start'
            }}>
                <Text style={{ color: COLORS.gray, ...FONTS.h4}}>{item.receiverName}</Text>
                <Text style={{...FONTS.h4, fontWeight: 'bold'}}>$ {item.transferAmt}</Text>
            </View>
            <Ionicons name="chevron-forward-outline" size={30} color={COLORS.gray} />
            </View>
            
            
            
        </TouchableOpacity>
    )

    function renderButton(){
        return (
            <TouchableOpacity style={{
                margin: SIZES.padding * 2,
                backgroundColor: COLORS.lightGreen,
                padding: SIZES.padding * 2,
                borderRadius: SIZES.radius,
                alignItems: 'center',
                justifyContent: 'center'
            }}
                onPress={()=> console.log('To top up screen')}
            >
                <Text style={{ color: COLORS.primary, ...FONTS.h3}}>Top up</Text>
            </TouchableOpacity>
        )
    }
    return (
        
        <View style={styles.container}>
            <Header headerText="Money History"/>
            <FlatList 
                data={history}
                keyExtractor={item => `${item.id}`}
                renderItem={renderItem}
            />
            { renderButton()}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: SIZES.padding * 3
    }
})


export default MoneyHistory;