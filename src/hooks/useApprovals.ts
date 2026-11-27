"use client";

import { useEffect, useState } from "react";
import { apiGet, apiPost } from "@/lib/api";

export type Approval = {
    id: string;
    title: string;
    description: string;
    status: "PENDING" | "APPROVED" | "REJECTED";
    createdAt: string;
};

export function useApprovals() {
    const [approvals, setApprovals] = useState<Approval[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    async function load() {
        try {
            const data = await apiGet<Approval[]>("/api/approvals");
            setApprovals(data);
        } catch {
            setError("Unable to load approvals");
        } finally {
            setLoading(false);
        }
    }

    async function approve(id: string) {
        await apiPost(`/api/approvals/${id}/approve`, {});
        await load();
    }

    async function reject(id: string) {
        await apiPost(`/api/approvals/${id}/reject`, {});
        await load();
    }

    useEffect(() => {
        load();
    }, []);

    return { approvals, loading, error, approve, reject };
}