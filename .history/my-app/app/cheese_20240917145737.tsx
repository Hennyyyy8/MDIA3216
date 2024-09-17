import { Text, View } from 'react-native';
import { Link } from 'expo-router';

export default function Page() {
  return (
  <Text>This is my fromaaage page</Text>;
  <View>
  <Link href="/home"> home</Link>
  <Link href="/sandwich"> sandwich</Link>
  <Link href="/cheese"> cheese</Link>
</View>
 }