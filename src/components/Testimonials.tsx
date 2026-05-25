import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Dr. Haryanto, M.Pd.',
    role: 'Kepala Sekolah',
    school: 'SMKN 1 Bandung',
    avatar: 'H',
    rating: 5,
    text: 'Sihadir mengubah total cara kami mengelola absensi. Tidak ada lagi titip absen, data akurat, dan orang tua bisa memantau langsung. Sangat recommended!',
    gradient: 'from-primary-500/20 to-accent-500/20',
  },
  {
    name: 'Ibu Sari Dewi, S.Pd.',
    role: 'Wali Kelas XII RPL',
    school: 'SMA Negeri 3 Jakarta',
    avatar: 'S',
    rating: 5,
    text: 'Sebagai guru, saya tidak perlu lagi rekap manual. Dashboard-nya sangat intuitif dan laporan bisa di-export Excel kapan saja. Hemat waktu dan tenaga!',
    gradient: 'from-emerald-500/20 to-accent-500/20',
  },
  {
    name: 'Pak Ahmad Fauzi',
    role: 'Orang Tua Siswa',
    school: 'SMKN 2 Surabaya',
    avatar: 'A',
    rating: 5,
    text: 'Sekarang saya langsung dapat notifikasi WhatsApp kalau anak sudah sampai sekolah. Sebagai orang tua yang bekerja, fitur ini sangat menenangkan.',
    gradient: 'from-violet-500/20 to-primary-500/20',
  },
];

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="testimoni" className="relative py-24 lg:py-32 overflow-hidden" style={{ background: 'linear-gradient(180deg, #0f0f1a 0%, #111127 100%)' }}>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-accent-500/20 to-transparent" />
      <div className="absolute bottom-1/3 right-0 w-[400px] h-[400px] rounded-full bg-primary-600/5 blur-[120px] pointer-events-none" />

      <div className="container-custom mx-auto px-6" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-sm font-medium mb-6">
            <Star className="w-4 h-4 fill-amber-400" />
            Testimoni
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-5 tracking-tight">
            Apa Kata{' '}
            <span className="text-gradient">Mereka?</span>
          </h2>
          <p className="text-lg text-muted-400 leading-relaxed">
            Pendapat dari sekolah dan orang tua yang sudah merasakan manfaat Sihadir.
          </p>
        </motion.div>

        {/* Testimonial cards */}
        <div className="grid md:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {testimonials.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.15 + index * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="group relative h-full p-6 rounded-2xl bg-dark-800/40 border border-white/[0.06] hover:border-white/[0.12] transition-all duration-500 backdrop-blur-sm hover:-translate-y-1">
                {/* Background glow */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />

                <div className="relative z-10">
                  {/* Stars */}
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: item.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="text-sm text-muted-400 leading-relaxed mb-6 italic">
                    "{item.text}"
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-3 pt-4 border-t border-white/[0.06]">
                    <div className={`w-11 h-11 rounded-full bg-gradient-to-br ${item.gradient} flex items-center justify-center text-sm font-bold text-white shadow-lg`}>
                      {item.avatar}
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-white">{item.name}</div>
                      <div className="text-xs text-muted-400">{item.role}</div>
                      <div className="text-xs text-primary-400">{item.school}</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
