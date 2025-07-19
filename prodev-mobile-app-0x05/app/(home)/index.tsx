import PropertyListing from '@/components/PropertyListing ';
import { SAMPLE_DATA } from '@/constants/data';
import { ScrollView } from 'react-native';

export default function Home() {
    return (
        <ScrollView>
            <PropertyListing listings={SAMPLE_DATA} />
        </ScrollView>
    );
}