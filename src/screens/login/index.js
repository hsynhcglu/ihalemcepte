import React from "react";
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, ScrollView} from 'react-native';
import { Feather } from '@expo/vector-icons';

export default class Login extends React.Component {

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
                    <View style={style.input_area}>
                        <View style={style.item}>
                            <TextInput style={style.input} placeholder={'Kullanıcı Adınız'} />
                        </View>
                        <View style={style.item}>
                            <View style={{justifyContent:'center'}}>
                                <TextInput style={style.input} placeholder={'Şifreniz'} />
                                <TouchableOpacity style={{position:'absolute', right:15, flexDirection: 'row'}}>
                                    <Feather name="eye-off" size={22} color="#0cda8f" />
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={[style.item, style.password_reset]}>
                            <Text style={style.password_reset_text}>
                                Şifremi Unuttum
                            </Text>
                        </View>
                        <View style={style.item}>
                            <TouchableOpacity style={style.button}>
                                <Text style={style.button_text}>
                                    Giriş
                                </Text>
                            </TouchableOpacity>
                        </View>
                        <View style={style.item}>
                            <TouchableOpacity style={style.sign_up}>
                                <Text style={style.sign_up_text}>Hesabınız Yok mu? <Text style={{color:'#0cda8f',fontWeight: '700'}}>Kaydolun</Text></Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
            </View>
        )
    }
}


const style = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#ffffff'
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
        fontWeight: '600'
    },
    login_image: {
        width: 250,
        height: 130,
        resizeMode: 'contain'
    },
    logo_area: {
        alignItems: 'center',
        marginTop: 30,
    },
    input_area: {
        marginTop: 30
    },
    item: {
        padding: 10,
    },
    input: {
        borderColor: '#0cda8f',
        borderWidth: 1,
        padding: 10,
        borderRadius: 5,
    },
    password_reset: {
      flexDirection: 'row',
      justifyContent: 'flex-end'
    },
    password_reset_text: {
      color: '#0cda8f',
    },
    button: {
        backgroundColor: '#0cda8f',
        paddingVertical: 20,
    },
    button_text: {
        fontSize:18,
        color: '#ffffff',
        textAlign: 'center'
    },
    sign_up: {
        alignItems:'center',
        marginTop: 30,
    },
    sign_up_text: {
        fontSize: 14,
        color: '#2f2f41',
    },
});