"use client";

import { useBusinessProfile } from "@/hooks/useBusinessProfile";

export default function SettingsPage() {
    const { profile, loading } = useBusinessProfile();

    return (
        <div className="page">
            <h1 className="page-title">Settings</h1>

            <div className="card">
                {loading ? (
                    "Loading…"
                ) : (
                    <>
                        <div>Business: {profile?.name ?? "—"}</div>
                        <div>Timezone: {profile?.timezone ?? "—"}</div>
                        <div>Currency: {profile?.currency ?? "—"}</div>
                    </>
                )}
            </div>
        </div>
    );
}