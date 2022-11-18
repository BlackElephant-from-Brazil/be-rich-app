import { Text, TextStyle } from 'react-native'
import { styles } from './styles'

type Props = {
	text: string
	customStyles?: TextStyle
}

export function TitleText({ text, customStyles }: Props) {
	return <Text style={[styles.text, customStyles]}>{text}</Text>
}
