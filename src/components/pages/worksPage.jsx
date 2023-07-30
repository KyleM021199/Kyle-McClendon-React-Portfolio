

function worksPage(props) {
    return(
    <>
    
    <h2>My Works</h2>
    {/* Works list */}
    <ul className="list-group">
        {props.works.map(item => (

        <li className="list-group-works" key={item.id}>
            <section className="card">
    <header><h3>{item.title}</h3></header>
           <a className="work"  href= {item.link}> 
            <img  src={item.img} alt= {item.title}/>
            </a>
            <p>{item.description}</p>
            </section>
        </li>
        ))}
    </ul>
   
    </>
    );
}
export default worksPage;