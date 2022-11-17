import { AppTitle } from '@components/AppTitle'
import { View, Image } from 'react-native'
import { styles } from './styles'

export function Login() {
	return (
		<View style={styles.container}>
			<AppTitle />

			{/* eslint-disable-next-line jsx-a11y/alt-text */}
			<Image
				source={require('../../assets/holding-money.png')}
				style={styles.image}
			/>
		</View>
	)
}
