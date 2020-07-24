import React, {Component} from 'react';
import {View, StyleSheet, Text, ImageBackground, TouchableOpacity} from 'react-native';
import Button from '../../../commun/components/Button';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }


    render() {
        const {} = this.props;
        return <View style={styles.headerContainer}>
            <ImageBackground
                source={{uri: 'https://d2ebzu6go672f3.cloudfront.net/media/content/images/p8_Yoga_N1711_ts494389839.jpg'}}
                style={styles.image}>
                <View style={styles.container}>
                    <View style={{flex: 2, padding: 25 }}>
                        <TouchableOpacity>
                            <Text style={{color:'white'}}>Back</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{flex: 2}}>
                        <Text style={styles.title}>Child's pose</Text>
                        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                            <View>
                                <Text style={styles.subTitle}>Difficulty</Text>
                                <Text style={styles.text}>Difficulty</Text>
                            </View>
                            <View>
                                <Text style={styles.subTitle}>Iterations</Text>
                                <Text style={styles.text}>10 Satze</Text>
                            </View>
                            <View>
                                <Text style={styles.subTitle}>Duration</Text>
                                <Text style={styles.text}>15 Minuten</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{flex: 1, justifyContent:'center', alignItems:'center'}}>
                        <Button onPress={()=>alert('Play Video Action')}>Play Video</Button>
                        <Button onPress={()=>alert('Mark as done Action')} containerStyle={{backgroundColor: '#5BC68B'}}>Mark as done</Button>
                    </View>
                </View>
            </ImageBackground>
        </View>;
    }
}

const styles = StyleSheet.create({
    text: {
        fontSize: 14,
        color: 'white',
    },
    headerContainer: {
        width: '100%',
        height: 400,
    },
    image: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
    },
    container: {
        flex: 1,
        padding: 15,
        flexDirection: 'column',
        justifyContent: 'space-between',
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    title: {
        fontSize: 20,
        marginBottom: 20,
        fontWeight: 'bold',
        color: 'white',
    },
    subTitle: {
        fontSize: 10,
        fontWeight: 'bold',
        color: '#383C4B',
    },
});


export default Header;
