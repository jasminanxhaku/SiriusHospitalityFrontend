"use client";

import { useEffect, useState } from "react";
import { apiGet } from "@/lib/api";

export type BusinessProfile = {
    id: string;
    name: string;
    timezone: string;
    currency: string;
    demoMode: boolean;
};

export function useBusinessProfile() {
    const [profile, setProfile] = useState<BusinessProfile | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        apiGet<BusinessProfile>("/api/business-profile")
            .then(setProfile)
            .catch(() => setProfile(null))
            .finally(() => setLoading(false));
    }, []);

    return { profile, loading };
}