import { Text, TextStyle } from 'react-native'
import { styles } from './styles'

type Props = {
	customStyles?: TextStyle
}

export function AppTitle({ customStyles }: Props) {
	return <Text style={[styles.title, customStyles]}>beRich</Text>
}
