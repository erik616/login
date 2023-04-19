import React, { useState } from "react";
import {
    Alert,
    Button,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    TouchableHighlight,
    View,
    Vibration
} from "react-native";

import { Ionicons } from '@expo/vector-icons'

export function Form() {

    const user = {
        name: 'Erik',
        pass: '123456'
    }

    const [eye, setEye] = useState(true)
    const [login, setLogin] = useState(null)
    const [pass, setPass] = useState(null)
    const [msg, setMsg] = useState('')
    const [err, setErr] = useState('')

    function validation() {
        if (login === null || pass === null || login === '' || pass === '') {
            setErr("Preencha os campos")
            setMsg("")
            Vibration.vibrate()
        } else if (pass.length < 6) {
            setErr("")
            setMsg("*Senha insuficiente!")
        } else if (login !== user.name || pass !== user.pass) {
            let msg = login !== user.name ? "Erro no login" : "Erro na senha"
            setErr(msg)
            Vibration.vibrate()
            setMsg("")
        } else {
            setMsg("")
            setErr("")
            loginPass()
        }
    }

    function loginPass() {
        if (login === user.name && pass === user.pass) {
            Alert.alert(
                '',
                `Bem vindo ${user.name}`
            )
        } else {
            Alert.alert(
                'Alerta!',
                'Você ainda não possui acesso!'
            )
        }
    }

    return (
        <View style={styles.formContainer}>
            <View style={styles.form}>
                <Text style={styles.label}>Login</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={(texto) => setLogin(texto)}
                    value={login}
                    placeholder="Ex. JonhD"
                ></TextInput>

                <Text style={styles.label}>Senha <Text style={styles.warning}>{msg}</Text></Text>
                <View style={styles.inputArea}>
                    <TextInput
                        style={styles.inputSenha}
                        onChangeText={(texto) => setPass(texto)}
                        value={pass}
                        placeholder="Senha"
                        secureTextEntry={eye}
                    ></TextInput>
                    <TouchableOpacity
                        style={styles.icon}
                        onPress={() => setEye(!eye)}
                    >
                        {eye ?
                            <Ionicons name="eye" color="#000" size={25} />
                            :
                            <Ionicons name="eye-off" color="#000" size={25} />
                        }
                    </TouchableOpacity>
                </View>

            </View>
            <Text style={styles.err}>{err}</Text>

            <TouchableHighlight
                style={{
                    height: 40,
                    width: "50%",
                    borderRadius: 10,
                    backgroundColor: "#fff",
                }}>
                <Button
                    title="Acessar"
                    onPress={() => validation()}
                />
            </TouchableHighlight>
        </View>
    )
}

const styles = StyleSheet.create({
    formContainer: {
        width: "100%",
        height: "auto",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 30,
        bottom: 0,
        position: "relative",
    },
    form: {
        width: "80%",
        marginBottom: 20
    },
    label: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 8
    },
    inputArea: {
        flexDirection: "row",
        width: "100%",
        backgroundColor: "#f6f6f6",
        borderRadius: 50,
        height: 40,
        marginBottom: 16,
        alignItems: "center"
    },
    inputSenha: {
        paddingLeft: 12,
        width: "85%"
    },
    input: {
        backgroundColor: "#f6f6f6",
        height: 40,
        marginBottom: 16,
        borderRadius: 50,
        paddingLeft: 12
    },
    icon: {
        width: "15%",
        height: 40,
        justifyContent: "center",
        alignItems: "center",
    },
    warning: {
        fontSize: 10,
        color: "#ff0000"
    },
    err: {
        position: "absolute",
        fontSize: 18,
        color: "#ff0000",
        bottom: 40
    }
})