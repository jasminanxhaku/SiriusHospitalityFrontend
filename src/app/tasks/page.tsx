"use client";

import { useEffect, useState } from "react";
import DataTable from "@/components/data-table";
import StatusBadge from "@/components/status-badge";
import { apiGet } from "@/lib/api";

type Task = {
    id: string;
    title: string;
    assignee: string;
    dueDate: string;
    status: string;
};

export default function TasksPage() {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        apiGet<Task[]>("/api/tasks")
            .then(setTasks)
            .catch(() => setTasks([]))
            .finally(() => setLoading(false));
    }, []);

    return (
        <div className="page">
            <h1 className="page-title">Tasks</h1>

            <DataTable
                loading={loading}
                rows={tasks}
                columns={[
                    { key: "title", label: "Task" },
                    { key: "assignee", label: "Assignee" },
                    { key: "dueDate", label: "Due" },
                    {
                        key: "status",
                        label: "Status",
                        render: (row) => <StatusBadge status={row.status} />,
                    },
                ]}
            />
        </div>
    );
}