import { DefaultTheme, NavigationContainer } from '@react-navigation/native'
import { Box, useTheme } from 'native-base'
import { AuthRoutes } from './auth.routes'
import { AppRoutes } from './app.routes'

export function Routes() {
	const { colors } = useTheme()

	const theme = DefaultTheme
	theme.colors.background = colors.black

	return (
		<Box flex={1} bg="black">
			<NavigationContainer theme={theme}>
				{/* <AuthRoutes /> */}
				<AppRoutes />
			</NavigationContainer>
		</Box>
	)
}
