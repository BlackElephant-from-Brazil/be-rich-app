import { AppTitle } from '@components/AppTitle'
import { TitleText } from '@components/TitleText'
import { Center, Image, VStack } from 'native-base'
import { useEffect, useState } from 'react'

import { AuthNavigatorRoutesProps } from '@routes/auth.routes'

import MoneyBag from '@assets/money-bag.png'
import { useNavigation } from '@react-navigation/native'

export function Splash() {
	const [loginScreenLoaded, setLoginScreenLoaded] = useState(false)
	const navigation = useNavigation<AuthNavigatorRoutesProps>()

	useEffect(() => {
		setTimeout(() => {
			setLoginScreenLoaded(true)
		}, 1500)
	}, [])

	useEffect(() => {
		if (loginScreenLoaded) {
			navigation.navigate('login')
		}
	}, [loginScreenLoaded, navigation])

	return (
		<VStack flex={1} justifyContent="space-evenly">
			<Center>
				<AppTitle />
				<Image
					source={MoneyBag}
					defaultSource={MoneyBag}
					alt="Pacote de dinheiro"
					marginTop={16}
					marginBottom={16}
				/>
				<TitleText
					text="Seu app de organização financeira"
					customStyles={{ textAlign: 'center' }}
				/>
			</Center>
		</VStack>
	)
}
