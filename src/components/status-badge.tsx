type Props = {
    status: string;
};

export default function StatusBadge({ status }: Props) {
    const normalized = status?.toLowerCase();

    const className =
        normalized === "confirmed" || normalized === "succeeded"
            ? "badge badge-green"
            : normalized === "pending" || normalized === "running"
                ? "badge badge-yellow"
                : normalized === "failed" || normalized === "rejected"
                    ? "badge badge-red"
                    : "badge badge-blue";

    return <span className={className}>{status}</span>;
}