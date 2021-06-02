import React, {Component} from "react";
import {StyleSheet, Text, View, ScrollView, FlatList} from 'react-native';
import Firebase from "../../../config/keys";
import Tender from "../../components/tender";


export default class TenderDetail extends React.Component {
    constructor() {
        super();
        this.state = {
            tenders: [],
        }
    }

    componentDidMount() {
        const user = Firebase.auth().currentUser;
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

    renderItem = ({item}) => {
        return (
            <View><Text>{item.car_brand}</Text></View>
        )
    }


    render () {
        return (
            <FlatList data={this.state.tenders} renderItem={this.renderItem} />
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