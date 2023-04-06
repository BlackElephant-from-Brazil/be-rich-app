// eslint-disable-next-line camelcase
import { FugazOne_400Regular } from '@expo-google-fonts/fugaz-one'
// eslint-disable-next-line camelcase
import { Trispace_400Regular } from '@expo-google-fonts/trispace'
// eslint-disable-next-line camelcase
import { Comfortaa_500Medium } from '@expo-google-fonts/comfortaa'
import { StatusBar } from 'react-native'
import { Routes } from './src/routes'
import { Center, NativeBaseProvider, Spinner } from 'native-base'
import { BLACK_THEME } from '@themes/index'
import { useFonts } from 'expo-font'

export default function App() {
	const [fontsLoaded] = useFonts({
		// eslint-disable-next-line camelcase
		FugazOne_400Regular,
		// eslint-disable-next-line camelcase
		Trispace_400Regular,
		// eslint-disable-next-line camelcase
		Comfortaa: require('@assets/Comfortaa-Medium.ttf'),
	})
	return (
		<NativeBaseProvider theme={BLACK_THEME}>
			<StatusBar
				barStyle={'light-content'}
				backgroundColor="transparent"
				translucent
			/>
			{fontsLoaded ? (
				<Routes />
			) : (
				<Center bg="black" flex={1}>
					<Spinner color="white" />
				</Center>
			)}
		</NativeBaseProvider>
	)
}
