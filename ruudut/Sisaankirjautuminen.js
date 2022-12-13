import React from "react";
import {View, Text, StyleSheet, TextInput, TouchableOpacity, Image} from "react-native";
import {Ionicons} from '@expo/vector-icons';


export default class Sisaankirjautuminen extends React.Component {
    state = {
        name: "" // määritän staten nimeltä name
    }

        continue = () => { // luon continue nimisen nuolinotaatio funktion
        this.props.navigation.navigate("Chat", {name: this.state.name})  // navigoituu Chat nimiseen paikkaan
    }

    render() {

        return (
            <View style={styles.container}>
            <Text style={styles.header}>Käyttäjänimi</Text>
            <TextInput
            style={styles.input} 
            placeholder="Kirjoita Käyttäjänimi" 
            onChangeText={name => {
                this.setState({ name });
            }}
            />
            
            <View style={{ alignItems: "flex-end", marginTop: 64 }}>
                <TouchableOpacity style={styles.continue} onPress={this.continue}>
                <Ionicons name="md-arrow-forward-circle" size={24} color="#FFF" />
                 </TouchableOpacity>  {/*wrapperi */}
            </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    }, 
    header: {
        fontWeight: "800",
        fontSize: 30,
        color: "#514E5A",
        marginTop: 32,
    },
    input: {
        marginTop: 32,
        height: 50,
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: "#BAB7C3",
        borderRadius: 30,
        paddingHorizontal: 16,
        color: "#514E5A",
        fontWeight: "600",
    },
    continue: {
        width: 70,
        height: 70,
        borderRadius: 70 / 2,
        backgroundColor: "#9075E3",
        alignItems: "center",
        justifyContent: "center"
    }
})