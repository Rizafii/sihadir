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
    value: 6500,
    suffix: '+',
    label: 'Siswa Terdaftar',
    description: 'Aktif menggunakan SiHadir',
  },
  {
    value: 100,
    suffix: ' %',
    label: 'Akurasi Kehadiran',
    description: 'Face Recognition + GPS',
  },
  {
    value: 5,
    suffix: ' Detik',
    label: 'Proses Absensi',
    description: 'Cepat & Akurat',
  },
  {
    value: 2,
    suffix: '+',
    label: 'Sekolah Mitra',
    description: 'Percaya dengan SiHadir',
  },
];

export default function Statistics() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <section className="relative py-16 lg:py-24 bg-white">
      <div className="container-custom mx-auto px-6" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center max-w-3xl mx-auto mb-12 lg:mb-16"
        >
          <h2 className="font-display text-2xl sm:text-3xl lg:text-[2.25rem] font-bold text-gray-900 mb-4 leading-[1.2] tracking-tight">
            Solusi Kehadiran <span className="text-blue-600">Digital</span> yang Telah Teruji
          </h2>
          <p className="text-[14px] lg:text-[15px] text-gray-600 leading-relaxed max-w-xl mx-auto">
            Angka yang berbicara tentang bagaimana <span className="text-blue-600 font-semibold">Si</span>Hadir mentransformasi sistem absensi konvensional menjadi lebih cerdas.
          </p>
        </motion.div>

        {/* Stats text row */}
        <div className="flex flex-col md:flex-row flex-wrap justify-center md:justify-between items-center gap-10 lg:gap-4 max-w-5xl mx-auto">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + index * 0.1, duration: 0.6, ease: 'easeOut' }}
              className="text-center flex-1 min-w-[200px]"
            >
              {/* Counter */}
              <div className="text-[2rem] lg:text-[2.25rem] font-bold font-display text-gray-900 mb-3">
                <Counter target={stat.value} suffix={stat.suffix} isInView={isInView} />
              </div>
              <div className="text-[13px] lg:text-[14px] font-medium text-gray-800 mb-1">{stat.label}</div>
              <div className="text-[12px] lg:text-[13px] text-gray-600">
                {stat.description.split('SiHadir').map((part, i, arr) => (
                  <span key={i}>
                    {part}
                    {i < arr.length - 1 && <span><span className="text-blue-600 font-semibold">Si</span>Hadir</span>}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
