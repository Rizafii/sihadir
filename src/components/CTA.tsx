import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight, Sparkles, CheckCircle2, Mail } from 'lucide-react';

export default function CTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <section id="kontak" className="relative py-16 lg:py-24 overflow-hidden bg-white">
      {/* Decorative Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] rounded-full bg-blue-100/30 blur-[150px]" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-emerald-100/20 blur-[120px]" />
      </div>

      <div className="container-custom mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="max-w-4xl mx-auto"
        >
          {/* Main Card Wrapper */}
          <div className="relative p-8 lg:p-14 rounded-[2rem] bg-gradient-to-br from-white to-gray-50 border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.06)] overflow-hidden text-center">
            
            {/* Inner glow */}
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-emerald-500/10 rounded-full blur-3xl" />

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-blue-200 bg-blue-50 mb-6"
            >
              <span className="text-blue-600 text-[11px] font-bold uppercase tracking-wider">
                Mulai gratis — Tanpa perlu kartu kredit
              </span>
            </motion.div>

            <h2 className="font-display text-2xl sm:text-3xl lg:text-[2.75rem] font-bold text-gray-900 mb-5 leading-[1.15] tracking-tight">
              Siap merevolusi{' '}
              <span className="text-blue-600">sistem absensi</span>{' '}
              sekolah Anda?
            </h2>

            <p className="text-[14px] lg:text-[16px] text-gray-600 leading-relaxed mb-10 max-w-2xl mx-auto">
              Bergabunglah dengan puluhan sekolah yang telah beralih ke sistem absensi digital. Setup hanya 5 menit, langsung bisa digunakan.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
              <motion.a
                href="https://wa.me/6282133289048?text=Halo%2C%20saya%20tertarik%20dengan%20Sihadir"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group inline-flex items-center justify-center gap-2.5 w-full sm:w-auto px-8 py-3.5 text-[15px] font-bold text-white rounded-xl bg-blue-600 hover:bg-blue-700 shadow-md shadow-blue-600/20 hover:shadow-lg transition-all duration-300"
              >
                Hubungi via WhatsApp
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.a>
              <a
                href="mailto:info@sihadir.id"
                className="inline-flex items-center justify-center gap-2.5 w-full sm:w-auto px-8 py-3.5 text-[15px] font-bold text-gray-700 rounded-xl border border-gray-200 bg-white hover:bg-gray-50 hover:border-gray-300 transition-all duration-300"
              >
                <Mail className="w-4 h-4" />
                Kirim Email
              </a>
            </div>

            {/* Trust elements */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.5, duration: 0.7 }}
              className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-[13px] font-medium text-gray-600"
            >
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span>Uji coba gratis 30 hari</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span>Setup mudah dan cepat</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span>Dukungan penuh</span>
              </div>
            </motion.div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
