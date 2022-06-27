import "./faqs.css";

function Faq() {
  const faqs = [
    {
     title: "What does ThriveAgric do?",
      body:"",
      id: 1,
    },
    {
     title: "How is ThriveAgric leveraging technology to advance the agriculture sector?",
      body:"",
      id:2
    },
    {
     title: "How long has ThriveAgric been in existence?",
      body:"",
      id: 3,
    },
    {
     title: "What is the mission and vision of ThriveAgric?",
      body:"",
      id: 4,
    },
    {
     title: "What are ThriveAgric’s core values?",
      body:"",
      id: 5,
    },
    {
     title: "What is ThriveAgric passionate about?",
      body:"",
      id: 6,
    },
    {
     title: "Why is ThriveAgric so passionate about smallholder farmers?",
      body:"",
      id: 7,
    },
    {
     title: "Who are ThriveAgric’s stakeholders?",
     body:"",
     id: 8,
    },
    {
     title: "What problem does ThriveAgric solve and how?",
      body:"",
      id: 9,
    },
    {
     title: "What essentially distinguishes ThriveAgric and gives it an edge over its competition?",
      body:"",
      id: 10,
    },
  ];
  return (
    <>
      <div className="faqs">
        <div className="headings">
          <h1 className="faq">FAQ</h1>
          <p>
            If your question has not been answered, please send it to us at
            <a href="info@thriveagric.com" className="link"> info@thriveagric.com</a>
          </p>
        </div>
        <div className="writeup">
          <h3 className="writeupHeading">Who is ThriveAgric?</h3>
          <p>
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
                <button className="accordion"><strong> {faq.title}</strong></button>
                <div className="panel"> <p><strong> {faq.body} </strong></p></div>
               
             </div>
         ))}
     </div>
        </div>
      
    </>
  );
}

export default Faq;