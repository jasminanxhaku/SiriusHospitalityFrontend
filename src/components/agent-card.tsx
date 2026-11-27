type Props = {
    name: string;
    description: string;
    status: string;
    onRun?: () => void;
};

export default function AgentCard({ name, description, status, onRun }: Props) {
    return (
        <div className="card">
            <h3 style={{ marginTop: 0 }}>{name}</h3>
            <p>{description}</p>
            <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
                <span>{status}</span>
                {onRun && <button onClick={onRun}>Run</button>}
            </div>
        </div>
    );
}