import Header from "../../Components/Header";
import List from "../../Components/List";

import { DashboardContainer } from "./styles";

export default function Dashboard() {
  return (
    <DashboardContainer>
      <Header />
      <List />
    </DashboardContainer>
  );
}
