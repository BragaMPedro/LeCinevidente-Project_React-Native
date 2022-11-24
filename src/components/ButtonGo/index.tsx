import React from "react"
import { NativeStackNavigationProp } from "@react-navigation/native-stack"
import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native"
import { styles } from "./styles"
import { useNavigation } from "@react-navigation/native"
import { RootStackParamList } from "../../routes"

interface ButtonGoProps extends TouchableOpacityProps {
   title: string;
   next?: "SplashScreen" | 
   "HomeScreen" | 
   "Generos" | 
   "Streams" | 
   "Generos" | 
   "Ano" | 
   "OrderBy"|
   "ListaScreen";
}

type AuthScreenProp = NativeStackNavigationProp<RootStackParamList, "SplashScreen">

export const ButtonGo = ({ title, next, ...resto }: ButtonGoProps) => {
   const nav = useNavigation<AuthScreenProp>()

   return (
      <TouchableOpacity style={styles.button} onPress={() => nav.navigate(next)} {...resto}>
         <Text style={styles.buttonText}>{title}</Text>
      </TouchableOpacity>
   )
}
