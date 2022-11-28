import React, { useState, useEffect } from "react";
import { StreamMetodoPagamento, StreamPais } from "../Modais/ModalResults/FilmeDetalhesTypes";
import { View, Image, Text } from "react-native";

import { styles } from "./styles";

interface StreamRowProps {
    streamType: StreamMetodoPagamento[];
}

export const StreamsRow = ({ streamType }: StreamRowProps) => {
    return(
        <View style={styles.streamType}>
            {streamType.map((stream) => (
                <Image
                key={stream.provider_id}
                style={styles.streamImagem}
                source={{ uri: "https://image.tmdb.org/t/p/original" + stream.logo_path }}
                resizeMode="cover"
                />
            ))}
        </View>
    )
}