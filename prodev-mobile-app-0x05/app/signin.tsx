import { FACEBOOKLOGO, GOOGLELOGO, HEROLOGOGREEN } from '@/constants/index';
import { styles } from '@/styles/_joinstyle';
import { Ionicons } from '@expo/vector-icons';
import { Link, router } from 'expo-router';
import React, { useState } from 'react';
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function SignIn() {
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.iconsection}>
                <TouchableOpacity onPress={() => router.back()}>
                    <Ionicons name="arrow-back" size={24} color="black" />
                </TouchableOpacity>
                <Image source={HEROLOGOGREEN} />
                <View />
            </View>

            <View style={styles.titleTextGroup}>
                <Text style={styles.titleText}>Sign in</Text>
                <Text style={styles.subText}>Welcome back! Please sign in to your account</Text>
            </View>

            <View style={styles.formGroup}>
                <View>
                    <Text style={styles.formLabel}>Email</Text>
                    <TextInput
                        style={styles.formControl}
                        placeholder="Enter your email"
                        value={formData.email}
                        onChangeText={(text) => setFormData(prev => ({ ...prev, email: text }))}
                        keyboardType="email-address"
                    />
                </View>

                <View>
                    <Text style={styles.formLabel}>Password</Text>
                    <View style={styles.formPasswordControl}>
                        <TextInput
                            style={styles.passwordControl}
                            placeholder="Enter your password"
                            value={formData.password}
                            onChangeText={(text) => setFormData(prev => ({ ...prev, password: text }))}
                            secureTextEntry={!showPassword}
                        />
                        <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                            <Ionicons name={showPassword ? "eye-off" : "eye"} size={20} color="#7B7B7B" />
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity>
                        <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
                    </TouchableOpacity>
                </View>

                <TouchableOpacity style={styles.primaryButton} onPress={() => router.push('/(home)')}>
                    <Text style={styles.buttonText}>Sign In</Text>
                </TouchableOpacity>

                <View style={styles.dividerGroup}>
                    <View style={styles.divider} />
                    <Text style={styles.dividerText}>or</Text>
                    <View style={styles.divider} />
                </View>

                <View style={styles.secondaryButtonGroup}>
                    <TouchableOpacity style={[styles.secondaryButton, { borderColor: '#E9E9E9' }]}>
                        <Image source={GOOGLELOGO} style={{ width: 24, height: 24 }} />
                        <Text style={styles.secondaryButtonText}>Continue with Google</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={[styles.secondaryButton, { borderColor: '#E9E9E9' }]}>
                        <Image source={FACEBOOKLOGO} style={{ width: 24, height: 24 }} />
                        <Text style={styles.secondaryButtonText}>Continue with Facebook</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.signupgroup}>
                <Text style={styles.signupTitleText}>Don't have an account? </Text>
                <Link href="/join">
                    <Text style={styles.signupSubTitleText}>Join now</Text>
                </Link>
            </View>
        </SafeAreaView>
    );
}