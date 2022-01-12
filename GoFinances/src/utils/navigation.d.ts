import { GoFinancesRoutesList } from "./routes";

declare global {
  namespace ReactNavigation {
    interface RootParamList extends GoFinancesRoutesList { }
  }
}