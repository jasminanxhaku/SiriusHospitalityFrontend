import StatusBadge from "./status-badge";

type Props = {
    approval: {
        id: string;
        title: string;
        description: string;
        status: string;
    };
    onApprove: () => void;
    onReject: () => void;
};

export default function ApprovalCard({
                                         approval,
                                         onApprove,
                                         onReject,
                                     }: Props) {
    return (
        <div className="card">
            <h3 style={{ marginTop: 0 }}>{approval.title}</h3>
            <p>{approval.description}</p>
            <StatusBadge status={approval.status} />

            {approval.status === "PENDING" && (
                <div style={{ display: "flex", gap: 8, marginTop: 12 }}>
                    <button onClick={onApprove}>Approve</button>
                    <button onClick={onReject}>Reject</button>
                </div>
            )}
        </div>
    );
}