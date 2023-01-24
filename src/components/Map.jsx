import React from 'react'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
const Map = () => {
  return (
    <MapContainer className='w-[90%] lg:w-[70%] h-1/2 mx-auto rounded-xl shadow-lg mt-10 mb-10' center={[18.55668726956037, 73.90995917839173]} zoom={13} scrollWheelZoom={false}>
  <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">Adv Rajan Ladkat</a>'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
  <Marker position={[18.55668726956037, 73.90995917839173]}>
    <Popup className="bg-black/10 ring-2 ring-red-500   ">
      <h1 className='text-2xl font-bold'>Office</h1>
        <p className='text-lg'>Ramwadi Nagar Road, Pune</p>
        <a href="https://www.google.com/maps/place/Shree+Sadguru+Hambir+Baba+Society+Wing+A/@18.5566161,73.9075559,17z/data=!3m1!4b1!4m5!3m4!1s0x3bc2c115770250cb:0x6e78b7791ccf54b3!8m2!3d18.5566161!4d73.9097446" className='bg-fuchsia-500 text-white hover:bg-fuchsia-600 duration-200 text-white font-bold py-2 px-4 rounded'>Get Direction</a>
    </Popup>
  </Marker>
</MapContainer>
  )
}

export default Map