import React from "react";

function History() {

  const historyData = [
    {
      id: 1,
      date: "04 Oct 2026",
      feed: "Maize Silage",
      quality: 86,
      status: "Excellent"
    },
    {
      id: 2,
      date: "02 Oct 2026",
      feed: "Wheat Straw",
      quality: 74,
      status: "Good"
    },
    {
      id: 3,
      date: "28 Sep 2026",
      feed: "Green Fodder",
      quality: 81,
      status: "Good"
    },
    {
      id: 4,
      date: "24 Sep 2026",
      feed: "Maize Silage",
      quality: 68,
      status: "Average"
    }
  ];

  return (
    <div className="history-page">

      <div className="page-header">
        <div>
          <h1>Analysis History</h1>

          <p>
            View your previous feed quality analyses.
          </p>
        </div>
      </div>

      <div className="history-card">

        <div className="history-header">
          <h2>Previous Analyses</h2>

          <button className="secondary-button">
            Export
          </button>
        </div>

        <div className="table-container">

          <table>

            <thead>
              <tr>
                <th>Date</th>
                <th>Feed Type</th>
                <th>Quality Score</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>

              {historyData.map((item) => (
                <tr key={item.id}>

                  <td>
                    {item.date}
                  </td>

                  <td>
                    {item.feed}
                  </td>

                  <td>
                    <strong>
                      {item.quality}/100
                    </strong>
                  </td>

                  <td>
                    <span className="history-status">
                      {item.status}
                    </span>
                  </td>

                  <td>
                    <button className="view-button">
                      View
                    </button>
                  </td>

                </tr>
              ))}

            </tbody>

          </table>

        </div>

      </div>

    </div>
  );
}

export default History;