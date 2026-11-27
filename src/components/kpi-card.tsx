type Props = {
    label: string;
    value: string | number;
    trend?: string;
};

export default function KpiCard({ label, value, trend }: Props) {
    return (
        <div className="card">
            <div style={{ fontSize: 13, color: "#6b7280" }}>{label}</div>
            <div style={{ fontSize: 28, fontWeight: 700 }}>{value}</div>
            {trend && <div style={{ fontSize: 13, color: "#16a34a" }}>{trend}</div>}
        </div>
    );
}