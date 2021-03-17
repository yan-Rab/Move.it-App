import { StyleSheet } from 'react-native'
import {heightPercentageToDP as hdp, widthPercentageToDP as wdp} from 'react-native-responsive-screen'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: '#5965E0',
        paddingVertical: hdp('6%'),
        paddingHorizontal: wdp('6%'),
        justifyContent: 'space-between'
    },

    welcomeText: {
        fontFamily: 'Inter-Bold',
        fontSize: hdp('3%') + 6,
        color: 'white'
    },

    boxGithub: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    text: {
        marginLeft: 10,
        flex: 1,
        fontFamily: 'Inter-Regular',
        color: '#B2B9FF',
        fontSize: hdp('2%')
    },

    boxInput: {
        width: '100%',
        height: hdp('7%') + 10,
        marginTop: hdp('4%'),
        flexDirection: 'row',
        alignItems: 'center',
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5,

    },

    input: {
        height: '100%',
        paddingLeft: 10,
        width: '80%',
        fontFamily: 'Inter-Medium',
        fontSize: hdp('1.5%') + 4,
        color: 'white',
    },

    nextButton: {
        height: '100%',
        width: '20%',
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#4CD62B',
    },

    nextButtonError: {
        backgroundColor: '#E83F5B',
    }

})

export default styles