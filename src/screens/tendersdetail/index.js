import React, {Component} from "react";
import {StyleSheet, Text, View, ScrollView, FlatList, Image, TouchableOpacity, TextInput} from 'react-native';
import Firebase from "../../../config/keys";
import * as Yup from "yup";
import { Formik } from "formik";

export default class TenderDetail extends React.Component {
    constructor() {
        super();
        this.state = {
            bids: [],
        }
    }


    _handleSubmit = (values, { resetForm }) => {
        const user = Firebase.auth().currentUser;
        const userId = user.uid;
        const id = this.props.navigation.getParam('id');
        var database = Firebase.database().ref(`bids/${id}`);
        database.push({
            userId,
            id,
            car_bid: values.car_bid,
        }).then((result) => {resetForm({ values: ''}); alert('Teklif Başarılı Şekilde Verildi!')})
            .catch((error) => alert('Teklif Başarısız!'));
    }


    getData = () => {
        const id = this.props.navigation.getParam('id');
        Firebase.database()
            .ref(`bids/${id}`)
            .on('value', snapshot => {
                var bids = [];
                snapshot.forEach((item) => {
                    bids.push({
                        id: item.val().id,
                        userId: item.val().userId,
                        car_bid: item.val().car_bid,
                    })
                })
                this.setState({bids})
            });
    }

    componentDidMount() {
        const user = Firebase.auth().currentUser;
        this.getData();
    }

    renderItem = ({item}) => {
        return (
            <View style={style.tenders_item}>
                <View><Text style={style.tenders_text}>{item.userId}:</Text></View>
                <View><Text style={style.tenders_text}>{item.car_bid}₺</Text></View>
            </View>
        )
    }

    render () {
        const id = this.props.navigation.getParam('id');
        const car_brand = this.props.navigation.getParam('car_brand');
        const car_price = this.props.navigation.getParam('car_price');
        const car_model = this.props.navigation.getParam('car_model');
        const car_year = this.props.navigation.getParam('car_year');
        const car_km= this.props.navigation.getParam('car_km');
        const car_color = this.props.navigation.getParam('car_color');
        return (
            <View style={style.container}>
                <ScrollView>
                    <View style={style.tenders}>
                        <Image style={style.tenders_image} source={require('../../images/gtr.jpg')} />
                        <View>
                            <View style={style.tenders_item}>
                                <View><Text style={style.tenders_text}>Otomobil Markası:</Text></View>
                                <View><Text style={style.tenders_text}>{car_brand}</Text></View>
                            </View>
                            <View style={style.tenders_item}>
                                <View><Text style={style.tenders_text}>Otomobil Modeli:</Text></View>
                                <View><Text style={style.tenders_text}>{car_model}</Text></View>
                            </View>
                            <View style={style.tenders_item}>
                                <View><Text style={style.tenders_text}>Otomobil Yılı:</Text></View>
                                <View><Text style={style.tenders_text}>{car_year}</Text></View>
                            </View>
                            <View style={style.tenders_item}>
                                <View><Text style={style.tenders_text}>Otomobil Kilometresi:</Text></View>
                                <View><Text style={style.tenders_text}>{car_km}</Text></View>
                            </View>
                            <View style={style.tenders_item}>
                                <View><Text style={style.tenders_text}>Otomobil Rengi:</Text></View>
                                <View><Text style={style.tenders_text}>{car_color}</Text></View>
                            </View>
                            <View style={style.tenders_item}>
                                <View><Text style={style.tenders_text}>Otomobil Fiyatı:</Text></View>
                                <View><Text style={style.tenders_text}>{car_price}₺</Text></View>
                            </View>
                        </View>
                        <View style={{marginTop: 15}}>
                            <Text style={style.tender_bids}>İhaleye Verilen Teklifler</Text>
                            <FlatList data={this.state.bids} renderItem={this.renderItem} keyExtractor={ (item, index) => index.toString() } />
                        </View>
                        <View>
                            <Formik initialValues={{
                                car_bid: '',
                            }} onSubmit={this._handleSubmit} validationSchema={Yup.object().shape({
                                car_bid:Yup.string().required("Hızlı Teklif Ver Alanı Boş Bırakılamaz!"),
                            })}>
                                {({
                                      values,
                                      handleSubmit,
                                      errors,
                                      handleChange
                                  }) => (

                                      <View style={style.bid_area}>
                                          <TextInput
                                              style={style.input}
                                              placeholder={'Hızlı Teklif Ver'}
                                              values={values.car_bid}
                                              onChangeText={handleChange('car_bid')}
                                          />
                                          {(errors.car_bid) &&  <Text style={style.alert}>{errors.car_bid}</Text>}

                                          <TouchableOpacity style={style.button} onPress={handleSubmit}>
                                              <Text style={style.button_text}>
                                                  İhaleye Hızlı Teklif Ver
                                              </Text>
                                          </TouchableOpacity>
                                      </View>
                                    )}
                            </Formik>
                        </View>

                    </View>
                </ScrollView>
            </View>
        )
    }
}



const style = StyleSheet.create({
    tender_bids: {
      textAlign: 'center',
      fontSize: 18,
      fontWeight: 'bold',
      color: '#2f2f41',
    },
    bid_area: {
        marginTop: 20,
        marginBottom: 20,
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
        paddingVertical: 15,
        marginTop: 15,
    },
    button_text: {
        fontSize:18,
        color: '#ffffff',
        textAlign: 'center',
    },
    tenders: {
        flex:1,
        padding:10,
    },
    tenders_item: {
        flex:1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderRadius: 4,
        padding: 10,
        backgroundColor: '#0cda8f',
        marginBottom: 4,
    },
    tenders_image: {
        borderRadius: 4,
        resizeMode: 'cover',
        height: 190,
        width: 'auto',
        marginBottom: 10,
    },
    tenders_info: {
        flex:1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingTop:10,
        paddingBottom: 10,
    },
    tenders_text: {
        fontSize: 16,
        color: '#ffffff',
    },
    tender_text_price: {
        fontSize:18,
        fontWeight: '700',
        color: '#ffffff',
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

});