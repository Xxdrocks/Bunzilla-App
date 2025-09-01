
import seed from '@/lib/seed'
import { Button, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const Search = () => {
  return (
    <SafeAreaView>
      <Text>Search</Text>

      <Button title="Seed" onPress={() => seed().catch((error) => console.log('failed to see database', error))}/>
    </SafeAreaView>
  )
}

export default Search