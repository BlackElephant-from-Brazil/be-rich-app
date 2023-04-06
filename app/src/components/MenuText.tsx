import { Text, useTheme } from 'native-base'
import React from 'react'

type MenuTextProps = {
	text: string
	color: string
}

export function MenuText({ text, color }: MenuTextProps) {
	const { fontSizes } = useTheme()
	return (
		<Text textAlign="center" color={color} fontSize={fontSizes.xs} width={64}>
			{text}
		</Text>
	)
}
