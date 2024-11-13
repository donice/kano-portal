import React, { useEffect, useState } from "react";
import "./style.css";
import { QRCodeSVG } from "qrcode.react";

const BulkComp = ({ bulkData }: any) => {
  const [displayData, setDisplayData] = useState<any[]>([]);

  useEffect(() => {
    if (bulkData) {
      setDisplayData(bulkData);
    }
  }, [bulkData]);

  if (!displayData || displayData.length === 0) {
    return <div>No data available</div>;
  }

  return (
    <div className="bulk-sticker">
      {displayData.map((data: any, idx: number) => (
        <div key={idx} className="card">
          <span className="card-id">{data?.assetCode}</span>
          <span className="card-cat">{data?.IncomeCategory}</span>
          <span className="card-income">{data?.IncomeCategory}</span>
          <span className="card-enum">{data?.EnumerationID}</span>
          <span className="card-tag">{data?.productTag}</span>
          <span className="card-vehicle">{data?.PlateNumber}</span>
          <div className="card-content">
            <QRCodeSVG
              style={{ width: 190, height: 190 }}
              className="qrcode"
              value={`https://web.abiapay.com/verify?enum_id=${data?.EnumerationID}`}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default BulkComp;
