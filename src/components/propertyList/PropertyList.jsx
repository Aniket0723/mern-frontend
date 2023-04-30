import useFetch from "../../hooks/useFetch";
import "./propertyList.css";

const PropertyList = () => {
  const { data, loading, error } = useFetch("https://hotel-booking-obth.onrender.com/api/hotels/countByType");

  const images = [
    "https://www.gannett-cdn.com/-mm-/05b227ad5b8ad4e9dcb53af4f31d7fbdb7fa901b/c=0-64-2119-1259/local/-/media/USATODAY/USATODAY/2014/08/13/1407953244000-177513283.jpg",
    "https://media.istockphoto.com/id/1165384568/photo/europe-modern-complex-of-residential-buildings.jpg?s=612x612&w=0&k=20&c=iW4NBiMPKEuvaA7h8wIsPHikhS64eR-5EVPfjQ9GPOA=",
    "https://st2.depositphotos.com/4695029/7141/i/450/depositphotos_71419053-stock-photo-beautiful-swimming-pool.jpg",
    "https://assets.cntraveller.in/photos/60ba1ca2002baf698cc67420/master/w_1920,h_1080,c_limit/kismet.jpg",
    "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-villas_300/dd0d7f8202676306a661aa4f0cf1ffab31286211.jpg",
  ];
  
  return (
    <div className="pList">
      {data &&
        images.map((img, i) => (
          <div className="pListItem" key={i}>
            {loading ? (
              <div className="loading-Img"></div>
            ) : (
              <img src={img} alt="" className="pListImg" />
            )}
            {loading ? (
              <div className="pListTitles-loading">

              </div>
            ) : (
              <div className="pListTitles">
                <h1>{data[i]?.type}</h1>
                <h2>
                  {data[i]?.count} {data[i]?.type}
                </h2>
              </div>
            )}
          </div>
        ))}
    </div>
  );
};

export default PropertyList;
