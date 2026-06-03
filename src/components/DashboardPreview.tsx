import { motion } from 'framer-motion';

export default function DashboardPreview() {
  const chartData = [65, 75, 72, 85, 90, 95, 88];
  const days = ['Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab', 'Min'];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay: 0.5, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="relative"
    >
      {/* Glow effect */}
      <div className="absolute -inset-4 md:-inset-6 bg-gradient-to-r from-blue-100/20 via-emerald-100/20 to-blue-100/20 rounded-3xl blur-2xl pointer-events-none" />

      {/* Main Dashboard Panel */}
      <div className="relative rounded-2xl border border-gray-200 bg-white/95 backdrop-blur-xl overflow-hidden shadow-xl shadow-black/5">
        {/* Dashboard Content */}
        <div className="p-6 md:p-8 space-y-6">
          {/* Chart Section */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-sm md:text-base font-semibold text-gray-900">
                Kehadiran Minggu Ini
              </h3>
              <span className="text-xs md:text-sm px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 font-semibold">
                +12%
              </span>
            </div>

            {/* Bar Chart */}
            <div className="flex items-end gap-2 md:gap-3 h-28 md:h-32">
              {chartData.map((height, i) => (
                <motion.div
                  key={i}
                  initial={{ height: 0 }}
                  animate={{ height: `${height}%` }}
                  transition={{ delay: 0.6 + i * 0.08, duration: 0.6, ease: 'easeOut' }}
                  className="flex-1 rounded-t-md bg-gradient-to-t from-blue-500 to-blue-400 hover:from-blue-600 hover:to-blue-500 transition-colors"
                />
              ))}
            </div>

            {/* Day Labels */}
            <div className="flex gap-2 md:gap-3 justify-between text-xs md:text-sm font-medium text-gray-600">
              {days.map((day) => (
                <div key={day} className="flex-1 text-center">
                  {day}
                </div>
              ))}
            </div>
          </div>


        </div>

        {/* Live Sync Badge */}
        <div className="px-6 md:px-8 py-4 border-t border-gray-100 bg-gray-50/30 flex items-center gap-2">
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-2 h-2 rounded-full bg-emerald-500"
          />
          <span className="text-xs md:text-sm font-medium text-gray-700">
            Live sync enabled
          </span>
        </div>
      </div>
    </motion.div>
  );
}
