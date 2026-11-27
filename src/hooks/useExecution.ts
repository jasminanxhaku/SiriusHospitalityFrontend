"use client";

import { useEffect, useState } from "react";
import { createEventSource } from "@/lib/sse";

export type ExecutionEvent = {
    id: string;
    agent: string;
    status: "RUNNING" | "SUCCEEDED" | "FAILED" | "WAITING_APPROVAL";
    message: string;
    timestamp: string;
};

export function useExecution(executionId?: string) {
    const [events, setEvents] = useState<ExecutionEvent[]>([]);
    const [connected, setConnected] = useState(false);

    useEffect(() => {
        if (!executionId) return;

        const source = createEventSource(
            `/api/executions/${executionId}/events`
        );

        source.onopen = () => setConnected(true);

        source.onmessage = (event) => {
            const parsed = JSON.parse(event.data) as ExecutionEvent;
            setEvents((current) => [...current, parsed]);
        };

        source.onerror = () => setConnected(false);

        return () => source.close();
    }, [executionId]);

    return { events, connected };
}