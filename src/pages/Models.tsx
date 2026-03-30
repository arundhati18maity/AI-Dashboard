import MetricCard from "../components/ui/MetricCard";
import ShowChartOutlinedIcon from '@mui/icons-material/ShowChartOutlined';
import SignalCellularAltOutlinedIcon from '@mui/icons-material/SignalCellularAltOutlined';
import ReportProblemOutlinedIcon from '@mui/icons-material/ReportProblemOutlined';
import HandshakeOutlinedIcon from '@mui/icons-material/HandshakeOutlined';
import { LineChart, PieChart } from "@mui/x-charts";

export default function Models() {
    return (
        <>
            <div className="grid grid-cols-4 gap-6 mb-10">
                <MetricCard cardBg="bg-blue-100" icon={<ShowChartOutlinedIcon />} iconBg="bg-blue-300" iconColor="text-blue-600" label="Average Latency" value="98ms" subValue="Response time" />
                <MetricCard cardBg="bg-green-200" icon={<SignalCellularAltOutlinedIcon />} iconBg="bg-green-100" iconColor="text-green-600" label="Accuracy Score" value="96.8%" subValue="Benchmark tests" />
                <MetricCard cardBg="bg-red-100" icon={<ReportProblemOutlinedIcon />} iconBg="bg-red-300" iconColor="text-red-600" label="Error Rate" value="0.5%" subValue="API failures" />
                <MetricCard cardBg="bg-purple-100" icon={<HandshakeOutlinedIcon />} iconBg="bg-purple-300" iconColor="text-purple-600" label="Throughput" value="1.8K req/s" subValue="Requests handled" />
            </div>
            <div className="grid grid-cols-2 gap-6 mb-10">
                <div className="shadow-xl p-5 rounded-lg">
                    <h4 className="text-xl font-semibold text-black mb-3">Recent Experiments</h4>
                    <LineChart
                        xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
                        series={[
                            {
                                data: [2, -5.5, 2, -7.5, 1.5, 6],
                                area: true,
                                baseline: 'min',
                            },
                        ]}
                        height={300}
                    />
                </div>
                <div className="shadow-xl p-5 rounded-lg">
                    <PieChart
                        series={[
                            {
                                data: [
                                    { id: 0, value: 10, label: 'series A' },
                                    { id: 1, value: 15, label: 'series B' },
                                    { id: 2, value: 20, label: 'series C' },
                                ],
                            },
                        ]}
                        width={300}
                        height={300}
                    />
                </div>
            </div>
        </>
    )
}
