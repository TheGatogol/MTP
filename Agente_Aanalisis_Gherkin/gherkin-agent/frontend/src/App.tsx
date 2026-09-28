import {Navigate, Route, Routes} from 'react-router-dom';

import {AppShell} from './components/AppShell';
import {AnalyzerPage} from './pages/AnalyzerPage';
import {ComingSoonPage} from './pages/ComingSoonPage';
import {DashboardPage} from './pages/DashboardPage';
import {GuidePage} from './pages/GuidePage';
import {HistoryPage} from './pages/HistoryPage';
import {MetricsPage} from './pages/MetricsPage';
import {SettingsPage} from './pages/SettingsPage';

export default function App() {
    return (
        <Routes>
            <Route element={<AppShell />}>
                <Route index element={<DashboardPage />} />
                <Route path="analizar" element={<AnalyzerPage />} />
                <Route path="analisis/:id" element={<AnalyzerPage />} />
                <Route path="metricas" element={<MetricsPage />} />
                <Route path="historial" element={<HistoryPage />} />
                <Route path="generacion" element={<ComingSoonPage title="Generación automática" />} />
                <Route path="guia" element={<GuidePage />} />
                <Route path="configuracion" element={<SettingsPage />} />
                <Route path="*" element={<Navigate to="/" replace />} />
            </Route>
        </Routes>
    );
}
