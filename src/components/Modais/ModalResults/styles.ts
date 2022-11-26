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
        borderWidth: 1,
        borderColor: themes.COLORS.Roxo.escuro,
        borderRadius: 10,
        paddingBottom: 14,

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
        marginBottom: 14,
    },
    
    IconContainer:{
        width: "100%",
        padding: 5,
        alignItems: 'flex-end',
    },

    closeIcon: {
        elevation: 10,
    },

    title: {
        width: "100%",
        padding: 5,
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'left',
        color: themes.COLORS.Roxo.maisClaro,
    },

    headerInfo:{
        flexDirection: 'row',
        justifyContent: 'space-around',
    },

    generos: {
        justifyContent: "space-between",
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

   
})