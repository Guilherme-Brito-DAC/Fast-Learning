import React, { useState, useEffect } from 'react';
import './Main.css'

export default function Main(aula) {

    aula = aula.aula

    return (
        <main>
            {
                aula.tipo === "video" &&
                <>
                    <iframe src={"https://www.youtube.com/embed/" + aula.video} title="video" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen={true}></iframe>
                </>
            }

            {
                <>
                    <h1 className="titulo">{aula.titulo}</h1>
                    <div className="conteudo">{aula.conteudo}</div>
                </>
            }

            {
                aula.id === 99 &&
                <>
                    <div className="error">
                        <p>Erro</p>
                        <br />
                        <img src='https://img.icons8.com/color/100/000000/4-cute.png' alt="" />
                        <img src='https://img.icons8.com/color/100/000000/0-cute.png' alt="" />
                        <img src='https://img.icons8.com/color/100/000000/4-cute.png' alt="" />
                        <br />
                        <br />
                        <label>Ops! parece não ter nada aqui</label>
                    </div>
                </>
            }
        </main>
    );
}
