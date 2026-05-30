import { motion } from 'framer-motion';
import { Shield, MapPin, Smartphone } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  }),
};

const floatingCards = [
  {
    icon: Shield,
    label: 'Face ID Verified',
    value: '✓ Ahmad Rizki',
    color: 'from-emerald-400 to-emerald-500',
    position: 'top-[18%] -left-4 md:left-[2%]',
    delay: 0.8,
  },
  {
    icon: MapPin,
    label: 'Lokasi Valid',
    value: 'Dalam Radius 50m',
    color: 'from-accent-400 to-accent-500',
    position: 'top-[45%] -right-2 md:right-[1%]',
    delay: 1.0,
  },
  {
    icon: Smartphone,
    label: 'WhatsApp Sent',
    value: 'Notifikasi Orang Tua',
    color: 'from-primary-400 to-primary-500',
    position: 'bottom-[15%] -left-2 md:left-[5%]',
    delay: 1.2,
  },
];

export default function Hero() {
  return (
    <section
      id="beranda"
      className="relative min-h-screen flex items-center overflow-hidden bg-white"
    >
      {/* Subtle background gradient */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full bg-primary-100/30 blur-[100px]" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-accent-100/20 blur-[100px]" />
      </div>

      <div className="container-custom mx-auto px-6 pt-28 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left: Text Content */}
          <div className="max-w-2xl">
            <motion.div
              custom={0}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-100/50 border border-primary-200 text-primary-700 text-sm font-medium mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-primary-500 animate-pulse" />
              Platform Absensi Sekolah #1 di Indonesia
            </motion.div>

            <motion.h1
              custom={1}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.08] tracking-tight text-gray-900 mb-6"
            >
              Sistem Absensi{' '}
              <span className="text-primary-600">Sekolah Modern</span>{' '}
              Berbasis AI & GPS
            </motion.h1>

            <motion.p
              custom={2}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="text-lg sm:text-xl text-gray-600 leading-relaxed mb-10 max-w-lg"
            >
              Digitalisasi absensi sekolah dengan teknologi Face Recognition, GPS Geo-Fencing, dan notifikasi WhatsApp otomatis — tanpa mesin fingerprint.
            </motion.p>

            <motion.div
              custom={3}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href="#kontak"
                className="group inline-flex items-center justify-center gap-2.5 px-8 py-4 text-base font-semibold text-white rounded-lg bg-primary-600 hover:bg-primary-700 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
              >
                Mulai Sekarang
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
              <a
                href="#fitur"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-gray-700 rounded-lg border border-gray-300 bg-gray-50 hover:bg-gray-100 hover:border-gray-400 transition-all duration-300"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <polygon points="5 3 19 12 5 21 5 3" fill="currentColor" opacity="0.3" />
                  <polygon points="5 3 19 12 5 21 5 3" />
                </svg>
                Lihat Fitur
              </a>
            </motion.div>

            {/* Trust badges */}
            <motion.div
              custom={4}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="mt-12 flex items-center gap-6 text-sm text-gray-600"
            >
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <span>Aman & Terenkripsi</span>
              </div>
              <div className="w-px h-4 bg-gray-300" />
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-accent-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <span>Setup 5 Menit</span>
              </div>
              <div className="w-px h-4 bg-gray-300 hidden sm:block" />
              <div className="hidden sm:flex items-center gap-2">
                <svg className="w-5 h-5 text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>24/7 Support</span>
              </div>
            </motion.div>
          </div>

          {/* Right: Dashboard Mockup with floating cards */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="relative hidden lg:block"
          >
            {/* Main dashboard mockup */}
            <div className="relative mx-auto w-full max-w-[540px]">
              {/* Glow behind */}
              <div className="absolute -inset-8 bg-gradient-to-r from-primary-200/20 to-accent-200/20 rounded-3xl blur-3xl" />

              {/* Dashboard card */}
              <div className="relative rounded-2xl border border-gray-200 bg-white/95 backdrop-blur-xl overflow-hidden shadow-xl shadow-black/5">
                {/* Title bar */}
                <div className="flex items-center gap-2 px-5 py-3.5 border-b border-gray-100 bg-gray-50/50">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-400" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400" />
                    <div className="w-3 h-3 rounded-full bg-emerald-400" />
                  </div>
                  <div className="flex-1 text-center">
                    <div className="inline-block px-4 py-1 rounded-md bg-gray-100 text-xs text-gray-600 font-mono">
                      dashboard.sihadir.id
                    </div>
                  </div>
                </div>

                {/* Dashboard content */}
                <div className="p-5">
                  {/* Stats row */}
                  <div className="grid grid-cols-4 gap-3 mb-5">
                    {[
                      { label: 'Total Siswa', value: '1,247', color: 'text-primary-600' },
                      { label: 'Hadir', value: '1,189', color: 'text-emerald-600' },
                      { label: 'Terlambat', value: '32', color: 'text-yellow-600' },
                      { label: 'Alpha', value: '26', color: 'text-red-600' },
                    ].map((stat) => (
                      <div key={stat.label} className="p-3 rounded-xl bg-gray-50 border border-gray-100">
                        <div className={`text-lg font-bold font-display ${stat.color}`}>{stat.value}</div>
                        <div className="text-[10px] text-gray-500 mt-0.5">{stat.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Chart area */}
                  <div className="rounded-xl bg-gray-50/50 border border-gray-100 p-4 mb-4">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-medium text-gray-600">Kehadiran Minggu Ini</span>
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-700">+12%</span>
                    </div>
                    {/* Bar chart */}
                    <div className="flex items-end gap-2 h-24">
                      {[65, 80, 72, 90, 85, 95, 88].map((h, i) => (
                        <motion.div
                          key={i}
                          initial={{ height: 0 }}
                          animate={{ height: `${h}%` }}
                          transition={{ delay: 1.2 + i * 0.1, duration: 0.6, ease: 'easeOut' }}
                          className="flex-1 rounded-t-md bg-gradient-to-t from-primary-500 to-primary-400"
                        />
                      ))}
                    </div>
                    <div className="flex gap-2 mt-2">
                      {['Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab', 'Min'].map((d) => (
                        <div key={d} className="flex-1 text-center text-[9px] text-gray-500">{d}</div>
                      ))}
                    </div>
                  </div>

                  {/* Recent activity */}
                  <div className="space-y-2">
                    {[
                      { name: 'Siti Nurhaliza', time: '07:15', status: 'Hadir', badge: 'bg-emerald-100 text-emerald-700' },
                      { name: 'Budi Santoso', time: '07:32', status: 'Terlambat', badge: 'bg-yellow-100 text-yellow-700' },
                      { name: 'Anisa Rahma', time: '07:10', status: 'Hadir', badge: 'bg-emerald-100 text-emerald-700' },
                    ].map((item) => (
                      <div key={item.name} className="flex items-center justify-between py-2 px-3 rounded-lg bg-gray-50/50">
                        <div className="flex items-center gap-2.5">
                          <div className="w-7 h-7 rounded-full bg-gradient-to-br from-primary-200 to-accent-200 flex items-center justify-center text-[10px] text-primary-700 font-bold">
                            {item.name[0]}
                          </div>
                          <div>
                            <div className="text-xs text-gray-800 font-medium">{item.name}</div>
                            <div className="text-[10px] text-gray-500">{item.time} WIB</div>
                          </div>
                        </div>
                        <span className={`text-[10px] px-2 py-0.5 rounded-full font-medium ${item.badge}`}>
                          {item.status}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating cards */}
              {floatingCards.map((card, index) => (
                <motion.div
                  key={card.label}
                  initial={{ opacity: 0, scale: 0.8, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ delay: card.delay, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className={`absolute ${card.position} z-10`}
                >
                  <div className={`glass rounded-xl p-3 shadow-xl shadow-black/20 ${index % 2 === 0 ? 'animate-float' : 'animate-float-delayed'}`}>
                    <div className="flex items-center gap-2.5">
                      <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${card.color} flex items-center justify-center`}>
                        <card.icon className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <div className="text-[10px] text-muted-400">{card.label}</div>
                        <div className="text-xs text-white font-semibold">{card.value}</div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-dark-900 to-transparent pointer-events-none" />
    </section>
  );
}
