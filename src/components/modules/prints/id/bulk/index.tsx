import Image from "next/image";
import React, { useEffect, useState } from "react";
import "./style.scss";
import { QRCodeSVG } from "qrcode.react";

const BulkComp = ({ bulkData }: any) => {
  const [displayData, setDisplayData] = useState([] || null);

  useEffect(() => {
    if (bulkData) {
      setDisplayData(bulkData);
    }
  }, [bulkData]);

  if (!bulkData) {
    return null;
  }

  return (
    <div className="bulk-id">
      {displayData?.map((data: any, idx: number) => (
        <div key={idx} className="card">
          <span className="card-id">{data?.EnumerationID}</span>
          <span className="card-tag">{data?.productTag}</span>
          <div className="card-content">
            <div className="card-content_image">
              <img src={data?.PhotoID} alt={""} width={100} height={100} />
            </div>
            <div className="card-content_text">
              <div className="">
                <p>Surname:</p>
                <p>{data?.surname}</p>
              </div>
              <div className="middle top">
                <p>Others:</p>
                <p>{data?.first_name + " " + data?.middle_name}</p>
              </div>
              <div className="bottom top">
                <p>D.O.B:</p>
                <p>{data?.birth_date}</p>
              </div>
              <div className="bottom top">
                <p>Gender:</p>
                <p>{data?.gender}</p>
              </div>
            </div>

            <div className="card-content_qr">
            <QRCodeSVG style={{width: 90, height: 90}} className="qrcode" value={`https://web.abiapay.com/verify?enum_id=${data?.EnumerationID}`} />,
         </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BulkComp;
