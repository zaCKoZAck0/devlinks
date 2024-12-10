import { DashboardContainer } from "~/components/dashboard/dashboard-container";
import { EditForm } from "~/components/dashboard/edit-form";
import { Navbar } from "~/components/dashboard/nav";
import { Preview } from "~/components/dashboard/preview";

export default function Dashboard() {
  return (
    <>
      <Navbar />
      <DashboardContainer>
        <Preview />
        <EditForm />
      </DashboardContainer>
    </>
  );
}
