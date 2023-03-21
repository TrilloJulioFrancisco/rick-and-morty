import Card from './Card';


export default function Cards({characters, onClose}) {
   return (
   <div>
      <div>
         {
            characters && characters.map((element) =>{
               return (
                  <Card id = {element.id}
                     name={element.name}
                     status={element.status}
                     species={element.species}
                     gender={element.gender}
                     origin={element.origin.name}
                     image={element.image}
                     onClose={onClose}
                  ></Card>
               )
            })
         }
      </div>
   </div>
   );
}
