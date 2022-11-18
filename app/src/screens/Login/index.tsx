import { AppTitle } from '@components/AppTitle'
import { Button } from '@components/Button'
import { SimpleText } from '@components/SimpleText'
import { View, Image, Text, Alert } from 'react-native'
import { styles } from './styles'

export function Login() {
	const handleTermsPressed = () => {
		Alert.alert('Termos de uso!')
	}

	const handleLogginWithGoogle = () => {
		Alert.alert('Loggin com o Google!')
	}

	const handleLogginWithApple = () => {
		Alert.alert('Loggin com a Apple!')
	}

	return (
		<View style={styles.container}>
			<AppTitle />

			{/* eslint-disable-next-line jsx-a11y/alt-text */}
			<Image
				source={require('@assets/holding-money.png')}
				style={styles.image}
			/>
			<Button
				text="Login com Google"
				imageUrl={require('@assets/google-logo.png')}
				props={{
					onPress: handleLogginWithGoogle,
				}}
			/>
			<Button
				text="Login com Apple"
				imageUrl={require('@assets/apple-logo.png')}
				props={{
					onPress: handleLogginWithApple,
				}}
			/>
			<SimpleText>
				Ao fazer login você concorda com os{' '}
				<Text style={styles.underscore} onPress={handleTermsPressed}>
					Termos
				</Text>
				.
			</SimpleText>
		</View>
	)
}
