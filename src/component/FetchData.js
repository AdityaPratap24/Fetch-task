import React, { useEffect, useState } from "react";

const FetchData = () => {
  const [fetchedData, setFetchedData] = useState([]);
  const [decline, setDecline] = useState("");
  let WEB_URL = "https://www.nseindia.com/api/market-data-pre-open?key=NIFTY";

  const fetchData = async (WEB_URL) => {
    const sessionCookie =
      'defaultLang=en; _ga=GA1.1.123690306.1689761996; nsit=980J_NbMr_XOChLEmjF8DGrJ; bm_mi=E4FC887A6C26B212B41A562F72A85D8F~YAAQLbYRYFmpEXOJAQAAmKEMdBQJ+Pf30QvjUnTy+9Ef/t6usq2HX1VDj/xmesNVETaOJSdjcYAH+3YA7X1ELGpoqr4w39CZ/f1k3Py9Qqvtuc23gXnUIiDU2GushoXIgTzkt7hCtDQAM8QuP0JOkhnYeTcfCAbVRFGitWJI9x9xQoEV9mDqt7rrR46goQqVlr+QepnNFAop16WKNBniVweuEOYXIy+vp0203FILbCuFYAbsohocQu0cHX1fmxeclrcKTYbJnaUxYokwUiEojHHajNr1b4ik6VKgzEmXWXSKu4uJW0qjQ6uw+3Mu7SyRhhnKvQRDt6ZLV4S9p57/wxL3hdh6F4TwG5BLdArKUK7Inj7czipEFOWq/Fqlnns=~1; ak_bmsc=779C29442C21008D0BE9C8EDC927DF22~000000000000000000000000000000~YAAQLbYRYISpEXOJAQAAI6gMdBR5tM4ipdcLgsS5pGTvpNwlSCbiO+FCwzpKrYyff9CvByrc21ycdgS0q+6qwxu99fjxUZ+Syu6H3yb95iuPtIVkQISxMCB6l/bLbRP/Dk+Ss97604Z9WH2wLsGD7/ekN3uuDJ8eFB8bK0lcyfsq2aT3ZKadDhdQbEEvkTUi84KlSoKDCD1a2lA+A55YT+Jn4+SvCROJjKCy8SwuacRAIgWUmNwOFZqsObtRKtl6ouwGD0lPjoSvVE47H935vzvk2qgA82NwADaXHLJyj8Sn0ITdeI4JrpHKcfqo9FYtiHFOS1ujw5dh1mRBgmqkcvQknzsWE3ehXN+hwx9gKv0vvp180hzv1VN+5hsx63qx1rDao0yNCM40TYhjSlz0hfbVCOQAhE5P9h9rXJnKZ00D+f967O5sBGWfsN2rAaPKsiempFm+//yR2nYHVsy2Jh4GjJJQ5z+z4zM6S8rfe+rhsJ4WYRqV+uw8xfALaulPnIFkAxhbnhzeFAOrbUUYeoTtbXS0EA88t2YN+yB7lfZQDNz578gQfr9XMov3ZC4dOYjSUgVWK+6ydQTlGzg=; AKA_A2=A; nseappid=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJhcGkubnNlIiwiYXVkIjoiYXBpLm5zZSIsImlhdCI6MTY4OTg3NDUxNiwiZXhwIjoxNjg5ODgxNzE2fQ.iL9duOqcpvaMt3dpNzTatLUPlEBNJHPYRA4Wn5sUIDc; RT="z=1&dm=nseindia.com&si=72781388-9310-4668-aad5-fbe481bbe778&ss=lkbfge5p&sl=0&se=8c&tt=0&bcn=%2F%2F684d0d4c.akstat.io%2F"; _ga_PJSKY6CFJH=GS1.1.1689874173.6.1.1689874517.59.0.0; bm_sv=CCF50AA682C29E1BB7EC2617A80324D7~YAAQLbYRYJUoF3OJAQAA3NBedBRX7RTvrNTY655odcsIchArn7/MlmYMa8w+BraXUV8Vg3kG6g8QDpvsrzmsZOyVRAkp7lhykyVpOLjjFrSZvRc1kg5Yv9ofWCB3cdquxhoscdouLKeT22ySvtQqY8PJqQBO4DGy7RdO5FRtFE2cunZ8vbS/Uyww5+NqW5XhqX+FTVjPSjxRQebV0tQor1p8BrTlilYedmA2JTkufMJDSmXSMbLvtA9tyFqKhiZC30kd~1';
    const res = await fetch(WEB_URL, {
      headers: { 
        'Cookie': `bm_sv=${sessionCookie}`,
      },
    });
    const json = await res.json();
    if (res.ok) {
      // console.log("ok");
      // console.log(json.data);
      // console.log(json.declines);
      setFetchedData(json.data);
      setDecline(json.declines);
      // console.log(json?.data[1].metadata);
      // console.log(json.data.length);
    } else {
      console.log("not ok");
    }
  };

  useEffect(() => {
    fetchData(WEB_URL);
  }, []);
  return (
    <>
      <div className="m-auto w-4/5">
        <h1 className="pt-3 text-lg font-bold gap-7">Decline : {decline}</h1>
        <ul className="flex flex-wrap gap-8 justify-between">
          {fetchedData.map((item, i) => {
            const { symbol, lastPrice, change, iep } = { ...item.metadata };
            return (
              <>
                <div
                  className="bg-slate-500 w-72 h-50 font-bold my-4 px-2 py-4 border-2 border-gray-400"
                  key={i}
                >
                  <div className="pt-3 text-lg font-bold">
                    Symbol : {symbol}
                  </div>
                  <div className="pt-3 text-lg font-bold">
                    Last Price : {lastPrice}
                  </div>
                  <div className="pt-3 text-lg font-bold">
                    Change : {change}
                  </div>
                  <div className="pt-3 text-lg font-bold">IEP : {iep}</div>
                </div>
              </>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default FetchData;
