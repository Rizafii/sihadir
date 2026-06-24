import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Dr. Dwi Titik Irdiyanti, S.Si., M.Pd.',
    role: 'Kepala Sekolah',
    school: 'SMK Negeri 6 Surakarta',
    avatar: 'D',
    rating: 5,
    text: 'SiHadir mengubah total cara kami mengelola absensi. Tidak ada lagi titip absen, data akurat, dan orang tua bisa memantau langsung. Sangat recommended!',
    bg: 'bg-blue-500',
  },
  {
    name: 'Pak Binar Aris Purwaka, S.Kom.',
    role: 'Wali Kelas XII RPL',
    school: 'SMK Negeri 6 Surakarta',
    avatar: 'B',
    rating: 5,
    text: 'Sebagai guru, saya tidak perlu lagi rekap manual. Dashboard-nya sangat intuitif dan laporan bisa di-export Excel kapan saja. Hemat waktu dan tenaga!',
    bg: 'bg-emerald-500',
  },
  {
    name: 'Pak Ahmad Fauzi',
    role: 'Orang Tua Siswa',
    school: 'SMK Negeri 6 Surakarta',
    avatar: 'A',
    rating: 5,
    text: 'Sekarang saya langsung dapat notifikasi WhatsApp kalau anak sudah sampai sekolah. Sebagai orang tua yang bekerja, fitur ini sangat menenangkan.',
    bg: 'bg-amber-500',
  },
];

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <section id="testimoni" className="relative py-12 lg:py-20 overflow-hidden bg-white">
      {/* Decorative Blob Removed */}

      <div className="container-custom mx-auto px-6 relative z-10" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center max-w-2xl mx-auto mb-10 lg:mb-14"
        >
          <div className="inline-flex items-center px-3 py-1.5 rounded-full border border-blue-200 bg-blue-50 mb-4">
            <span className="text-blue-600 text-[11px] font-bold uppercase tracking-wider">
              TESTIMONI
            </span>
          </div>
          <h2 className="font-display text-2xl sm:text-3xl lg:text-[2.25rem] font-bold text-slate-800 mb-4 leading-[1.1] tracking-tight">
            Apa kata <span className="text-blue-500">pengguna kami</span>
          </h2>
          <p className="text-[14px] lg:text-[16px] text-slate-500 leading-relaxed max-w-xl mx-auto">
            Masukan dari sekolah dan orang tua yang telah merasakan manfaat SiHadir.
          </p>
        </motion.div>

        {/* Testimonial cards */}
        <div className="grid md:grid-cols-3 gap-5 lg:gap-6 max-w-6xl mx-auto">
          {testimonials.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.15 + index * 0.1, duration: 0.6, ease: 'easeOut' }}
              className="h-full"
            >
              <div className="group relative h-full flex flex-col p-6 lg:p-8 rounded-[1.25rem] bg-white border border-slate-100 shadow-[0_2px_10px_rgb(0,0,0,0.02)] hover:shadow-sm hover:border-slate-200 transition-all duration-300">
                
                {/* Decorative Quote Icon */}
                <div className={`absolute top-6 right-6 p-2 rounded-full opacity-50 transition-opacity group-hover:opacity-100`}>
                  <Quote className="w-4 h-4 text-slate-300" />
                </div>

                {/* Stars */}
                <div className="flex gap-1 mb-5">
                  {Array.from({ length: item.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-[14px] lg:text-[15px] text-slate-600 leading-relaxed mb-8 flex-1 italic">
                  "{item.text}"
                </p>

                {/* Author Info */}
                <div className="flex items-center gap-4 mt-auto">
                  <div className={`w-12 h-12 rounded-full ${item.bg} flex items-center justify-center text-sm font-bold text-white shadow-sm`}>
                    {item.avatar}
                  </div>
                  <div>
                    <div className="text-[14px] font-bold text-slate-800 font-display leading-snug">{item.name}</div>
                    <div className="text-[12px] text-slate-500 font-medium">{item.role}</div>
                    <div className="text-[12px] text-blue-500 font-medium">{item.school}</div>
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
