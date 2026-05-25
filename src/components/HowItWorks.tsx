import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Camera, MapPin, CheckCircle2, Bell } from 'lucide-react';

const steps = [
  {
    icon: Camera,
    number: '01',
    title: 'Scan Wajah',
    description: 'Siswa membuka kamera perangkat dan sistem mendeteksi wajah secara otomatis menggunakan AI.',
    color: 'from-primary-500 to-primary-600',
    glowColor: 'shadow-primary-500/20',
  },
  {
    icon: MapPin,
    number: '02',
    title: 'Validasi GPS',
    description: 'Sistem memverifikasi lokasi siswa berada dalam radius sekolah menggunakan GPS geo-fencing.',
    color: 'from-accent-400 to-accent-600',
    glowColor: 'shadow-accent-500/20',
  },
  {
    icon: CheckCircle2,
    number: '03',
    title: 'Absensi Berhasil',
    description: 'Setelah wajah dan lokasi terverifikasi, kehadiran siswa tercatat otomatis di sistem.',
    color: 'from-emerald-400 to-emerald-600',
    glowColor: 'shadow-emerald-500/20',
  },
  {
    icon: Bell,
    number: '04',
    title: 'Notifikasi Terkirim',
    description: 'Orang tua menerima notifikasi WhatsApp otomatis bahwa anak mereka sudah absen di sekolah.',
    color: 'from-violet-400 to-violet-600',
    glowColor: 'shadow-violet-500/20',
  },
];

export default function HowItWorks() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="cara-kerja" className="relative py-24 lg:py-32 overflow-hidden" style={{ background: 'linear-gradient(180deg, #111127 0%, #0f1521 50%, #0d1117 100%)' }}>
      {/* Background elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary-600/5 blur-[150px] pointer-events-none" />

      <div className="container-custom mx-auto px-6" ref={ref}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-2xl mx-auto mb-16 lg:mb-24"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium mb-6">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            Mudah & Cepat
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-5 tracking-tight">
            Cara Kerja{' '}
            <span className="text-gradient-warm">Sihadir</span>
          </h2>
          <p className="text-lg text-muted-400 leading-relaxed">
            Proses absensi yang simple dan cepat — hanya dalam hitungan detik, kehadiran tercatat dan terkonfirmasi.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-5xl mx-auto">
          {/* Connecting line — desktop */}
          <div className="hidden lg:block absolute top-[60px] left-0 right-0 h-[2px]">
            <motion.div
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ delay: 0.3, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="h-full bg-gradient-to-r from-primary-500/40 via-accent-500/40 to-emerald-500/40 origin-left"
            />
          </div>

          <div className="grid lg:grid-cols-4 gap-8 lg:gap-6">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + index * 0.15, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="relative"
              >
                {/* Mobile connecting line */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden absolute top-[76px] left-[30px] w-[2px] h-[calc(100%+32px)] bg-gradient-to-b from-white/10 to-transparent" />
                )}

                <div className="flex lg:flex-col items-start lg:items-center gap-5 lg:gap-0">
                  {/* Step circle */}
                  <div className="relative flex-shrink-0">
                    <div className={`w-[60px] h-[60px] rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-xl ${step.glowColor} z-10 relative`}>
                      <step.icon className="w-7 h-7 text-white" />
                    </div>
                    {/* Number badge */}
                    <div className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-dark-800 border border-white/10 flex items-center justify-center text-[10px] font-bold text-white font-display z-20">
                      {step.number}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="lg:text-center lg:mt-6">
                    <h3 className="text-lg font-bold font-display text-white mb-2">
                      {step.title}
                    </h3>
                    <p className="text-sm text-muted-400 leading-relaxed max-w-xs">
                      {step.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
