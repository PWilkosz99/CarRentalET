import {
    StyleSheet, Text, View, TouchableOpacity, Image,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import renderer from 'react-test-renderer';


describe('CarDetailsScreen', () => {
    const car = {
        model: {
            manufacturer: "test"
        }
    }

    const fd = "2022-12-12";
    const ud = "2022-12-20";
    const fd2 = "1999-12-12";
    const ud2 = "1999-12-20";
    const fd3 = "2050-12-12";
    const ud3 = "2050-12-20";


    it('has 1 child with args', () => {
        const tree = renderer.create(<CarDetailsScreenTester car={car} startDate={fd} endDate={ud} />).toJSON();
        expect(tree.children.length).toBe(1);
    });

    it('renders correctly wikth args', () => {
        const tree = renderer.create(<CarDetailsScreenTester car={car} startDate={fd} endDate={ud} />).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('has 1 child with args2', () => {
        const tree = renderer.create(<CarDetailsScreenTester car={car} startDate={fd2} endDate={ud2} />).toJSON();
        expect(tree.children.length).toBe(1);
    });

    it('renders correctly wikth args2', () => {
        const tree = renderer.create(<CarDetailsScreenTester car={car} startDate={fd2} endDate={ud2} />).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('has 1 child with args3', () => {
        const tree = renderer.create(<CarDetailsScreenTester car={car} startDate={fd3} endDate={ud3} />).toJSON();
        expect(tree.children.length).toBe(1);
    });

    it('renders correctly wikth args3', () => {
        const tree = renderer.create(<CarDetailsScreenTester car={car} startDate={fd3} endDate={ud3} />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});





//temrporary solution
function CarDetailsScreenTester(props) {

    const { car, startDate, endDate } = props;


    const fd = new Date();
    fd.setFullYear(startDate.substring(0, 4));
    fd.setMonth(startDate.substring(5, 7) - 1);
    fd.setDate(startDate.substring(8, 10));

    const ud = new Date();
    ud.setFullYear(endDate.substring(0, 4));
    ud.setMonth(endDate.substring(5, 7) - 1);
    ud.setDate(endDate.substring(8, 10));

    const duration = (ud.getDate() - fd.getDate());

    var cost = car.costPerDay * duration;

    const handleClick = () => {
        console.log('click');
    };
    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <Text style={styles.title}>
                    {car.model.manufacturer}
                    {' '}
                    {car.model.model}
                </Text>
                <Image style={styles.image} source={{ uri: `https://objectstorage.eu-frankfurt-1.oraclecloud.com/p/m5ndEg9KfkvjeJs149ntmrL205mZTMOctjPNO2pQqqaVPlz52NRgDNJT6QUDCLpb/n/fre7obdqx6ap/b/car-rental-bucket/o/${car.model.id}.jpg` }} />
                <View style={styles.textContainer}>
                    <View style={styles.row}>
                        <MaterialCommunityIcons name="calendar-start" style={styles.icon} />
                        <Text style={styles.text}>
                            Start date:
                            <Text style={styles.value}>{fd.toLocaleDateString()}</Text>
                        </Text>
                    </View>
                    <View style={styles.row}>
                        <MaterialCommunityIcons name="calendar-end" style={styles.icon} />
                        <Text style={styles.text}>
                            End date:
                            <Text style={styles.value}>{ud.toLocaleDateString()}</Text>
                        </Text>
                    </View>
                    <View style={styles.row}>
                        <MaterialCommunityIcons name="calendar-arrow-right" style={styles.icon} />
                        <Text style={styles.text}>
                            Duration:
                            <Text style={styles.value}>{duration}</Text>
                            {' '}
                            days
                        </Text>
                    </View>
                    <View style={styles.row}>
                        <MaterialCommunityIcons name="cash" style={styles.icon} />
                        <Text style={styles.text}>
                            Cost per day:
                            <Text style={styles.value}>
                                {car.costPerDay}
                                $
                            </Text>
                            /day
                        </Text>
                    </View>
                    <View style={styles.row}>
                        <MaterialCommunityIcons name="cash-multiple" style={styles.icon} />
                        <Text style={styles.text}>
                            Summary cost:
                            <Text style={styles.value}>
                                {cost}
                                $
                            </Text>
                        </Text>
                    </View>
                </View>
                <TouchableOpacity onPress={handleClick} style={styles.button}>
                    <Text style={styles.buttonText}>Confirm</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({});