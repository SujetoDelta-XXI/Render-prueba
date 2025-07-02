function Header() {
    return( 
        <header className="bg-black text-white py-4">
            <h1 className="center">Cineplanet</h1>
            <ul>
                <li><a href="/">Inicio</a></li>
                <li><a href="/movies">Peliculas</a></li>
            </ul>
        </header>
    )
}

export default Header;