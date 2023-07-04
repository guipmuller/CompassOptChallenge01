import { useEffect, useState } from "react";

const UseFetch: React.FC = () => {
  //   const url = "http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=69078e247ecd227eac08756c439b4ade";
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://api.example.com/data");
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <div>
      {data ? (
        <ul>
          {data.map((item: any) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
};

export default UseFetch;
