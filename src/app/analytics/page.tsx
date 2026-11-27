import KpiCard from "@/components/kpi-card";

export default function AnalyticsPage() {
    return (
        <div className="page">
            <h1 className="page-title">Analytics</h1>

            <div className="grid">
                <KpiCard label="Revenue" value="€48,200" trend="+12%" />
                <KpiCard label="Occupancy" value="81%" trend="+2%" />
                <KpiCard label="Cancellation rate" value="6.4%" />
            </div>
        </div>
    );
}