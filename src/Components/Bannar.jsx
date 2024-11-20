import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Pagination, Navigation } from 'swiper/modules';
const Bannar = ({ CampaignData }) => {
  return (
    <div className="">
      <Swiper
        pagination={{
          type: 'fraction',
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
     {CampaignData.map((campaignData, index) => (
  <SwiperSlide key={index}>
    <div
      className="h-fit bg-cover bg-center"
      style={{ backgroundImage: `url(${campaignData.image})` }}
    >
      <div className="bg-black bg-opacity-50 h-full p-4 flex flex-col justify-between">
        <div className='py-64'>
          <h2 className="text-2xl my-4 font-bold text-white">{campaignData.title}</h2>
          <p className="text-white">{campaignData.description}</p>
          <p className="text-white">Location: {campaignData.division}</p>
          <button className="btn my-5 bg-[#137257] text-white">More Info</button>
        </div>
      </div>
    </div>
  </SwiperSlide>
))}






      </Swiper>
    </div>
  );
};

export default Bannar;