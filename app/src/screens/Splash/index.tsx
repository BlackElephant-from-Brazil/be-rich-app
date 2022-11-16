import { StatusBar } from 'expo-status-bar'
import { Text, View } from 'react-native'
import { styles } from './styles'

export function Splash() {
	return (
		<View style={styles.container}>
			<Text>Ola do seu amigo beRich!</Text>
			<StatusBar style="auto" />
		</View>
	)
}
