import {
	createNativeStackNavigator,
	NativeStackNavigationProp,
} from '@react-navigation/native-stack'
import { Login } from '@screens/Login'
import { Splash } from '@screens/Splash'

type AuthRoutesTypes = {
	splash: undefined
	login: undefined
}

export type AuthNavigatorRoutesProps =
	NativeStackNavigationProp<AuthRoutesTypes>

const { Navigator, Screen } = createNativeStackNavigator<AuthRoutesTypes>()

export function AuthRoutes() {
	return (
		<Navigator screenOptions={{ headerShown: false }}>
			<Screen name="splash" component={Splash} />
			<Screen name="login" component={Login} />
		</Navigator>
	)
}
