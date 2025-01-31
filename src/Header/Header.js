import React, { useState, useEffect } from "react";
import './Header.css';
import smallRight from '../assets/icons/small-right.png';
import smallLeft from '../assets/icons/small-left.png';
import search from '../assets/icons/search.png';

const Header = ({ setArtists }) => {

    const [searchTerm, setSearchTerm] = useState("");

    //Armazenar o termo de busca
    useEffect(() => {
        if (searchTerm.trim() === "") {
            setArtists([]); // Limpa os resultados quando não há pesquisa
            return;
        }

        const fetchArtists = async () => {
            try {
                const response = await fetch(`http://localhost:3000/artists?name_like=${encodeURIComponent(searchTerm)}`);
                const data = await response.json();
                setArtists(data);
            } catch (error) {
                console.error("Erro na requisição", error);
            }
        };

        fetchArtists();
    }, [searchTerm, setArtists]);

    return (
        <nav className="header__navigation">
            <div className="navigation">
                <button className="arrow-left">
                    <img src={smallLeft} alt="" />
                </button>
                <button className="arrow-right">
                    <img src={smallRight} alt="" />
                </button>
            </div>
            <div className="header__search">
                <img src={search} alt="" />
                <input
                    id="search-input"
                    maxlength="800"
                    autocorrect="off"
                    autocapitalize="off"
                    spellcheck="false"
                    placeholder="O que você quer ouvir?"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>
            <div className="header__login">
                <button className="subscribe">Inscreva-se</button>
                <button className="login">Entrar</button>
            </div>
        </nav>
    );
}

export default Header;
