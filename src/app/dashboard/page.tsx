import KpiCard from "@/components/kpi-card";

export default function DashboardPage() {
    return (
        <div className="page">
            <h1 className="page-title">Dashboard</h1>

            <div className="grid">
                <KpiCard label="Occupancy" value="78%" trend="+4%" />
                <KpiCard label="ADR" value="€182" trend="+6%" />
                <KpiCard label="RevPAR" value="€142" trend="+3%" />
                <KpiCard label="Open tasks" value="12" />
            </div>
        </div>
    );
}