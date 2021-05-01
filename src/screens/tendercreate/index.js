import React from "react";
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, ScrollView} from 'react-native';

export default class TenderCreate extends React.Component {

    render () {
        return (
            <View style={style.container}>
                <View style={style.header}>
                    <Text style={style.header_title}>İhalem Cepte</Text>
                </View>
                <ScrollView>
                    <View style={style.logo_area}>
                        <Image style={style.login_image} source={require('../../images/ihalemceptelogo.png')} />
                    </View>
                    <View style={style.tendercreate}>
                        <View style={style.item}>
                            <TextInput style={style.input} placeholder={'Otomobil Markası'} />
                        </View>
                        <View style={style.item}>
                            <TextInput style={style.input} placeholder={'Seri'}/>
                        </View>
                        <View style={style.item}>
                            <TextInput style={style.input} placeholder={'Model'}/>
                        </View>
                        <View style={style.item}>
                            <TextInput style={style.input} placeholder={'Yıl'}/>
                        </View>
                        <View style={style.item}>
                            <TextInput style={style.input} placeholder={'Yakıt'}/>
                        </View>
                        <View style={style.item}>
                            <TextInput style={style.input} placeholder={'Vites'}/>
                        </View>
                        <View style={style.item}>
                            <TextInput style={style.input} placeholder={'Kilometre'}/>
                        </View>
                        <View style={style.item}>
                            <TextInput style={style.input} placeholder={'Motor Gücü'}/>
                        </View>
                        <View style={style.item}>
                            <TextInput style={style.input} placeholder={'Motor Hacmi'}/>
                        </View>
                        <View style={style.item}>
                            <TextInput style={style.input} placeholder={'Çekiş'}/>
                        </View>
                        <View style={style.item}>
                            <TextInput style={style.input} placeholder={'Renk'}/>
                        </View>
                        <View style={style.item}>
                            <TouchableOpacity style={style.button}>
                                <Text style={style.button_text}>
                                    Fotoğraf Ekle
                                </Text>
                            </TouchableOpacity>
                        </View>
                        <View style={style.item}>
                            <TouchableOpacity style={style.button}>
                                <Text style={style.button_text}>
                                    İhaleyi Yayına Ver
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                </ScrollView>
            </View>
        )
    }
}


const style = StyleSheet.create({
    login_image: {
        width: 250,
        height: 130,
        resizeMode: 'contain'
    },
    logo_area: {
        alignItems: 'center',
        marginTop: 30,
    },
    tendercreate: {
        marginTop: 20,
    },
    sign_in: {
        marginTop: 20,
    },
    sign_in_box: {
        alignItems: 'center',
    },
    sign_in_text: {
        fontSize: 14,
        color: '#2f2f41',
    },
    container: {
        flex:1,
        backgroundColor: '#ffffff',
    },
    header: {
        backgroundColor: '#0cda8f',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 25,
    },
    header_title: {
        fontSize: 22,
        color: '#ffffff',
        fontWeight: '600',
    },
    item: {
        padding: 10,
    },
    input: {
        borderColor: '#0cda8f',
        borderWidth: 1,
        padding: 10,
        borderRadius: 5,
        color: '#2f2f41',
    },
    button: {
        backgroundColor: '#0cda8f',
        paddingVertical: 20,
        marginTop: 15,
    },
    button_text: {
        fontSize:18,
        color: '#ffffff',
        textAlign: 'center',
    },
});