import React, {Component} from 'react';
import {StyleSheet, Text, View, FlatList, Alert} from 'react-native';

export default class App extends Component {

    _header = () => {
        return <Text style={[styles.txt, {backgroundColor: 'black'}]}>这是头部</Text>;
    }

    _footer = () => {
        return <Text style={[styles.txt, {backgroundColor: 'black'}]}>这是尾部</Text>;
    }

    _empty = () => {
        return <Text style={[styles.txt, {backgroundColor: 'red'}]}>数据为空</Text>;
    }

    _onRefresh = () => {
        //开始显示加载动画
        this.setState({
            refreshing:true
        });
        setTimeout(()=>{
            alert('刷新ok.... ');
            //加载完成，关闭加载动画
            this.setState({
                refreshing:false
            });
            //加载数据
        },3000)
    }

    constructor(props) {
        super(props);
        this.state = {
            refreshing: false
        }
    }

    mRenderItem = ({item, index}) => {
        return <View
            style={styles.container}
            onPress={() => {
                Alert.alert(datas[index].title)
            }
            }>
            <View style={styles.row1}>
                <Text style={styles.titleStyle}>{(index + 1) + item.title}</Text>
                <View style={styles.radiusTagStyle}>
                    <Text style={styles.titleStyle3}>{item.roomType}</Text>
                </View>
            </View>
            <View style={styles.row2}>
                <Text style={styles.titleStyle2}>下单时间: {item.createTime}</Text>
                <View style={styles.row4}>
                    <View style={[
                        styles.radiusView,
                        {backgroundColor: selectColor[item.handState]}
                    ]}/>
                    <Text style={styles.titleStyle2}>状态：{item.handState}</Text>
                </View>
            </View>
            <View style={styles.radiusStrokeContainerStyle}>
                <Text style={styles.row3}>耗时:{item.useTime}</Text>
            </View>
            <Text style={styles.lineStyle}/>
        </View>
    }

    render() {
        return (
            <View>
                <FlatList
                    data={datas}
                    renderItem={this.mRenderItem}
                    ListHeaderComponent={this._header}
                    ListFooterComponent={this._footer}
                    ListEmptyComponent={this._empty}
                    onRefresh={this._onRefresh}
                    refreshing={this.state.refreshing}
                />
            </View>
        );
    }

}

const datas = [
    {title: "栋 520", roomType: "洗剪吹", createTime: "2019-01-05 10:25:36", handState: 1, useTime: "耗时50分钟"},
    {title: "栋 254", roomType: "半套服务", createTime: "2019-01-05 10:25:36", handState: 3, useTime: "耗时1小时20分钟"},
    {title: "栋 336", roomType: "全套服务", createTime: "2019-01-05 10:25:36", handState: 2, useTime: "耗时5分钟"},
    {title: "栋 520", roomType: "干洗", createTime: "2019-01-05 10:25:36", handState: 3, useTime: "耗时1小时"},
    {title: "栋 360", roomType: "染发造型", createTime: "2019-01-05 10:25:36", handState: 3, useTime: "耗时14分钟"},
    {title: "栋 520", roomType: "烫染服务", createTime: "2019-01-05 10:25:36", handState: 1, useTime: "耗时10小时30分钟"},
    {title: "栋 290", roomType: "住客服务", createTime: "2019-01-05 10:25:36", handState: 2, useTime: "耗时3天5小时10分钟"},
    {title: "栋 110", roomType: "住客服务", createTime: "2019-01-05 10:25:36", handState: 3, useTime: "耗时5分钟"},
    {title: "栋 340", roomType: "住客服务", createTime: "2019-01-05 10:25:36", handState: 2, useTime: "耗时50分钟"},
    {title: "栋 530", roomType: "住客服务", createTime: "2019-01-05 10:25:36", handState: 1, useTime: "耗时20分钟"},
    {title: "栋 520", roomType: "住客服务", createTime: "2019-01-05 10:25:36", handState: 2, useTime: "耗时两天"},
];

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: 120,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'stretch',
        flexDirection: 'column'
    },
    row1: {
        flex: 1,
        backgroundColor: 'white',
        height: 20,
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        padding: 5,
        flexDirection: 'row'
    },
    row2: {
        flex: 1,
        backgroundColor: 'white',
        height: 20,
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        padding: 5,
        flexDirection: 'row'
    },
    row3: {
        borderRadius: 10,
        borderWidth: 1,
        paddingLeft: 5,
        paddingRight: 5,
        borderColor: 'red',
        marginLeft: 5,
        marginBottom: 5,
        backgroundColor: 'white',
        alignItems: 'stretch',
        fontSize: 14
    },
    row4: {
        flex: 1,
        backgroundColor: 'white',
        height: 20,
        justifyContent: 'flex-end',
        alignItems: 'flex-start',
        padding: 5,
        flexDirection: 'row'
    },
    titleStyle: {
        color: 'black',
        fontSize: 17
    },
    titleStyle2: {
        fontSize: 17,
    },
    radiusView: {
        width: 10,
        height: 10,
        borderRadius: 5,
        marginTop: 5,
        marginRight: 5,
        backgroundColor: 'red'
    },
    titleStyle3: {
        fontSize: 17,
        color: 'white',
        textShadowColor: '#C0C0C0',
    },
    radiusTagStyle: {
        borderBottomLeftRadius: 10,
        padding: 5,
        fontSize: 17,
        justifyContent: 'center',
        backgroundColor: 'red'
    },
    radiusStrokeContainerStyle: {
        height: 30,
        justifyContent: 'flex-start',
        backgroundColor: 'white',
        flexDirection: 'row',
    },
    radiusStrokeStyle: {
        width: 200,
        paddingLeft: 10,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'red',
        justifyContent: 'center',
        marginLeft: 5,
        marginBottom: 5,
        backgroundColor: 'white',
        flexDirection: 'row',
    },
    titleStyle2: {
        color: 'black',
        fontSize: 14
    },
    contentStyle: {
        color: 'black',
        fontSize: 14
    },
    lineStyle: {
        backgroundColor: '#F5F5F5',
        height: 7,
    },
    txt: {
        textAlign: 'center',
        textAlignVertical: 'center',
        color: 'white',
        fontSize: 30,
    }
});

const selectColor = {
    1: 'orange',
    2: 'green',
    3: 'red',
}

