# 📋 Ringkasan Web App: Sihadir — Sistem Absensi Siswa Cerdas

> Dokumen ini merupakan konteks lengkap untuk AI dalam membuat presentasi, proposal, pengembangan, dan dokumentasi sistem Sihadir.

---

# 1. Overview Produk

## Tentang Sistem

**Sihadir** adalah sistem absensi siswa berbasis web yang dirancang untuk sekolah menengah (SMK/SMA) dengan teknologi modern berbasis:

- Face Recognition berbasis AI
- Verifikasi lokasi GPS (Geo-fencing)
- Notifikasi WhatsApp otomatis
- Dashboard monitoring realtime

Sistem ini membantu sekolah melakukan digitalisasi absensi dengan lebih aman, efisien, dan modern tanpa memerlukan mesin fingerprint.

---

## Nama Produk

| Item | Detail |
|---|---|
| Nama Sistem | Sihadir |
| Nama Repository | AbsensiRPL |
| Target Pengguna | SMK / SMA |
| Platform | Web-based |

---

# 2. Masalah Yang Diselesaikan

| Masalah Sekolah | Solusi Sihadir |
|---|---|
| Titip absen antar siswa | Face recognition berbasis AI |
| Siswa absen dari luar sekolah | GPS radius sekolah |
| Orang tua tidak mengetahui kehadiran anak | WhatsApp otomatis |
| Rekap absensi manual memakan waktu | Dashboard realtime + export Excel |
| Pengajuan izin sering tercecer | Sistem izin digital |

---

# 3. Teknologi Yang Digunakan

## Backend

| Komponen | Teknologi |
|---|---|
| Framework | Laravel 13 |
| Bahasa | PHP 8.3 |
| Database | MySQL |
| Queue | Laravel Queue |
| Testing | Pest PHP |
| Export Excel | Laravel Excel |

---

## Frontend

| Komponen | Teknologi |
|---|---|
| CSS Framework | Tailwind CSS |
| JavaScript | Alpine.js |
| Build Tool | Vite |
| Face Detection | face-api.js |
| HTTP Client | Axios |

---

## Integrasi Eksternal

| Layanan | Fungsi |
|---|---|
| Fonnte API | Notifikasi WhatsApp |
| FaceHub API | Face recognition |
| GPS Browser API | Validasi lokasi siswa |

---

# 4. Fitur Utama

# 🔐 A. Face Recognition Attendance

Siswa melakukan absensi menggunakan kamera perangkat.

### Cara Kerja:
1. Kamera browser aktif
2. Sistem mendeteksi wajah siswa
3. Face embedding dikirim ke server
4. Sistem mencocokkan wajah menggunakan AI
5. Jika valid → absensi berhasil

### Keunggulan:
- Mengurangi titip absen
- Tidak perlu fingerprint
- Lebih modern & fleksibel
- Bisa menggunakan laptop maupun smartphone

---

# 📍 B. GPS Geo-Fencing

Sistem memastikan siswa berada di area sekolah saat absensi.

### Fitur:
- Radius sekolah dapat diatur admin
- Validasi koordinat GPS otomatis
- Menggunakan formula Haversine untuk perhitungan jarak
- Bisa diaktifkan/nonaktifkan sekolah

### Manfaat:
- Mencegah absensi dari luar sekolah
- Memastikan kehadiran valid
- Mendukung sistem hybrid

---

# 📱 C. Notifikasi WhatsApp Otomatis

Terintegrasi dengan WhatsApp menggunakan Fonnte API.

## Jenis Notifikasi

| Event | Target |
|---|---|
| Belum absen masuk | Siswa |
| Belum checkout | Siswa |
| Pengajuan izin baru | Guru |
| Informasi kehadiran | Orang tua |

### Keunggulan:
- Realtime
- Familiar digunakan sekolah
- Membantu monitoring siswa

---

# 📊 D. Dashboard Realtime

## Dashboard Admin

