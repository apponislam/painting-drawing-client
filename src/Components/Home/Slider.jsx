import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const Slider = () => {
    return (
        <div>
            <Swiper className="mySwiper">
                <SwiperSlide>
                    <div className="h-screen w-full relative">
                        <div>
                            <img className="h-screen w-full object-cover overflow-hidden" src="/WatercolourPainting.jpg" />
                        </div>
                        <div className="bg-white p-6 rounded-2xl absolute top-1/2 left-52 -translate-y-1/2">
                            <h1 className="text-3xl uppercase font-semibold mb-5 ">Watercolour Painting</h1>
                            <p className="w-96">Explore the delicate interplay of water and pigment, capturing ethereal scenes with fluidity and transparency in stunning watercolour paintings.</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="h-screen w-full relative">
                        <div>
                            <img className="h-screen w-full object-cover overflow-hidden" src="/CharcoalSketching.jpg" />
                        </div>
                        <div className="bg-white p-6 rounded-2xl absolute top-1/2 left-52 -translate-y-1/2">
                            <h1 className="text-3xl uppercase font-semibold mb-5 ">Charcoal Sketching</h1>
                            <p className="w-96">Create stunning charcoal sketches with depth and contrast, capturing detail and emotion in captivating black-and-white artwork.</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="h-screen w-full relative">
                        <div>
                            <img className="h-screen w-full object-cover overflow-hidden" src="/LandscapePainting.jpg" />
                        </div>
                        <div className="bg-white p-6 rounded-2xl absolute top-1/2 left-52 -translate-y-1/2">
                            <h1 className="text-3xl uppercase font-semibold mb-5 ">Landscape Painting</h1>
                            <p className="w-96">Capture the beauty of nature through vibrant colors and textures, depicting landscapes that evoke a sense of awe and tranquility.</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="h-screen w-full relative">
                        <div>
                            <img className="h-screen w-full object-cover overflow-hidden" src="/OilPainting.jpg" />
                        </div>
                        <div className="bg-white p-6 rounded-2xl absolute top-1/2 left-52 -translate-y-1/2">
                            <h1 className="text-3xl uppercase font-semibold mb-5 ">Oil Painting</h1>
                            <p className="w-96">Express yourself with rich, vibrant colors and textures, creating timeless masterpieces that captivate with depth and emotion.</p>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Slider;
