import { useState } from "react"
import { useNavigate } from "react-router-dom"

function Header() {
  const [nama, setNama] = useState("")
  const [kelas, setKelas] = useState("")
  const [jurusan, setJurusan] = useState("")
  const navigate = useNavigate()

  const handleSubmit = () => {
    navigate("/profile", {
      state: { nama, kelas, jurusan }
    })
  }

  return (
    <div className="header">
      <h1>Profil Digital</h1>

      <input placeholder="Nama" onChange={(e) => setNama(e.target.value)} />
      <input placeholder="Kelas" onChange={(e) => setKelas(e.target.value)} />
      <input placeholder="Jurusan" onChange={(e) => setJurusan(e.target.value)} />

      <button onClick={handleSubmit}>Tampilkan Profil</button>
    </div>
  )
}

export default Header