import React, { useState } from "react";
import { View, Button, Image } from "react-native";
import * as ImagePicker from "expo-image-picker";


 const   UploadImage = ({setImageStateLocal}) => {

const pickImage =async () =>{
    let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: "images",
        quality : 1,
        allowsEditing: true,
        base64: true,  // Request base64 data here

    });
    if(!result.canceled){
        setImageStateLocal(result.assets[0].uri, result.assets[0].base64)
        
      }
}

  return (
    <View>
      <Button title="Pick an Image" onPress={pickImage} />
    </View>
  );
};

export default UploadImage;