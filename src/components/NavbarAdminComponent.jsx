import React from 'react'

import { Container, Row, Col, Button, Dropdown, DropdownButton } from 'react-bootstrap'
import folderIcon from '../assets/icons/folder.svg'
import homeIcon from '../assets/icons/home.svg'
import laporanIcon from '../assets/icons/Icon.svg'
import userIcon from '../assets/icons/user.svg'
import logoutIcon from '../assets/icons/logout.svg'

import { useNavigate } from 'react-router-dom'

import '../styles/SidebarAdminComponent.css'

const NavbarAdminComponent = () => {

    let navigate = useNavigate();
    return (
        <div className='sidebar'>
            <Container>
                <Row className='logo-sidebar'>
                    <h2>Delivery</h2>
                </Row>

                <Row>
                    <Row className='menu-sidebar'>
                        <Button className='btn-menu' onClick={() => navigate('/admin/beranda')}>
                            <img src={homeIcon} alt="home" />
                            <h5>Beranda</h5>
                        </Button>
                    </Row>

                    <Row className='menu-sidebar'>
                        <Button className='btn-menu' onClick={() => navigate('/admin/pengiriman')}>
                            <img src={folderIcon} alt="folder" />
                            <h5>Data Pengiriman</h5>
                        </Button>
                    </Row>

                    <Row className='menu-sidebar'>
                        <Button className='btn-menu' onClick={() => navigate('/admin/laporan-pengiriman')}>
                            <img src={laporanIcon} alt="laporan" />
                            <h5>Laporan</h5>
                        </Button>
                    </Row>

                    <Row className='menu-sidebar'>

                        <DropdownButton className='btn-menu' id='dropdown-basic-button' title={<div className='click-drop' style={{ display: 'flex', justifyContent: 'space-between', backgroundColor: 'aliceblue', border: none }}>
                            <img src={userIcon} alt="user" />
                            <h5>User</h5>
                        </div>}>
                            <Dropdown.Item onClick={() => navigate('/admin/data-kurir')}>
                                Data Kurir
                            </Dropdown.Item>
                            <Dropdown.Item onClick={() => navigate('/admin/data-pelanggan')}>
                                Data Pelanggan
                            </Dropdown.Item>
                        </DropdownButton>
                    </Row>

                    <Row className='menu-sidebar'>
                        <Button className='btn-menu' onClick={() => navigate('/')}>
                            <img src={logoutIcon} alt="logout" />
                            <h5>Logout</h5>
                        </Button>
                    </Row>
                </Row>


            </Container >
        </div >
    )
}

export default NavbarAdminComponent