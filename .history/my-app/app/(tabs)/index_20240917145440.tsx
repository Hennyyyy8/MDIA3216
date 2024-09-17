import { View } from 'react-native';
import { Link } from 'expo-router';

export default function Page() {
  return (
    <View>
      <Link href="/home"> home</Link>
      <Link href="/sandwich"> sandwich</Link>
    </View>
  )
}