export function createEventSource(path: string) {
    const API_BASE_URL =
        process.env.NEXT_PUBLIC_API_BASE_URL ?? "http://localhost:8080";

    return new EventSource(`${API_BASE_URL}${path}`, {
        withCredentials: true,
    });
}