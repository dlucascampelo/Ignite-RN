
declare namespace ReactNavigation {
  export interface RootParamList extends RootStackParamList {
    Splash: NavigationStackProp<string>;
    SignIn: NavigationStackProp<string>;
    SignUpFirstStep: NavigationStackProp<string>;
    SignUpSecondStep: NavigationStackProp<string>;


    Home: NavigationStackProp<string>;

    CarDetails: NavigationStackProp<string>;
    Scheduling: NavigationStackProp<string>;
    SchedulingDetails: NavigationStackProp<string>;
    MyCars: NavigationStackProp<string>;

    ActionCompleted: NavigationStackProp<any>;

  }
}