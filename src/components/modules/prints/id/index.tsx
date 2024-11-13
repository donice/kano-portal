"use client";
import { CustomHeader } from "@/src/components/common/header";
import React, { useRef, useState } from "react";
import BulkPrintForm from "./form";
import BulkComp from "./bulk";
import { Button } from "@/src/components/common/button";

const PrintIDComp = () => {
  const [viewData, setViewData] = useState("form");
  const [bulkData, setBulkData] = useState<[] | null>(null);

  const printRef = useRef<HTMLDivElement>(null);

  const handlePrint = () => {
    if (printRef.current) {
      const printContents = printRef.current.innerHTML;

      const printWindow = window.open("", "", "width=900,height=600");

      if (printWindow) {
        printWindow.document.write(`
          <html>
          <head>
            <title>Print Stickers</title>
            <style>
              @media print {
                .bulk-print-item {
                  page-break-after: always;
                  counter-increment: bulk-item;
                }
                .bulk-print-item:nth-child(3n) {
                  page-break-after: always;
                }
              }
  
              /* Grid Layout for Stickers */
             .bulk-id {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

@media (max-width: 768px) {
  .bulk-id {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
}

.bulk-id .card {
  margin-top: 2rem;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  position: relative;
  gap: 1rem;
  background-image: url("/prints/id-background.jpg");
  background-repeat: no-repeat;
  background-position: center;
  padding: 1rem;
  border-radius: 0.5rem;
  width: 32rem;
  height: 19.5rem;
  border: 2px solid rgb(240, 240, 240);
  box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
}

.bulk-id .card-tag {
  position: absolute;
  top: 6.75rem;
  right: 3.25rem;
  color: white;
  font-weight: 600;
  font-size: 0.9rem;
  padding: 0.5rem;
}

.bulk-id .card-id {
  position: absolute;
  top: 8.5rem;
  left: 7.3rem;
  font-weight: 600;
  font-family: serif;
  font-size: 1.9rem;
  padding: 0.5rem;
}

.bulk-id .card-content {
  gap: 1rem;
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
}

.bulk-id .card-content_text {
  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  grid-column: span 3 / span 3;
  margin-top: -2rem;
  max-height: 7rem;
}

.bulk-id .card-content_text div {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.bulk-id .card-content_text div p:first-child {
  font-size: 0.85rem;
  text-transform: uppercase;
}

.bulk-id .card-content_text div p:last-child {
  grid-column: span 2 / span 2;
  margin-bottom: -4rem;
  font-weight: 700;
}

.top {
margin-top: -4rem;

}

         
            </style>
          </head>
          <body>${printContents}</body>
          </html>
        `);
        printWindow.document.close();

        printWindow.onload = () => {
          printWindow.focus();
          printWindow.print();
          printWindow.close();
        };
      } else {
        console.error("Failed to open the print window.");
      }
    } else {
      console.error("printRef is null.");
    }
  };

  return (
    <div>
      <CustomHeader title="Bulk ID Cards" desc="Print bulk ID cards" />
      {viewData == "form" ? (
        <BulkPrintForm setViewData={setViewData} setBulkData={setBulkData} />
      ) : viewData == "data" ? (
        <div className="print-top">
          <Button text={"Print IDs"} onClick={handlePrint} />
          <div ref={printRef}>
            <BulkComp bulkData={bulkData} />
          </div>
        </div>
      ): null}
    </div>
  );
};

export default PrintIDComp;
