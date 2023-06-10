import { 
    CardGroup,
    Card, 
    CardImg,
    CardBody, 
    CardTitle,
    CardSubtitle,
    CardText,
    List,
    Button 
} from "reactstrap"

import "./styles.css"



function Player(props) {
    return(
        <Card
        className="player-card"
        > 
        <div
        className="image-container__player-card"
        >
            <CardImg 
            className="image-player__image-container"
            src={props.player.player_face_url}
            alt={props.player.short_name}
            />
        </div>
            <CardBody>
                <CardTitle>{props.player.short_name}</CardTitle>
                <CardSubtitle>{props.player.player_positions}</CardSubtitle>
                <CardText>{props.player.value_eur}</CardText>
                <div>
                    <CardSubtitle>Skills</CardSubtitle>
                    <List>
                        <li>
                            <span>Defending</span>: {props.player.defending}
                        </li>
                        <li>
                            <span>Dribbling</span>: {props.player.dribbling}
                        </li>
                        <li>
                            <span>Pace</span>: {props.player.pace}
                        </li>
                        <li>
                            <span>Passing</span>: {props.player.passing}
                        </li>
                        <li>
                            <span>Physic</span>: {props.player.physic}
                        </li>
                        <li>
                            <span>Shooting</span>: {props.player.shooting}
                        </li>

                    </List>
                </div>
                <Button>Añadir a mi equipo</Button>
            </CardBody>
        </Card>
    )
}
//defending, dribbling, pace, passing, physic, shooting
export function Result(props) {
    const data = [
        {
            "age": 32,
            "club_name": "Barcelona",
            "defending": 32,
            "dribbling": 96,
            "nationality_name": "Argentina",
            "pace": 87.1,
            "passing": 90,
            "physic": 61,
            "player_face_url": "https://cdn.sofifa.net/players/158/023/22_120.png",
            "player_positions": [
            "RW",
            "ST",
            "CF"
            ],
            "shooting": 95,
            "short_name": "Leonel Messi",
            "sofifa_id": 1,
            "value_eur": 100000000,
            "wage_eur": 1000000
        },
        {
            "age": 32,
            "club_name": "Barcelona",
            "defending": 32,
            "dribbling": 96,
            "nationality_name": "Argentina",
            "pace": 87.1,
            "passing": 90,
            "physic": 61,
            "player_face_url": "https://cdn.sofifa.net/players/158/023/22_120.png",
            "player_positions": [
            "RW",
            "ST",
            "CF"
            ],
            "shooting": 95,
            "short_name": "Leonel Messi",
            "sofifa_id": 1,
            "value_eur": 100000000,
            "wage_eur": 1000000
        },
        {
            "age": 32,
            "club_name": "Barcelona",
            "defending": 32,
            "dribbling": 96,
            "nationality_name": "Argentina",
            "pace": 87.1,
            "passing": 90,
            "physic": 61,
            "player_face_url": "https://cdn.sofifa.net/players/158/023/22_120.png",
            "player_positions": [
            "RW",
            "ST",
            "CF"
            ],
            "shooting": 95,
            "short_name": "Leonel Messi",
            "sofifa_id": 1,
            "value_eur": 100000000,
            "wage_eur": 1000000
        },
        {
            "age": 32,
            "club_name": "Barcelona",
            "defending": 32,
            "dribbling": 96,
            "nationality_name": "Argentina",
            "pace": 87.1,
            "passing": 90,
            "physic": 61,
            "player_face_url": "https://cdn.sofifa.net/players/158/023/22_120.png",
            "player_positions": [
            "RW",
            "ST",
            "CF"
            ],
            "shooting": 95,
            "short_name": "Leonel Messi",
            "sofifa_id": 1,
            "value_eur": 100000000,
            "wage_eur": 1000000
        }
    ]
  return (
    <CardGroup className="results-container">
      {
        data.length > 0 &&
        data.map((elm) => { 
            return(
                <Player
                player={elm}
                />
            )
        })
      }
    </CardGroup>
  );
}