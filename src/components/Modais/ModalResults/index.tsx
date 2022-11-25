import React, { useEffect, useState } from "react"
import { View, Modal, Image, ModalProps, TouchableOpacity, ScrollView, Text, ActivityIndicator } from "react-native"
import { styles } from "./styles"

import CloseIcon from "../../../assets/icons/closeIcon.png"
import themes from "../../../themes/index"
import { getFilmeStreamsDIsponiveis, getMovieById } from "../../../services/api"
import { ResponseFilmeDetalhadado, StreamPais } from "./FilmeDetalhesTypes"

interface ModalResultsProps extends ModalProps {
   modal: boolean
   setModal: React.Dispatch<React.SetStateAction<boolean>>
   filmeId: number
}

export const ModalResults = ({ modal, setModal, filmeId, ...rest }: ModalResultsProps) => {
   const [filmeFilme, setFilmeFilme] = useState<ResponseFilmeDetalhadado>()
   const [streamBR, setStreamBR] = useState<StreamPais>()
   const [isCarregando, setIsCarregando] = useState<boolean>(false)

   function obterDetalhesFilmeSelecionado(id: number) {
      setIsCarregando(true)
      getMovieById(id)
         .then(res => {
            setFilmeFilme(res.data)
         })
         .catch(err => {
            console.log(err)
         })
         .finally(() => {
            setIsCarregando(false)
            console.log(filmeFilme.title)
         })
   }

   function obterStreamsDisponiveis(id: number) {
      getFilmeStreamsDIsponiveis(id)
         .then(res => {
            setStreamBR(res.data.results.BR)
         })
         .catch(err => {
            console.log(err)
         })
         .finally(() => {
            setIsCarregando(false)
         })
   }

   useEffect(() => {
      obterDetalhesFilmeSelecionado(filmeId)
   }, [])

   return (
      <Modal
         animationType="slide"
         transparent={true}
         visible={modal}
         onRequestClose={() => {
            setModal(!modal)
         }}
         {...rest}>
         {isCarregando ? (
            <ActivityIndicator color={themes.COLORS.Roxo.medio} size="large" />
         ) : (
            <TouchableOpacity style={styles.modal}>
               <View style={styles.modalContainer}>
                  <View style={styles.IconContainer}>
                     <TouchableOpacity
                        style={{ padding: 3, backgroundColor: themes.COLORS.Roxo.escuro, borderRadius: 50 }}
                        onPress={() => setModal(!modal)}>
                        <Image style={styles.closeIcon} source={CloseIcon} />
                     </TouchableOpacity>
                  </View>

                  <View style={styles.headerContainer}>
                     <Image
                        style={styles.filmeImagem}
                        source={{ uri: "https://image.tmdb.org/t/p/original" + filmeFilme.backdrop_path }}
                        resizeMode="cover"
                     />
                     <View style={styles.headerRight}>
                        <Text style={styles.text}> {filmeFilme.title} </Text>
                        <View>
                           {filmeFilme.genres.map(genre => {
                              return <Text style={styles.generos}>{genre.name}</Text>
                           })}
                        </View>
                        {streamBR.flatrate !== undefined ? (
                           streamBR.flatrate.map(stream => {
                              return (
                                 <View>
                                    <Text style={styles.generos}>Mensal</Text>
                                    <Image
                                       style={styles.filmeImagem}
                                       source={{ uri: "https://image.tmdb.org/t/p/original" + stream.logo_path }}
                                       resizeMode="cover"
                                    />
                                 </View>
                              )
                           })
                        ) : (
                           <View>
                              <Text style={styles.generos}>Filme Indisponível em Stream</Text>
                           </View>
                        )}
                     </View>
                  </View>
                  <ScrollView showsVerticalScrollIndicator={false}></ScrollView>
               </View>
            </TouchableOpacity>
         )}
      </Modal>
   )
}
