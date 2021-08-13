import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function Button(props) {
	const { type, content, onPress } = props;

	const bgColor = type === 'primary' ? 'black' : 'white';
	const textColor = type === 'primary' ? 'white' : 'black';

	return (
		<View style={styles.container}>
			<Pressable
				style={[styles.pressBtn, { backgroundColor: bgColor }]}
				onPress={() => onPress()}
			>
				<Text style={[styles.pressBtn, { color: textColor }]}>{content}</Text>
			</Pressable>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		width: '100%',
		marginBottom: 12,
		paddingHorizontal: 18,
	},

	pressBtn: {
		width: '100%',
		lineHeight: 52,
		paddingHorizontal: 12,
		borderRadius: 36,
		textAlign: 'center',
		fontSize: 14,
		fontWeight: '700',
		textTransform: 'uppercase',
	},
});
