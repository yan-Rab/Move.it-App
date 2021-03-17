import { StyleSheet } from 'react-native'
import {heightPercentageToDP as hdp} from 'react-native-responsive-screen'
const styles = StyleSheet.create({
    profile: {
        width: '100%',
        marginTop: hdp('5%') + 10,
        flexDirection: 'row',
        alignItems: 'center'
    },

    avatar: {
        width: hdp('8%'),
        height: hdp('8%'),
        borderRadius: hdp('4%')
    },

    name: {
        fontFamily: 'Inter-SemiBold',
        fontSize: hdp('2%') + 5,
        marginLeft: 10,
        color: '#2E384D',
    },

    levelBox: {
        marginLeft: 10,
        flexDirection: 'row',
        alignItems: 'center'
    },

    level: {
        fontFamily: 'Inter-Regular',
        color: '#666666',
        fontSize: hdp('1.5%') + 3
    },

})

export default styles
