/* eslint-disable no-unused-vars */
import {
	createBottomTabNavigator,
	BottomTabNavigationProp,
} from '@react-navigation/bottom-tabs'
import { Configurations } from '@screens/Configurations'
import { CreateIncomingRegister } from '@screens/CreateIncomingRegister'
import { CreateRegister } from '@screens/CreateRegister'
import { EditProfile } from '@screens/EditProfile'
import { Goal } from '@screens/Goal'
import { GoalDetails } from '@screens/GoalDetails'
import { Home } from '@screens/Home'
import { IncomingRegisters } from '@screens/IncomingRegisters'
import { Notifications } from '@screens/Notifications'
import { PrivacyPolicy } from '@screens/PrivacyPolicy'
import { Profile } from '@screens/Profile'
import { RegisterDetails } from '@screens/RegisterDetails'
import { SendFeedback } from '@screens/SendFeedback'
import { TermsAndConditions } from '@screens/TermsAndConditions'
import { useTheme } from 'native-base'

import HomeSvg from '@assets/home.svg'
import TargetSvg from '@assets/target.svg'
import PlusCircleSvg from '@assets/plus-circle.svg'
import BookSvg from '@assets/book.svg'
import UserSvg from '@assets/user.svg'
import { MenuText } from '@components/MenuText'

type AppRoutesTypes = {
	configurations: undefined
	createIncomingRegister: undefined
	createRegister: undefined
	editProfile: undefined
	goal: undefined
	goalDetails: undefined
	home: undefined
	incomingRegisters: undefined
	notifications: undefined
	privacyPolicy: undefined
	profile: undefined
	registerDetails: undefined
	sendFeedback: undefined
	termsAndConditions: undefined
}

export type AppNavigatorRoutesProps = BottomTabNavigationProp<AppRoutesTypes>

const { Navigator, Screen } = createBottomTabNavigator<AppRoutesTypes>()

export function AppRoutes() {
	const { sizes, colors } = useTheme()
	const iconSize = sizes[6]

	return (
		<Navigator
			screenOptions={{
				headerShown: false,
				tabBarActiveTintColor: colors.green[700],
				tabBarInactiveTintColor: colors.white,
				tabBarStyle: {
					backgroundColor: colors.gray[700],
					borderTopWidth: 0,
					height: 80,
					width: 342,
					alignSelf: 'center',
					marginBottom: 16,
					borderRadius: 24,
					paddingHorizontal: 8,
				},
			}}
		>
			<Screen
				name="home"
				component={Home}
				options={{
					tabBarIcon: ({ color }) => (
						<HomeSvg color={color} width={iconSize} height={iconSize} />
					),
					tabBarLabel({ focused, color }) {
						return (
							<>{focused ? <MenuText text="Home" color={color} /> : <></>}</>
						)
					},
				}}
			/>
			<Screen
				name="goal"
				component={Goal}
				options={{
					tabBarIcon: ({ color }) => (
						<TargetSvg color={color} width={iconSize} height={iconSize} />
					),
					tabBarLabel({ focused, color }) {
						return (
							<>{focused ? <MenuText text="Meta" color={color} /> : <></>}</>
						)
					},
				}}
			/>
			<Screen
				name="createIncomingRegister"
				component={CreateIncomingRegister}
				options={{
					tabBarIcon: ({ color }) => (
						<PlusCircleSvg color={color} width={iconSize} height={iconSize} />
					),
					tabBarLabel({ focused, color }) {
						return (
							<>
								{focused ? (
									<MenuText text="Novo registro" color={color} />
								) : (
									<></>
								)}
							</>
						)
					},
				}}
			/>
			<Screen
				name="incomingRegisters"
				component={IncomingRegisters}
				options={{
					tabBarIcon: ({ color }) => (
						<BookSvg color={color} width={iconSize} height={iconSize} />
					),
					tabBarLabel({ focused, color }) {
						return (
							<>
								{focused ? (
									<MenuText text="Movimentos futuros" color={color} />
								) : (
									<></>
								)}
							</>
						)
					},
				}}
			/>
			<Screen
				name="profile"
				component={Profile}
				options={{
					tabBarIcon: ({ color }) => (
						<UserSvg color={color} width={iconSize} height={iconSize} />
					),
					tabBarLabel({ focused, color }) {
						return (
							<>{focused ? <MenuText text="Perfil" color={color} /> : <></>}</>
						)
					},
				}}
			/>
			<Screen
				name="configurations"
				component={Configurations}
				options={{ tabBarButton: () => null }}
			/>
			<Screen
				name="createRegister"
				component={CreateRegister}
				options={{ tabBarButton: () => null }}
			/>
			<Screen
				name="editProfile"
				component={EditProfile}
				options={{ tabBarButton: () => null }}
			/>
			<Screen
				name="goalDetails"
				component={GoalDetails}
				options={{ tabBarButton: () => null }}
			/>
			<Screen
				name="notifications"
				component={Notifications}
				options={{ tabBarButton: () => null }}
			/>
			<Screen
				name="privacyPolicy"
				component={PrivacyPolicy}
				options={{ tabBarButton: () => null }}
			/>
			<Screen
				name="registerDetails"
				component={RegisterDetails}
				options={{ tabBarButton: () => null }}
			/>
			<Screen
				name="sendFeedback"
				component={SendFeedback}
				options={{ tabBarButton: () => null }}
			/>
			<Screen
				name="termsAndConditions"
				component={TermsAndConditions}
				options={{ tabBarButton: () => null }}
			/>
		</Navigator>
	)
}
