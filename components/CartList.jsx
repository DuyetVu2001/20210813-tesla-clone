import React from 'react';
import { StyleSheet, View, Text, FlatList, Dimensions } from 'react-native';
import CartItem from './CartItem';

import dummyData from './dummyData';

export default function CartList() {
	return (
		<View style={styles.container}>
			<FlatList
				data={dummyData}
				renderItem={({ item }) => <CartItem {...item} />}
				keyExtractor={(item, index) => `${index}`}
				showsVerticalScrollIndicator={false}
				snapToAlignment={'start'}
				decelerationRate={'fast'}
				snapToInterval={Dimensions.get('window').height}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		width: '100%',
	},
});
