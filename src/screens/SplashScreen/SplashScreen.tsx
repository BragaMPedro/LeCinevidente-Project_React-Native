import React, { useContext, useState } from "react"
import Lottie from "lottie-react-native"
import { View } from "react-native"
import { styles } from "./styles"
import { ListaContexto } from "../../context/listaContexto"

export const SplashScreen = ({ navigation: { navigate } }) => {
   const setListaDeFilmes = useContext(ListaContexto).setListaDeFilmes
   const [showLeVidente, setShowLeVidente] = useState<boolean>(false)

   return (
      <View style={styles.container}>
         <Lottie
            autoPlay
            source={require("../../assets/leCineSplashScreen.json")}
            onAnimationFinish={() => setShowLeVidente(true)}
            loop={false}
         />
         {showLeVidente && (
            <Lottie
               autoPlay
               source={require("../../assets/LeCineName.json")}
               onAnimationFinish={() => navigate("HomeScreen")}
               loop={false}
            />
         )}
      </View>
   )
}
