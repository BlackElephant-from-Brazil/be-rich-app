import {
	Text,
	TouchableOpacity,
	ViewStyle,
	TextStyle,
	View,
	Image,
	ImageSourcePropType,
	TouchableOpacityProps,
} from 'react-native'
import { styles } from './styles'

type Props = {
	text: string
	customButtonStyles?: ViewStyle
	customTextStyles?: TextStyle
	imageUrl?: ImageSourcePropType
	props: TouchableOpacityProps
}

export function Button({
	text,
	customButtonStyles,
	customTextStyles,
	imageUrl,
	props,
}: Props) {
	const renderImage = () => {
		if (imageUrl) {
			// eslint-disable-next-line jsx-a11y/alt-text
			return <Image source={imageUrl} />
		}
	}

	return (
		<View style={styles.container}>
			<TouchableOpacity style={[styles.button, customButtonStyles]} {...props}>
				{renderImage()}
				<Text style={[styles.text, customTextStyles]}>{text}</Text>
			</TouchableOpacity>
		</View>
	)
}
