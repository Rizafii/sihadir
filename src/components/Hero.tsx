import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Hero() {
  return (
    <section
      id="beranda"
      className="relative min-h-screen flex items-center overflow-hidden bg-white"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-[400px] sm:w-[500px] lg:w-[600px] h-[400px] sm:h-[500px] lg:h-[600px] rounded-full bg-primary-100/40 blur-[100px] sm:blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[300px] sm:w-[400px] lg:w-[500px] h-[300px] sm:h-[400px] lg:h-[500px] rounded-full bg-accent-100/30 blur-[100px] sm:blur-[120px]" />
      </div>

      <div className="container-custom mx-auto px-6 pt-16 sm:pt-20 lg:pt-24 xl:pt-28 pb-10 sm:pb-12 lg:pb-16 relative z-10">
        {/* Small badge */}
        <motion.div
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="flex justify-center mb-5 sm:mb-6 lg:mb-8"
        >
          <div className="inline-flex items-center gap-2 px-3 sm:px-3.5 py-1 sm:py-1.5 rounded-full bg-primary-100/50 border border-primary-200 text-primary-700 text-[10px] sm:text-xs lg:text-sm font-medium">
            <span className="w-2 h-2 rounded-full bg-primary-500 animate-pulse" />
            Teknologi AI terdepan untuk sekolah modern
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 xl:gap-12 items-center">
          {/* Left: Text Content */}
          <div>
            {/* Main headline */}
            <motion.h1
              custom={1}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="font-display text-4xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold leading-[1.1] tracking-tight text-gray-900 mb-5 sm:mb-6 lg:mb-8"
            >
              Absensi Sekolah Modern dengan{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-accent-600">
                AI & GPS
              </span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              custom={2}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="text-sm sm:text-base md:text-base lg:text-lg text-gray-600 leading-relaxed mb-6 sm:mb-8 lg:mb-10 max-w-xl"
            >
              Digitalisasi absensi dengan Face Recognition, Geo-Fencing, dan notifikasi WhatsApp otomatis. Aman, cepat, dan tanpa mesin fingerprint.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              custom={3}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="flex flex-col sm:flex-row gap-3 mb-6 sm:mb-8 lg:mb-10"
            >
              <a
                href="#kontak"
                className="inline-flex items-center justify-center px-5 sm:px-7 py-2.5 sm:py-3 lg:py-4 text-xs sm:text-sm md:text-base font-semibold text-white rounded-lg bg-primary-600 hover:bg-primary-700 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
              >
                Mulai Gratis
              </a>
              <a
                href="#fitur"
                className="inline-flex items-center justify-center gap-2 px-5 sm:px-7 py-2.5 sm:py-3 lg:py-4 text-xs sm:text-sm md:text-base font-semibold text-primary-600 rounded-lg border border-primary-200 bg-white hover:bg-primary-50 transition-all duration-300"
              >
                <svg className="w-4 sm:w-5 h-4 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
                Lihat Demo
              </a>
            </motion.div>

            {/* Trust text */}
            <motion.div
              custom={4}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="text-xs sm:text-sm text-gray-600"
            >
              Dipercaya oleh sekolah terkemuka di Indonesia
            </motion.div>
          </div>

          {/* Right: Dashboard Mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="relative hidden lg:block"
          >
            <div className="relative mx-auto max-w-[320px] sm:max-w-[380px] md:max-w-[420px] lg:max-w-[480px] xl:max-w-[520px]">
              {/* Glow effect */}
              <div className="absolute -inset-3 sm:-inset-5 lg:-inset-6 bg-gradient-to-r from-primary-200/30 to-accent-200/20 rounded-2xl blur-2xl sm:blur-3xl" />

              {/* Dashboard mockup */}
              <div className="relative rounded-xl border border-gray-200 bg-white/98 backdrop-blur-xl overflow-hidden shadow-2xl shadow-black/10">
                {/* Browser header */}
                <div className="flex items-center gap-1.5 px-2.5 sm:px-3 py-2 sm:py-2.5 border-b border-gray-100 bg-gray-50/50">
                  <div className="flex gap-1">
                    <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-red-400" />
                    <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-yellow-400" />
                    <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-emerald-400" />
                  </div>
                  <div className="flex-1 text-center">
                    <div className="text-[9px] sm:text-[10px] text-gray-500 font-mono">dashboard.sihadir.id</div>
                  </div>
                </div>

                {/* Dashboard content */}
                <div className="p-3 sm:p-4 lg:p-5 space-y-3 sm:space-y-4">
                  {/* Stats cards */}
                  <div className="grid grid-cols-2 gap-2.5 sm:gap-3">
                    <div className="p-2.5 sm:p-3 rounded-lg bg-gradient-to-br from-primary-50 to-primary-100/50 border border-primary-100">
                      <div className="text-xl sm:text-2xl font-bold text-primary-600">1,247</div>
                      <div className="text-[10px] sm:text-xs text-gray-600 mt-1">Total Siswa</div>
                    </div>
                    <div className="p-2.5 sm:p-3 rounded-lg bg-gradient-to-br from-emerald-50 to-emerald-100/50 border border-emerald-100">
                      <div className="text-xl sm:text-2xl font-bold text-emerald-600">98%</div>
                      <div className="text-[10px] sm:text-xs text-gray-600 mt-1">Kehadiran</div>
                    </div>
                  </div>

                  {/* Chart area */}
                  <div className="p-2.5 sm:p-3 lg:p-4 rounded-lg bg-gray-50/60 border border-gray-100">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-[10px] sm:text-xs lg:text-sm font-medium text-gray-700">Kehadiran Minggu Ini</span>
                      <span className="text-[9px] sm:text-[10px] px-1.5 sm:px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-700 font-medium">+12%</span>
                    </div>
                    <div className="flex items-end gap-1 sm:gap-1.5 h-14 sm:h-16 lg:h-20">
                      {[65, 75, 72, 85, 90, 95, 88].map((h, i) => (
                        <motion.div
                          key={i}
                          initial={{ height: 0 }}
                          animate={{ height: `${h}%` }}
                          transition={{ delay: 0.8 + i * 0.08, duration: 0.5 }}
                          className="flex-1 rounded-t-md bg-gradient-to-t from-primary-500 to-primary-400"
                        />
                      ))}
                    </div>
                    <div className="flex gap-0.5 sm:gap-1 mt-1.5 sm:mt-2 justify-between text-[9px] sm:text-[10px] text-gray-500 font-medium">
                      {['Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab', 'Min'].map((d) => (
                        <div key={d}>{d}</div>
                      ))}
                    </div>
                  </div>

                  {/* Recent activity */}
                  <div className="space-y-1 sm:space-y-1.5">
                    <div className="text-[10px] sm:text-xs lg:text-sm font-medium text-gray-700 mb-1.5 sm:mb-2">Aktivitas Terbaru</div>
                    {[
                      { name: 'Ahmad Rizki', time: '07:15 WIB', status: '✓ Hadir', badge: 'text-emerald-600' },
                      { name: 'Siti Nurhaliza', time: '07:32 WIB', status: '⏱ Terlambat', badge: 'text-yellow-600' },
                      { name: 'Budi Santoso', time: '07:10 WIB', status: '✓ Hadir', badge: 'text-emerald-600' },
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-center justify-between p-2 sm:p-2.5 rounded-lg hover:bg-gray-50/60 transition-colors">
                        <div className="flex items-center gap-2 sm:gap-2.5 min-w-0 flex-1">
                          <div className="w-6 sm:w-7 h-6 sm:h-7 rounded-full bg-gradient-to-br from-primary-200 to-accent-200 flex items-center justify-center text-[9px] sm:text-[10px] font-bold text-primary-700 flex-shrink-0">
                            {item.name[0]}
                          </div>
                          <div className="text-[10px] sm:text-xs min-w-0">
                            <div className="font-medium text-gray-800 truncate text-xs">{item.name}</div>
                            <div className="text-[9px] sm:text-[10px] text-gray-500">{item.time}</div>
                          </div>
                        </div>
                        <span className={`text-[9px] sm:text-xs font-medium whitespace-nowrap ml-1.5 flex-shrink-0 ${item.badge}`}>{item.status}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0, duration: 0.6 }}
              className="absolute -bottom-5 sm:-bottom-6 lg:-bottom-8 -left-5 sm:-left-6 lg:-left-8 px-2.5 sm:px-3 lg:px-4 py-1.5 sm:py-2 lg:py-2.5 rounded-full bg-white border border-gray-200 shadow-lg"
            >
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[9px] sm:text-xs lg:text-sm font-medium text-gray-700">Live sync enabled</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
