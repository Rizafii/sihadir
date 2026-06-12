import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Users, CheckCircle, Clock, FileText, Activity, LayoutDashboard, Calendar, Search, Bell, Menu, UserCircle, MoreVertical, ChevronDown } from 'lucide-react';

export default function Dashboard() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  const stats = [
    { 
      label: 'Total Siswa', 
      value: '1,247', 
      change: '+23 bulan ini',
      icon: Users,
      color: 'text-blue-600',
      bg: 'from-blue-50 to-white',
      borderColor: 'border-blue-100',
      iconBg: 'bg-blue-100',
    },
    { 
      label: 'Hadir Hari Ini', 
      value: '1,189', 
      change: '95.3%',
      icon: CheckCircle,
      color: 'text-emerald-600',
      bg: 'from-emerald-50 to-white',
      borderColor: 'border-emerald-100',
      iconBg: 'bg-emerald-100',
    },
    { 
      label: 'Terlambat', 
      value: '32', 
      change: 'dari 1,247',
      icon: Clock,
      color: 'text-amber-600',
      bg: 'from-amber-50 to-white',
      borderColor: 'border-amber-100',
      iconBg: 'bg-amber-100',
    },
    { 
      label: 'Izin / Sakit', 
      value: '26', 
      change: '2.1% siswa',
      icon: FileText,
      color: 'text-violet-600',
      bg: 'from-violet-50 to-white',
      borderColor: 'border-violet-100',
      iconBg: 'bg-violet-100',
    },
  ];

  const activities = [
    { name: 'Siti Nurhaliza', action: 'Check-in', time: '07:10', status: 'success' },
    { name: 'Budi Santoso', action: 'Terlambat', time: '07:32', status: 'warning' },
    { name: 'Anisa Rahma', action: 'Check-in', time: '07:08', status: 'success' },
    { name: 'Dimas Prayoga', action: 'Izin Sakit', time: '06:45', status: 'info' },
  ];

  const classData = [
    { kelas: 'XII RPL 1', total: 36, hadir: 34, terlambat: 2, persen: 94 },
    { kelas: 'XII RPL 2', total: 35, hadir: 35, terlambat: 0, persen: 100 },
    { kelas: 'XI RPL 1', total: 38, hadir: 36, terlambat: 3, persen: 95 },
  ];

  return (
    <section className="relative py-12 lg:py-20 overflow-hidden bg-white">
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-full h-[500px] bg-gradient-to-b from-blue-50/50 to-transparent pointer-events-none" />

      <div className="container-custom mx-auto px-6 relative z-10" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center max-w-2xl mx-auto mb-10 lg:mb-16"
        >
          <div className="inline-flex items-center px-3 py-1.5 rounded-full border border-blue-200 bg-blue-50 mb-4">
            <span className="text-blue-600 text-[11px] font-bold uppercase tracking-wider">
              DASHBOARD YANG DAPAT DIKUSTOMISASI
            </span>
          </div>
          <h2 className="font-display text-2xl sm:text-3xl lg:text-[2.25rem] font-bold text-gray-900 mb-4 leading-[1.1] tracking-tight">
            Pantau kehadiran dengan{' '}
            <span className="text-blue-600">dashboard modern</span>
          </h2>
          <p className="text-[14px] lg:text-[16px] text-gray-600 leading-relaxed max-w-xl mx-auto">
            Dapatkan wawasan mendalam tentang tren kehadiran, laporan harian, dan pantau aktivitas siswa secara real-time dari satu tempat yang terpusat.
          </p>
        </motion.div>

        {/* Dashboard Preview */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.15, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative max-w-5xl mx-auto"
        >
          {/* Outer glow and shadow */}
          <div className="absolute -inset-1 bg-gradient-to-b from-blue-100 to-transparent rounded-3xl blur-md opacity-50 -z-10" />

          {/* Main Dashboard Container */}
          <div className="rounded-[1.25rem] border border-gray-200/60 bg-gray-50/30 shadow-[0_8px_30px_rgb(0,0,0,0.08)] overflow-hidden backdrop-blur-sm">
            
            {/* Browser Chrome */}
            <div className="flex items-center px-4 py-3 border-b border-gray-200 bg-white">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
              </div>
              <div className="flex-1 flex justify-center">
                <div className="w-64 h-6 rounded-md bg-gray-100 border border-gray-200 flex items-center justify-center">
                  <span className="text-[10px] text-gray-400 font-medium">sihadir.app/dashboard</span>
                </div>
              </div>
            </div>

            <div className="flex h-[600px] lg:h-[650px]"> {/* Fixed height for realistic preview */}
              {/* Sidebar */}
              <div className="w-48 lg:w-56 hidden md:flex flex-col border-r border-gray-200 bg-white p-4">
                <div className="flex items-center gap-2 mb-8 px-2">
                  <div className="w-6 h-6 rounded bg-blue-600 flex items-center justify-center text-white font-bold text-[10px]">
                    S
                  </div>
                  <span className="font-display font-bold text-gray-900 text-sm">SiHadir</span>
                </div>

                <div className="space-y-1">
                  <div className="flex items-center gap-2.5 px-3 py-2 rounded-lg bg-blue-50 text-blue-700 font-medium text-xs">
                    <LayoutDashboard className="w-4 h-4" />
                    Dashboard
                  </div>
                  <div className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-gray-600 hover:bg-gray-50 hover:text-gray-900 font-medium text-xs transition-colors">
                    <Users className="w-4 h-4" />
                    Data Siswa
                  </div>
                  <div className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-gray-600 hover:bg-gray-50 hover:text-gray-900 font-medium text-xs transition-colors">
                    <Calendar className="w-4 h-4" />
                    Jadwal
                  </div>
                  <div className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-gray-600 hover:bg-gray-50 hover:text-gray-900 font-medium text-xs transition-colors">
                    <FileText className="w-4 h-4" />
                    Laporan
                  </div>
                </div>

                <div className="mt-auto">
                  <div className="flex items-center gap-2.5 px-3 py-2 rounded-lg border border-gray-100 bg-gray-50 text-gray-700 text-xs">
                    <UserCircle className="w-6 h-6 text-gray-400" />
                    <div className="flex-1 min-w-0">
                      <div className="font-medium text-gray-900 truncate">Admin Sekolah</div>
                      <div className="text-[10px] text-gray-500 truncate">admin@sihadir.app</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Main Content Area */}
              <div className="flex-1 flex flex-col min-w-0 bg-gray-50">
                {/* Topbar */}
                <div className="h-14 border-b border-gray-200 bg-white flex items-center justify-between px-4 lg:px-6">
                  <div className="flex items-center gap-3">
                    <button className="md:hidden p-1.5 rounded-md text-gray-500 hover:bg-gray-100">
                      <Menu className="w-4 h-4" />
                    </button>
                    <h1 className="text-sm font-bold text-gray-900 font-display">Overview</h1>
                  </div>
                  <div className="flex items-center gap-3 lg:gap-4">
                    <div className="relative hidden sm:block">
                      <Search className="w-3.5 h-3.5 text-gray-400 absolute left-2.5 top-1/2 -translate-y-1/2" />
                      <input 
                        type="text" 
                        placeholder="Cari siswa..." 
                        className="h-8 w-48 lg:w-64 pl-8 pr-3 rounded-full bg-gray-100 border-transparent text-xs focus:bg-white focus:border-blue-300 focus:ring-2 focus:ring-blue-100 transition-all outline-none"
                      />
                    </div>
                    <button className="relative p-1.5 rounded-full text-gray-500 hover:bg-gray-100 transition-colors">
                      <Bell className="w-4 h-4" />
                      <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 rounded-full bg-red-500 border border-white" />
                    </button>
                  </div>
                </div>

                {/* Content Scrollable Area */}
                <div className="flex-1 overflow-y-auto p-4 lg:p-6">
                  
                  {/* Stats Grid */}
                  <div className="grid grid-cols-2 xl:grid-cols-4 gap-3 lg:gap-4 mb-4 lg:mb-6">
                    {stats.map((stat, i) => {
                      const Icon = stat.icon;
                      return (
                        <motion.div
                          key={stat.label}
                          initial={{ opacity: 0, y: 15 }}
                          animate={isInView ? { opacity: 1, y: 0 } : {}}
                          transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
                          className={`p-4 rounded-xl bg-gradient-to-br ${stat.bg} border ${stat.borderColor} shadow-sm hover:shadow-md transition-all duration-300 relative overflow-hidden`}
                        >
                          <div className={`absolute -right-4 -bottom-4 w-20 h-20 rounded-full ${stat.iconBg} opacity-50 blur-xl`} />
                          <div className="flex items-start justify-between mb-3 relative z-10">
                            <div className={`${stat.iconBg} p-2 rounded-lg`}>
                              <Icon className={`w-4 h-4 ${stat.color}`} strokeWidth={2} />
                            </div>
                            <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full bg-white border ${stat.borderColor} ${stat.color} hidden sm:block`}>
                              {stat.change}
                            </span>
                          </div>
                          <div className="relative z-10">
                            <div className="text-xl lg:text-2xl font-bold text-gray-900 font-display mb-0.5">{stat.value}</div>
                            <div className="text-xs text-gray-600 font-medium">{stat.label}</div>
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>

                  {/* Main Grid: Chart & Activity */}
                  <div className="grid xl:grid-cols-3 gap-4 lg:gap-6 mb-4 lg:mb-6">
                    
                    {/* Chart Area */}
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: 0.4, duration: 0.6 }}
                      className="xl:col-span-2 rounded-xl bg-white border border-gray-200 shadow-sm p-4 lg:p-5 flex flex-col"
                    >
                      <div className="flex items-center justify-between mb-6">
                        <div>
                          <h3 className="text-sm font-bold text-gray-900 font-display">Grafik Kehadiran</h3>
                          <p className="text-[11px] text-gray-500 mt-0.5">Statistik kehadiran 7 hari terakhir</p>
                        </div>
                        <select className="text-xs bg-gray-50 border border-gray-200 rounded-md px-2 py-1 outline-none text-gray-700 font-medium">
                          <option>Minggu Ini</option>
                          <option>Bulan Ini</option>
                        </select>
                      </div>

                      {/* Line Chart Graphic */}
                      <div className="flex-1 relative min-h-[160px]">
                        <svg className="w-full h-full" viewBox="0 0 500 150" preserveAspectRatio="none">
                          <defs>
                            <linearGradient id="blueGradient" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="0%" stopColor="rgb(37, 99, 235)" stopOpacity="0.2" />
                              <stop offset="100%" stopColor="rgb(37, 99, 235)" stopOpacity="0" />
                            </linearGradient>
                            <linearGradient id="emeraldGradient" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="0%" stopColor="rgb(16, 185, 129)" stopOpacity="0.2" />
                              <stop offset="100%" stopColor="rgb(16, 185, 129)" stopOpacity="0" />
                            </linearGradient>
                          </defs>
                          
                          {/* Grid Lines */}
                          {[0, 37.5, 75, 112.5, 150].map((y, i) => (
                            <line key={y} x1="0" y1={y} x2="500" y2={y} stroke="#f1f5f9" strokeWidth="1" />
                          ))}
                          
                          {/* Total Line (Blue) */}
                          <motion.path
                            initial={{ pathLength: 0 }}
                            animate={isInView ? { pathLength: 1 } : {}}
                            transition={{ delay: 0.6, duration: 1.5, ease: 'easeOut' }}
                            d="M0,100 C50,90 100,50 150,60 C200,70 250,40 300,30 C350,20 400,60 450,40 L500,20"
                            fill="none"
                            stroke="#3b82f6"
                            strokeWidth="2.5"
                          />
                          <path
                            d="M0,100 C50,90 100,50 150,60 C200,70 250,40 300,30 C350,20 400,60 450,40 L500,20 L500,150 L0,150 Z"
                            fill="url(#blueGradient)"
                          />
                          
                          {/* Present Line (Emerald) */}
                          <motion.path
                            initial={{ pathLength: 0 }}
                            animate={isInView ? { pathLength: 1 } : {}}
                            transition={{ delay: 0.8, duration: 1.5, ease: 'easeOut' }}
                            d="M0,120 C50,110 100,70 150,80 C200,90 250,60 300,50 C350,40 400,80 450,60 L500,40"
                            fill="none"
                            stroke="#10b981"
                            strokeWidth="2.5"
                          />
                          <path
                            d="M0,120 C50,110 100,70 150,80 C200,90 250,60 300,50 C350,40 400,80 450,60 L500,40 L500,150 L0,150 Z"
                            fill="url(#emeraldGradient)"
                          />

                          {/* Data points */}
                          {[
                            {x: 150, y: 60}, {x: 300, y: 30}, {x: 450, y: 40}
                          ].map((point, i) => (
                            <circle key={`blue-${i}`} cx={point.x} cy={point.y} r="4" fill="white" stroke="#3b82f6" strokeWidth="2" />
                          ))}
                          {[
                            {x: 150, y: 80}, {x: 300, y: 50}, {x: 450, y: 60}
                          ].map((point, i) => (
                            <circle key={`emerald-${i}`} cx={point.x} cy={point.y} r="4" fill="white" stroke="#10b981" strokeWidth="2" />
                          ))}
                        </svg>
                      </div>
                      
                      <div className="flex justify-between mt-3 text-[10px] text-gray-500 font-medium px-2">
                        <span>Sen</span><span>Sel</span><span>Rab</span><span>Kam</span><span>Jum</span><span>Sab</span><span>Min</span>
                      </div>
                    </motion.div>

                    {/* Activity Feed */}
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: 0.5, duration: 0.6 }}
                      className="rounded-xl bg-white border border-gray-200 shadow-sm p-4 lg:p-5 flex flex-col"
                    >
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-2">
                          <Activity className="w-4 h-4 text-blue-600" />
                          <h3 className="text-sm font-bold text-gray-900 font-display">Live Feed</h3>
                        </div>
                        <MoreVertical className="w-4 h-4 text-gray-400" />
                      </div>
                      <div className="space-y-3 flex-1">
                        {activities.map((item, i) => (
                          <motion.div 
                            key={i}
                            initial={{ opacity: 0, x: -10 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ delay: 0.6 + i * 0.1, duration: 0.4 }}
                            className="flex items-start gap-3"
                          >
                            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-[10px] font-bold flex-shrink-0 ${
                               item.status === 'success' ? 'bg-emerald-100 text-emerald-700' :
                               item.status === 'warning' ? 'bg-amber-100 text-amber-700' :
                               'bg-blue-100 text-blue-700'
                            }`}>
                              {item.name.split(' ').map(n => n[0]).join('')}
                            </div>
                            <div className="flex-1 min-w-0 pt-0.5">
                              <div className="flex items-center justify-between gap-2">
                                <div className="text-xs text-gray-900 font-semibold truncate">{item.name}</div>
                                <div className="text-[9px] text-gray-500 flex-shrink-0">{item.time} WIB</div>
                              </div>
                              <div className="text-[10px] text-gray-600 mt-0.5 flex items-center gap-1.5">
                                <span className={`w-1.5 h-1.5 rounded-full ${
                                  item.status === 'success' ? 'bg-emerald-500' :
                                  item.status === 'warning' ? 'bg-amber-500' :
                                  'bg-blue-500'
                                }`} />
                                {item.action}
                              </div>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                      <button className="mt-3 w-full py-1.5 text-[11px] font-semibold text-blue-600 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors">
                        Lihat Semua Aktivitas
                      </button>
                    </motion.div>
                  </div>

                  {/* Class Summary Table */}
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.6, duration: 0.6 }}
                    className="rounded-xl bg-white border border-gray-200 shadow-sm p-4 lg:p-5"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h3 className="text-sm font-bold text-gray-900 font-display">Rekapitulasi Kelas Hari Ini</h3>
                        <p className="text-[11px] text-gray-500 mt-0.5">Data diupdate setiap 5 menit</p>
                      </div>
                      <button className="flex items-center gap-1 text-xs font-semibold text-blue-600 hover:text-blue-700">
                        Export CSV <ChevronDown className="w-3 h-3" />
                      </button>
                    </div>
                    
                    <div className="overflow-x-auto">
                      <table className="w-full text-left text-xs min-w-[500px]">
                        <thead>
                          <tr className="border-b border-gray-100 bg-gray-50/50">
                            <th className="py-2.5 px-3 font-semibold text-gray-600 rounded-tl-lg">Kelas</th>
                            <th className="py-2.5 px-3 font-semibold text-gray-600 text-center">Total Siswa</th>
                            <th className="py-2.5 px-3 font-semibold text-gray-600 text-center">Hadir</th>
                            <th className="py-2.5 px-3 font-semibold text-gray-600 text-center">Terlambat</th>
                            <th className="py-2.5 px-3 font-semibold text-gray-600 text-right rounded-tr-lg">Tingkat Kehadiran</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-50">
                          {classData.map((row, i) => (
                            <tr key={row.kelas} className="hover:bg-gray-50/50 transition-colors">
                              <td className="py-3 px-3 font-semibold text-gray-900">{row.kelas}</td>
                              <td className="py-3 px-3 text-center text-gray-600 font-medium">{row.total}</td>
                              <td className="py-3 px-3 text-center">
                                <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-50 text-emerald-600 border border-emerald-100">
                                  {row.hadir}
                                </span>
                              </td>
                              <td className="py-3 px-3 text-center">
                                <span className={`inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold ${row.terlambat > 0 ? 'bg-amber-50 text-amber-600 border border-amber-100' : 'bg-gray-50 text-gray-500 border border-gray-100'}`}>
                                  {row.terlambat}
                                </span>
                              </td>
                              <td className="py-3 px-3">
                                <div className="flex items-center justify-end gap-2.5">
                                  <div className="w-20 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                                    <div 
                                      className="h-full rounded-full bg-blue-500"
                                      style={{ width: `${row.persen}%` }}
                                    />
                                  </div>
                                  <span className="font-bold text-gray-900 min-w-[2.5rem] text-right">{row.persen}%</span>
                                </div>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </motion.div>

                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
