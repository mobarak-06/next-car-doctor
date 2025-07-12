import dbConnect, { collectionNameObj } from "@/lib/dbConnect";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Services = async () => {
  const serviceCollection = dbConnect(collectionNameObj.servicesCollection);

  const data = await serviceCollection.find({}).toArray();

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3">
      {data.map((item) => (
        <div key={item._id}>
          <Image src={item?.img} width={314} height={200} alt="service_imag" />
          <h2>{item.title}</h2>
          <Link href={`/services/${item._id}`}>
            <button>Detail</button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Services;
