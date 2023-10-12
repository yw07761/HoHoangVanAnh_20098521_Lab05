import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { Image, Pressable, Text, View } from "react-native";

const Screen02 = () => {
    const [image, setImage] = useState('vs_red.png');
    const navigation = useNavigation();

    const handleColorSelection = (color) => {
        setImage(`vs_${color}.png`);
    };

    return (
        <View style={{ 
                        flex: 1, 
                        paddingVertical: 20, 
                        paddingHorizontal: 5 
                    }}>
            <View style={{ flexDirection: 'row', gap: 10 }}>
                <View style={{ width: '35%' }}>
                    <Image
                        source={require(`./../assets/${image}`)}
                        style={{ 
                            width: '270px', 
                            height: '270px', 
                            resizeMode: 'contain' 
                        }}
                    />
                </View>
                <View style={{ width: '60%' }}>
                    <Text style={{ fontSize: 18, fontWeight: 500 }}>
                        Điện Thoại Vsmart Joy 3
                    </Text>
                    <Text style={{ fontSize: 18, fontWeight: 500 }}>
                        Hàng chính hãng
                    </Text>
                </View>
            </View>

            <View style={{ 
                        height: '100%', 
                        backgroundColor: 'lightgray', 
                        padding: 10 
                    }}>
                <Text>Chọn một màu bên dưới:</Text>
                <View style={{ 
                                paddingVertical: 20, 
                                alignItems: 'center', 
                                justifyContent: 'center', 
                                gap: 20 
                            }}>
                    {['white', 'red', 'black', 'blue'].map((color, index) => (
                        <Pressable key={index} onPress={() => handleColorSelection(color)}>
                            <View style={{ 
                                            height: 70, 
                                            width: 70, 
                                            backgroundColor: color 
                                        }}>
                            </View>
                        </Pressable>
                    ))}
                </View>
                <Pressable onPress={() => navigation.navigate("Home", { image })} style={{ padding: 15, backgroundColor: 'blue', borderRadius: 20 }}>
                    <Text style={{ textAlign: 'center', textTransform: 'uppercase', color: '#fff', fontWeight: 600, fontSize: 18 }}>Xong</Text>
                </Pressable>
            </View>
        </View>
    );
}

export default Screen02;
