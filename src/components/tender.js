import React from 'react';
import { View, Text, StyleSheet } from "react-native";
import Firebase from "../../config/keys";
import TenderDetail from "../screens/tendersdetail";

const Tender = () => {
    const user = Firebase.auth().currentUser;
    return (
        <View>
            <Text>{item.id}</Text>
        </View>
    )
}

export default Tender;