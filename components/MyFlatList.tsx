import React from 'react';
import { View, FlatList, Text, StyleSheet } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faTwitterSquare, faInstagramSquare, faYoutubeSquare } from '@fortawesome/free-brands-svg-icons';
// Import các icon cụ thể từ thư viện

interface DataItem {
    id: string;
    text: string;
    icon: any; // Kiểu dữ liệu cho icon có thể là bất kỳ kiểu dữ liệu nào phù hợp
}

const MyFlatList = () => {
    // Mảng dữ liệu gồm 3 item, mỗi item có một icon khác nhau
    const data: DataItem[] = [
        { id: '1', text: 'Twitter', icon: faTwitterSquare },
        { id: '2', text: 'Instagram', icon: faInstagramSquare },
        { id: '3', text: 'Youtube', icon: faYoutubeSquare },
    ];

    // Render mỗi item
    const renderItem = ({ item }: { item: DataItem }) => (
        <View style={styles.item}>
            <FontAwesomeIcon icon={item.icon} size={24} style={styles.icon} />
            <Text style={styles.text}>{item.text}</Text>
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
    icon: {
        marginRight: 10,
    },
    text: {
        fontSize: 16,
    },
});

export default MyFlatList;
