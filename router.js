import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "./screens/Login";
import Register from "./screens/Register";
import Home from "./screens/Home";
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
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default Router;
