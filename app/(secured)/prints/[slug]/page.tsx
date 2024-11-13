import PrintIDComp from "@/src/components/modules/prints/id";
import PrintStickerComp from "@/src/components/modules/prints/sticker";
import React from "react";

const page = ({ params }: { params: { slug: string } }) => {
  const { slug } = params;

  return (
    <div>
      {slug === "sticker" ? (
        <PrintStickerComp />
      ) : slug === "id" ? (
        <PrintIDComp />
      ) : null}
    </div>
  );
};

export default page;
