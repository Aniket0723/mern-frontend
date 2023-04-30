import "./mailList.css"

const MailList = () => {
  return (
    <div className="mail">
      <h1 className="mailTitle">Get access to exclusive deals!!</h1>
      <span className="mailDesc">
        Sign Up and we'll send the best deals to You
      </span>
      <div className="mailInputContainer">
        <input type="text" placeholder="Your Email"/>
        <button >SUBSCRIBE US  🪁 </button>
      </div>
    </div>        
  )
}

export default MailList