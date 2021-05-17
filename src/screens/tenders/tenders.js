import React, {Component} from "react";
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, FlatList} from 'react-native';
import TenderDetail from "../tendersdetail";


const Tenders = ({ navigation }) => {

    return (
        <View style={style.container}>
            <ScrollView>
                <View style={style.tenders}>
                    <TouchableOpacity onPress={() => {
                        navigation.navigate('TenderDetail')
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
                                    <Text style={style.tenders_text}>Nissan GTR</Text>
                                </View>
                                <View style={style.item}>
                                    <Text style={style.tender_text_price}>En Yüksek Teklif: 1.350.000₺</Text>
                                </View>
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    )
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

export default Tenders;