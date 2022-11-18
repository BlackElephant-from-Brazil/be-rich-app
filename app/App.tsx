// eslint-disable-next-line camelcase
import { useFonts, FugazOne_400Regular } from '@expo-google-fonts/fugaz-one'
// eslint-disable-next-line camelcase
import { Trispace_400Regular } from '@expo-google-fonts/trispace'
// eslint-disable-next-line camelcase
import { Comfortaa_500Medium } from '@expo-google-fonts/comfortaa'
import { Text, StatusBar } from 'react-native'
import { Routes } from './src/routes'

export default function App() {
	const [fontsLoaded] = useFonts({
		// eslint-disable-next-line camelcase
		FugazOne_400Regular,
		// eslint-disable-next-line camelcase
		Trispace_400Regular,
		// eslint-disable-next-line camelcase
		Comfortaa_500Medium,
	})
	return fontsLoaded ? (
		<>
			<StatusBar
				barStyle={'light-content'}
				backgroundColor="transparent"
				translucent
			/>
			<Routes />
		</>
	) : (
		<Text>Loading...</Text>
	)
}
