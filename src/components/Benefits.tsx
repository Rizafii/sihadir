import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';
import { Building2, GraduationCap, Users, Heart, CheckCircle2 } from 'lucide-react';

const audiences = [
  {
    id: 'sekolah',
    icon: Building2,
    title: 'Sekolah',
    subtitle: 'Manajemen Modern',
    color: 'text-blue-600',
    bg: 'bg-blue-50',
    border: 'border-blue-100',
    activeBg: 'bg-blue-600',
    activeText: 'text-white',
    benefits: [
      { title: 'Digitalisasi Administrasi', desc: 'Eliminasi proses manual dan kertas dengan sistem digital terintegrasi.' },
      { title: 'Efisiensi Operasional', desc: 'Hemat waktu dan tenaga untuk pengelolaan absensi seluruh sekolah.' },
      { title: 'Data Akurat & Realtime', desc: 'Akses laporan kehadiran yang akurat dan selalu up-to-date.' },
      { title: 'Hemat Biaya', desc: 'Tidak perlu investasi mesin fingerprint yang mahal dan rawan rusak.' },
    ],
  },
  {
    id: 'guru',
    icon: GraduationCap,
    title: 'Guru',
    subtitle: 'Fokus Mengajar',
    color: 'text-emerald-600',
    bg: 'bg-emerald-50',
    border: 'border-emerald-100',
    activeBg: 'bg-emerald-600',
    activeText: 'text-white',
    benefits: [
      { title: 'Monitoring Realtime', desc: 'Pantau kehadiran siswa per kelas secara langsung dari dashboard.' },
      { title: 'Rekap Otomatis', desc: 'Tidak perlu lagi rekap manual — laporan dihasilkan otomatis.' },
      { title: 'Administrasi Cepat', desc: 'Proses approval izin dan sakit menjadi lebih cepat dan terstruktur.' },
      { title: 'Notifikasi Izin', desc: 'Terima notifikasi langsung saat ada pengajuan izin dari siswa.' },
    ],
  },
  {
    id: 'siswa',
    icon: Users,
    title: 'Siswa',
    subtitle: 'Absensi Mudah',
    color: 'text-amber-600',
    bg: 'bg-amber-50',
    border: 'border-amber-100',
    activeBg: 'bg-amber-600',
    activeText: 'text-white',
    benefits: [
      { title: 'Proses Cepat', desc: 'Absensi hanya butuh beberapa detik — scan wajah dan selesai.' },
      { title: 'Fleksibel', desc: 'Bisa menggunakan smartphone atau laptop untuk absensi.' },
      { title: 'Dashboard Pribadi', desc: 'Akses riwayat kehadiran dan status izin dari dashboard personal.' },
      { title: 'Pengajuan Izin Digital', desc: 'Ajukan izin atau sakit secara digital dengan upload surat.' },
    ],
  },
  {
    id: 'orangtua',
    icon: Heart,
    title: 'Orang Tua',
    subtitle: 'Tenang & Terhubung',
    color: 'text-rose-600',
    bg: 'bg-rose-50',
    border: 'border-rose-100',
    activeBg: 'bg-rose-600',
    activeText: 'text-white',
    benefits: [
      { title: 'Notifikasi WhatsApp', desc: 'Terima notifikasi otomatis saat anak sudah absen di sekolah.' },
      { title: 'Monitoring Anak', desc: 'Ketahui kehadiran dan keterlambatan anak secara realtime.' },
      { title: 'Informasi Izin', desc: 'Mendapat update status pengajuan izin dan sakit anak.' },
      { title: 'Ketenangan Pikiran', desc: 'Tidak perlu khawatir — informasi kehadiran langsung di WhatsApp.' },
    ],
  },
];

export default function Benefits() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const [activeTab, setActiveTab] = useState('sekolah');
  const active = audiences.find((a) => a.id === activeTab)!;

  return (
    <section id="manfaat" className="relative py-12 lg:py-20 overflow-hidden bg-white">
      {/* Background Blobs Removed */}

      <div className="container-custom mx-auto px-6 relative z-10" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center max-w-2xl mx-auto mb-8 lg:mb-12"
        >
          <div className="inline-flex items-center px-3 py-1.5 rounded-full border border-blue-200 bg-blue-50 mb-4">
            <span className="text-blue-600 text-[11px] font-bold uppercase tracking-wider">
              MANFAAT
            </span>
          </div>
          <h2 className="font-display text-2xl sm:text-3xl lg:text-[2.25rem] font-bold text-slate-800 mb-4 leading-[1.1] tracking-tight">
            Memberikan nilai lebih untuk <span className="text-blue-500">semua pihak</span>
          </h2>
          <p className="text-[14px] lg:text-[15px] text-slate-500 leading-relaxed max-w-xl mx-auto">
            Sihadir tidak hanya mempermudah absensi, tetapi juga membangun ekosistem digital yang efisien dan transparan di sekolah.
          </p>
        </motion.div>

        {/* Tabs & Content Container */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.15, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-5xl mx-auto"
        >
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-10 items-start">
            
            {/* Tabs sidebar (lg) or horizontal scroll (mobile) */}
            <div className="w-full lg:w-64 flex-shrink-0 flex lg:flex-col gap-2 overflow-x-auto pb-4 lg:pb-0 scrollbar-hide">
              {audiences.map((aud) => {
                const isActive = activeTab === aud.id;
                return (
                  <button
                    key={aud.id}
                    onClick={() => setActiveTab(aud.id)}
                    className={`flex items-center gap-3 px-4 py-3 lg:px-5 lg:py-4 rounded-[1rem] text-left transition-all duration-300 whitespace-nowrap lg:whitespace-normal border ${
                      isActive
                        ? `${aud.bg} ${aud.color} border-transparent shadow-sm`
                        : 'bg-white text-slate-500 border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                    }`}
                  >
                    <div className={`p-2 rounded-lg flex-shrink-0 transition-colors ${
                      isActive ? 'bg-white/60' : aud.bg
                    }`}>
                      <aud.icon className={`w-5 h-5 ${aud.color}`} />
                    </div>
                    <div>
                      <div className={`font-bold font-display text-[14px] lg:text-[15px] ${isActive ? aud.color : 'text-slate-700'}`}>
                        {aud.title}
                      </div>
                      <div className={`text-[11px] lg:text-[12px] font-medium hidden lg:block ${isActive ? aud.color : 'text-slate-400'} opacity-80`}>
                        {aud.subtitle}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Content Area */}
            <div className="flex-1 w-full relative min-h-[300px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                  className="grid sm:grid-cols-2 gap-4 lg:gap-5"
                >
                  {active.benefits.map((benefit, index) => (
                    <motion.div
                      key={benefit.title}
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.4 }}
                      className="group relative bg-white p-6 lg:p-8 rounded-[1.25rem] border border-slate-100 shadow-[0_2px_10px_rgb(0,0,0,0.02)] hover:shadow-sm hover:border-slate-200 transition-all duration-300"
                    >
                      <div className="flex items-start gap-3.5">
                        <CheckCircle2 className={`w-5 h-5 lg:w-6 lg:h-6 flex-shrink-0 ${active.color}`} />
                        <div>
                          <h3 className="font-display font-bold text-slate-800 text-[16px] lg:text-[18px] mb-2 leading-tight">
                            {benefit.title}
                          </h3>
                          <p className="text-[14px] text-slate-500 leading-relaxed flex-1">
                            {benefit.desc}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>
            
          </div>
        </motion.div>
      </div>
    </section>
  );
}
