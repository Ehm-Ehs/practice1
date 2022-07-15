import "./faqs.css";
import down from "../images/down.svg"
import side from "../images/side.svg"
function Faq() {
  const faqs = [
    {
     title: "What does ThriveAgric do?",
      body:"",
      src: down,
      id: 1,
    },
    {
     title: "How is ThriveAgric leveraging technology to advance the agriculture sector?",
      body:"",
      src: down,
      id:2
    },
    {
     title: "How long has ThriveAgric been in existence?",
      body:"",
      src: down,
      id: 3,
    },
    {
     title: "What is the mission and vision of ThriveAgric?",
      body:"",
      src: down,
      id: 4,
    },
    {
     title: "What are ThriveAgric’s core values?",
      body:"",
      src: down,
      id: 5,
    },
    {
     title: "What is ThriveAgric passionate about?",
      body:"",
      src: down,
      id: 6,
    },
    {
     title: "Why is ThriveAgric so passionate about smallholder farmers?",
      body:"",
      src: down,
      id: 7,
    },
    {
     title: "Who are ThriveAgric’s stakeholders?",
     body:"",
     src: down,
     id: 8,
    },
    {
     title: "What problem does ThriveAgric solve and how?",
      body:"",
      src: down,
      id: 9,
    },
    {
     title: "What essentially distinguishes ThriveAgric and gives it an edge over its competition?",
      body:"",
      src: down,
      id: 10,
    },
  ];
  
  const pages=[
    {num:1, id:1},
    {num:2, id:2},
    {num:3, id:3},
    {num:4, id:4},
    {num:"Next", id:5}
  ]

  return (
    <>
      <div className="faqs">
        <div className="headings">
          <h1 className="faq">FAQs</h1>
          <p className="info">
            If your question has not been answered, please send it to us at
            <a href="info@thriveagric.com" className="link-green"> info@thriveagric.com</a>
          </p>
        </div>
        <div className="writeup">
          <button className="writeupHeading accordion">Who is ThriveAgric?<img className="writeupHeading"src={side} alt="icon"/></button>
          <p className="write">
            ThriveAgric is a fast-growing technology-driven agricultural
            company, passionate about ensuring food security. The company does
            this by linking smallholder farmers to capital, data-driven best
            practices, and access to local and global markets for their
            commodities.
          </p>
        </div>
        <div className="questions">
      
         {faqs.map((faq) => (
             <div className="faq-content" key= {faq.id}>
                <button className="accordion"><strong> {faq.title}</strong>
                <img src={faq.src} alt="icon"/></button>
                <div className="panel"> <p><strong> {faq.body} </strong></p>
                </div>
                
               
             </div>
         ))}
     </div>
     <div className="paging">
      {pages.map((page)=>(
        <ul key={page.id}>
          <li> {page.num} </li>
        </ul>
      ))}
     </div>
        </div>
      
    </>
  );
}

export default Faq;