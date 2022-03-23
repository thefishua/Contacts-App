import './card.css'
import {users} from './data/data'
function Card() {
    return (
        <> 
            {users.map((users, index) => (
                <figure className="card" key={index}>
                    <img 
                        alt="user" 
                        className="picture"
                        src={users.photo}
                    />
                    <figcaption className='person-detail'>
                        <p className='name'> 
                            {users.name}
                        </p>
                        <p className='content-detail'> 
                            Email: {users.email}
                        </p>
                        <p className='content-detail'> 
                            Phone: {users.phone}
                        </p>
                        <p className='content-detail'> 
                            City: {users.address.city}
                        </p>
                    </figcaption>
                </figure>
            ))}
        </>
    );
}

export default Card;

