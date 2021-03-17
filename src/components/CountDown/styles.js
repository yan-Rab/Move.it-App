import { StyleSheet } from 'react-native'
import { heightPercentageToDP as hdp } from 'react-native-responsive-screen'

 const styles = StyleSheet.create({
    countDownBox:{
        marginTop: hdp('6%'),
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },

    countDownNumberBox: {
        backgroundColor: 'white',
        borderRadius: 4,
        margin: 4,
        flex: 1,
        justifyContent: 'center',
        paddingVertical: hdp('2.5%'),
        alignItems: 'center'
    },

    countDownNumber: {
        fontFamily: 'Inter-SemiBold',
        color: '#2E384D',
    
        fontSize: hdp('5%') + 6
    },

    buttonCountDown: {
        marginTop: hdp('4%'),
        width: '100%',
        height: hdp('8%') + 8,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        borderRadius: 4,
    },

    startCycle: {
        backgroundColor: "#5965E0",
    },

    finishCycle: {
        backgroundColor: "#E83F5B"   
    },

    disabledButton: {
        backgroundColor: 'white',
        borderBottomColor: '#4CD62B',
        borderStyle: 'solid',
        borderBottomWidth: 4
    },

    buttonText: {
        fontFamily: 'Inter-SemiBold',
        fontSize: hdp('2%') + 4,
        color: 'white',
        marginRight: 10,
    },

    startCycleText: {
        color: 'white'
    },

    finishCycleText: {
        color: 'white',
    },

    disabledCycleText: {
        color: '#666666'
    }

 })

 export default styles