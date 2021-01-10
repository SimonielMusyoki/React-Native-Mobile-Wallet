import React, { useState } from 'react';
import { 
    View, 
    Text,
    Image,
    FlatList,
    TouchableOpacity,
    TouchableOpacityComponent
} from 'react-native';

import { COLORS, FONTS, icons, images, SIZES } from '../constants';
import specialPromoData from '../data/special_promo';
import featuresData from '../data/features';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native-gesture-handler';

const HomeScreen  = () => {

    const [features, setFeatures] = useState(featuresData)
    const [specialPromo, setSpecialPromo] = useState(specialPromoData)

    function renderPromo() {

        function renderHeader() {
            return (
                <View style={{ flexDirection: 'row', marginVertical: SIZES.padding * 2}}>
                    <View style={{ flex: 1}}>
                        <Text style={{ ...FONTS.h1}}> Hello!</Text>
                        <Text style={{ ...FONTS.body2, color: COLORS.gray}}> Musyoki</Text>
                    </View>
                    <View style={{
                        alignItems: "center",
                        justifyContent: 'center'
                    }}>
                        <TouchableOpacity
                            style={{
                                height: 40,
                                width: 40,
                                justifyContent: 'center',
                                alignItems: 'center',
                                backgroundColor: COLORS.lightGray
                            }}
                        >
                            <Image 
                                source={icons.bell}
                                resizeMode="contain"
                                style={{
                                    width: 20,
                                    height: 20,
                                    tintColor: COLORS.secondary
                                }}
                            />
                            <View style={{
                                position: 'absolute',
                                top: -5,
                                right: -5,
                                height: 10,
                                width: 10,
                                backgroundColor: COLORS.red,
                                borderRadius: 5
                            }}>

                            </View>

                        </TouchableOpacity>

                    </View>
                </View>
            )
        }

        function renderBanner(){
            return(
                <View style={{
                    height: 120, 
                    borderRadius: 20
                }}>
                    <Image 
                        source={images.banner}
                        resizeMode="cover"
                        style={{
                            width: "100%",
                            height: "100%",
                            borderRadius: 20
                        }}
                    />
                </View>
            )
        }

        function renderFeatures(){
             const renderItem = ({item}) => (
                <TouchableOpacity
                    style={{
                        marginBottom: SIZES.padding * 2, 
                        width: 60,
                        alignItems: 'center'
                    }}
                    onPress={()=>console.log(item.description)}
                >
                    <View style={{
                        height: 50,
                        width: 50,
                        marginBottom: 5,
                        backgroundColor: item.backgroundColor,
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>

                        <Image 
                            source={item.icon}
                            resizeMode="contain"
                            style={{
                                width: 20,
                                height: 20,
                                tintColor: item.color
                            }}
                        />

                    </View>
                    <Text style={{
                        textAlign: 'center',
                        flexWrap: 'wrap',
                        ...FONTS.body4
                    }}> {item.description}</Text>
                </TouchableOpacity>
             )

            return(
                <FlatList 
                    data={features}
                    numColumns={4}
                    columnWrapperStyle={{ justifyContent: 'space-between'}}
                    keyExtractor={ item => item.id.toString()}
                    renderItem = { renderItem }
                    style={{ marginTop: SIZES.padding *2}}
                    ListHeaderComponent = {()=>(
                        <View style={{
                            marginBottom: SIZES.padding *2
                        }}>
                            <Text style={{...FONTS.h4}}>Features</Text>
                        </View>
                    )}
                />
            )
        }

        function renderPromoHeader() {
            return (
                <View style={{
                    flexDirection: 'row',
                    marginBottom: SIZES.padding
                }}>
                    <View style={{ flex: 1}}>
                        <Text style={{ ...FONTS.h3}}>Special Promos</Text>
                    </View>
                    <TouchableOpacity
                        onPress={() => console.log("View All")}
                    >
                        <Text style={{ color: COLORS.black, opacity: 0.8,...FONTS.body4}}>View All</Text>
                    </TouchableOpacity>
                </View>
            )
        }
        const HeaderComponent = () => (
            <View>
                { renderHeader()}
                { renderBanner()}
                { renderFeatures()}
                { renderPromoHeader()}
            </View>
            
        )

        const renderItem = ({ item }) => (
            <TouchableOpacity
            style={{
                margin: SIZES.base,
                width: SIZES.width * 0.45
            }}
            onPress={()=>console.log(item.title)}
            >
                <View style={{
                    height: 80,
                    borderTopLeftRadius: 20,
                    borderTopRightRadius: 20,
                    backgroundColor: COLORS.primary
                }}>

                    <Image 
                        source={item.img}
                        resizeMode="cover"
                        style={{
                            width: "100%",
                            height: "100%",
                            borderTopLeftRadius: 20,
                            borderTopRightRadius: 20,
                        }}
                    />

                </View>
                <View style={{
                    padding: SIZES.padding,
                    backgroundColor: COLORS.lightGray,
                    borderBottomLeftRadius: 20,
                    borderBottomRightRadius: 20
                }}>
                    <Text style={{ ...FONTS.h4}}>{item.title}</Text>
                    <Text style={{...FONTS.body4}}>{item.description}</Text>

                </View>
            </TouchableOpacity>
        )
        return(
            <FlatList
                
                data={specialPromo}
                keyExtractor={ item => item.id.toString()}
                contentContainerStyle={{ paddingHorizontal: SIZES.padding, flex: 1}}
                numColumns={2}
                renderItem={renderItem}
                showsVerticalScrollIndicator={false}
                ListHeaderComponent={HeaderComponent}
                ListFooterComponent={
                    <View style={{ marginBottom: 80}}>

                    </View>
                }
            />
        )
    }

    return (
        <ScrollView style={{ flex: 1, backgroundColor: COLORS.white}}>
            { renderPromo() }
        </ScrollView>
    )
}

export default HomeScreen