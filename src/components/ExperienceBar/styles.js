import { StyleSheet } from 'react-native'
import {heightPercentageToDP as hdp} from 'react-native-responsive-screen'

const styles = StyleSheet.create({
    boxLevelBar: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    textLevelBar: {
        fontFamily: 'Inter-Regular',
        color: '#666666'
    },

    levelBar: {
        flex: 1,
        width: '100%',
        height: 8,
        justifyContent: 'flex-start',
        borderRadius: 8,
        marginHorizontal: 10,
        backgroundColor: '#DCDDE0',
        
    },

    currentExperienceBar:{
        height: '100%',
        backgroundColor: '#4CD62B',
        borderRadius: 8,
        maxWidth: '100%',
        flex: 1,
        position: 'absolute'
    },

    currentExperience: {
         marginTop: hdp('2.5%'),
         alignSelf: 'center',
    },
})

export default styles