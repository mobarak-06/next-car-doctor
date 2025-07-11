import dbConnect from "@/lib/dbConnect";
import Image from "next/image";
import React from "react";

const Services = async () => {
const serviceCollection = dbConnect("services")
  const data = await serviceCollection.find({}).toArray();
  console.log(data);
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3">
      {data.map((item) => (
        <div key={item._id} >
            <Image src={item?.img} width={314} height={200} 
            alt="service_imag"/>
          <h2>{item.title}</h2>
        </div>
      ))}
    </div>
  );
};

export default Services;
