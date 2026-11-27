"use client";

import ApprovalCard from "@/components/approval-card";
import { useApprovals } from "@/hooks/useApprovals";

export default function ApprovalsPage() {
    const { approvals, loading, error, approve, reject } = useApprovals();

    return (
        <div className="page">
            <h1 className="page-title">Approvals</h1>

            {error && <div className="card">{error}</div>}

            <div className="grid">
                {approvals.map((approval) => (
                    <ApprovalCard
                        key={approval.id}
                        approval={approval}
                        onApprove={() => approve(approval.id)}
                        onReject={() => reject(approval.id)}
                    />
                ))}
            </div>

            {!loading && !approvals.length && !error && (
                <div className="card">No pending approvals.</div>
            )}
        </div>
    );
}