import { StyleSheet } from 'react-native'
import {heightPercentageToDP as hdp} from 'react-native-responsive-screen'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: hdp('5%'),
        paddingHorizontal: hdp('3%'),
        backgroundColor: '#F2F3F5'
    },

})

export default styles