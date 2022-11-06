import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';
 const Profile = ({data,myfunction}) => {
    console.log(myfunction)
  return (
   
    <div>
        

<Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={data.imgurl} />
      <Card.Body>
        <Card.Title>{data.name}</Card.Title>
        <Card.Text>
        {data.bio}
        {data.profession}
        </Card.Text>
        <Button onClick={()=>myfunction(data.name)}>info </Button>
      </Card.Body>
    </Card>
    </div>
  )

}
Profile.defaultProps={
  
    data:{
        name:"test",
        bio:"test",
        profession:"test"
    }
        
    
    }
    Profile.propTypes={
  
        data:{
            name:PropTypes.string,
            bio:PropTypes.string,
        profession:PropTypes.string
        }
            
        
        }
export default Profile