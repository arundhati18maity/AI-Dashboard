type StatCardProps = {
    label: string;
    value: string;
    icon?: React.ReactNode;
    iconBg?: string;
    iconColor?: string;
}

export default function StatCard({ label, value, icon, iconBg, iconColor }: StatCardProps) {
    return (
        <div className="rounded-xl shadow p-4">
            <div className="flex items-center justify-between">
                <h5 className="text-lg font-bold text-black">{label}</h5>
                <div className={`flex items-center justify-center w-12 h-12 rounded-lg ${iconBg} ${iconColor}`}>
                    {icon}
                </div>
            </div>
            <p className="text-[16px] font-medium">{value}</p>
        </div>
    )
}
