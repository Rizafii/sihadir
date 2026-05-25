import { motion, useInView, animate } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

interface CounterProps {
  target: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  isInView: boolean;
}

function Counter({ target, suffix = '', prefix = '', duration = 2, isInView }: CounterProps) {
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    const controls = animate(0, target, {
      duration,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (value) => setDisplay(Math.round(value)),
    });

    return () => controls.stop();
  }, [isInView, target, duration]);

  return (
    <span>
      {prefix}{display.toLocaleString()}{suffix}
    </span>
  );
}

const stats = [
  {
    value: 10000,
    suffix: '+',
    label: 'Siswa Terdaftar',
    description: 'Aktif menggunakan Sihadir',
    gradient: 'from-primary-400 to-primary-600',
    iconPath: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z',
  },
  {
    value: 99.9,
    suffix: '%',
    label: 'Akurasi Kehadiran',
    description: 'Face Recognition + GPS',
    gradient: 'from-emerald-400 to-emerald-600',
    iconPath: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
  },
  {
    value: 5,
    suffix: ' Detik',
    label: 'Proses Absensi',
    description: 'Cepat dan akurat',
    gradient: 'from-accent-400 to-accent-600',
    iconPath: 'M13 10V3L4 14h7v7l9-11h-7z',
  },
  {
    value: 50,
    suffix: '+',
    label: 'Sekolah Mitra',
    description: 'Dan terus bertambah',
    gradient: 'from-violet-400 to-violet-600',
    iconPath: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4',
  },
];

export default function Statistics() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden" style={{ background: 'linear-gradient(180deg, #0f0f1a 0%, #0a0a18 50%, #0f0f1a 100%)' }}>
      {/* Background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-primary-500/20 to-transparent" />
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full bg-primary-600/5 blur-[150px]" />
      </div>

      <div className="container-custom mx-auto px-6" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-5 tracking-tight">
            Dipercaya oleh{' '}
            <span className="text-gradient">Banyak Sekolah</span>
          </h2>
          <p className="text-lg text-muted-400 leading-relaxed">
            Angka-angka yang menunjukkan dampak nyata Sihadir di dunia pendidikan Indonesia.
          </p>
        </motion.div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + index * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="group relative text-center p-6 lg:p-8 rounded-2xl bg-dark-800/40 border border-white/[0.06] hover:border-white/[0.12] transition-all duration-500"
            >
              {/* Icon */}
              <div className={`w-14 h-14 mx-auto mb-5 rounded-2xl bg-gradient-to-br ${stat.gradient} flex items-center justify-center shadow-lg`}>
                <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d={stat.iconPath} />
                </svg>
              </div>

              {/* Counter */}
              <div className="text-3xl lg:text-4xl font-extrabold font-display text-white mb-2">
                <Counter target={stat.value} suffix={stat.suffix} isInView={isInView} />
              </div>
              <div className="text-sm font-semibold text-white/80 mb-1">{stat.label}</div>
              <div className="text-xs text-muted-400">{stat.description}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
