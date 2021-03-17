import { StyleSheet } from 'react-native'
import {heightPercentageToDP as hdp} from 'react-native-responsive-screen'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F2F3F5',
        paddingVertical: hdp('5%'),
        paddingHorizontal: hdp('3%'),
        
    },

    boxChallenges: {
        backgroundColor: 'white',
        width: '100%',
        borderRadius: 4,
        paddingVertical: hdp('2%'),
        paddingHorizontal: hdp('5%'),
        alignItems: 'center',
    },

    headerChallenge: {
        width: '100%',
        borderBottomColor: '#DCDDE0',
        borderBottomWidth : 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: hdp('1%'),
        marginBottom: hdp('5%')
    },

    challengeExperience: {
        fontFamily: 'Inter-SemiBold',
        color: '#5965E0',
        fontSize: hdp('2%') + 4
    },

    descriptionChallenge: {
        marginTop: hdp('3%'),
        fontFamily: 'Inter-Regular',
        color: '#666666',
        fontSize: hdp('1.5%') + 2
    },

    text: {
        
        fontFamily: 'Inter-Medium',
        fontSize: hdp('2%') + 4,
        color: '#666666',
        marginTop: hdp('8%')
    },

    box: {
        marginTop: hdp('10%'),
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: hdp('8%')
    },

    boxText: {
        flex: 1,
        marginLeft: hdp('2%'),
        fontFamily: 'Inter-Regular',
        fontSize: hdp('1.5%') + 4,
        color: '#666666'
    },

    buttonsBox: {
        marginTop: hdp('4%'),
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        
    },

    button: {
        flex: 1,
        height: hdp('8%') + 4,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 1,
        
    },

    failedButton: {
        backgroundColor: '#E83F5B',
    },

    completedButton: {
        backgroundColor: '#4CD62B',
    },

    buttontext: {
        color: 'white',
        fontFamily: 'Inter-SemiBold',
        fontSize: hdp('1.7%') + 4
    }
    
})

export default styles