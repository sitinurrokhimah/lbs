
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import LoginPage from './pages/LoginPage';
import Register from './pages/Register';
import BerandaAdminPage from './pages/admin/BerandaAdminPage';
import DataKurirAdminPage from './pages/admin/DataKurirAdminPage';
import DataPelangganAdminPage from './pages/admin/DataPelangganAdminPage';
import LaporanPengirimanAdminPage from './pages/admin/LaporanPengirimanAdminPage';
import PengirimanAdminPage from './pages/admin/PengirimanAdminPage';
import ProdukLayananAdminPage from './pages/admin/ProdukLayananAdminPage';

import BerandaUserPage from './pages/users/BerandaUserPage';
import DetailPaketPage from './pages/users/DetailPaketPage';
import DetailPenerimaPage from './pages/users/DetailPenerimaPage';
import DetailPengirimPage from './pages/users/DetailPengirimPage';
import HalamanAlamatPage from './pages/users/HalamanAlamatPage';
import PengirimanSayaPage from './pages/users/PengirimanSayaPage';
import ProfilUserPage from './pages/users/ProfilUserPage';
import RekapPaketPage from './pages/users/RekapPaketPage';




function App() {

  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/admin/beranda" element={<BerandaAdminPage />} />
          <Route path="/admin/data-kurir" element={<DataKurirAdminPage />} />
          <Route path="/admin/data-pelanggan" element={<DataPelangganAdminPage />} />
          <Route path="/admin/laporan-pengiriman" element={<LaporanPengirimanAdminPage />} />
          <Route path="/admin/pengiriman" element={<PengirimanAdminPage />} />
          <Route path="/admin/produk-layanan" element={<ProdukLayananAdminPage />} />

          <Route path="/user/beranda" element={<BerandaUserPage />} />
          <Route path="/user/detail-paket" element={<DetailPaketPage />} />
          <Route path="/user/detail-penerima" element={<DetailPenerimaPage />} />
          <Route path="/user/detail-pengirim" element={<DetailPengirimPage />} />
          <Route path="/user/halaman-alamat" element={<HalamanAlamatPage />} />
          <Route path="/user/pengiriman-saya" element={<PengirimanSayaPage />} />
          <Route path="/user/profil-user" element={<ProfilUserPage />} />
          <Route path="/user/rekap-paket" element={<RekapPaketPage />} />

        </Routes>
      </Router>
    </div>
  )
}

export default App
