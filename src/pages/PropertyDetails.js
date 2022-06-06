import React from 'react';

// import houseData
import { housesData } from '../data';

// import useParams
import { useParams } from 'react-router-dom';

const PropertyDetails = () => {
  const { id } = useParams();
  const property = housesData.find((house) => {
    return house.id === parseInt(id);
  });

  return (
    <div className='container mx-auto'>
      <div className='flex flex-col gap-6 lg:flex-row'>
        <div>
          <img src={property.image} alt='' />
        </div>
        <div className='flex-1'>
          <h2 className='text-2xl font-semibold'>{property.name}</h2>
          <h3 className='text-lg mb-4'>{property.address}</h3>
          <div className='mb-2 flex gap-x-2 text-base'>
            <div className='bg-green-500 rounded-full text-white px-3 inline-block'>
              {property.type}
            </div>
            <div className='bg-violet-500 rounded-full text-white px-3 inline-block'>
              {property.country}
            </div>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod neque,
            saepe natus et odio maiores voluptas, accusamus id ex eligendi earum
            repellat cum labore suscipit quos cupiditate ea explicabo
            reprehenderit?
          </p>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;
