import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { UserX, FileSpreadsheet, BellOff } from 'lucide-react';

const problems = [
  {
    icon: UserX,
    title: 'Titip Absen',
    description: 'Siswa mudah menitipkan absen ke teman karena tidak ada verifikasi identitas yang kuat.',
    color: 'text-red-600',
    bgLight: 'bg-red-50',
    borderColor: 'border-red-100',
    align: 'self-start',
  },
  {
    icon: FileSpreadsheet,
    title: 'Rekap Manual',
    description: 'Guru menghabiskan waktu berjam-jam untuk merekap absensi secara manual setiap bulan.',
    color: 'text-amber-600',
    bgLight: 'bg-amber-50',
    borderColor: 'border-amber-100',
    align: 'self-end',
  },
  {
    icon: BellOff,
    title: 'Orang Tua Tidak Tahu',
    description: 'Orang tua tidak mendapat informasi kehadiran anak di sekolah secara realtime.',
    color: 'text-orange-600',
    bgLight: 'bg-orange-50',
    borderColor: 'border-orange-100',
    align: 'self-center',
  },
];

export default function Problems() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <section className="relative py-16 lg:py-20 overflow-hidden bg-white" id="masalah">
      {/* Decorative Blob Removed */}

      <div className="container-custom mx-auto px-6" ref={ref}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 items-center">
          
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="flex flex-col items-start max-w-lg lg:ml-8"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full border border-red-200 bg-red-50 mb-6">
              <span className="text-red-600 text-xs font-bold uppercase tracking-wider">
                Masalah
              </span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-[2.5rem] font-bold text-slate-800 mb-6 leading-tight tracking-tight">
              Masalah nyata yang kami selesaikan
            </h2>
            <p className="text-base text-slate-500 leading-relaxed">
              Sistem absensi modern mengatasi tantangan kritis yang berdampak pada operasional sekolah dan kemampuan monitoring waktu nyata.
            </p>
          </motion.div>

          {/* Right Content - Staggered Cards */}
          <div className="relative w-full max-w-lg mx-auto lg:ml-auto lg:mr-0 flex flex-col gap-5 py-4">
            {problems.map((problem, index) => (
              <motion.div
                key={problem.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15, ease: 'easeOut' }}
                className={`w-full sm:w-[85%] relative bg-white p-5 rounded-2xl shadow-sm border border-slate-100 flex gap-4 transition-all duration-300 hover:shadow-md hover:border-slate-200 ${problem.align}`}
              >
                <div className={`w-12 h-12 rounded-xl ${problem.bgLight} border ${problem.borderColor} flex items-center justify-center flex-shrink-0`}>
                  <problem.icon className={`w-6 h-6 ${problem.color}`} strokeWidth={1.5} />
                </div>
                <div className="flex flex-col justify-center gap-1">
                  <h3 className="text-base font-bold text-slate-800 font-display">
                    {problem.title}
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    {problem.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
