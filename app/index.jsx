import { Text, View } from "react-native";
import {WrapperContext,WrapperProvider} from '../context/Wrapper';
import { useContext } from "react";


export default function Index() {


const  {val1,val2} = useContext(WrapperContext);

  return (

     <WrapperProvider>
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{color:'red', backgroundColor:'blue'}}>Helo world {val1} and {val2}</Text>
    </View></WrapperProvider>
  );
}
