import React from 'react';
import {
	Dimensions,
	ImageBackground,
	StyleSheet,
	Text,
	View,
} from 'react-native';
import Button from './Button';

export default function CartItem(props) {
	const { name, tagline, taglineCTA, image } = props;

	return (
		<View style={styles.container}>
			<ImageBackground source={image} style={styles.backgroundImg} />

			<View style={styles.titleContainer}>
				<Text style={styles.title}>{name}</Text>
				<Text style={styles.tagline}>
					{tagline}{' '}
					<Text style={{ textDecorationLine: 'underline' }}>{taglineCTA}</Text>
				</Text>
			</View>

			<View style={styles.buttonContainer}>
				<Button
					type="primary"
					content="Custom order"
					onPress={() => console.warn('Press up!')}
				/>
				<Button
					type="secondary"
					content="Existing inventory"
					onPress={() => console.warn('Press down!')}
				/>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		width: '100%',
		backgroundColor: '#fff',
	},

	titleContainer: {
		position: 'absolute',
		top: '12%',
		width: '100%',
		alignItems: 'center',
	},

	title: {
		fontSize: 40,
	},

	tagline: {
		fontSize: 16,
		color: 'dimgray',
	},

	backgroundImg: {
		width: '100%',
		height: Dimensions.get('window').height,
		resizeMode: 'cover',
	},

	buttonContainer: {
		position: 'absolute',
		bottom: '2%',
		width: '100%',
	},
});
