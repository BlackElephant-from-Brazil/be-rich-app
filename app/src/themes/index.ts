import { extendTheme } from 'native-base'

export const BLACK_THEME = extendTheme({
	colors: {
		green: {
			700: '#228D57',
		},
		red: {
			700: '#C84B31',
		},
		gray: {
			700: '#191A19',
			500: '#646964',
		},
		fonts: {
			heading: 'FugazOne',
			body: 'Comfortaa',
			mono: 'Trispace',
		},
		fontConfig: {
			Comfortaa: {
				500: {
					normal: 'Comfortaa',
				},
			},
			Trispace: {
				400: {
					normal: 'Trispace_400Regular',
				},
			},
			FugazOne: {
				400: {
					normal: 'FugazOne_400Regular',
				},
			},
		},
		fontSizes: {
			xs: 8,
			sm: 12,
			md: 16,
			lg: 32,
			xl: 64,
		},
		sizes: {},
	},
})
