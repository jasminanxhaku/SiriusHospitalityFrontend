"use client";

import { useState } from "react";
import ExecutionTimeline from "@/components/execution-timeline";
import { useExecution } from "@/hooks/useExecution";

export default function CommandCenterPage() {
    const [executionId, setExecutionId] = useState<string>();
    const { events } = useExecution(executionId);

    return (
        <div className="page">
            <h1 className="page-title">Command Center</h1>

            <div className="grid">
                <div className="card">
                    <h3>Start agent execution</h3>
                    <button onClick={() => setExecutionId("demo-execution")}>
                        Start demo execution
                    </button>
                </div>

                <ExecutionTimeline events={events} />
            </div>
        </div>
    );
}