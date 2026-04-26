import { useLocation } from "react-router-dom"

function ProfilePage() {
  const location = useLocation()
  const { nama, kelas, jurusan } = location.state || {}

  return (
    <div>
      <h2>Data Profil</h2>
      <p>Nama: {nama}</p>
      <p>Kelas: {kelas}</p>
      <p>Jurusan: {jurusan}</p>
    </div>
  )
}

export default ProfilePage