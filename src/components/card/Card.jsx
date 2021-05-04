


import { Card} from 'semantic-ui-react'



const CardExampleCard = (props) => (
  <Card
        image={props.image}
        header={props.title}
        meta={props.date}
        className={props.className}
      >{props.children}</Card>
 
 
)


export default CardExampleCard