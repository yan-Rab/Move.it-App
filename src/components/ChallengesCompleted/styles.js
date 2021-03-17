import { StyleSheet } from 'react-native'
import {heightPercentageToDP as hdp} from 'react-native-responsive-screen'

const styles = StyleSheet.create({

    challengesCompletedBox: {
        marginTop: hdp('4%'),
        flexDirection: 'row',
        paddingVertical: hdp('2%'),
        borderBottomColor: '#D7D8DA',
        borderBottomWidth: 2,
        justifyContent: 'space-between'
    },

    challengesText: {
        fontFamily: 'Inter-Medium',
        color: '#666666',
        fontSize: hdp('1.5%') + 4,
    },
})

export default styles