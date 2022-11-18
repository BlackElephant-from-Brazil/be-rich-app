import { View, Image } from 'react-native'
import { AppTitle } from '@components/AppTitle'
import { TitleText } from '@components/TitleText'
import { styles } from './styles'
import { useEffect, useState } from 'react'

// TODO: TO CHANGE ANY TYPE TO CORRECTLY PROP TYPE
export function Splash(props: any) {
	const [loginScreenLoaded, setLoginScreenLoaded] = useState(false)

	useEffect(() => {
		setTimeout(() => {
			setLoginScreenLoaded(true)
		}, 3000)
	}, [])

	useEffect(() => {
		if (loginScreenLoaded) {
			props.navigation.replace('login')
		}
	}, [loginScreenLoaded, props.navigation, props])

	return (
		<View style={styles.container}>
			<AppTitle />
			{/* eslint-disable-next-line jsx-a11y/alt-text */}
			<Image source={require('@assets/money-bag.png')} style={styles.image} />
			<TitleText
				text="Seu app de organização financeira"
				customStyles={styles.titleText}
			/>
		</View>
	)
}
