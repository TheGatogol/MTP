import { Route, Routes } from "react-router-dom";
import { AppShell } from "./components/layout/AppShell";
import { EmptyState } from "./components/ui";
import { ActivitiesPage } from "./pages/ActivitiesPage";
import { ActivityDetailPage } from "./pages/ActivityDetailPage";
import { AgentPage } from "./pages/AgentPage";
import { BlockersPage } from "./pages/BlockersPage";
import { DashboardPage } from "./pages/DashboardPage";
import { HistoryPage } from "./pages/HistoryPage";
import { InitiativeDetailPage, InitiativesPage } from "./pages/InitiativesPage";
import { PeoplePage, PersonDetailPage } from "./pages/PeoplePage";
import { ProjectDetailPage, ProjectsPage } from "./pages/ProjectsPage";
import { PullRequestDetailPage, PullRequestsPage } from "./pages/PullRequestsPage";
import { SettingsPage } from "./pages/SettingsPage";

export function App() {
  return (
    <Routes>
      <Route element={<AppShell />}>
        <Route index element={<DashboardPage />} />
        <Route path="activities" element={<ActivitiesPage />} />
        <Route path="activities/:id" element={<ActivityDetailPage />} />
        <Route path="prs" element={<PullRequestsPage />} />
        <Route path="prs/:id" element={<PullRequestDetailPage />} />
        <Route path="projects" element={<ProjectsPage />} />
        <Route path="projects/:id" element={<ProjectDetailPage />} />
        <Route path="people" element={<PeoplePage />} />
        <Route path="people/:id" element={<PersonDetailPage />} />
        <Route path="blockers" element={<BlockersPage />} />
        <Route path="initiatives" element={<InitiativesPage />} />
        <Route path="initiatives/:id" element={<InitiativeDetailPage />} />
        <Route path="history" element={<HistoryPage />} />
        <Route path="agent" element={<AgentPage />} />
        <Route path="settings" element={<SettingsPage />} />
        <Route path="*" element={<EmptyState title="Página no encontrada" description="La ruta no existe." />} />
      </Route>
    </Routes>
  );
}
