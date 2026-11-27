import { ExecutionEvent } from "@/hooks/useExecution";

type Props = {
    events: ExecutionEvent[];
};

export default function ExecutionTimeline({ events }: Props) {
    if (!events.length) {
        return <div className="card">No execution activity yet.</div>;
    }

    return (
        <div className="card">
            {events.map((event) => (
                <div key={event.id} style={{ marginBottom: 12 }}>
                    <strong>{event.agent}</strong> — {event.status}
                    <div>{event.message}</div>
                    <small>{new Date(event.timestamp).toLocaleString()}</small>
                </div>
            ))}
        </div>
    );
}