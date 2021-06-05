import React, {Component} from "react";
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, FlatList} from 'react-native';
import TenderDetail from "../tendersdetail";
import Firebase from "../../../config/keys";
import NavigationService from "../../NavigationService";

export default class Tenders extends React.Component{

    constructor() {
        super();
        this.state = {
            tenders: [],
        }
    }

    getData = () => {
        Firebase.database()
            .ref('/tenders')
            .on('value', snapshot => {
                var tenders = [];
                snapshot.forEach((item) => {
                    tenders.push({
                        id:item.key,
                        userId:item.val().userId,
                        car_brand: item.val().car_brand,
                        car_price: item.val().car_price,
                        car_model: item.val().car_model,
                        car_year: item.val().car_year,
                        car_km: item.val().car_km,
                        car_color: item.val().car_color,
                    })
                })
                this.setState({tenders})
            });
    }

    componentDidMount() {
        const user = Firebase.auth().currentUser;
        this.getData();
    }


    renderItem = ({item}) => {
        return (
            <View style={style.tenders}>
                <TouchableOpacity onPress={() => {
                    NavigationService.navigate('TenderDetail', {
                        id:item.id,
                        car_brand: item.car_brand,
                        car_price: item.car_price,
                        car_model: item.car_model,
                        car_year: item.car_year,
                        car_km: item.car_km,
                        car_color: item.car_color,
                    })
                }}>
                    <View style={style.tenders_item} >
                        <View style={style.tenders_info}>
                            <View style={style.item}>
                                <Text style={style.tenders_text}>İhalenin Bitişine Kalan Süre</Text>
                            </View>
                            <View style={style.item}>
                                <Text style={style.tender_text_price}>14 DK</Text>
                            </View>
                        </View>
                        <Image style={style.tenders_image} source={require('../../images/gtr.jpg')} />
                        <View style={style.tenders_info}>
                            <View style={style.item}>
                                <Text style={style.tenders_text}>{item.car_brand}</Text>
                            </View>
                            <View style={style.item}>
                                <Text style={style.tender_text_price}>En Yüksek Teklif: {item.car_price}₺</Text>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }

    render() {
        return (
            <View style={style.container}>
                <ScrollView>
                    <FlatList
                        data={this.state.tenders}
                        renderItem={this.renderItem}
                        keyExtractor={ (item, index) => index.toString() } />
                </ScrollView>
            </View>
        )
    }
}




const style = StyleSheet.create({
    tenders: {
        flex:1,
        padding:10,
    },
    tenders_item: {
        flex:1,
        borderWidth: 4,
        borderRadius: 10,
        borderColor: '#0cda8f',
        padding: 5,
        backgroundColor: '#0cda8f',
        marginBottom: 10,
    },
    tenders_image: {
        resizeMode: 'cover',
        height:170,
        width:'auto',
    },
    tenders_info: {
        flex:1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingTop:10,
        paddingBottom: 10,
    },
    tenders_text: {
        fontSize: 18,
        color: '#2f2f41',
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

