import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

export default function Header() {
	return (
		<View style={styles.container}>
			<Image
				style={styles.logo}
				source={require('../assets/images/logo.png')}
			/>
			<Image
				style={styles.menu}
				source={require('../assets/images/menu.png')}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		position: 'absolute',
		top: 40,
		zIndex: 100,
		flexDirection: 'row',
		justifyContent: 'space-between',
		width: '100%',
		paddingHorizontal: 18,
	},
	logo: {
		width: 100,
		height: 20,
		resizeMode: 'contain',
	},
	menu: {
		width: 25,
		height: 25,
		resizeMode: 'contain',
	},
});
