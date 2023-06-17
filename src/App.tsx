import "./App.css";
import dataJson from "./assets/data/data.json";
import getDataInObjectForm from "./helpers/getDataInObjectForm";

function App() {
  const dataInObjectForm = getDataInObjectForm(dataJson.rows, dataJson.headers);
  const organizationalUnits: string[] = dataInObjectForm.reduce(
    (acc: string[], obj: { [key: string]: string }) => {
      const unit = obj["Organisation unit"];
      if (unit && !acc.includes(unit)) {
        acc.push(unit);
      }
      return acc;
    },
    []
  );

  const subColumns = dataInObjectForm.reduce(
    (acc: string[], obj: { [key: string]: string }) => {
      const unit = obj["Data"];
      if (unit && !acc.includes(unit)) {
        acc.push(unit);
      }
      return acc;
    },
    []
  );

  const getUniquePeriods = () => {
    const uniquePeriods = Array.from(
      new Set(dataInObjectForm.map((obj) => obj["Period"]))
    );
  
    const periodsWithData = uniquePeriods.map((period) => {
      const dataForPeriod = dataInObjectForm
        .filter((obj) => obj["Period"] === period)
        
  
      return { period, data: dataForPeriod };
    });
  
    return periodsWithData;
  };

  const uniquePeriods = getUniquePeriods()

  return (
    <>
      {console.log(uniquePeriods)}

      <div className="container py-5" data-bs-theme="light">
        <h1 className="text-center">HISP DYNAMIC TABLE</h1>

        <div className="table-responsive">
          <table className="table table-bordered border-dark">
            <thead>
              <tr>
                <th></th>
                {organizationalUnits.map((unit, index) => (
                  <th colSpan={5} key={index}>
                    {unit}
                  </th>
                ))}
              </tr>
              <tr>
                <th></th>
                {organizationalUnits.map((unit, organizationUnitIndex) =>
                  subColumns.map((subcol, index) => (
                    <th key={`${index}${organizationUnitIndex}`}>{subcol}</th>
                  ))
                )}
              </tr>
            </thead>
            <tbody>
              {uniquePeriods.map((data, dataIndex) => (
                <tr key={`row-${dataIndex}`}>
                  <th>{data.period}</th>
                  {organizationalUnits.map((unit) =>
                    subColumns.map((subCol, subColIndex) => {
                      const filteredData = data.data.filter(
                        (item) =>
                          item["Organisation unit"] === unit &&
                          item["Data"] === subCol
                      );
                      const value =
                        filteredData.length > 0 ? filteredData[0].Value : "";
                      return (
                        <td key={`cell-${unit}-${subColIndex}`}>{value}</td>
                      );
                    })
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default App;
