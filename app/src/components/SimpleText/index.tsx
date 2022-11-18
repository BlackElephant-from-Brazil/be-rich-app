import React from 'react'
import { Text, TextStyle } from 'react-native'
import { styles } from './styles'

type Props = {
	children: React.ReactNode
	customStyles?: TextStyle
}

export function SimpleText({ children, customStyles }: Props) {
	return <Text style={[styles.title, customStyles]}>{children}</Text>
}
