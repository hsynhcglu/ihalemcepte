import React from "react";
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, ScrollView} from 'react-native';
import { Feather } from '@expo/vector-icons';
import {Form, Formik} from "formik";
import * as Yup from "yup";
import Firebase from '../../../config/keys'

export default class Login extends React.Component {


    constructor() {
        super();
        this.state = {
            hidePassword: true,
        }
    }

    _handleSubmit = (values) => {
        Firebase.auth()
            .signInWithEmailAndPassword(values.email, values.password)
            .then(() => this.props.navigation.navigate('Tenders'))
            .catch(error => alert('Hata! Şifreniz hatalı veya girdiğiniz maile ait hesap bulunmamaktadır.'))
    };

    render () {
        return (
            <View style={style.container}>

                <ScrollView>
                    <View style={style.logo_area}>
                        <Image style={style.login_image} source={require('../../images/ihalemceptelogo.png')} />
                    </View>
                    <View style={style.input_area}>
                        <Formik initialValues={{
                            email: '',
                            password: '',
                        }} onSubmit={this._handleSubmit} validationSchema={Yup.object().shape({
                            email:Yup.string().required("Mail Adresi Alanı Boş Bırakılamaz!"),
                            password:Yup.string().required("Şifre Alanı Boş Bırakılamaz!")
                        })}>
                            {({
                                  values,
                                  handleSubmit,
                                  errors,
                                  handleChange
                            }) => (
                            <View>
                                <View style={style.item}>
                                    <TextInput
                                        style={style.input}
                                        placeholder={'Mail Adresiniz'}
                                        values={values.email}
                                        onChangeText={handleChange('email')}
                                    />
                                    {(errors.email) && <Text style={style.alert}>{errors.email}</Text>}
                                </View>
                                <View style={style.item}>
                                    <View style={{justifyContent:'center'}}>
                                        <TextInput
                                            style={style.input}
                                            placeholder={'Şifresi'}
                                            values={values.password}
                                            onChangeText={handleChange('password')}
                                            secureTextEntry={this.state.hidePassword}
                                        />
                                        <TouchableOpacity onPress={() => this.setState({hidePassword:!this.state.hidePassword})} style={{position:'absolute', right:15, flexDirection: 'row'}}>
                                            <Feather name={(this.state.hidePassword) ? "eye-off" : "eye"} size={22} color="#0cda8f" />
                                        </TouchableOpacity>
                                    </View>
                                    {(errors.password) && <Text style={style.alert}>{errors.password}</Text>}
                                </View>
                                <View style={[style.item, style.password_reset]}>
                                    <Text style={style.password_reset_text}>
                                        Şifremi Unuttum
                                    </Text>
                                </View>
                                <View style={style.item}>
                                    <TouchableOpacity style={style.button} onPress={handleSubmit}>
                                        <Text style={style.button_text}>
                                            Giriş
                                        </Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={style.item}>
                                    <TouchableOpacity style={style.sign_up}>
                                        <Text style={style.sign_up_text}>Hesabınız Yok mu? <Text onPress={() =>
                                            this.props.navigation.navigate('Register')} style={{color:'#0cda8f',fontWeight: '700'}}>Kaydolun</Text></Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            )}
                        </Formik>
                    </View>
                </ScrollView>
            </View>
        )
    }
}


const style = StyleSheet.create({
    container: {
        flex:1,
        paddingTop: 40,
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
        marginTop: 30,
        paddingRight: 15,
        paddingLeft: 15
    },
    item: {
        padding: 10,
    },
    input: {
        borderColor: '#0cda8f',
        borderWidth: 1,
        padding: 15,
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
    alert: {
        color: 'red',
        fontSize: 15
    }
});