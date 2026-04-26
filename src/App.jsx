import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

function App() {
  const [halaman, setHalaman] = useState('home');

  const mySkills = [
    { name: 'HTML', percent: '100%' },
    { name: 'CSS', percent: '90%' },
    { name: 'JavaScript', percent: '80%' },
    { name: 'Bootstrap', percent: '95%' },
    { name: 'MongoDB', percent: '60%' },
    { name: 'Express', percent: '70%' },
    { name: 'Node.js', percent: '70%' },
    { name: 'React JS', percent: '85%' },
  ];

  const myGallery = [
    { 
      title: 'Profil Digital', 
      desc: 'Desain UI interaktif dengan fitur input data siswa dan sistem skor counter.', 
      img: '/Profil Digital.png',
      url: '/dist/index.html' 
    },
    { 
      title: 'Advanced Implementation', 
      desc: 'Sistem E-BIZMART Fullstack (Express & EJS).', 
      img: '/Belajar 2.png',
      url: 'https://e-bizmart-omega.vercel.app/' // Link Vercel yang baru jadi
    },
    { 
      title: 'Full Project Review', 
      desc: 'Hasil akhir modul intensif.', 
      img: '/Belajar 3.png',
      url: '#' 
    },
    { 
      title: 'Game Development', 
      desc: 'Proyek game 2D Construct 3.', 
      img: '/Construct 3.png',
      url: 'https://drive.google.com/drive/folders/16pH3BwqEzrN43YP_pMgqqicV4G1Z28-J?usp=drive_link' 
    },
  ];

  return (
    <div className="d-flex flex-column flex-md-row" style={{ minHeight: '100vh', backgroundColor: '#023030', color: 'white', fontFamily: 'sans-serif', margin: 0 }}>

      {/* Sidebar / Navbar */}
      <nav className="col-12 col-md-3 col-lg-2" style={{ 
        backgroundColor: '#012626', 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        padding: '40px 20px', 
        borderRight: '1px solid #034d4d', 
        borderBottom: '1px solid #034d4d',
        position: 'sticky', 
        top: 0,
        height: 'auto',
        minHeight: '200px', 
        zIndex: 10 
      }}>
        <div style={{ width: '100px', height: '100px', borderRadius: '50%', backgroundColor: '#a3b18a', marginBottom: '20px', border: '4px solid #ccff00', overflow: 'hidden' }}>
          <img src="/apipi.png" alt="Foto Afif" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>

        <div className="d-flex flex-row flex-md-column gap-3 mt-2 mt-md-4 text-center">
          <a href="#" onClick={(e) => { e.preventDefault(); setHalaman('home'); }} style={{ color: halaman === 'home' ? '#ccff00' : 'white', textDecoration: 'none', fontWeight: 'bold', fontSize: '0.9rem' }}>Home</a>
          <a href="#" onClick={(e) => { e.preventDefault(); setHalaman('data'); }} style={{ color: halaman === 'data' ? '#ccff00' : 'white', textDecoration: 'none', fontWeight: 'bold', fontSize: '0.9rem' }}>Data</a>
          <a href="#" onClick={(e) => { e.preventDefault(); setHalaman('about'); }} style={{ color: halaman === 'about' ? '#ccff00' : 'white', textDecoration: 'none', fontWeight: 'bold', fontSize: '0.9rem' }}>About</a>
        </div>
      </nav>

      {/* Konten Utama */}
      <main className="col-12 col-md-9 col-lg-10" style={{ 
        flex: 1, 
        padding: '30px 20px', 
        display: 'flex', 
        flexDirection: 'column', 
        minHeight: '100vh' 
      }}>
        
        <div style={{ flex: 1 }}>
      
          {/* Halaman Home */}
          {halaman === 'home' && (
            <section className="d-flex flex-column justify-content-center text-center text-md-start" style={{ minHeight: '60vh' }}>
              <h1 className="fw-bold" style={{ fontSize: 'calc(1.8rem + 1.5vw)', lineHeight: '1.2' }}>
                I'M Muhammad Afif Fadhilah
              </h1>
              <p className="mt-3 mx-auto mx-md-0" style={{ fontSize: '1rem', color: '#88a0a0', maxWidth: '600px', lineHeight: '1.6' }}>
                I'M PPLG STUDENT, and I develop 2D games, web applications, and creative visual content.
              </p>
              <button 
                onClick={() => setHalaman('about')} 
                className="btn btn-lg mx-auto mx-md-0" 
                style={{ backgroundColor: '#ccff00', color: '#012626', fontWeight: 'bold', width: 'fit-content', marginTop: '30px', borderRadius: '8px' }}
              >
                Explore My Work
              </button>
            </section>
          )}

          {/* Halaman Data */}
          {halaman === 'data' && (
            <section>
              <h2 className="fw-bold" style={{ fontSize: '2rem', color: '#ccff00', marginBottom: '10px' }}>My Skills & Data</h2>
              <p style={{ color: '#88a0a0', marginBottom: '30px' }}>Daftar penguasaan teknologi yang saya pelajari.</p>
              <div className="row g-4">
                {mySkills.map((skill) => (
                  <div className="col-12 col-md-6" key={skill.name}>
                    <div className="d-flex justify-content-between mb-2">
                      <span className="fw-bold small">{skill.name}</span>
                      <span style={{ color: '#ccff00' }}>{skill.percent}</span>
                    </div>
                    <div className="progress" style={{ height: '8px', backgroundColor: '#034d4d' }}>
                      <div className="progress-bar" style={{ width: skill.percent, backgroundColor: '#ccff00' }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Halaman About / Journey */}
          {halaman === 'about' && (
            <section>
              <h2 className="fw-bold" style={{ fontSize: '2rem', color: '#ccff00', marginBottom: '10px' }}>My Journey</h2>
              <p style={{ color: '#88a0a0', marginBottom: '30px' }}>Dokumentasi hasil belajar dan proyek game.</p>
              <div className="row g-4">
                {myGallery.map((item, index) => (
                  <div className="col-12 col-sm-6 col-lg-4" key={index}>
                    <div 
                      onClick={() => {
                        if (item.url !== '#') {
                          window.open(item.url, '_blank');
                        }
                      }}
                      style={{ cursor: item.url !== '#' ? 'pointer' : 'default' }}
                    >
                      <div className="card h-100 border-0 shadow-sm card-hover-effect" style={{ 
                        backgroundColor: '#012626', 
                        color: 'white', 
                        borderRadius: '12px', 
                        overflow: 'hidden',
                        transition: 'all 0.3s ease-in-out'
                      }}>
                        <img src={item.img} className="card-img-top" alt={item.title} style={{ height: '200px', objectFit: 'cover' }} />
                        <div className="card-body">
                          <h5 className="card-title text-truncate" style={{ color: '#ccff00', fontSize: '1.1rem' }}>{item.title}</h5>
                          <p className="card-text text-secondary small">{item.desc}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>

        {/* Footer */}
        <footer className="mt-5 py-4 border-top" style={{ borderColor: '#034d4d' }}>
          <div className="d-flex flex-column flex-md-row justify-content-between align-items-center text-center text-md-start">
            <p className="text-secondary mb-3 mb-md-0 small">
              © 2026 <span style={{ color: '#ccff00' }}>Muhammad Afif Fadhilah</span>.
            </p>
            <div className="d-flex gap-4 fs-5">
              <a href="https://instagram.com/m_afdl4" target="_blank" rel="noreferrer" style={{ color: '#ccff00' }}><i className="bi bi-instagram"></i></a>
              <a href="https://www.tiktok.com/@apip2468" target="_blank" rel="noreferrer" style={{ color: '#ccff00' }}><i className="bi bi-tiktok"></i></a>
            </div>
          </div>
        </footer>

      </main>

      {/* Tambahan CSS Sederhana untuk Efek Hover */}
      <style>{`
        .card-hover-effect:hover {
          transform: translateY(-10px);
          box-shadow: 0 10px 20px rgba(204, 255, 0, 0.2) !important;
        }
      `}</style>
    </div>
  )
}

export default App;