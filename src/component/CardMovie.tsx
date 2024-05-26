import React from 'react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


interface Video {
  name: string;
  landscapeImage: string;
  portraitImage: string;
  bannerImage: string;
  genres: string[];
  rating: string;
  directors: string[];
  year: string;
  duration: string;
  description: string;
  long_description: string;
  isOriginal: boolean;
}

interface DataObject {
  videos: Video[];
  title: string;
  type: string;
  orientation: string;
}

export default function CardMovie({ DataObject }: { DataObject: DataObject }) {
  return (
    <div className="m-7 relative">
      <h1 className="text-white text-lg font-bold mb-3">{DataObject.title}</h1>
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={10}
        slidesPerView={4.5}
        slidesPerGroup={3}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        speed={1500}
        breakpoints={{
          // when window width is >= 480px

          480: {
            slidesPerView: 1,
            slidesPerGroup: 1,
          },
          // when window width is >= 640px
          640: {
            slidesPerView: 2,
            slidesPerGroup: 2,
          },
          // when window width is >= 768px
          768: {
            slidesPerView: 3,
            slidesPerGroup: 3,
          },
           // when window width is >= 1024px
           1024: {
            slidesPerView: 4,
            slidesPerGroup: 3,
          },
          // when window width is >= 1280px
          1280: {
            slidesPerView: 4.5,
            slidesPerGroup: 4,
          },
        }}
      >
        {DataObject.videos.map((m: Video) => (
          <SwiperSlide key={m.name} className="bg-transparent">
            <div className="mx-2 relative rounded-lg py-5">
              <img src={m.bannerImage} alt={m.name} className="w-full h-auto rounded-lg" />
              <div className="p-2 rounded-b-lg">
                <h1 className="text-white text-lg font-bold">{m.name}</h1>

                <div className="text-gray-600 mt-1 flex flex-wrap">
                  {m.genres.map((genre: string, index: number) => (
                    <span key={index} className="m-1 px-2 py-1 bg-gray-800 text-white rounded">
                      {genre}
                    </span>
                  ))}
                </div>
                <p className="text-gray-400 overflow-hidden whitespace-nowrap text-ellipsis">
                  {m.description}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}