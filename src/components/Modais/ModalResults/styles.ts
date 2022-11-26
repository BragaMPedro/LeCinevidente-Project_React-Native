import { StyleSheet } from 'react-native';
import themes from '../../../themes';

export const styles = StyleSheet.create({

    modal: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: '#12100077'
    },

    modalContainer: {
        width: "90%",
        maxHeight: "80%",
        maxWidth: 320,
        backgroundColor: themes.COLORS.Roxo.escuro,
        flexDirection: "column",
        justifyContent: 'space-between',
        alignContent: 'center',
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    
    headerContainer:{
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: 100,
    },
    
    IconContainer:{
        width: "100%",
        margin: 5,
        alignItems: 'flex-end',
    },

    closeIcon: {
        elevation: 10,
    },

    title: {
        width: "100%",
        zIndex:2,
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'left',
        color: themes.COLORS.Roxo.maisClaro,
    },

    generos:{
        justifyContent: 'space-between'
    },

    filmeImagem: {
        position: 'absolute',
        top:0,
        zIndex: -1,
        width: "100%",
        height: 100,
        borderRadius: 10,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
        opacity: 0.5,
    },

    streamImagem: {
        width: 30,
        height: 30,
        borderRadius: 7,
    },
   
})