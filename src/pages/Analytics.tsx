import { BarChart } from '@mui/x-charts/BarChart';

export default function Analytics() {
    return (
        <>
            <h3 className='text-2xl font-semibold text-black mb-3'>Analytics</h3>
            <p className='text-lg text-black mb-5'>Detailed analytics and performance metrics for your AI models.</p>
            <div className='shadow-xl p-5 rounded-lg'>
                <BarChart
                    xAxis={[{ data: ['GPT-4', 'Claude', 'Llama'] }]}
                    series={[{ data: [4, 3, 5] }, { data: [1, 6, 3] }, { data: [2, 5, 6] }]}
                    height={300}
                />
            </div>
        </>
    )
}
