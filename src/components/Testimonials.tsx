import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Dr. Dwi Titik Irdiyanti, S.Si., M.Pd.',
    role: 'Kepala Sekolah',
    school: 'SMK Negeri 6 Surakarta',
    avatar: 'D',
    rating: 5,
    text: 'Sihadir mengubah total cara kami mengelola absensi. Tidak ada lagi titip absen, data akurat, dan orang tua bisa memantau langsung. Sangat recommended!',
    gradient: 'from-primary-500/20 to-accent-500/20',
  },
  {
    name: 'Pak Binar Aris Purwaka, S.Kom.',
    role: 'Wali Kelas XII RPL',
    school: 'SMK Negeri 6 Surakarta',
    avatar: 'B',
    rating: 5,
    text: 'Sebagai guru, saya tidak perlu lagi rekap manual. Dashboard-nya sangat intuitif dan laporan bisa di-export Excel kapan saja. Hemat waktu dan tenaga!',
    gradient: 'from-emerald-500/20 to-accent-500/20',
  },
  {
    name: 'Pak Ahmad Fauzi',
    role: 'Orang Tua Siswa',
    school: 'SMK Negeri 6 Surakarta',
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
    <section id="testimoni" className="relative py-24 lg:py-32 overflow-hidden bg-white">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-accent-200/50 to-transparent" />
      <div className="absolute bottom-1/3 right-0 w-[400px] h-[400px] rounded-full bg-primary-100/20 blur-[120px] pointer-events-none" />

      <div className="container-custom mx-auto px-6" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-100/50 border border-amber-200 text-amber-700 text-sm font-medium mb-6">
            <Star className="w-4 h-4 fill-amber-500" />
            TESTIMONI
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-5 tracking-tight">
            Apa kata{' '}
            <span className="text-primary-600">pengguna kami</span>
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Masukan dari sekolah dan orang tua yang telah merasakan manfaat Sihadir.
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
              <div className="group relative h-full p-6 rounded-2xl bg-white/50 border border-gray-200/50 hover:border-gray-300 transition-all duration-500 backdrop-blur-sm hover:-translate-y-1 hover:shadow-lg hover:shadow-black/5">
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
                  <p className="text-sm text-gray-700 leading-relaxed mb-6 italic">
                    "{item.text}"
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-3 pt-4 border-t border-gray-200/50">
                    <div className={`w-11 h-11 rounded-full bg-gradient-to-br ${item.gradient} flex items-center justify-center text-sm font-bold text-white shadow-md`}>
                      {item.avatar}
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-gray-900">{item.name}</div>
                      <div className="text-xs text-gray-600">{item.role}</div>
                      <div className="text-xs text-primary-600">{item.school}</div>
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
