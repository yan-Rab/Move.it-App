import { StyleSheet } from 'react-native'
import {heightPercentageToDP as hdp, widthPercentageToDP as wdp} from 'react-native-responsive-screen'

const styles = StyleSheet.create({

    container: {
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'gray',
        opacity: 0.3,
        position: 'absolute',
        zIndex: 2
    },

    modalWrapper: {
        marginTop: hdp('20%'),
        marginHorizontal: wdp('10%'),
        backgroundColor: "white",
        borderRadius: 6,

        paddingHorizontal: wdp('3%'),
        paddingTop: hdp('2%'),
        paddingBottom: hdp('8%') ,
        
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },

    closeButton: {
        alignSelf: 'flex-end',
    },

    box: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    },

    levelText: {
        fontFamily: 'Inter-SemiBold',
        color: '#5965E0',
        marginTop: 5,
        lineHeight: hdp('12%') + 8,
        fontSize: hdp('12%') + 8
    },

    congratulationsText: {
        fontFamily: 'Inter-SemiBold',
        fontSize: hdp('4%') + 4,
        color: '#2E384D',
        marginRight: 5,
    },

    descriptionText:{
        marginTop: 10,
        color: '#666666',
        fontFamily: 'Inter-Regular',
        fontSize: hdp('1.8%') + 4,
    }
})

export default styles