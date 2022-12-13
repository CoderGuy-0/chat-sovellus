import React from 'react';
import {View, Text, StyleSheet, TextInput, TouchableOpacity, Image, Platform, KeyboardAvoidingView} from "react-native";
import {GiftedChat} from 'react-native-gifted-chat';
import { SafeAreaView } from 'react-native-safe-area-context';
import Fire from '../Fire';

export default class ChatRuutu extends React.Component {
state = {
    messages: [] // luodaan messages niminen state
}

get user() {
return {
    _id: Fire.uid, // haetaan firebase user id
    name: this.props.navigation.state.params.name //määritellään nimi muuttuja
}}

componentDidMount() { // kutsutaan tämä funktio heti kun komponentti mounttaa
    Fire.get(message => this.setState(previous => ({
        messages: GiftedChat.append(previous.messages, message) // haetaan firebasen avulla viesti ja laitetaan se messages stateen ja appendaan sen gifted chattiin
    }))
    );
}

componentWillUnmount() {
    Fire.off(); // käytän tätä sulkeakseni firebase yhteyden
}

render() {
const chat = <GiftedChat messages={this.state.messages} onSend={Fire.send} user={this.user} /> // tässä määritän että firebase lähetä viesti käyttäjältä
if (Platform.OS === 'android') { // katon että platformin käyttis on Android

    <KeyboardAvoidingView style={{flex: 1}} behavior="padding" keyboardVerticalOffset={30} enabled>
        {chat}
    </KeyboardAvoidingView> // laitan chätin komponentin sisään joka automaattisesti muuttaa korkeuden, sijainnin tai ala paddingin
}
    return <SafeAreaView style={{ flex: 1 }}>{chat}</SafeAreaView> // renderöi kontentin laitteen turvalliselle alueelle 
}

}