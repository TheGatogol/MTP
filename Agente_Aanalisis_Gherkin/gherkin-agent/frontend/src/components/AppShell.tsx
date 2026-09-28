import {
    Bot, BookOpen, BookOpenCheck, ChevronDown, History, LayoutDashboard, ListChecks, PanelLeftClose, PanelLeftOpen,
    Settings, Sparkles, WandSparkles,
} from 'lucide-react';
import {useState, type ComponentType} from 'react';
import {NavLink, Outlet, useLocation} from 'react-router-dom';

import {useHealth} from '../lib/queries';
import {cn} from '../lib/utils';

type Icon = ComponentType<{className?: string}>;
interface Item {to: string; label: string; icon: Icon; match?: string[]}
interface Group {label: string; icon: Icon; items: Item[]}

const NAV: (Item | Group)[] = [
    {to: '/', label: 'Dashboard', icon: LayoutDashboard},
    {
        label: 'Analizar Métricas', icon: ListChecks, items: [
            {to: '/analizar', label: 'Analizar', icon: Sparkles, match: ['/analisis']},
            {to: '/metricas', label: 'Métricas', icon: BookOpenCheck},
            {to: '/historial', label: 'Historial', icon: History},
        ],
    },
    {to: '/generacion', label: 'Generación automática', icon: WandSparkles},
    {to: '/guia', label: 'Guía de desarrollo', icon: BookOpen},
    {to: '/configuracion', label: 'Configuración', icon: Settings},
];

const COLLAPSED_KEY = 'gherkin-agent:sidebar-collapsed';

function readCollapsed() {
    try {
        return localStorage.getItem(COLLAPSED_KEY) === '1';
    } catch {
        return false;
    }
}

export function AppShell() {
    const [collapsed, setCollapsed] = useState(readCollapsed);
    const [groupOpen, setGroupOpen] = useState(true);
    const {pathname} = useLocation();
    const health = useHealth();
    const h = health.data;

    const toggle = () => {
        setCollapsed((c) => {
            try {
                localStorage.setItem(COLLAPSED_KEY, c ? '0' : '1');
            } catch { /* sin almacenamiento */ }
            return !c;
        });
    };

    const isActive = (item: Item) =>
        item.to === '/' ? pathname === '/' : pathname.startsWith(item.to) || !!item.match?.some((m) => pathname.startsWith(m));

    const link = (item: Item, nested = false) => (
        <NavLink key={item.to} to={item.to} title={collapsed ? item.label : undefined}
            className={cn('flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition',
                nested && !collapsed && 'pl-9',
                isActive(item) ? 'bg-mtp-accent font-medium text-white shadow-[inset_3px_0_0_var(--color-brand-500)]'
                    : 'text-mtp-muted hover:bg-brand-50 hover:text-white')}>
            <item.icon className="size-4 shrink-0" />
            {!collapsed && <span className="truncate">{item.label}</span>}
        </NavLink>
    );

    return (
        <div className="flex h-full flex-col">
            <header className="flex h-16 shrink-0 items-center gap-3 border-b border-slate-800 bg-mtp-darkest px-4">
                <img src="/mtp-logo.png" alt="MTP Gherkin Agent" className="h-9 w-auto" />
                <span className="h-7 w-px bg-slate-700" />
                <span className="text-lg font-semibold text-white">MTP Gherkin Agent</span>
            </header>

            <div className="flex min-h-0 flex-1">
                <aside className={cn('flex shrink-0 flex-col border-r border-slate-800 bg-mtp-deep transition-[width] duration-200',
                    collapsed ? 'w-16' : 'w-64')}>
                    <nav className="flex-1 space-y-1 overflow-y-auto p-2">
                        {NAV.map((entry) => 'items' in entry ? (
                            <div key={entry.label}>
                                {collapsed ? (
                                    <div className="my-1 border-t border-slate-800" />
                                ) : (
                                    <button onClick={() => setGroupOpen(!groupOpen)}
                                        className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm text-mtp-muted transition hover:bg-brand-50 hover:text-white">
                                        <entry.icon className="size-4 shrink-0" />
                                        <span className="flex-1 truncate text-left">{entry.label}</span>
                                        <ChevronDown className={cn('size-4 transition', !groupOpen && '-rotate-90')} />
                                    </button>
                                )}
                                {(groupOpen || collapsed) && <div className="mt-1 space-y-1">{entry.items.map((i) => link(i, true))}</div>}
                                {collapsed && <div className="my-1 border-t border-slate-800" />}
                            </div>
                        ) : link(entry))}
                    </nav>

                    {h && (
                        <div className={cn('border-t border-slate-800 p-3 text-xs', collapsed && 'flex justify-center')}
                            title={h.ai.error ?? `${h.index.features} features · ${h.rules} reglas`}>
                            <span className={cn('flex items-center gap-1.5',
                                h.ai.enabled && h.ai.available ? 'text-emerald-300' : 'text-mtp-muted')}>
                                <Bot className="size-4 shrink-0" />
                                {!collapsed && (h.ai.enabled ? (h.ai.available ? h.ai.model : 'IA no disponible') : 'IA desactivada')}
                            </span>
                        </div>
                    )}
                    {health.isError && !collapsed && <p className="px-3 pb-2 text-xs text-rose-300">Backend sin conexión</p>}

                    <button onClick={toggle} title={collapsed ? 'Desplegar menú' : 'Replegar menú'}
                        className="flex items-center gap-2 border-t border-slate-800 px-5 py-3 text-xs text-mtp-muted transition hover:bg-brand-50 hover:text-white">
                        {collapsed ? <PanelLeftOpen className="size-4" /> : <><PanelLeftClose className="size-4" />Replegar</>}
                    </button>
                </aside>

                <main className="min-w-0 flex-1 overflow-y-auto bg-mtp-navy"><Outlet /></main>
            </div>
        </div>
    );
}
