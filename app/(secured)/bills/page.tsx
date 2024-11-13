import React from 'react'
import type { Metadata } from "next";
import BillsComponent from '@/src/components/modules/tickets/bills';

export const metadata: Metadata = {
  title: "Transport Tickets - Agent Portal",
  description: "Agents Portal Tickets Page",
};


const BillsPage = () => {
  return (
    <div>
      <BillsComponent />
    </div>
  )
}

export default BillsPage;