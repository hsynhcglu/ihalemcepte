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
                        userId:item.val().userId,
                        id:item.key,
                        car_brand: item.val().car_brand,
                        car_price: item.val().car_price,
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
                        id:item.key,
                        user: item.userId,
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
                    <FlatList data={this.state.tenders} renderItem={this.renderItem} />
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
    item: {

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

