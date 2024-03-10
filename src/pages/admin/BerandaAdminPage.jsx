import React from 'react'
import HeaderAdminComponent from '../../components/HeaderAdminComponent'
import NavbarAdminComponent from '../../components/NavbarAdminComponent'
// import Gambar from '../../'

function BerandaAdminPage() {
    return (
        <div>
            <HeaderAdminComponent judulPage="Beranda Admin" namaAdmin="Abdul" urlFoto="../src/assets/gambar.jpg" />
            <NavbarAdminComponent />
        </div>
    )
}

export default BerandaAdminPage