import Image2 from'../assets/Image2.JPG'
import Image3 from '../assets/Image3.JPG'
import Image4 from '../assets/Image4.jpg'
import Image5 from '../assets/Image5.jpg'

export default function About(){
  return (
    <section id="about" style={{
      padding: '60px 30px',
      maxWidth: '800px',
      margin: '0 auto',
      fontFamily: 'Optima, sans-serif',
      marginTop: '100px'  // Add space for fixed navbar
    }}>
      <h2 style={{fontSize: '32px', marginBottom: '20px', fontFamily: 'Optima, sans-serif'}}>
        About Me
      </h2>

      {/* Centered image */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        marginBottom: '30px',
        marginTop: '20px',
        justifyContent: 'space-between'
      }}>
        <img
          src={Image3}
          style={{
            width: '300px',
            borderRadius: '10%'
            
          }}
          alt="Profile"
        />
        <img
          src={Image2}
          style={{
            width: '300px',
            borderRadius: '10%'
            
          }}
          alt="Profile"
        />
      </div>
      
      <p style={{fontSize: '18px', lineHeight: '1.6', fontFamily: 'Optima, sans-serif'}}>
        I was born and raised in San Juan, Puerto Rico. Growing up surrounded by rich culture and warm, kind people, community has always been at the center of what shaped me. Puerto Rico is my home, and I'm grateful to have been raised here, thus, seeing how ongoing infrastructure challenges impact the lives of the Puerto Rican population motivated me to take action. As I grew older, I found myself consistently looking for ways to address these issues and contribute to solutions that could make a tangible difference.
      </p>

         <div style={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: '15px',
            marginBottom: '15px'
        }
        }>
            <img
            src={Image4}
            style={{
                width: '300px',
                height: '300px',
                borderRadius: '50%',
                objectFit: 'cover'
            }}
            alt="Profile"
            />
        </div>

      <p style={{fontSize: '18px', lineHeight: '1.6', marginTop: '15px', fontFamily: 'Optima, sans-serif'}}>
        That curiosity gradually turned into my interest in pursuing different extracurriculars, from leading different MUN conferences, to working on research projects focused on sustainability and infrastructure. These efforts have been recognized by organizations such as Yale's Science & Engineering Association and led to becoming Puerto Rico's first RISE Fellow, garnering attention from local newspapers and news stations. 
      </p>

        <div style={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: '15px',
            marginBottom: '15px'
        }
        }>
        <img
          src={Image5}
          style={{
            width: '300px',
            height: '300px',
            borderRadius: '50%',
            objectFit: 'cover'
          }}
          alt="Profile"
        />
        </div>
      
      <p style={{fontSize: '18px', lineHeight: '1.6', marginTop: '15px', fontFamily: 'Optima, sans-serif'}}>
        I'm currently a first-year engineering student at Columbia University and an Egleston Scholar, where I continue to build at the intersection of engineering, impact, and entrepreneurship. Each experience has reinforced my belief that the most meaningful innovation starts with listening and by designing solutions that are technically rigorous, grounded in lived experience, and accountable to the communities they aim to serve.
      </p>
    </section>
  );
}