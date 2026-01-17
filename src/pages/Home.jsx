import Image1 from "../assets/Image1.jpg";

export default function Home(){
     return (
    <>

      <div className="flex flex-col justify-center items-center mt-40">
        <img
            src={Image1}
            className="w-[18vw] h-[18vw] rounded-full object-cover"
            alt="Profile"
        />

        <p id="text" className="text-2xl mt-6 text-center" style={{fontFamily: 'Optima, sans-serif'}}>
            Hi! I'm Leilani, a first year engineering 
            <br />
            student at Columbia University. 
        </p>
      </div>

    </>
     );

}
<h1 id="name" className="text-4xl font-semibold" style={{fontFamily: 'Georgia, serif'}}></h1>