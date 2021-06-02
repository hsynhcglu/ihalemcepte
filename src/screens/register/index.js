import React from "react";
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, ScrollView} from 'react-native';
import { Feather } from '@expo/vector-icons';
import { Formik } from "formik";
import * as Yup from "yup";
import Firebase from '../../../config/keys'

export default class Register extends React.Component {

    constructor() {
        super();
        this.state = {
            hidePassword: true,
        }

    }

    _handleSubmit = (values) => {
        Firebase.auth()
            .createUserWithEmailAndPassword(values.email, values.password)
            .then(() => alert('Kayıt Başarılı!'))
            .catch(error => alert('Hata! Kayıt Gerçekleştirilemedi.'))
    };

    render () {
        return (
            <View style={style.container}>
                <ScrollView>
                    <View style={style.logo_area}>
                        <Image style={style.login_image} source={require('../../images/ihalemceptelogo.png')} />
                    </View>

                    <View style={style.register}>

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
                                    {(errors.email) &&  <Text style={style.alert}>{errors.email}</Text>}
                                </View>

                                <View style={style.item}>

                                    <View style={{justifyContent:'center'}}>

                                        <TextInput
                                            style={style.input}
                                            placeholder={'Şifreniz'}
                                            values={values.password}
                                            onChangeText={handleChange('password')}
                                            secureTextEntry={this.state.hidePassword}
                                        />

                                        <TouchableOpacity onPress={() => this.setState({hidePassword:!this.state.hidePassword})} style={{position:'absolute', right:15, flexDirection: 'row'}}>
                                            <Feather name={(this.state.hidePassword) ? "eye-off" : "eye"} size={22} color="#0cda8f" />
                                        </TouchableOpacity>

                                    </View>

                                    {(errors.password) &&  <Text style={style.alert}>{errors.password}</Text>}

                                </View>

                                <View style={style.item}>

                                    <TouchableOpacity onPress={handleSubmit} style={style.button}>
                                        <Text style={style.button_text}>
                                            Kayıt Ol
                                        </Text>
                                    </TouchableOpacity>

                                </View>

                            </View>
                        )}
                        </Formik>

                    </View>

                    <View style={style.sign_in}>
                        <TouchableOpacity style={style.sign_in_box}>
                            <Text style={style.sign_up_text}>Hesabınız Var mı? <Text onPress={() =>
                                this.props.navigation.navigate('Login')} style={{color:'#0cda8f',fontWeight: '700'}}>Giriş Yapın</Text></Text>
                        </TouchableOpacity>
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
    register: {
        marginTop: 20,
        paddingRight: 15,
        paddingLeft: 15
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
        paddingTop: 40,
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
        padding: 15,
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
    alert: {
        color: 'red',
        fontSize: 15
    }
});