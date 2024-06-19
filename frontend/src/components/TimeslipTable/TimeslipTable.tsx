import "./TimeslipTable.css";
import Check from "../../images/check.png";
import Plus from "../../images/plus.svg";
import Pencil from "../../images/pencil.svg";
import Trash from "../../images/trash.svg";
import Filter from "../../images/filter.svg";

function TimeslipTable() {
  return (
    <div className="TimeslipTable-wrapper">
      <div className="TimeslipTable-top-header">
        <h4 className="TimeslipTable-heading">Time out of Class</h4>
        <div className="TimeslipTable-icon-buttons">
          <button className="TimeslipTable-icon-button ">
            <img src={Plus} alt="Add Icon"></img>
          </button>
          <button className="TimeslipTable-icon-button ">
            <img src={Pencil} alt="Add Icon"></img>
          </button>
          <button className="TimeslipTable-icon-button ">
            <img src={Trash} alt="Add Icon"></img>
          </button>
          <button className="TimeslipTable-icon-button ">
            <img src={Filter} alt="Add Icon"></img>
          </button>
        </div>
      </div>

      <table className="TimeslipTable">
        <thead className="TimeslipTable-header">
          <tr>
            <th className="TimeslipTable-status-col">Status</th>
            <th>Date</th>
            <th scope="col">Left at</th>
            <th scope="col">Returned at</th>
            <th scope="col">Reason</th>
            <th scope="col">Duration</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <img src={Check} className="TimeslipTable-status-img" />
            </td>
            <td>June 17th, 2024</td>
            <td>9:20AM</td>
            <td>9:35AM</td>
            <td>Bathroom</td>
            <td>15 min</td>
          </tr>
          <tr>
            <td>
              <img src={Check} className="TimeslipTable-status-img" />
            </td>
            <td>June 17th, 2024</td>
            <td>9:20AM</td>
            <td>9:35AM</td>
            <td>Bathroom</td>
            <td>15 min</td>
          </tr>
          <tr>
            <td>
              <img src={Check} className="TimeslipTable-status-img" />
            </td>
            <td>June 17th, 2024</td>
            <td>9:20AM</td>
            <td>9:35AM</td>
            <td>Bathroom</td>
            <td>15 min</td>
          </tr>
          <tr>
            <td>
              <img src={Check} className="TimeslipTable-status-img" />
            </td>
            <td>June 17th, 2024</td>
            <td>9:20AM</td>
            <td>9:35AM</td>
            <td>Bathroom</td>
            <td>15 min</td>
          </tr>
          <tr>
            <td>
              <img src={Check} className="TimeslipTable-status-img" />
            </td>
            <td>June 17th, 2024</td>
            <td>9:20AM</td>
            <td>9:35AM</td>
            <td>Bathroom</td>
            <td>15 min</td>
          </tr>
          <tr>
            <td>
              <img src={Check} className="TimeslipTable-status-img" />
            </td>
            <td>June 17th, 2024</td>
            <td>9:20AM</td>
            <td>9:35AM</td>
            <td>Bathroom</td>
            <td>15 min</td>
          </tr>
          <tr>
            <td>
              <img src={Check} className="TimeslipTable-status-img" />
            </td>
            <td>June 17th, 2024</td>
            <td>9:20AM</td>
            <td>9:35AM</td>
            <td>Bathroom</td>
            <td>15 min</td>
          </tr>
          <tr>
            <td>
              <img src={Check} className="TimeslipTable-status-img" />
            </td>
            <td>June 17th, 2024</td>
            <td>9:20AM</td>
            <td>9:35AM</td>
            <td>Bathroom</td>
            <td>15 min</td>
          </tr>
          <tr>
            <td>
              <img src={Check} className="TimeslipTable-status-img" />
            </td>
            <td>June 17th, 2024</td>
            <td>9:20AM</td>
            <td>9:35AM</td>
            <td>Bathroom</td>
            <td>15 min</td>
          </tr>
          <tr>
            <td>
              <img src={Check} className="TimeslipTable-status-img" />
            </td>
            <td>June 17th, 2024</td>
            <td>9:20AM</td>
            <td>9:35AM</td>
            <td>Bathroom</td>
            <td>15 min</td>
          </tr>
          <tr>
            <td>
              <img src={Check} className="TimeslipTable-status-img" />
            </td>
            <td>June 17th, 2024</td>
            <td>9:20AM</td>
            <td>9:35AM</td>
            <td>Bathroom</td>
            <td>15 min</td>
          </tr>
          <tr>
            <td>
              <img src={Check} className="TimeslipTable-status-img" />
            </td>
            <td>June 17th, 2024</td>
            <td>9:20AM</td>
            <td>9:35AM</td>
            <td>Bathroom</td>
            <td>15 min</td>
          </tr>
          <tr>
            <td>
              <img src={Check} className="TimeslipTable-status-img" />
            </td>
            <td>June 17th, 2024</td>
            <td>9:20AM</td>
            <td>9:35AM</td>
            <td>Bathroom</td>
            <td>15 min</td>
          </tr>
          <tr>
            <td>
              <img src={Check} className="TimeslipTable-status-img" />
            </td>
            <td>June 17th, 2024</td>
            <td>9:20AM</td>
            <td>9:35AM</td>
            <td>Bathroom</td>
            <td>15 min</td>
          </tr>
          <tr>
            <td>
              <img src={Check} className="TimeslipTable-status-img" />
            </td>
            <td>June 17th, 2024</td>
            <td>9:20AM</td>
            <td>9:35AM</td>
            <td>Bathroom</td>
            <td>15 min</td>
          </tr>
          <tr>
            <td>
              <img src={Check} className="TimeslipTable-status-img" />
            </td>
            <td>June 17th, 2024</td>
            <td>9:20AM</td>
            <td>9:35AM</td>
            <td>Bathroom</td>
            <td>15 min</td>
          </tr>
          <tr>
            <td>
              <img src={Check} className="TimeslipTable-status-img" />
            </td>
            <td>June 17th, 2024</td>
            <td>9:20AM</td>
            <td>9:35AM</td>
            <td>Bathroom</td>
            <td>15 min</td>
          </tr>
          <tr>
            <td>
              <img src={Check} className="TimeslipTable-status-img" />
            </td>
            <td>June 17th, 2024</td>
            <td>9:20AM</td>
            <td>9:35AM</td>
            <td>Bathroom</td>
            <td>15 min</td>
          </tr>
          <tr>
            <td>
              <img src={Check} className="TimeslipTable-status-img" />
            </td>
            <td>June 17th, 2024</td>
            <td>9:20AM</td>
            <td>9:35AM</td>
            <td>Bathroom</td>
            <td>15 min</td>
          </tr>
          <tr>
            <td>
              <img src={Check} className="TimeslipTable-status-img" />
            </td>
            <td>June 17th, 2024</td>
            <td>9:20AM</td>
            <td>9:35AM</td>
            <td>Bathroom</td>
            <td>15 min</td>
          </tr>
          <tr>
            <td>
              <img src={Check} className="TimeslipTable-status-img" />
            </td>
            <td>June 17th, 2024</td>
            <td>9:20AM</td>
            <td>9:35AM</td>
            <td>Bathroom</td>
            <td>15 min</td>
          </tr>
          <tr>
            <td>
              <img src={Check} className="TimeslipTable-status-img" />
            </td>
            <td>June 17th, 2024</td>
            <td>9:20AM</td>
            <td>9:35AM</td>
            <td>Bathroom</td>
            <td>15 min</td>
          </tr>
          <tr>
            <td>
              <img src={Check} className="TimeslipTable-status-img" />
            </td>
            <td>June 17th, 2024</td>
            <td>9:20AM</td>
            <td>9:35AM</td>
            <td>Bathroom</td>
            <td>15 min</td>
          </tr>
          <tr>
            <td>
              <img src={Check} className="TimeslipTable-status-img" />
            </td>
            <td>June 17th, 2024</td>
            <td>9:20AM</td>
            <td>9:35AM</td>
            <td>Bathroom</td>
            <td>15 min</td>
          </tr>
          <tr>
            <td>
              <img src={Check} className="TimeslipTable-status-img" />
            </td>
            <td>June 17th, 2024</td>
            <td>9:20AM</td>
            <td>9:35AM</td>
            <td>Bathroom</td>
            <td>15 min</td>
          </tr>
          <tr>
            <td>
              <img src={Check} className="TimeslipTable-status-img" />
            </td>
            <td>June 17th, 2024</td>
            <td>9:20AM</td>
            <td>9:35AM</td>
            <td>Bathroom</td>
            <td>15 min</td>
          </tr>
          <tr>
            <td>
              <img src={Check} className="TimeslipTable-status-img" />
            </td>
            <td>June 17th, 2024</td>
            <td>9:20AM</td>
            <td>9:35AM</td>
            <td>Bathroom</td>
            <td>15 min</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default TimeslipTable;
