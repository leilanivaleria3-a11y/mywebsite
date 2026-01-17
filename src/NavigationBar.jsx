export default function NavigationBar(){
    return(
           <nav>
            <div className="bg-[#c2acb7] w-full flex justify-between px-15 py-10">
                <h1 id="name" className="text-4xl font-semibold" style={{fontFamily: 'Palatino, serif'}}>
                    Leilani Morales
                </h1>
                <ul className="flex gap-15 text-2xl" style={{fontFamily: 'Optima, sans-serif'}}>
                    <li><a href="#/Home">Home</a> </li>
                    <li><a href="#/About">About</a></li>
                    <li><a href="#/Contact">Contact</a></li>
                    <li><a href="#/Projects">Projects</a></li>
                </ul>
            </div>
        </nav>
    );
}