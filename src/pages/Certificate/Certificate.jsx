import "./Certificate.css";

import deloitte from "../../assets/certificates/certificate1.png";
import iot from "../../assets/certificates/Certificate2.jpeg";
import llm from "../../assets/certificates/Certificate3.jpeg";

const certificates = [

  {
    title: "Google Cloud Skills Boost",
    issuer: "Google",
    image: deloitte,
    link: "https://www.theforage.com/completion-certificates/9PBTqmSxAf6zZTseP/io9DzWKe3PTsiS6GG_9PBTqmSxAf6zZTseP_692112dbd58f0a7a07b90e83_1775656702024_completion_certificate.pdf"
  },
  {
    title: "Introduction to industry 4.0",
    issuer: "NPTEL",
    image: iot,
    link: "https://beta.nptel.ac.in/verify/NOC-BCAE-QFB6-DMR0F"
  },
  {
    title: "Introduction to LLMS",
    issuer: "NPTEL",
    image: llm,
    link: "https://beta.nptel.ac.in/verify/NOC-ADE4-98H0-9EK7V"
  }
  
  

];

function Certificate(){

    return(

        <section className="certificate" id="certificate">

            <div className="certificate-header">

                <h2>Certifications</h2>

                <p>
                    Continuous learning through industry-recognized certifications.
                </p>

            </div>

            <div className="certificate-grid">

                {

                    certificates.map((item,index)=>(

                        <a

                            href={item.link}

                            target="_blank"

                            rel="noreferrer"

                            className="certificate-card"

                            key={index}

                        >

                            <div className="certificate-image">

                                <img
                                    src={item.image}
                                    alt={item.title}
                                />

                                <div className="certificate-overlay">

                                    <span>
                                        View Credential →
                                    </span>

                                </div>

                            </div>

                            <div className="certificate-info">

                                <h3>{item.title}</h3>

                                <p>{item.issuer}</p>

                            </div>

                        </a>

                    ))

                }

            </div>

        </section>

    )

}

export default Certificate;
