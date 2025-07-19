import { BACKGROUNDIMAGE, HEROLOGO } from '@/constants';
import { styles } from '@/styles/_mainstyle';
import { ImageBackground, Text, TouchableOpacity, View } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <ImageBackground source={BACKGROUNDIMAGE} style={styles.backgroundImageContainer}>
        <View style={styles.logoContainer}>
          <Image source={HEROLOGO} style={{ width: 100, height: 100 }} />
        </View>
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>Welcome to ProDev</Text>
          <View style={styles.titleSubTextContainer}>
            <Text style={styles.titleSubText}>Find your dream property</Text>
          </View>
        </View>
        <View style={styles.buttonGroup}>
          <TouchableOpacity style={styles.buttonPrimary}>
            <Text style={styles.buttonPrimaryText}>Join Now</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonSecondary}>
            <Text style={styles.buttonSecondaryText}>Sign In</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}