import React, { useEffect, useState } from "react"
import { View, Text, FlatList, ActivityIndicator } from "react-native"
import { getPopularMovies } from "../../services/api"
import { CardFilme } from "../../components/CardFilme/CardFilme"
import Constants from "expo-constants"
import themes from "../../themes"
import { ModalResults } from "../../components/Modais/ModalResults"

interface ResponseFilmesPop {
   page: number
   total_results: number
   total_pages: number
   results: Filme[]
}

export interface Filme {
   id: number
   adult: boolean
   backdrop_path: string
   genre_ids: number[]
   original_language: string
   original_title: string
   overview: string
   popularity: number
   poster_path: string
   release_date: string
   title: string
   video: boolean
   vote_average: number
   vote_count: number
}

export const FilmesPopulares = () => {
   const [filmesPopulares, setFilmesPopulares] = useState<Filme[]>([])
   const [filmeSelecionado, setFilmeSelecionado] = useState<number>()
   const [isCarregando, setIsCarregando] = useState<boolean>(false)
   const [modal, setModal] = useState<boolean>(false)

   function oberFilmesLista() {
      setIsCarregando(true)
      getPopularMovies()
         .then(res => {
            setFilmesPopulares(res.data.results)
         })
         .catch(err => {
            console.log(err)
         })
         .finally(() => {
            setIsCarregando(false)
         })
   }

   function handleModal(id) {
      setFilmeSelecionado(id)
      setModal(true)
   }

   useEffect(() => {
      oberFilmesLista()
   }, [])

   return (
      <View style={{ paddingTop: Constants.statusBarHeight, backgroundColor: themes.COLORS.fundo }}>
         {isCarregando ? (
            <ActivityIndicator color={themes.COLORS.Roxo.medio} size="large" />
         ) : (
            <FlatList
               data={filmesPopulares}
               keyExtractor={item => item.id.toString()}
               renderItem={({ item }) => <CardFilme onPress={() => handleModal(item.id)} filme={item} />}
            />
         )}

         {modal && <ModalResults filmeId={filmeSelecionado} modal={modal} setModal={setModal} />}
      </View>
   )
}
