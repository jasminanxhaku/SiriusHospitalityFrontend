"use client";

import { useBusinessProfile } from "@/hooks/useBusinessProfile";

export default function DemoBanner() {
    const { profile } = useBusinessProfile();

    if (!profile?.demoMode) {
        return null;
    }

    return (
        <div className="demo-banner">
            Demo mode is enabled. Data and agent actions are for demonstration only.
        </div>
    );
}