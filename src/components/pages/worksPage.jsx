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
    <h3>{props.title}</h3>
    <ul className="list-group">
        {props.works.map(item => (
        <li className="list-group-works" key={item.id}>
           <a href= {item.link}> 
            <img 
            alt = {item.title}
            src = {item.img}
            />
            </a>
            <p>{item.description}</p>
        </li>
        ))}
    </ul>
    </>
    );
}
export default worksPage;