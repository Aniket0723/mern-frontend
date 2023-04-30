import useFetch from "../../hooks/useFetch";
import "./featured.css";

const Featured = () => {
  const { data, loading, error } = useFetch(
    "https://hotel-booking-obth.onrender.com/api/hotels/countByCity?cities=Nagpur,Pune,Delhi"
  );

  return (
    <div className="featured">
      <div className="featuredItem">
        {loading ? (
          <div className="loading">
          </div>
        ) : (
          <>
            <img
              src="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8aG90ZWx8ZW58MHx8MHx8&w=1000&q=80"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Nagpur</h1>
              <h2>{data[0]} properties</h2>
            </div>
          </>
        )}
      </div>

      <div className="featuredItem">
        {loading ? (
          <div className="loading">
          </div>
        ) : (
          <>
            <img
              src="https://images.moneycontrol.com/static-mcnews/2019/09/Samhi_Hotels-770x433.jpg?impolicy=website&width=770&height=431"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Pune</h1>
              <h2>{data[1]} properties</h2>
            </div>
          </>
        )}
      </div>
      <div className="featuredItem">
        {loading ? (
          <div className="loading">
          </div>
        ) : (
          <>
            <img
              src="https://www.tourmyindia.com/blog//wp-content/uploads/2018/06/Hotels-in-India.jpg"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Delhi</h1>
              <h2>{data[2]} properties</h2>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
export default Featured;