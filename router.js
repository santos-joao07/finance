import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "./screens/Login";
import Register from "./screens/Register";
import Home from "./screens/Home";
import AddGain from "./screens/AddGain";
import AddExpense from "./screens/AddExpense";
import EditGain from "./screens/EditGain";
import EditExpense from "./screens/EditExpense";
import ViewGain from "./screens/ViewGain";
import ViewExpense from "./screens/ViewExpense";
import { createDrawerNavigator } from "@react-navigation/drawer";
import CustomDrawer from "./components/CustomDrawer";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Login" drawerContent={CustomDrawer}>
        <Drawer.Screen
          options={{
            drawerItemStyle: { display: "none" },
            headerShown: false,
          }}
          name="Login"
          component={Login}
        />

        <Drawer.Screen name="Home" component={Home} />

        <Drawer.Screen
          options={{
            drawerItemStyle: { display: "none" },
            headerShown: false,
          }}
          name="Register"
          component={Register}
        />

        <Drawer.Screen
          options={{
            drawerItemStyle: { display: "none" },
            headerShown: false,
          }}
          name="AddGain"
          component={AddGain}
        />

        <Drawer.Screen
          options={{
            drawerItemStyle: { display: "none" },
            headerShown: false,
          }}
          name="EditGain"
          component={EditGain}
        />

        <Drawer.Screen
          options={{
            drawerItemStyle: { display: "none" },
            headerShown: false,
          }}
          name="AddExpense"
          component={AddExpense}
        />

        <Drawer.Screen
          options={{
            drawerItemStyle: { display: "none" },
            headerShown: false,
          }}
          name="EditExpense"
          component={EditExpense}
        />

        <Drawer.Screen
          options={{
            drawerItemStyle: { display: "none" },
            headerShown: false,
          }}
          name="ViewGain"
          component={ViewGain}
        />

        <Drawer.Screen
          options={{
            drawerItemStyle: { display: "none" },
            headerShown: false,
          }}
          name="ViewExpense"
          component={ViewExpense}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default Router;
