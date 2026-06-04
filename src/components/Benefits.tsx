import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Building2, GraduationCap, Users, Heart } from 'lucide-react';

const audiences = [
  {
    id: 'sekolah',
    icon: Building2,
    title: 'Sekolah',
    subtitle: 'Manajemen Modern',
    color: 'from-primary-500 to-primary-600',
    lightColor: 'bg-primary-500/10 text-primary-400 border-primary-500/20',
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
    color: 'from-accent-400 to-accent-600',
    lightColor: 'bg-accent-500/10 text-accent-400 border-accent-500/20',
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
    color: 'from-emerald-400 to-emerald-600',
    lightColor: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
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
    color: 'from-rose-400 to-rose-600',
    lightColor: 'bg-rose-500/10 text-rose-400 border-rose-500/20',
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
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const [activeTab, setActiveTab] = useState('sekolah');
  const active = audiences.find((a) => a.id === activeTab)!;

  return (
    <section id="manfaat" className="relative py-24 lg:py-32 overflow-hidden bg-gray-50">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-violet-200/50 to-transparent" />
      <div className="absolute top-1/3 left-0 w-[400px] h-[400px] rounded-full bg-primary-100/30 blur-[120px] pointer-events-none" />

      <div className="container-custom mx-auto px-6" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-violet-100/50 border border-violet-200 text-violet-700 text-sm font-medium mb-6">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            MANFAAT
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-5 tracking-tight">
            Manfaat untuk{' '}
            <span className="text-primary-600">semua orang</span>
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Sihadir dirancang untuk memberikan manfaat nyata bagi semua pemangku kepentingan di lingkungan sekolah.
          </p>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {audiences.map((aud) => (
            <button
              key={aud.id}
              onClick={() => setActiveTab(aud.id)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300 border ${activeTab === aud.id
                  ? `bg-gradient-to-r ${aud.color} text-white border-transparent shadow-lg`
                  : 'bg-gray-50 text-gray-600 border-gray-200 hover:bg-gray-100 hover:text-gray-900'
                }`}
            >
              <aud.icon className="w-4 h-4" />
              {aud.title}
            </button>
          ))}
        </motion.div>

        {/* Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl mx-auto"
        >
          <div className="grid sm:grid-cols-2 gap-4">
            {active.benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="group p-5 rounded-2xl bg-white/50 border border-gray-200/50 hover:border-gray-300 transition-all duration-400 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-black/5"
              >
                <div className="flex items-start gap-4">
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${active.color} flex items-center justify-center flex-shrink-0 shadow-md`}>
                    <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-base font-bold font-display text-gray-900 mb-1.5">{benefit.title}</h4>
                    <p className="text-sm text-gray-600 leading-relaxed">{benefit.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
