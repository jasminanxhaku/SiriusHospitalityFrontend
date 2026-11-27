"use client";

import { useEffect, useState } from "react";
import DataTable from "@/components/data-table";
import { apiGet } from "@/lib/api";

type Customer = {
    id: string;
    fullName: string;
    email: string;
    phone: string;
    nationality: string;
};

export default function CustomersPage() {
    const [customers, setCustomers] = useState<Customer[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        apiGet<Customer[]>("/api/customers")
            .then(setCustomers)
            .catch(() => setCustomers([]))
            .finally(() => setLoading(false));
    }, []);

    return (
        <div className="page">
            <h1 className="page-title">Customers</h1>

            <DataTable
                loading={loading}
                rows={customers}
                columns={[
                    { key: "fullName", label: "Name" },
                    { key: "email", label: "Email" },
                    { key: "phone", label: "Phone" },
                    { key: "nationality", label: "Nationality" },
                ]}
            />
        </div>
    );
}