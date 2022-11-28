import React, { useState, useEffect } from "react";
import { StreamPais, StreamMetodoPagamento } from "../Modais/ModalResults/FilmeDetalhesTypes";
import { View, Text, FlatList, Image } from "react-native";

import { styles } from "./styles";

interface StreamListProps {
  streams: StreamPais;
}

export const StreamsList = ({ streams }: StreamListProps) => {
  const [listaStreams, setListaStreams] = useState<StreamMetodoPagamento[]>([]);

  function addStream(streams: StreamPais){
    streamFromArray(streams.flatrate)
    streamFromArray(streams.buy)
    streamFromArray(streams.rent)
  }

  function streamFromArray(streamType: StreamMetodoPagamento[]) {
    streamType !== undefined &&
      streamType.map((stream) => {

        setListaStreams([...listaStreams, stream])
      })
  }

  useEffect(() => {
    addStream(streams)
  }, []);

  return (
    <View style={styles.streamsContainer}>

      <FlatList
        data={listaStreams}
        keyExtractor={item => item.provider_id.toString()}
        numColumns={3}
        renderItem={({ item }) => <Image
          style={styles.streamImagem}
          source={{ uri: "https://image.tmdb.org/t/p/original" + item.logo_path }}
          resizeMode="cover"
        />}
      />

      {listaStreams.length < 1 && (
        <View>
          <Text style={styles.generos}>Filme Indisponível em Stream</Text>
        </View>
      )}
    </View>
  );
};
