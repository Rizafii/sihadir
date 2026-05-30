import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function Dashboard() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden bg-gray-50">
      {/* Background */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] rounded-full bg-primary-100/30 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] rounded-full bg-accent-100/20 blur-[100px] pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-primary-200/50 to-transparent" />

      <div className="container-custom mx-auto px-6" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent-100/50 border border-accent-200 text-accent-700 text-sm font-medium mb-6">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            CUSTOMIZABLE DASHBOARDS
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-5 tracking-tight">
            Beautifully customizable{' '}
            <span className="text-primary-600">dashboards</span>
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Monitor real-time data with a modern, intuitive dashboard designed for educators and administrators.
          </p>
        </motion.div>

        {/* Dashboard Mockup */}
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ delay: 0.2, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="relative max-w-5xl mx-auto"
        >
          {/* Glow */}
          <div className="absolute -inset-6 bg-gradient-to-r from-primary-100/30 via-accent-100/30 to-primary-100/30 rounded-3xl blur-3xl" />

          {/* Main window */}
          <div className="relative rounded-2xl border border-gray-200 bg-white/90 backdrop-blur-xl overflow-hidden shadow-2xl shadow-black/5">
            {/* Window chrome */}
            <div className="flex items-center justify-between px-5 py-3 border-b border-gray-100 bg-gray-50/50">
              <div className="flex items-center gap-3">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-emerald-400" />
                </div>
                <div className="hidden sm:flex items-center gap-2">
                  <div className="px-3 py-1 rounded-md bg-gray-100 text-[11px] text-gray-600 font-mono">Dashboard</div>
                  <div className="px-3 py-1 rounded-md text-[11px] text-gray-500 font-mono">Reports</div>
                  <div className="px-3 py-1 rounded-md text-[11px] text-gray-500 font-mono">Students</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-[11px] text-emerald-600">Live</span>
              </div>
            </div>

            {/* Dashboard grid */}
            <div className="p-5 lg:p-6">
              {/* Top stats */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-5">
                {[
                  { label: 'Total Students', value: '1,247', change: '+23', changeColor: 'text-emerald-600', icon: '👥', bg: 'from-primary-50 to-primary-100/50' },
                  { label: 'Present Today', value: '1,189', change: '95.3%', changeColor: 'text-emerald-600', icon: '✅', bg: 'from-emerald-50 to-emerald-100/50' },
                  { label: 'Late', value: '32', change: '-5', changeColor: 'text-emerald-600', icon: '⏰', bg: 'from-amber-50 to-amber-100/50' },
                  { label: 'Leave / Sick', value: '26', change: '2.1%', changeColor: 'text-gray-600', icon: '📋', bg: 'from-violet-50 to-violet-100/50' },
                ].map((stat) => (
                  <div key={stat.label} className={`p-4 rounded-xl bg-gradient-to-br ${stat.bg} border border-gray-200/50`}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-lg">{stat.icon}</span>
                      <span className={`text-[11px] font-medium ${stat.changeColor}`}>{stat.change}</span>
                    </div>
                    <div className="text-2xl font-bold font-display text-gray-900">{stat.value}</div>
                    <div className="text-[11px] text-gray-600 mt-0.5">{stat.label}</div>
                  </div>
                ))}
              </div>

              <div className="grid lg:grid-cols-3 gap-5">
                {/* Chart area */}
                <div className="lg:col-span-2 rounded-xl bg-gray-100/50 border border-gray-200 p-5">
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h4 className="text-sm font-semibold text-gray-900">Attendance Trend</h4>
                      <p className="text-[11px] text-gray-600 mt-0.5">Last 30 days</p>
                    </div>
                    <div className="flex items-center gap-4 text-[11px]">
                      <div className="flex items-center gap-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-primary-500" />
                        <span className="text-gray-600">Present</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                        <span className="text-gray-600">Late</span>
                      </div>
                    </div>
                  </div>

                  {/* Area chart mock */}
                  <div className="relative h-40">
                    <svg className="w-full h-full" viewBox="0 0 400 120" preserveAspectRatio="none">
                      {/* Grid lines */}
                      {[0, 30, 60, 90].map((y) => (
                        <line key={y} x1="0" y1={y} x2="400" y2={y} stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
                      ))}
                      {/* Area fill */}
                      <defs>
                        <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="rgb(79, 70, 229)" stopOpacity="0.3" />
                          <stop offset="100%" stopColor="rgb(79, 70, 229)" stopOpacity="0" />
                        </linearGradient>
                      </defs>
                      <motion.path
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={isInView ? { pathLength: 1, opacity: 1 } : {}}
                        transition={{ delay: 0.8, duration: 1.5, ease: 'easeOut' }}
                        d="M0,80 C30,75 60,40 100,45 C140,50 170,30 200,25 C230,20 260,35 300,20 C340,5 370,15 400,10"
                        fill="none"
                        stroke="rgb(99, 102, 241)"
                        strokeWidth="2.5"
                      />
                      <path
                        d="M0,80 C30,75 60,40 100,45 C140,50 170,30 200,25 C230,20 260,35 300,20 C340,5 370,15 400,10 L400,120 L0,120 Z"
                        fill="url(#chartGradient)"
                      />
                    </svg>
                  </div>
                </div>

                {/* Activity feed */}
                <div className="rounded-xl bg-white/[0.02] border border-white/5 p-5">
                  <h4 className="text-sm font-semibold text-white mb-4">Aktivitas Terbaru</h4>
                  <div className="space-y-3">
                    {[
                      { name: 'Siti Nurhaliza', action: 'Check-in', time: '07:10', status: 'success' },
                      { name: 'Budi Santoso', action: 'Terlambat', time: '07:32', status: 'warning' },
                      { name: 'Anisa Rahma', action: 'Check-in', time: '07:08', status: 'success' },
                      { name: 'Dimas Prayoga', action: 'Izin Sakit', time: '06:45', status: 'info' },
                      { name: 'Putri Ayu', action: 'Check-in', time: '07:05', status: 'success' },
                      { name: 'Rizky Pratama', action: 'Check-in', time: '07:14', status: 'success' },
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-3 py-1.5">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary-500/20 to-accent-500/20 flex items-center justify-center text-[10px] text-white/80 font-bold flex-shrink-0">
                          {item.name.split(' ').map(n => n[0]).join('')}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="text-xs text-white/80 font-medium truncate">{item.name}</div>
                          <div className="text-[10px] text-muted-400">{item.time} WIB</div>
                        </div>
                        <span className={`text-[10px] px-2 py-0.5 rounded-full font-medium flex-shrink-0 ${item.status === 'success' ? 'bg-emerald-500/10 text-emerald-400' :
                            item.status === 'warning' ? 'bg-amber-500/10 text-amber-400' :
                              'bg-blue-500/10 text-blue-400'
                          }`}>
                          {item.action}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom: Class overview */}
              <div className="mt-5 rounded-xl bg-white/[0.02] border border-white/5 p-5">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-sm font-semibold text-white">Ringkasan Per Kelas</h4>
                  <span className="text-[11px] text-primary-400 cursor-pointer hover:text-primary-300">Lihat Semua →</span>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-left">
                    <thead>
                      <tr className="text-[11px] text-muted-400 border-b border-white/5">
                        <th className="pb-3 pr-4 font-medium">Kelas</th>
                        <th className="pb-3 pr-4 font-medium">Total</th>
                        <th className="pb-3 pr-4 font-medium">Hadir</th>
                        <th className="pb-3 pr-4 font-medium">Terlambat</th>
                        <th className="pb-3 font-medium">Persentase</th>
                      </tr>
                    </thead>
                    <tbody className="text-xs">
                      {[
                        { kelas: 'XII RPL 1', total: 36, hadir: 34, terlambat: 2, persen: 94 },
                        { kelas: 'XII RPL 2', total: 35, hadir: 35, terlambat: 0, persen: 100 },
                        { kelas: 'XI RPL 1', total: 38, hadir: 36, terlambat: 3, persen: 95 },
                        { kelas: 'XI RPL 2', total: 37, hadir: 33, terlambat: 1, persen: 89 },
                      ].map((row) => (
                        <tr key={row.kelas} className="border-b border-white/[0.03]">
                          <td className="py-2.5 pr-4 font-medium text-white/80">{row.kelas}</td>
                          <td className="py-2.5 pr-4 text-muted-400">{row.total}</td>
                          <td className="py-2.5 pr-4 text-emerald-400">{row.hadir}</td>
                          <td className="py-2.5 pr-4 text-amber-400">{row.terlambat}</td>
                          <td className="py-2.5">
                            <div className="flex items-center gap-2">
                              <div className="flex-1 max-w-[80px] h-1.5 bg-white/5 rounded-full overflow-hidden">
                                <div className="h-full rounded-full bg-gradient-to-r from-primary-500 to-emerald-500" style={{ width: `${row.persen}%` }} />
                              </div>
                              <span className="text-white/70">{row.persen}%</span>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
