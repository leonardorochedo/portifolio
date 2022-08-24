import React from 'react';

import './Contact.css';

export function Contact() {

    function openModal() {
        const modal = document.querySelector('.modal')
        .style.display = 'block';
    }

    function closeModal() {
        const modal = document.querySelector('.modal')
        .style.display = '';
    }

    return (
        <>
        <div className="button">
            <button onClick={openModal}><img src="src\assets\send.svg" alt="Aviao de papel voando" />Contato</button>
        </div>
        <div className="modal">
            <button className='close' onClick={closeModal}><img src="src\assets\close.svg" alt="Icone de fechar" /></button>
            <h2>Fale comigo pelo <span>Whatsapp!</span></h2>
            <a href="https://api.whatsapp.com/send?phone=+5543991309477&text=Olá, queria fazer um orçamento com você!" target="_blank">
                <img src="https://chart.googleapis.com/chart?cht=qr&chl=https%3A%2F%2Fapi.whatsapp.com%2Fsend%3Fphone%3D%2B5543991309477%26text%3DOl%C3%A1%2C%20queria%20fazer%20um%20or%C3%A7amento%20com%20voc%C3%AA!&chs=180x180&choe=UTF-8&chld=L|2" alt="QR Code" />
            </a>
            <p>escaneie ou clique</p>
        </div>
        </>
    );
}