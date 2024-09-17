import { View } from 'react-native';
import { Link } from 'expo-router';

export default function Page() {
  return (
    <View>
      {/* ...other links */}
      <Link href="/home">View user</Link>
    </View>
  );
}
