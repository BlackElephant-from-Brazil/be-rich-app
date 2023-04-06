import { Text, useTheme } from 'native-base'
import React from 'react'

type SimpleTextProps = {
	text: string
}

export function SimpleText({ text }: SimpleTextProps) {
	const { fonts, colors, sizes } = useTheme()
	return (
		<Text
			fontFamily={fonts.body}
			fontWeight="500"
			color={colors.white}
			fontSize={sizes[6]}
			fontStyle="normal"
		>
			{text}
		</Text>
	)
}
