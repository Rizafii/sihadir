import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ScanFace, MapPinCheck, MessageSquare, LayoutDashboard, FileCheck, FileDown } from 'lucide-react';

const features = [
  {
    icon: ScanFace,
    title: 'Face Recognition AI',
    description: 'Absensi menggunakan pengenalan wajah berbasis AI. Cukup arahkan kamera, wajah terverifikasi dalam hitungan detik.',
    span: 'lg:col-span-2 lg:row-span-2',
    gradient: 'from-primary-600/20 via-primary-500/5 to-transparent',
    iconGradient: 'from-primary-500 to-primary-600',
    large: true,
  },
  {
    icon: MapPinCheck,
    title: 'GPS Geo-Fencing',
    description: 'Validasi lokasi siswa dengan radius sekolah menggunakan formula Haversine. Tidak bisa absen dari luar area.',
    span: 'lg:col-span-1',
    gradient: 'from-accent-500/15 via-accent-500/5 to-transparent',
    iconGradient: 'from-accent-400 to-accent-600',
    large: false,
  },
  {
    icon: MessageSquare,
    title: 'WhatsApp Notification',
    description: 'Notifikasi otomatis ke orang tua & guru via WhatsApp saat siswa absen, terlambat, atau izin.',
    span: 'lg:col-span-1',
    gradient: 'from-emerald-500/15 via-emerald-500/5 to-transparent',
    iconGradient: 'from-emerald-400 to-emerald-600',
    large: false,
  },
  {
    icon: LayoutDashboard,
    title: 'Realtime Dashboard',
    description: 'Pantau kehadiran seluruh siswa secara realtime dari dashboard admin yang modern dan informatif.',
    span: 'lg:col-span-1',
    gradient: 'from-violet-500/15 via-violet-500/5 to-transparent',
    iconGradient: 'from-violet-400 to-violet-600',
    large: false,
  },
  {
    icon: FileCheck,
    title: 'Sistem Izin Digital',
    description: 'Pengajuan izin & sakit secara digital dengan approval guru dan tracking status otomatis.',
    span: 'lg:col-span-1',
    gradient: 'from-amber-500/15 via-amber-500/5 to-transparent',
    iconGradient: 'from-amber-400 to-amber-600',
    large: false,
  },
  {
    icon: FileDown,
    title: 'Export Laporan Excel',
    description: 'Generate laporan kehadiran otomatis dengan filter kelas, tanggal, dan statistik lengkap dalam format Excel.',
    span: 'lg:col-span-2',
    gradient: 'from-rose-500/15 via-rose-500/5 to-transparent',
    iconGradient: 'from-rose-400 to-rose-600',
    large: false,
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Features() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="fitur" className="relative py-24 lg:py-32 bg-white">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-primary-200/50 to-transparent" />
      <div className="absolute top-1/3 right-0 w-[400px] h-[400px] rounded-full bg-primary-100/20 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[300px] h-[300px] rounded-full bg-accent-100/20 blur-[100px] pointer-events-none" />

      <div className="container-custom mx-auto px-6" ref={ref}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-2xl mx-auto mb-16 lg:mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-100/50 border border-primary-200 text-primary-700 text-sm font-medium mb-6">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
            </svg>
            FEATURES
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-5 tracking-tight">
            Everything you need to{' '}
            <span className="text-primary-600">succeed</span>
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Maximize success with our flexible product features. Customize, stay compatible across platforms, and receive reliable support for optimized performance.
          </p>
        </motion.div>

        {/* Bento grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5"
        >
          {features.map((feature) => (
            <motion.div key={feature.title} variants={cardVariants} className={feature.span}>
              <div className="group relative h-full p-6 lg:p-7 rounded-2xl bg-white/50 border border-gray-200/50 hover:border-gray-300 transition-all duration-500 overflow-hidden hover:-translate-y-1 hover:shadow-lg hover:shadow-black/5">
                {/* Background gradient */}
                <div className={`absolute top-0 left-0 w-full h-full bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />

                <div className="relative z-10">
                  {/* Icon */}
                  <div className={`w-12 h-12 ${feature.large ? 'lg:w-16 lg:h-16' : ''} rounded-xl bg-gradient-to-br ${feature.iconGradient} flex items-center justify-center mb-5 shadow-md shadow-black/10`}>
                    <feature.icon className={`${feature.large ? 'w-6 h-6 lg:w-8 lg:h-8' : 'w-6 h-6'} text-white`} />
                  </div>

                  <h3 className={`font-display font-bold text-gray-900 mb-2.5 ${feature.large ? 'text-xl lg:text-2xl' : 'text-lg'}`}>
                    {feature.title}
                  </h3>
                  <p className={`text-gray-600 leading-relaxed ${feature.large ? 'text-base' : 'text-sm'}`}>
                    {feature.description}
                  </p>

                  {/* Large card extra: visual element */}
                  {feature.large && (
                    <div className="mt-6 flex items-center gap-3">
                      <div className="flex -space-x-2">
                        {['bg-primary-500', 'bg-accent-500', 'bg-emerald-500'].map((bg, i) => (
                          <div key={i} className={`w-8 h-8 rounded-full ${bg} border-2 border-white flex items-center justify-center text-white text-[10px] font-bold`}>
                            {['AI', 'FR', 'ID'][i]}
                          </div>
                        ))}
                      </div>
                      <span className="text-sm text-gray-600">99.9% Accuracy</span>
                    </div>
                  )}
                </div>

                {/* Corner decoration */}
                <div className="absolute -bottom-1 -right-1 w-20 h-20 bg-gradient-to-tl from-white/[0.02] to-transparent rounded-tl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
