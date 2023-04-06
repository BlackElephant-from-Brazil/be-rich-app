import { SimpleText } from '@components/SimpleText'
import { Center, VStack } from 'native-base'

export function Home() {
	return (
		<Center flex={1}>
			<VStack>
				<SimpleText text="Olá, mundo" />
			</VStack>
		</Center>
	)
}
