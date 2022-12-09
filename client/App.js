import { View } from "react-native";
import StatsPage from "./src/pages/StatsPage";
import BottomBar from "./src/components/BottomBar/BottomBar";
import RecentTransaction from "./src/components/RecentTransaction/RecentTransaction";
import { useFonts } from "expo-font";

export default function App() {
  return <BottomBar />;
}
