import Image from "next/image";
import React from "react";

const ServiceDetailsPage = async ({ params }) => {
  const p = await params
  const res = await fetch(`http://localhost:3000/api/service/${p.id}`);
  const data = await res.json();
  return (
    <div>
      <section className="flex justify-center ">
        <figure className="relative">
          <Image
            className="w-full h-72"
            src="/assets/images/checkout/checkout.png"
            alt="service details img"
            width={1137}
            height={300}
          />
          <div className=" layout-bg absolute w-full h-full border-2 border-red-400 top-0">
            <div className="w-full h-full flex items-center font-bold text-3xl ps-16">
              <div>
                <h1 className="text-white ">Service Details</h1>
              </div>
            </div>
          </div>
        </figure>
      </section>
      <section className="flex space-x-10 mt-20">
        <div className="w-[80%]">
          <Image
            src={data?.img}
            alt="services image"
            width={400}
            height={300}
            className="w-full"
          />
          <h1 className="text-3xl font-bold">{data?.title}</h1>
          <p>{data?.description}</p>
        </div>
        <div className="w-[20%]">
            <button className="bg-orange-400 text-white w-[70%] text-center cursor-pointer">checkout</button>
          <h2>
            <span className="font-bold text-xl">Price:</span>
            ${data?.price}
          </h2>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetailsPage;
