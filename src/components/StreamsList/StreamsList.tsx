import React, { useState, useEffect } from "react";
import { StreamPais } from "../Modais/ModalResults/FilmeDetalhesTypes";
import { StreamsRow } from "../StreamRow/StreamRow"
import { View, Text } from "react-native";

import { styles } from "./styles";

interface StreamListProps {
  streams: StreamPais;
}

export const StreamsList = ({ streams }: StreamListProps) => {
  const [mensalExist, setMensalExist] = useState<boolean>(true);
  const [aluguellExist, setAluguelExist] = useState<boolean>(true);
  const [compraExist, setCompraExist] = useState<boolean>(true);

  useEffect(() => {
    streams.flatrate === undefined && setMensalExist(false);
    streams.rent === undefined && setAluguelExist(false);
    streams.buy === undefined && setCompraExist(false);
  }, []);

  return (
    <View style={styles.streamsContainer}>
      {mensalExist &&
      <StreamsRow streamType={streams.flatrate}/>}

      {aluguellExist &&
      <StreamsRow streamType={streams.rent}/>}

      {compraExist &&
      <StreamsRow streamType={streams.buy}/>}

      { (mensalExist && aluguellExist && compraExist === false) && (
        <View>
          <Text style={styles.generos}>Filme Indisponível em Stream</Text>
        </View>
      )}
    </View>
  );
};
