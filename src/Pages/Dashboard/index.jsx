import CardsFront from "../../Components/Cards";
import Header from "../../Components/Header";

import { DashboardContainer } from "./styles";

export default function Dashboard() {
  return (
    <DashboardContainer>
      <Header />
      <CardsFront />
    </DashboardContainer>
  );
}
