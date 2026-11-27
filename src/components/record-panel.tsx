type Props = {
    title: string;
    children: React.ReactNode;
};

export default function RecordPanel({ title, children }: Props) {
    return (
        <div className="card">
            <h3 style={{ marginTop: 0 }}>{title}</h3>
            {children}
        </div>
    );
}