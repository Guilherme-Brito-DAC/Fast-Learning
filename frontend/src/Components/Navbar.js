import React, { useState, useEffect } from 'react';
import './Navbar.css'

export default function Navbar({ setAulaId }) {

    const [modulos, setModulos] = useState([]);
    const [aulas, setAulas] = useState([]);
    const [id, setId] = useState(1);
    const [modoNoturno, setModoNoturno] = useState(true)

    async function postData(url = '') {
        const response = await fetch(url, {
            method: 'GET',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
        });
        return response.json()
    }

    useEffect(() => {
        postData('http://localhost:4000/').then(data => {
            setModulos(data)
        })
    }, [])

    useEffect(() => {
        postData(`http://localhost:4000/modulos/${id}`).then(data => {
            setAulas(data)
        })
    }, [id])

    function TipoAula(tipo) {
        if (tipo === "video") {
            return "play--v1.png"
        }
        else if (tipo === "atividade") {
            return "list--v1.png"
        }
        else {
            return "info.png"
        }
    }

    function collapse() {
        document.getElementById('openMenu').style.width = '3rem';
        document.getElementById('openMenu').style.display = 'block';
        document.getElementById('mid').style.width = '0';
        document.getElementById('titulo').style.display = 'none';
        document.getElementById('closeMenu').style.display = 'none';
        document.getElementById('nav').style.width = '4rem';
    }

    function open() {
        document.getElementById('nav').style.width = '20rem';
        document.getElementById('openMenu').style.width = '20rem';
        document.getElementById('openMenu').style.display = 'none';
        document.getElementById('mid').style.width = '18rem';
        document.getElementById('titulo').style.display = 'block';
        document.getElementById('closeMenu').style.display = 'block';
    }

    function handleSelect(e) {
        setId(e.target.value)
    }

    function HandleSubmit(e) {
        e.preventDefault()

        postData(`http://localhost:4000/search/${e.target.search.value}`).then(data => {
            setAulaId(data.id)
        })
    }

    function NightMode() {
        if (modoNoturno) {
            document.body.style.setProperty('--background_color', '#121212');
            document.getElementById('nightModeOn').style.display = 'none';
            document.getElementById('nightModeOff').style.display = 'block';
            setModoNoturno(false)
        }
        else {
            document.body.style.setProperty('--background_color', '#dee2e6');
            document.getElementById('nightModeOn').style.display = 'block';
            document.getElementById('nightModeOff').style.display = 'none';
            setModoNoturno(true)
        }
    }

    return (
        <nav className="nav" id="nav">
            <div className="head">
                <div className="titulo">
                    <h1 id="titulo">Curso de Android</h1>
                    <img src="https://img.icons8.com/ios-filled/50/2dc653/android-os.png" alt="" />
                </div>
            </div>
            <div className="divMenu">
                <button className="openMenu" id="openMenu" onClick={open}>
                    <img src="https://img.icons8.com/ios-filled/30/ffffff/menu--v4.png" alt="" />
                </button>
                <button className="closeMenu" id="closeMenu" onClick={collapse}>
                    <img src="https://img.icons8.com/ios-filled/30/ffffff/x.png" alt="" />
                </button>
            </div>
            <section className="mid" id="mid">
                <div className="modulos">
                    <h1 className="subtitulo"><img src="https://img.icons8.com/ios-glyphs/30/414a4f/search--v1.png" alt="" />Pesquisa</h1>
                    <div className="subsections">
                        <form onSubmit={HandleSubmit}>
                            <input type="text" className="searchInput" name="search" placeholder="Busque aqui no curso" />
                        </form>
                    </div>
                </div>
                <div className="modulos">
                    <h1 className="subtitulo"><img src="https://img.icons8.com/ios-glyphs/30/414a4f/module.png" alt="" />Módulos</h1>
                    <div className="subsections">
                        <select
                            defaultValue={0}
                            onChange={handleSelect}
                        >
                            {
                                modulos.map((modulo, index) => (
                                    <option value={modulo.id} key={modulo.id}>0{modulo.id} . {modulo.nome}</option>
                                ))
                            }
                        </select>
                    </div>
                </div>
                <div className="modulos">
                    <h1 className="subtitulo"><img src="https://img.icons8.com/ios-glyphs/30/414a4f/class.png" alt="" />Aulas</h1>
                    <div className="subsections">
                        {
                            aulas.map((aula, index) => (
                                <div className="aulas" onClick={() => setAulaId(aula.id)} key={index}><img src={"https://img.icons8.com/ios-glyphs/20/2dc653/" + TipoAula(aula.tipo)} alt="" /><small>{aula.id < 10 ? "0" + aula.id : aula.id}</small> {aula.titulo}</div>
                            ))
                        }
                    </div>
                </div>
                <div className="modulos">
                    <h1 className="subtitulo"><img src="https://img.icons8.com/ios-glyphs/30/414a4f/job.png" alt="" />Configurações</h1>
                    <div className="subsections">
                        <button className="nightMode" onClick={NightMode}>
                            <img src="https://img.icons8.com/external-bearicons-glyph-bearicons/30/414a4f/external-Night-essential-collection-bearicons-glyph-bearicons.png" alt="" id="nightModeOn" className="nightModeOn"/>
                            <img src="https://img.icons8.com/fluency-systems-filled/30/414a4f/sun.png" alt="" id="nightModeOff" className="nightModeOff"/>
                        </button>
                    </div>
                </div>
            </section>
        </nav>
    );
}
