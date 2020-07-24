import React, {Component} from 'react';
import {View, StyleSheet, Text, Image, ScrollView} from 'react-native';
import Header from './components/Header';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }


    render() {
        var images = [];

        for(let i = 0; i < 10; i++){

            images.push(
                <View style={styles.gridItem} key = {i}>
                    <Image
                        style={styles.gridItemImage}
                        source={{
                            uri: 'https://d2ebzu6go672f3.cloudfront.net/media/content/images/p8_Yoga_N1711_ts494389839.jpg',
                        }}
                    />
                </View>
            )
        }
        return <ScrollView>
            <Header/>
            <View style={styles.container}>
                <Text style={styles.h1}>Description</Text>
                <Text style={styles.text}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores cupiditate eaque eveniet iure
                    magnam quidem. Aliquid atque aut corporis distinctio eius iste, nemo nostrum, quibusdam recusandae
                    repudiandae vel voluptatibus. Voluptas!
                </Text>
            </View>
            <View style={styles.container}>
                <Text style={styles.h1}>Attachments</Text>
                <View  style={styles.grid}>
                {images}
                </View>
            </View>


        </ScrollView>;
    }


}

const styles = StyleSheet.create({
    h1: {
        fontSize: 17,
        marginBottom: 5,
    },
    text: {
        fontSize: 12,
        lineHeight: 22,
        color:'#A9ABAA'
    },
    container: {
        paddingTop: 25,
        paddingHorizontal: 20,
    },
    grid: {
        justifyContent: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap',
        flex: 1,
    },
    gridItem: {
        marginHorizontal:15,
        width: 150,
        height: 150,
        justifyContent: 'center',
        alignItems: 'center',
    },
    gridItemImage: {
        width: '100%',
        height: '100%',
        borderWidth: 1.5,
        borderColor: 'white',
        borderRadius: 24,
    },
});


export default Main;
