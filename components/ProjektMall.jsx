import React from "react";

const ProjektMall = ({ blok }) => {
  return (
    <div>
      <ul>
        {blok.body.map((item) => {
          return (
            <li>
              <h2>{item.title}</h2>
              <h3>{item.preamble}</h3>
              <p>{item.content}<a href={item.link.url}>Länk här</a><br/></p>
              {item.content2 !== "" && <p>{item.content2} {item.link2 && item.link2?.url !== "" && <a href={item.link2?.url}>Länk här</a>}</p>}
              {item.content3 !== "" &&<p>{item.content3} {item.link3 && item.link3?.url !== ""  && <a href={item.link3?.url}>Länk här</a>}</p>}<br/>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ProjektMall;
