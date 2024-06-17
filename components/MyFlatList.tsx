import React from 'react';
import { View, FlatList, Text, StyleSheet } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faUserGroup, faCircleCheck } from '@fortawesome/free-solid-svg-icons';

interface DataItem {
    id: string;
    mainText: string;
    subText: string;
    icon: any;
    date: string;
}

const MyFlatList = () => {
    const data: DataItem[] = [
        { id: '1', mainText: 'Bước 1 Xác định nhu cầu khách hàng', subText: 'Vũ Văn Hoàng sắp đến hạn lúc 01/08/2020', icon: faCircleCheck, date: '2024-06-17' },
        { id: '2', mainText: 'Bạn có khách hàng mới!', subText: 'Chúc mừng bạn, bạn có khách hàng mới. Hãy mau chóng liên lạc ngay.', icon: faUserGroup, date: '2024-06-16' },
        { id: '3', mainText: 'Khách hàng được chia sẻ bị trùng', subText: 'Rất tiếc, khách hàng được chia sẻ đã tồn tại trên hệ thống. Vui lòng chia sẻ khách hàng', icon: faUserGroup, date: '2024-06-15' },
        { id: '4', mainText: 'Khách hàng được thêm bị trùng', subText: 'Rất tiếc, khách hàng được thêm đã tồn tại trên hệ thống.Vui lòng thêm khách hàng', icon: faUserGroup, date: '2024-06-14' },
        { id: '5', mainText: 'Công việc sắp đến hạn trong hôm nay', subText: 'Bạn có 17 công  việc sắp đến hạn trong hôm nay', icon: faCircleCheck, date: '2024-06-13' },
        { id: '6', mainText: 'Công việc đã quá hạn', subText: 'Bạn có 17 bị quá hạn. Hãy kiểm tra và lên kế hoạch hoàn thành công việc.', icon: faCircleCheck, date: '2024-06-12' },
    ];

    const renderItem = ({ item }: { item: DataItem }) => (
        <View style={[
            styles.item,
            (item.id === '1' || item.id === '2' || item.id === '4') && styles.itemHighlight
        ]}>
            <FontAwesomeIcon icon={item.icon} size={24} style={styles.icon} color="#0052e0" />
            <View style={styles.textContainer}>
                <Text style={styles.mainText}>{item.mainText}</Text>
                <Text style={styles.subText}>{item.subText}</Text>
                <Text style={styles.date}>{item.date}</Text>
            </View>
        </View>
    );

    return (
        <FlatList
            style={styles.container}
            data={data}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
        />
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
    },
    item: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    itemHighlight: {
        backgroundColor: '#d0eaff',  // Màu xanh biển nhạt
    },
    icon: {
        marginRight: 10,
    },
    textContainer: {
        flex: 1,
    },
    mainText: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    subText: {
        fontSize: 14,
        color: 'gray',
    },
    date: {
        fontSize: 12,
        color: 'darkgray',
    },
});

export default MyFlatList;
