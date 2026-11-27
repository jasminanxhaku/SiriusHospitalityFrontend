"use client";

import { useEffect, useState } from "react";
import DataTable from "@/components/data-table";
import StatusBadge from "@/components/status-badge";
import { apiGet } from "@/lib/api";

type Booking = {
    id: string;
    guestName: string;
    propertyName: string;
    checkInDate: string;
    checkOutDate: string;
    status: string;
    totalAmount: number;
};

export default function BookingsPage() {
    const [bookings, setBookings] = useState<Booking[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        apiGet<Booking[]>("/api/bookings")
            .then(setBookings)
            .catch(() => setBookings([]))
            .finally(() => setLoading(false));
    }, []);

    return (
        <div className="page">
            <h1 className="page-title">Bookings</h1>

            <DataTable
                loading={loading}
                rows={bookings}
                columns={[
                    { key: "guestName", label: "Guest" },
                    { key: "propertyName", label: "Property" },
                    { key: "checkInDate", label: "Check-in" },
                    { key: "checkOutDate", label: "Check-out" },
                    {
                        key: "status",
                        label: "Status",
                        render: (row) => <StatusBadge status={row.status} />,
                    },
                    {
                        key: "totalAmount",
                        label: "Total",
                        render: (row) => `€${row.totalAmount}`,
                    },
                ]}
            />
        </div>
    );
}