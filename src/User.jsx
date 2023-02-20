const User = ({ avatar, url, username }) => {
    return ( 
    <div className="user">
        <img src={avatar} alt="Profile" width="50px" height="50px"/>
        <a href={url} target="_blank" rel="noopener noreferrer">{username}</a>    </div>
     );
}
 
export default User;