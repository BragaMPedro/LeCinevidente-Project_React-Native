import React, { useEffect, useState } from "react";
import {
  View,
  Modal,
  Image,
  ModalProps,
  TouchableOpacity,
  ScrollView,
  Text,
  ActivityIndicator,
} from "react-native";
import { styles } from "./styles";

import { MaterialIcons } from "@expo/vector-icons";
import themes from "../../../themes/index";
import {
  getFilmeStreamsDIsponiveis,
  getMovieById,
} from "../../../services/api";
import { StreamsList } from "../../StreamsList/StreamsList";
import { ResponseFilmeDetalhadado, StreamPais } from "./FilmeDetalhesTypes";

interface ModalResultsProps extends ModalProps {
  modal: boolean;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
  filmeId: number;
}

export const ModalResults = ({
  modal,
  setModal,
  filmeId,
  ...rest
}: ModalResultsProps) => {
  const [filmeFilme, setFilmeFilme] = useState<ResponseFilmeDetalhadado>();
  const [streamBR, setStreamBR] = useState<StreamPais>();
  const [isCarregando, setIsCarregando] = useState<boolean>(true);

  function requisicaoDetalhesFilmeSelecionado(id: number) {
    getMovieById(id)
      .then((res) => {
        setFilmeFilme(res.data);
        console.log(res.data.title);
        
      })
      .catch((err) => {
        console.log(err);
      });
    obterStreamsDisponiveis(id);
  }

  function obterStreamsDisponiveis(id: number) {
    getFilmeStreamsDIsponiveis(id)
      .then((res) => {
        setStreamBR(res.data.results.BR);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsCarregando(false);
      });
  }

  useEffect(() => {
    requisicaoDetalhesFilmeSelecionado(filmeId);
  }, []);

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={modal}
      onRequestClose={() => {
        setModal(!modal);
      }}
      {...rest}
    >
      <TouchableOpacity style={styles.modal}>
        {isCarregando ? (
          <ActivityIndicator color={themes.COLORS.Roxo.medio} size="large" />
        ) : (
          <View style={styles.modalContainer}>
            <View style={styles.headerContainer}>
              <TouchableOpacity
                style={styles.IconContainer}
                onPress={() => setModal(!modal)}
              >
                <MaterialIcons
                  name="close"
                  size={24}
                  color={themes.COLORS.Roxo.maisClaro}
                />
              </TouchableOpacity>
              <Text style={styles.title}> {filmeFilme.title} </Text>
              <Image
                style={styles.filmeImagem}
                source={{
                  uri:
                    "https://image.tmdb.org/t/p/original" +
                    (filmeFilme.backdrop_path !== undefined
                      ? filmeFilme.backdrop_path
                      : filmeFilme.poster_path),
                }}
                resizeMode="cover"
              />
            </View>
            <View style={styles.headerInfo}>
              <View>
                {filmeFilme.genres.map((genre) => {
                  return (
                    <Text key={genre.id} style={styles.generos}>
                      {genre.name}
                    </Text>
                  );
                })}
              </View>

              <StreamsList streams={streamBR} />

            </View>
          </View>
        )}
      </TouchableOpacity>
    </Modal>
  );
};
