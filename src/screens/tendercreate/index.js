import React from "react";
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, ScrollView} from 'react-native';
import * as Yup from "yup";
import { Formik } from "formik";
import Firebase from '../../../config/keys'

export default class TenderCreate extends React.Component {

    _handleSubmit = (values, { resetForm }) => {
        var database = Firebase.database().ref('/tenders');
        const user = Firebase.auth().currentUser;
        const userId = user.uid;
        database.push({
            userId,
            car_brand: values.car_brand,
            car_model: values.car_model,
            car_year: values.car_year,
            car_km: values.car_km,
            car_color: values.car_color,
            car_price: values.car_price,
        }).then((result) => {resetForm({ values: ''}); this.props.navigation.navigate('Tenders')})
            .catch((error) => console.log(error));
    }

    render () {
        return (
            <View style={style.container}>
                <ScrollView>
                    <View style={style.logo_area}>
                        <Image style={style.login_image} source={require('../../images/ihalemceptelogo.png')} />
                    </View>
                    <View style={style.tender_create}>

                        <Formik initialValues={{
                            car_brand: '',
                            car_model: '',
                            car_year: '',
                            car_km: '',
                            car_color: '',
                            car_price: '',
                        }} onSubmit={this._handleSubmit} validationSchema={Yup.object().shape({
                            car_brand:Yup.string().required("Otomoboil Markası Alanı Boş Bırakılamaz!"),
                            car_model:Yup.string().required("Model Alanı Boş Bırakılamaz!"),
                            car_year:Yup.string().required("Yıl Alanı Boş Bırakılamaz!"),
                            car_km:Yup.string().required("Kilometre Alanı Boş Bırakılamaz!"),
                            car_color:Yup.string().required("Renk Alanı Boş Bırakılamaz!"),
                            car_price:Yup.string().required("Başlangıç Fiyatı Alanı Boş Bırakılamaz!"),
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
                                            placeholder={'Otomobil Markası'}
                                            values={values.car_brand}
                                            onChangeText={handleChange('car_brand')}
                                        />
                                        {(errors.car_brand) &&  <Text style={style.alert}>{errors.car_brand}</Text>}
                                    </View>
                                    <View style={style.item}>
                                        <TextInput
                                            style={style.input}
                                            placeholder={'Model'}
                                            values={values.car_model}
                                            onChangeText={handleChange('car_model')}
                                        />
                                        {(errors.car_model) &&  <Text style={style.alert}>{errors.car_model}</Text>}
                                    </View>
                                    <View style={style.item}>
                                        <TextInput
                                            style={style.input}
                                            placeholder={'Yıl'}
                                            values={values.car_year}
                                            onChangeText={handleChange('car_year')}
                                        />
                                        {(errors.car_year) &&  <Text style={style.alert}>{errors.car_year}</Text>}
                                    </View>
                                    <View style={style.item}>
                                        <TextInput
                                            style={style.input}
                                            placeholder={'Kilometre'}
                                            values={values.car_km}
                                            onChangeText={handleChange('car_km')}
                                        />
                                        {(errors.car_km) &&  <Text style={style.alert}>{errors.car_km}</Text>}
                                    </View>
                                    <View style={style.item}>
                                        <TextInput
                                            style={style.input}
                                            placeholder={'Renk'}
                                            values={values.car_color}
                                            onChangeText={handleChange('car_color')}
                                        />
                                        {(errors.car_color) &&  <Text style={style.alert}>{errors.car_color}</Text>}
                                    </View>
                                    <View style={style.item}>
                                        <TextInput
                                            style={style.input}
                                            placeholder={'Başlangıç Fiyatı'}
                                            values={values.car_price}
                                            onChangeText={handleChange('car_price')}
                                        />
                                        {(errors.car_price) &&  <Text style={style.alert}>{errors.car_price}</Text>}
                                    </View>
                                    <View style={style.item}>
                                        <TouchableOpacity style={style.button} onPress={handleSubmit}>
                                            <Text style={style.button_text}>
                                                İhaleyi Yayına Ver
                                            </Text>
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
    alert: {
        color: 'red',
        fontSize: 15
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
    tender_create: {
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
});