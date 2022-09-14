import React from "react";

const ProjektMall = ({ blok }) => {
  return (
    <div>
      <ul>
        {blok.body.map((item, index) => {
          return (
            <li key={index}>
              <h2>{item.title}</h2>
              {item.preamble !== "" && <h3>{item.preamble}</h3>}
              <ul>
              <li><p>{item.content}<a href={item.link.url}>{item.link.url}</a><br/></p></li>
              {item.content2 !== "" && <li><p>{item.content2} {item.link2 && item.link2?.url !== "" && <a href={item.link2?.url}>{item.link2.url}</a>}</p></li>}
              {item.content3 !== "" && <li><p>{item.content3} {item.link3 && item.link3?.url !== ""  && <a href={item.link3?.url}>{item.link3.url}</a>}</p></li>}<br/></ul>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ProjektMall;
