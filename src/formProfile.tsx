import React, { useState } from "react"
import { Button, SafeAreaView, TextInput, View } from "react-native"
import setStep, { STEP } from "./Step"
import styles  from "./styles"

const RenderForm = () => {
    const [taille,setTaille] = useState("")
    const [poid,setPoid] = useState("")
    const [nom,setNom] = useState("")
    const getPoids = () => {
        return poid
    }
    return(
    <View style = {styles.container}>
        <SafeAreaView style={styles.safe}>
            <TextInput
                style={styles.input}
                onChangeText={setNom}
                value={nom}
                placeholder="Nom"
                keyboardType="default"
            />
            <TextInput
                style={styles.input}
                onChangeText={setPoid}
                value={poid}
                placeholder="Poids"
                keyboardType="decimal-pad"
            />
            <TextInput
                style={styles.input}
                onChangeText={setTaille}
                value={taille}
                placeholder="Poids"
                keyboardType="decimal-pad"
            />
        </SafeAreaView>
        <Button
        onPress={() =>{
            setStep(STEP.STEP_INPUT)
        }}
        title="retour"
        />
    </View>)}

export default RenderForm