Menampilkan:
- Total siswa
- Hadir hari ini
- Terlambat
- Belum absen
- Aktivitas realtime

## Dashboard Siswa

Menampilkan:
- Status absensi hari ini
- Riwayat absensi
- Riwayat izin
- Countdown checkout

---

# 📝 E. Sistem Izin & Sakit Digital

### Fitur:
- Upload surat izin
- Approval guru/admin
- Status pending / approved / rejected
- Riwayat pengajuan tersimpan otomatis

### Workflow:
Pending → Review Guru → Approved / Rejected

---

# 📈 F. Laporan Absensi Otomatis

## Fitur Laporan:
- Filter tanggal
- Filter kelas
- Statistik kehadiran
- Export Excel otomatis
- Rekap realtime

### Manfaat:
- Mempermudah administrasi sekolah
- Menghemat waktu guru
- Tidak perlu rekap manual

---

# ⚙️ G. Pengaturan Sistem

Admin dapat mengatur:
- Jam masuk
- Jam pulang
- Radius GPS
- Toleransi keterlambatan
- Threshold face recognition

---

# 5. Role & Hak Akses

| Role | Hak Akses |
|---|---|
| Admin / Guru | Monitoring, laporan, approval izin, pengaturan |
| Siswa | Absensi, izin/sakit, dashboard pribadi |

---

# 6. Database Schema Ringkas

| Tabel | Fungsi |
|---|---|
| users | Data login |
| students | Data siswa |
| attendances | Data absensi |
| absence_requests | Pengajuan izin |
| settings | Pengaturan sistem |
| teacher_contacts | Kontak guru |
| fonnte_accounts | Integrasi WhatsApp |

---

# 7. Status Kehadiran

| Status | Label |
|---|---|
| arrived | Hadir |
| late | Terlambat |
| departed | Pulang |
| early_leave | Pulang Cepat |
| alpha | Alpha |
| sick | Sakit |
| permission | Izin |

---

# 8. Scheduled Tasks

| Jadwal | Fungsi |
|---|---|
| Setiap menit | Reminder WhatsApp |
| Setiap menit | Notifikasi izin baru |
| Setiap malam | Auto alpha & checkout |

---

# 9. Keunggulan Kompetitif

| Aspek | Sihadir |
|---|---|
| Verifikasi Kehadiran | Face Recognition + GPS |
| Notifikasi | WhatsApp otomatis |
| Platform | Web-based |
| Administrasi | Realtime & otomatis |
| Laporan | Export Excel |
| Biaya | Lebih murah tanpa fingerprint |
| Fleksibilitas | Bisa di HP & laptop |

---

# 10. Keunggulan Utama Untuk Sekolah

## Untuk Guru
- Monitoring realtime
- Rekap otomatis
- Administrasi lebih cepat

## Untuk Siswa
- Absensi lebih mudah
- Bisa menggunakan smartphone

## Untuk Orang Tua
- Mendapat notifikasi kehadiran
- Monitoring anak lebih mudah

---

# 11. Deployment

| Aspek | Detail |
|---|---|
| Hosting | VPS / Shared Hosting |
| Database | MySQL |
| SSL | HTTPS |
| Scheduler | Cron Job Laravel |
| Storage | Local/Public Storage |

---

# 12. Roadmap Pengembangan

1. Mobile App Android/iOS
2. Parent Portal
3. Push Notification
4. Analytics Dashboard
5. Multi-School System
6. Kalender Akademik
7. Integrasi Dapodik
8. QR Code Attendance
9. Liveness Detection AI

---

# 13. Kesimpulan

Sihadir merupakan solusi absensi sekolah modern berbasis web yang menggabungkan:

- Face Recognition AI
- GPS Validation
- WhatsApp Automation
- Dashboard Realtime

untuk membantu sekolah melakukan digitalisasi absensi secara lebih aman, efisien, dan profesional.

Sistem ini dirancang agar:
- mudah digunakan,
- fleksibel,
- hemat biaya,
- dan siap diterapkan di lingkungan sekolah modern.