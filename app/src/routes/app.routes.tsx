import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Login } from '@screens/Login'
import { Splash } from '@screens/Splash'

const { Navigator, Screen } = createNativeStackNavigator()

export function AppRoutes() {
	return (
		<Navigator screenOptions={{ headerShown: false }}>
			<Screen name="splash" component={Splash} />
			<Screen name="login" component={Login} />
		</Navigator>
	)
}
