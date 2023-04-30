import "./footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="fLists">
        <ul className="fList">
        <li className="listHeading"><h3>Help</h3></li>
        <li className="fListItem">Help Center</li>
        <li className="fListItem">FAQs</li>
        <li className="fListItem">Privacy policy</li>
        <li className="fListItem">Cookie policy</li>
        <li className="fListItem">Term of use</li>
        </ul>
        <ul className="fList">
        <li className="listHeading"><h3>Company</h3></li>
        <li className="fListItem">About us</li>
        <li className="fListItem">Careers</li>
        <li className="fListItem">Press</li>
        <li className="fListItem">Blog</li>
        </ul>
        <ul className="fList">
        <li className="listHeading"><h3>Destination</h3></li>
        <li className="fListItem">Countries</li>
        <li className="fListItem">Cities</li>
        </ul>
        <ul className="fList">
        <li className="listHeading"><h3>Partner with us</h3></li>
        <li className="fListItem">Partner HUB</li>
        <li className="fListItem">Advertise on HOTELBOOKING</li>
        <li className="fListItem">Affiliates</li>
        <li className="fListItem">Connectivity partners</li>
        </ul>
      </div>
      <div className="fText">Copyright © 2023 HotelBooking.</div>
    </div>
  );
};

export default Footer;
