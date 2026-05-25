import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { UserX, FileSpreadsheet, EyeOff, WifiOff } from 'lucide-react';

const problems = [
  {
    icon: UserX,
    title: 'Titip Absen',
    description: 'Siswa mudah menitipkan absen ke teman karena tidak ada verifikasi identitas yang kuat.',
    color: 'from-red-500 to-rose-600',
    iconBg: 'bg-red-500/10',
    iconColor: 'text-red-400',
  },
  {
    icon: FileSpreadsheet,
    title: 'Rekap Manual',
    description: 'Guru menghabiskan waktu berjam-jam untuk merekap absensi secara manual setiap bulan.',
    color: 'from-amber-500 to-orange-600',
    iconBg: 'bg-amber-500/10',
    iconColor: 'text-amber-400',
  },
  {
    icon: EyeOff,
    title: 'Sulit Monitoring',
    description: 'Pihak sekolah kesulitan memantau kehadiran siswa secara realtime dan akurat.',
    color: 'from-violet-500 to-purple-600',
    iconBg: 'bg-violet-500/10',
    iconColor: 'text-violet-400',
  },
  {
    icon: WifiOff,
    title: 'Orang Tua Tidak Tahu',
    description: 'Orang tua tidak mendapat informasi kehadiran anak di sekolah secara realtime.',
    color: 'from-blue-500 to-indigo-600',
    iconBg: 'bg-blue-500/10',
    iconColor: 'text-blue-400',
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Problems() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden" style={{ background: '#0f0f1a' }}>
      {/* Subtle top border glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-primary-500/30 to-transparent" />

      <div className="container-custom mx-auto px-6" ref={ref}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-2xl mx-auto mb-16 lg:mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-sm font-medium mb-6">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
            </svg>
            Masalah Umum
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-5 tracking-tight">
            Masalah Absensi{' '}
            <span className="text-gradient">Tradisional</span>
          </h2>
          <p className="text-lg text-muted-400 leading-relaxed">
            Sistem absensi konvensional menciptakan berbagai masalah yang menghambat efisiensi dan akurasi pendataan kehadiran siswa.
          </p>
        </motion.div>

        {/* Problem cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {problems.map((problem) => (
            <motion.div key={problem.title} variants={cardVariants}>
              <div className="group relative h-full p-6 rounded-2xl bg-dark-800/60 border border-white/5 hover:border-white/10 transition-all duration-500 hover:-translate-y-1">
                {/* Hover glow */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${problem.color} opacity-0 group-hover:opacity-[0.04] transition-opacity duration-500`} />

                <div className="relative z-10">
                  <div className={`w-12 h-12 rounded-xl ${problem.iconBg} flex items-center justify-center mb-5`}>
                    <problem.icon className={`w-6 h-6 ${problem.iconColor}`} />
                  </div>
                  <h3 className="text-lg font-bold font-display text-white mb-2.5">{problem.title}</h3>
                  <p className="text-sm text-muted-400 leading-relaxed">{problem.description}</p>
                </div>

                {/* Bottom accent line */}
                <div className={`absolute bottom-0 left-6 right-6 h-px bg-gradient-to-r ${problem.color} opacity-0 group-hover:opacity-40 transition-opacity duration-500`} />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
