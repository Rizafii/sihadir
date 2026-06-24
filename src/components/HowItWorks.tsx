import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Camera, MapPin, CheckCircle2, Bell } from 'lucide-react';

const steps = [
  {
    icon: Camera,
    number: '01',
    title: 'Scan Wajah AI',
    description: 'Buka kamera dari perangkat Anda. Sistem akan langsung mendeteksi dan memverifikasi wajah secara otomatis dalam hitungan detik.',
    iconBg: 'bg-blue-50',
    iconColor: 'text-blue-600',
    borderColor: 'border-blue-100',
  },
  {
    icon: MapPin,
    number: '02',
    title: 'Validasi Lokasi',
    description: 'Sistem memastikan posisi Anda berada tepat di dalam radius sekolah yang diizinkan menggunakan teknologi GPS Geo-fencing.',
    iconBg: 'bg-emerald-50',
    iconColor: 'text-emerald-600',
    borderColor: 'border-emerald-100',
  },
  {
    icon: CheckCircle2,
    number: '03',
    title: 'Kehadiran Tercatat',
    description: 'Data kehadiran langsung masuk ke sistem secara realtime, lengkap dengan bukti foto, waktu yang akurat, dan koordinat lokasi.',
    iconBg: 'bg-amber-50',
    iconColor: 'text-amber-600',
    borderColor: 'border-amber-100',
  },
  {
    icon: Bell,
    number: '04',
    title: 'Notifikasi Otomatis',
    description: 'Laporan kehadiran langsung dikirimkan ke WhatsApp orang tua sebagai bentuk transparansi dan keamanan.',
    iconBg: 'bg-violet-50',
    iconColor: 'text-violet-600',
    borderColor: 'border-violet-100',
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, x: 20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

export default function HowItWorks() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <section id="cara-kerja" className="relative py-16 lg:py-20 bg-white border-y border-slate-100">
      <div className="container-custom mx-auto px-6" ref={ref}>
        
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          
          {/* Left Column: Sticky Header */}
          <div className="lg:w-5/12">
            <motion.div 
              className="sticky top-24"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              <div className="inline-flex items-center px-3 py-1.5 rounded-full border border-emerald-200 bg-emerald-50 mb-6">
                <span className="text-emerald-600 text-[11px] font-bold uppercase tracking-wider">
                  Cara Kerja
                </span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-[2.5rem] font-bold text-slate-800 mb-5 leading-tight tracking-tight">
                Absensi mudah, <br className="hidden lg:block" />
                hanya dalam detik.
              </h2>
              <p className="text-slate-500 text-[15px] leading-relaxed mb-8 max-w-md">
                Kami merancang sistem ini agar siapa saja bisa menggunakannya tanpa bingung. Proses yang tadinya manual dan lama, kini bisa diselesaikan dengan 4 langkah otomatis.
              </p>
              
              <div className="hidden lg:flex items-center gap-4 text-sm font-medium text-slate-800">
                <div className="w-10 h-10 rounded-full bg-white shadow-sm border border-slate-100 flex items-center justify-center">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                </div>
                <span>100% Otomatis & Terintegrasi</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Grid Layout for Steps */}
          <div className="lg:w-7/12">
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-5"
            >
              {steps.map((step) => (
                <motion.div 
                  key={step.number} 
                  variants={itemVariants}
                  className="bg-white p-5 lg:p-6 rounded-[1rem] border border-slate-100 shadow-[0_2px_8px_rgb(0,0,0,0.02)] hover:shadow-sm hover:border-slate-200 transition-all duration-300 flex flex-col h-full"
                >
                  <div className="flex items-center justify-between mb-4">
                    {/* Icon */}
                    <div className={`w-11 h-11 lg:w-12 lg:h-12 rounded-full ${step.iconBg} border ${step.borderColor} flex items-center justify-center`}>
                      <step.icon className={`w-[18px] h-[18px] lg:w-5 lg:h-5 ${step.iconColor}`} />
                    </div>
                    {/* Number Indicator */}
                    <span className="text-[10px] font-bold text-slate-400 font-display bg-slate-50 px-2.5 py-1 rounded-md border border-slate-100">
                      LANGKAH {step.number}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="flex-1 pt-1">
                    <h3 className="font-display font-bold text-slate-800 text-[15px] lg:text-base mb-1.5">
                      {step.title}
                    </h3>
                    <p className="text-[13px] text-slate-500 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}
