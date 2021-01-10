import React, { useEffect, useState} from 'react';
import { 
    View, 
    Text, 
    Image, 
    TouchableOpacity,
    TouchableOpacityComponent
} from 'react-native'
import { Camera } from 'expo-camera';
import { COLORS, FONTS, icons, images, SIZES } from '../constants';

const ScanScreen  = ({ navigation}) => {

    const [hasPermission, setHasPermission] = useState(null);
    const [type, setType] = useState(Camera.Constants.Type.back);

    useEffect(() => {
        (async () => {
        const { status } = await Camera.requestPermissionsAsync();
        setHasPermission(status === 'granted');
        })();
    }, []);

    if (hasPermission === null) {
        return <View />;
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }

     function renderHeader() {
        return (
            <View style={{
                flexDirection: 'row',
                marginTop: SIZES.padding * 4
            }}>
                <TouchableOpacity
                    style={{
                        width: 45,
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}  
                    onPress={()=> navigation.goBack()}  
                >
                    <Image 
                        source={icons.close}
                        style={{
                            height: 20,
                            width: 20,
                            tintColor: COLORS.white
                        }}
                    />

                </TouchableOpacity>
                <View style={{
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <Text style={{ color: COLORS.white, ...FONTS.body3}}>Scan for payment</Text>
                </View>
                <TouchableOpacity
                    style={{
                        height: 45,
                        width: 45,
                        backgroundColor: COLORS.green,
                        borderRadius: 10,
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                    onPress={()=> console.log("Info")}
                >
                    <Image 
                        source={icons.info}
                        style={{
                            height: 25,
                            width: 25,
                            tintColor: COLORS.white
                        }}
                    />

                </TouchableOpacity>
            </View>
        )
    }

    function renderScanFocus(){
        return (
            <View style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <Image 
                    source={images.focus}
                    resizeMode="stretch"
                    style={{
                        marginTop: "-55%",
                        width: 300,
                        height: 300
                    }}
                />
            </View>
        )
    }

    function renderPaymentMethods(){
        return(
            <View style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                height: 220,
                padding: SIZES.padding * 3,
                borderTopLeftRadius: SIZES.radius,
                borderTopRightRadius: SIZES.radius,
                backgroundColor: COLORS.white
            }}>

                <Text style={{ ...FONTS.h4}}>Another payment Methods</Text>
                <View style={{
                    flex: 1,
                    flexDirection: 'row',
                    alignItems: 'flex-start',
                    marginTop: SIZES.padding*2
                }}>
                    <TouchableOpacity
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center'
                        }}
                        onPress={()=> console.log("Phone Number")}
                    >
                        <View 
                            style={{
                                width: 40,
                                height: 40,
                                backgroundColor: COLORS.lightpurple,
                                alignItems: 'center',
                                justifyContent: 'center',
                                borderRadius: 10
                            }}
                        >
                            <Image 
                                source={icons.phone}
                                resizeMode="cover"
                                style={{
                                    width: 25,
                                    height: 25,
                                    tintColor: COLORS.purple
                                }}
                            />

                        </View>
                        <Text style={{ marginLeft: SIZES.padding, ...FONTS.body4}}>Phone Number</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            marginLeft: SIZES.padding*3
                        }}
                        onPress={()=> console.log("Bar Code")}
                    >
                        <View 
                            style={{
                                width: 40,
                                height: 40,
                                backgroundColor: COLORS.lightGreen,
                                alignItems: 'center',
                                justifyContent: 'center',
                                borderRadius: 10
                            }}
                        >
                            <Image 
                                source={icons.barcode}
                                resizeMode="cover"
                                style={{
                                    width: 25,
                                    height: 25,
                                    tintColor: COLORS.primary
                                }}
                            />

                        </View>
                        <Text style={{ marginLeft: SIZES.padding, ...FONTS.body4}}>Bar Code</Text>
                    </TouchableOpacity>

                </View>
            </View>
        )
    }

    function onBarCodeScanned(result){
        console.log(result.data)
    }
    return (
        <View style={{ flex: 1, backgroundColor: "transparent"}}>
            <Camera
                style={{ flex: 1}}
                type={ Camera.Constants.Type.back}
                flashMode={ Camera.Constants.FlashMode.off} 
                onBarCodeScanned={onBarCodeScanned}               
            >
                { renderHeader()}
                { renderScanFocus()}
                { renderPaymentMethods()}
            </Camera>
        </View>
    )
}

export default ScanScreen