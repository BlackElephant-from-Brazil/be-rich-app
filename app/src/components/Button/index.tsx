import { Text, TouchableOpacity, ViewStyle, TextStyle } from 'react-native'
import { styles } from './styles'

type Props = {
	text: string
	customButtonStyles?: ViewStyle
	customTextStyles?: TextStyle
}

export function TitleText({
	text,
	customButtonStyles,
	customTextStyles,
}: Props) {
	return (
		<TouchableOpacity style={[styles.button, customButtonStyles]}>
			<Text style={[styles.button, customTextStyles]}>{text}</Text>
		</TouchableOpacity>
	)
}
