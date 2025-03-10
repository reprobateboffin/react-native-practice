import React, { useState, useContext } from "react";
import { View, Text, Pressable, TextInput, Image } from "react-native";
import { ThemeContext } from "../context/ThemeContext";
import  UploadImage  from "./UploadImage";

export  function Prediction() {
  const themeContext = useContext(ThemeContext);
  const [imageUri, setImageUri] = useState(null);
  const [message, setMessage] = useState('');
  const [inputText, setInputText] = useState('');
  const [base64Image, setBase64Image] = useState('');
//   const [chat, setChat] = useState('')
//   const [response,setResponse] = useState('')


  const label_mapping = {
    0: 'nv',
    1: 'mel',
    2: 'bkl',
    3: 'bcc',
    4: 'akiec',
    5: 'vasc',
    6: 'df'
}
  const setImageState = (uri, uribase64) => {
    // console.log("Setting image URI:", uri);
    // console.log("Setting base64 Image:", uribase64);
    setImageUri(uri);
    setBase64Image(uribase64);
  };

  if (!themeContext) {
    return <Text>Error: ThemeContext is undefined. Wrap the app in ThemeProvider.</Text>;
  }

  const { colorScheme, setColorScheme, theme } = themeContext;
  //local
  // http://127.0.0.1:8000/
// http://192.168.1.106:8000/
  const sendHelloWorld = async (message1) => {
    try {
      const response = await fetch('http://192.168.1.106:8000/api/hello/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: message1 }),
      });

      const data = await response.json();
      setMessage(data?.message || 'No message received');
      console.log(data?.message);
    } catch (error) {
      console.log(error);
    }
  };

  const sendImageToBackend = async (base64Image) => {
    if (!base64Image) {
      alert("Please select an image");
      return;
    }
    //current
    // http://127.0.0.1:8000/
    try {
      const response = await fetch('http://192.168.1.106:8000/api/image/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: base64Image }),
      });

      const data = await response.json();
      setMessage(label_mapping[data?.message] || 'Error processing image');
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };


  // const sendChatImageToBackEnd = async () => {

  //   const response = await fetch('')


  // }


  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>New Text</Text>
      <TextInput
        placeholder="Type here..."
        value={inputText}
        onChangeText={(newText) => setInputText(newText)}
      />
      <Pressable  style={{borderColor: 'blue', borderRadius: 50, borderWidth:2, padding:10}} onPress={() => sendHelloWorld(inputText)}>
        <Text>Send to Backend</Text>
      </Pressable>

      <UploadImage setImageStateLocal={setImageState} />

      {imageUri && <Image source={{ uri: imageUri }} style={{ width: 200, height: 200 }} />}
      
      {message && <View><Text>{message}</Text></View>}

      <Pressable style={{borderColor: 'blue', borderRadius: 50, borderWidth:2, padding:10}} onPress={() => sendImageToBackend(base64Image)}>
        <Text>Send Image to Backend</Text>
      </Pressable>

      {/* <TextInput
      placeholder="Enter your question here"
      value=""
      
      
      /> */}


    </View>
  );
}

export default Prediction;
