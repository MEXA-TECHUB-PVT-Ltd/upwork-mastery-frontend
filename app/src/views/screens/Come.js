
import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';

const SortArray = () => {
    const [array, setArray] = useState([
        { name: 'John', isOnline: true },
        { name: 'Emily', isOnline: false },
        { name: 'Mark', isOnline: true },
        { name: 'Emily', isOnline: false },
        { name: 'Mark', isOnline: true },
        { name: 'Emily', isOnline: false },
        { name: 'Mark', isOnline: true },
    ]);

    const sortArray = () => {
        const sortedArray = [...array].sort((a, b) => (a.isOnline === b.isOnline) ? 0 : a.isOnline ? -1 : 1);
        setArray(sortedArray);
    };

    return (
        <View>
            <Button title="Sort Array" onPress={sortArray} />
            {array.map((item, index) => (
                <Text key={index}>{item.name}, {item.isOnline ? 'Online' : 'Offline'}</Text>
            ))}
        </View>
    );
};

export default SortArray;


