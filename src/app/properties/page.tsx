"use client";

import { useEffect, useState } from "react";
import DataTable from "@/components/data-table";
import { apiGet } from "@/lib/api";

type Property = {
    id: string;
    name: string;
    city: string;
    country: string;
    status: string;
};

export default function PropertiesPage() {
    const [properties, setProperties] = useState<Property[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        apiGet<Property[]>("/api/properties")
            .then(setProperties)
            .catch(() => setProperties([]))
            .finally(() => setLoading(false));
    }, []);

    return (
        <div className="page">
            <h1 className="page-title">Properties</h1>

            <DataTable
                loading={loading}
                rows={properties}
                columns={[
                    { key: "name", label: "Property" },
                    { key: "city", label: "City" },
                    { key: "country", label: "Country" },
                    { key: "status", label: "Status" },
                ]}
            />
        </div>
    );
}