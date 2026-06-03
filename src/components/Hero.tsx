import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  }),
};

const floatAnimation = {
  y: [0, -15, 0],
  transition: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
};

export default function Hero() {
  return (
    <section
      id="beranda"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white"
    >
      {/* Minimal background - very subtle */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/3 w-72 h-72 rounded-full bg-emerald-50/30 blur-3xl opacity-40" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-blue-50/20 blur-3xl opacity-30" />
      </div>

      {/* Floating Badge - Left Top */}
      <motion.div
        animate={floatAnimation}
        className="absolute left-8 top-32 md:left-20 md:top-40 z-20"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="px-4 py-2 rounded-full bg-gray-900 text-white text-xs md:text-sm font-semibold shadow-lg backdrop-blur-sm"
        >
          1,247 Siswa Total
        </motion.div>
      </motion.div>



      {/* Main Content - Centered */}
      <div className="container-custom mx-auto px-6 pt-32 md:pt-40 pb-20 md:pb-24 relative z-10 flex flex-col items-center text-center">
        {/* Small Badge */}
        <motion.div
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mb-6 md:mb-8"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 border border-gray-200 text-gray-700 text-xs md:text-sm font-medium">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            Teknologi AI terdepan untuk sekolah modern
          </div>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          custom={1}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="font-sans text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-gray-900 mb-6 md:mb-8 max-w-4xl"
        >
          Absensi Sekolah Modern dengan{' '}
          <span className="relative inline-block">
            <span className="relative">AI & GPS</span>
            <svg
              className="absolute bottom-0 left-0 w-full h-2 text-emerald-400"
              viewBox="0 0 100 10"
              preserveAspectRatio="none"
              style={{ filter: 'drop-shadow(0 0 3px rgba(16, 185, 129, 0.6))' }}
            >
              <path d="M 0,8 Q 25,2 50,8 T 100,8" fill="none" stroke="currentColor" strokeWidth="2" />
            </svg>
          </span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          custom={2}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="text-base md:text-lg text-gray-600 leading-relaxed mb-8 md:mb-12 max-w-2xl"
        >
          Digitalisasi absensi dengan Face Recognition, Geo-Fencing, dan notifikasi WhatsApp otomatis. Aman, cepat, dan tanpa mesin fingerprint.
        </motion.p>

        {/* CTA Buttons - Centered */}
        <motion.div
          custom={3}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="flex flex-col sm:flex-row gap-4 mb-12 md:mb-16 justify-center"
        >
          <a
            href="#kontak"
            className="inline-flex items-center justify-center px-8 py-3.5 md:py-4 text-sm md:text-base font-semibold text-white rounded-lg bg-blue-600 hover:bg-blue-700 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
          >
            Mulai Gratis →
          </a>
          <a
            href="#demo"
            className="inline-flex items-center justify-center px-8 py-3.5 md:py-4 text-sm md:text-base font-semibold text-gray-700 rounded-lg border-2 border-gray-300 bg-white hover:bg-gray-50 transition-all duration-300"
          >
            Lihat Demo →
          </a>
        </motion.div>

        {/* Footer Text */}
        <motion.div
          custom={4}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="text-center text-sm md:text-base text-gray-600 mt-12 md:mt-16"
        >
      
        </motion.div>
      </div>
    </section>
  );
}
