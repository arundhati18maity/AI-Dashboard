type MetricCardProps = {
    cardBg?: string;
    icon?: React.ReactNode;
    iconBg?: String;
    iconColor?: String;
    label: string;
    value: string;
    subValue: string;
}

export default function MetricCard({ cardBg, icon, iconBg, iconColor, label, value, subValue }: MetricCardProps) {
    return (
        <div className={`shadow-none p-5 rounded-xl flex flex-col gap-3 items-center justify-center ${cardBg}`}>
            <div className={`flex w-12 h-12 rounded-full items-center justify-center ${iconBg} ${iconColor}`}>
                {icon}
            </div>
            <h5 className="text-lg font-semibold text-black">{label}</h5>
            <h3 className="text-4xl font-bold text-black">{value}</h3>
            <p className="text-black">{subValue}</p>
        </div>
    )
}
