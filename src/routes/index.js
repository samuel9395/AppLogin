import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Signin from '../routes/pages/SignIn';
import Welcome from '../routes/pages/Welcome';

const Stack = createNativeStackNavigator();

export default function Routes(){
    return(
        <Stack.Navigator>
            <Stack.Screen
            name="Welcome"
            component={Welcome}
            options={{ headerShown: false }}
            />

        <Stack.Screen
            name="SignIn"
            component={Signin}
            options={{ headerShown: false }}
            />
        </Stack.Navigator>
    )
}