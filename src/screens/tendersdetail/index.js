import React, {Component} from "react";
import { StyleSheet, Text, View, ScrollView} from 'react-native';


export default class TenderDetail extends React.Component {

    render () {
        return (
            <View style={style.container}>
                <View style={style.header}>
                    <Text style={style.header_title}>İhalem Cepte</Text>
                </View>
                <ScrollView>
                    <View style={style.tenders}>
                        <Text style={{alignItems: 'center', justifyContent:'center', fontSize:26, color:'#0cda8f'}}>ARAÇ DETAY SAYFASI</Text>
                    </View>
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