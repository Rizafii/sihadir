import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ScanFace, MapPinCheck, MessageSquare, LayoutDashboard, FileCheck, FileDown } from 'lucide-react';

const features = [
  {
    icon: ScanFace,
    title: 'Pengenalan Wajah AI',
    description: 'Absensi cepat menggunakan pengenalan wajah. Cukup arahkan kamera, wajah terverifikasi dalam hitungan detik.',
    iconBg: 'bg-blue-50',
    iconColor: 'text-blue-600',
  },
  {
    icon: MapPinCheck,
    title: 'GPS Geo-Fencing',
    description: 'Validasi lokasi siswa dengan radius sekolah. Mencegah absensi dari luar area yang telah ditentukan.',
    iconBg: 'bg-emerald-50',
    iconColor: 'text-emerald-600',
  },
  {
    icon: MessageSquare,
    title: 'Notifikasi WhatsApp',
    description: 'Notifikasi otomatis ke orang tua & guru via WhatsApp saat siswa absen, terlambat, atau mengajukan izin.',
    iconBg: 'bg-green-50',
    iconColor: 'text-green-600',
  },
  {
    icon: LayoutDashboard,
    title: 'Dashboard Realtime',
    description: 'Pantau kehadiran seluruh siswa secara realtime melalui dashboard admin yang modern, bersih, dan informatif.',
    iconBg: 'bg-violet-50',
    iconColor: 'text-violet-600',
  },
  {
    icon: FileCheck,
    title: 'Sistem Izin Digital',
    description: 'Pengajuan izin & sakit secara digital dengan approval dari guru dan pelacakan status otomatis.',
    iconBg: 'bg-amber-50',
    iconColor: 'text-amber-600',
  },
  {
    icon: FileDown,
    title: 'Export Laporan',
    description: 'Generate laporan kehadiran otomatis dengan filter kelas dan tanggal, lengkap dalam format Excel.',
    iconBg: 'bg-rose-50',
    iconColor: 'text-rose-600',
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

export default function Features() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <section id="fitur" className="relative py-12 lg:py-16 bg-white">
      <div className="container-custom mx-auto px-6" ref={ref}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center max-w-2xl mx-auto mb-8 lg:mb-10"
        >
          <div className="inline-flex items-center px-3 py-1.5 rounded-full border border-blue-200 bg-blue-50 mb-4">
            <span className="text-blue-600 text-[11px] font-bold uppercase tracking-wider">
              Fitur
            </span>
          </div>
          <h2 className="font-display text-2xl sm:text-3xl lg:text-[2rem] font-bold text-slate-800 mb-3 leading-tight tracking-tight">
            Semua yang Anda butuhkan
          </h2>
          <p className="text-[13px] lg:text-[15px] text-slate-500 leading-relaxed">
            Tingkatkan efektivitas sekolah dengan fitur lengkap yang fleksibel dan mudah digunakan di semua perangkat.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5"
        >
          {features.map((feature) => (
            <motion.div key={feature.title} variants={cardVariants} className="h-full">
              <div className="relative h-full p-4 lg:p-5 rounded-[1rem] bg-white border border-slate-100 shadow-[0_2px_8px_rgb(0,0,0,0.02)] transition-all duration-300 hover:shadow-sm hover:border-slate-200 flex flex-col sm:flex-row items-start gap-4">

                {/* Icon */}
                <div className={`w-11 h-11 lg:w-12 lg:h-12 rounded-xl ${feature.iconBg} flex items-center justify-center flex-shrink-0`}>
                  <feature.icon className={`w-5 h-5 lg:w-[22px] lg:h-[22px] ${feature.iconColor}`} strokeWidth={1.5} />
                </div>

                <div className="flex flex-col gap-1.5">
                  <h3 className="font-display font-bold text-slate-800 text-[15px] lg:text-base">
                    {feature.title}
                  </h3>
                  <p className="text-slate-500 leading-relaxed text-[13px]">
                    {feature.description}
                  </p>
                </div>

              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
