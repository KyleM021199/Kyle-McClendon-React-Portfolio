//use list-grouping (ul/li) with array mapping for the works list Profoilo/work page
// example:
//  <ul className="list-group">
//       {/* Here we map over each grocery item and return a new array of `li` elements that contains the grocery name */}
//       {/* When using map you must provide a unique key attribute to each item. Ours is `item.id` */}
//       {props.groceries.map(item => (
//         <li className="list-group-item" key={item.id}>
//           {item.name}
//         </li>
//       ))}
//     </ul> 

function worksPage(props) {
    return(
    <>
    
    <h2>My Works</h2>
    
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