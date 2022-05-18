import React, { useState } from 'react';
import { Button, ColorPropType, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native';
import RenderForm from './formProfile';
import setStep, { getActualStep, STEP } from './Step';


const MainScreen = () => {

   
    const renderinput = () => {
        let poid = getPoids()
        return(
        <View style={styles.container}>
            <Text>{getPoids}</Text>
                <Button
                onPress={() =>{
                    setStep(STEP.STEP_FORM)
                }}
                title="retour"
                />
            </View>)
    }
    if(getActualStep() == STEP.STEP_FORM){
        return(RenderForm())
    }
    return(renderinput())


}
const styles = StyleSheet.create({
    container:{
        justifyContent: 'center',
        flex: 1,
        alignItems: 'center',
        width:"100%",
    },
    test: {
        backgroundColor: "blue",
        textAlign: 'center',
        width: "70%"
    },
    input:{
        backgroundColor : "blue",
        color: "white",
        margin:10
    },
    safe:{
        width:"70%",
        borderWidth:10,
        borderColor:"blue",
        borderRadius:10,
    }
})
export default MainScreen
function getPoids() {
    throw new Error('Function not implemented.');
}

