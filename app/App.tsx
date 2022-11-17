// eslint-disable-next-line camelcase
import { useFonts, FugazOne_400Regular } from '@expo-google-fonts/fugaz-one'
// eslint-disable-next-line camelcase
import { Trispace_400Regular } from '@expo-google-fonts/trispace'
import { Text } from 'react-native'
import { Routes } from './src/routes'

export default function App() {
	const [fontsLoaded] = useFonts({
		// eslint-disable-next-line camelcase
		FugazOne_400Regular,
		// eslint-disable-next-line camelcase
		Trispace_400Regular,
	})
	return <>{fontsLoaded ? <Routes /> : <Text>Loading...</Text>}</>
}
