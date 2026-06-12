import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  }),
};

const floatLeft = {
  y: [0, -12, 0],
  x: [0, 4, 0],
  transition: { duration: 5, repeat: Infinity, ease: 'easeInOut' },
};

const floatRight = {
  y: [0, -10, 0],
  x: [0, -5, 0],
  transition: { duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 },
};

export default function Hero() {
  return (
    <section
      id="beranda"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white"
      style={{ paddingTop: '130px', paddingBottom: '40px' }}
    >
      {/* Subtle background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/3 w-72 h-72 rounded-full bg-emerald-50/30 blur-3xl opacity-40" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-blue-50/20 blur-3xl opacity-30" />
      </div>

      {/* Floating Badge - Left: "Akurat & Valid" */}
      <motion.div
        animate={floatLeft}
        className="absolute left-6 top-36 md:left-16 md:top-44 lg:left-24 lg:top-48 z-20 hidden sm:block"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8, x: -20 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="flex items-center gap-2 px-4 py-2.5 rounded-full shadow-lg"
          style={{ background: '#e6f9f1' }}
        >
          <span
            className="w-2.5 h-2.5 rounded-full flex-shrink-0"
            style={{ background: '#00C48C' }}
          />
          <span className="text-xs md:text-sm font-semibold whitespace-nowrap" style={{ color: '#0d7a56' }}>
            Akurat &amp; Valid
          </span>
        </motion.div>
      </motion.div>

      {/* Floating Badge - Right: "Cepat & Praktis" */}
      <motion.div
        animate={floatRight}
        className="absolute right-6 top-36 md:right-16 md:top-44 lg:right-24 lg:top-48 z-20 hidden sm:block"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8, x: 20 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="flex items-center gap-2 px-4 py-2.5 rounded-full shadow-lg text-white text-xs md:text-sm font-semibold whitespace-nowrap"
          style={{ background: '#00C48C' }}
        >
          Cepat &amp; Praktis
        </motion.div>
      </motion.div>

      {/* Main Content */}
      <div className="container-custom mx-auto px-6 relative z-10 flex flex-col items-center text-center">
        {/* Top Badge: "Teknologi AI terdepan untuk Sekolah Modern" */}
        <motion.div
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mb-4 md:mb-6"
        >
          <div
            className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full border text-xs md:text-sm font-medium"
            style={{
              background: '#ffffff',
              borderColor: '#e5e7eb',
              color: '#4b5563',
            }}
          >
            <span
              className="w-2 h-2 rounded-full flex-shrink-0 animate-pulse"
              style={{ background: '#00C48C' }}
            />
            Teknologi AI terdepan untuk Sekolah Modern
          </div>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          custom={1}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="font-bold leading-tight tracking-tight text-gray-900 mb-4 md:mb-5"
          style={{
            fontSize: 'clamp(1.875rem, 4vw, 2.75rem)',
            fontFamily: "'Inter', system-ui, sans-serif",
            maxWidth: '700px',
          }}
        >
          Absensi Sekolah Modern dengan{' '}
          <span className="relative inline-block">
            <span className="relative">AI &amp; GPS</span>
            <svg
              className="absolute bottom-0 left-0 w-full"
              style={{ height: '6px' }}
              viewBox="0 0 100 10"
              preserveAspectRatio="none"
            >
              <path
                d="M 0,8 Q 25,2 50,8 T 100,8"
                fill="none"
                stroke="#00C48C"
                strokeWidth="2.5"
                style={{ filter: 'drop-shadow(0 0 3px rgba(0,196,140,0.5))' }}
              />
            </svg>
          </span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          custom={2}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="leading-relaxed mb-6 md:mb-8"
          style={{
            fontSize: '14px',
            color: '#6b7280',
            maxWidth: '450px',
            fontFamily: "'Inter', system-ui, sans-serif",
          }}
        >
          Digitalisasi absensi dengan Face Recognition, Geo-Fencing dan notifikasi WhatsApp otomatis. Aman, cepat dan tanpa mesin Fingerprint
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          custom={3}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="flex flex-col sm:flex-row gap-3 mb-10 md:mb-12 justify-center"
        >
          <a
            href="#kontak"
            className="inline-flex items-center justify-center font-semibold text-white rounded-md transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
            style={{
              background: '#2196F3',
              padding: '12px 24px',
              fontSize: '14px',
              borderRadius: '6px',
            }}
            onMouseEnter={(e) => {
              (e.target as HTMLElement).style.background = '#1976D2';
            }}
            onMouseLeave={(e) => {
              (e.target as HTMLElement).style.background = '#2196F3';
            }}
          >
            Mulai Sekarang
          </a>
          <a
            href="#hubungi"
            className="inline-flex items-center justify-center font-semibold rounded-md transition-all duration-300 hover:-translate-y-0.5"
            style={{
              background: '#ffffff',
              border: '1px solid #d1d5db',
              color: '#374151',
              padding: '12px 24px',
              fontSize: '14px',
              borderRadius: '6px',
            }}
            onMouseEnter={(e) => {
              (e.target as HTMLElement).style.background = '#f9fafb';
            }}
            onMouseLeave={(e) => {
              (e.target as HTMLElement).style.background = '#ffffff';
            }}
          >
            Hubungi kami
          </a>
        </motion.div>

        {/* Trust Section */}
        <motion.div
          custom={4}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center"
        >
          <p
            className="mb-5 text-center"
            style={{
              fontSize: '13px',
              color: '#9ca3af',
              fontFamily: "'Inter', system-ui, sans-serif",
            }}
          >
            Dipercaya oleh Instansi Pendidikan Negeri &amp; Mitra Resmi Pengadaan
          </p>
          <div className="flex items-center justify-center gap-6">
            <img
              src="./public/Siplah.png"
              alt="SIPLah"
              style={{
                height: '70px',
                width: 'auto',
                objectFit: 'contain',
              }}
            />
            <img
              src="./public/Siplah blibi.png"
              alt="SIPLah Blibli"
              style={{
                height: '90px',
                width: 'auto',
                objectFit: 'contain',
              }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
