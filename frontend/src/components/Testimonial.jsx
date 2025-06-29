import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "swiper/css";

const testimonials = [
    {
        quote: "Rising Star Academy ለልጃችን ድንቅ ተሞክሮ ነበር። መምህራኑ በእውነት ተንከባካቢ ናቸው እና አካባቢው ለመማር ምቹ ነው።",
        name: "አርሴማ, ወላጅ",
    },
    {
        quote: "ወደ ሙአለህፃናት ኘሮግራም ካስገባኃት በኋላ በሴት ልጄ በራስ መተማመን እና ፈጠራ ላይ ትልቅ እድገት አይቻለሁ።",
        name: "አበበ, ወላጅ",
    },
    {
        quote: "ትምህርት ቤቱ ምሁራንን ብቻ ሳይሆን ጠንካራ ባህሪንም ያዳብራል. የRising Star ቤተሰብ አካል በመሆናችን ኩራት ይሰማናል።",
        name: "መቅደስ, ወላጅ",
    },
    {
        quote: "በየቀኑ ልጄ የተማረውን ለማካፈል በደስታ ወደ ቤት ይመጣል። ክፍሎቹ አሳታፊ ናቸው እና ሰራተኞቹ በጣም ባለሙያ ናቸው።",
        name: "ዳንኤል, ወላጅ",
    },
    {
        quote: "ትምህርት ቤቱ ኢትዮጵያዊ እሴቶችን ከዘመናዊ የማስተማር ዘዴዎች ጋር የሚያዋህድብትን መንገድ እንወዳለን። በትክክል የምንፈልገው ይህንን ነበር.",
        name: "ሃና, ወላጅ",
    },
    {
        quote: "ከትምህርት ቤቱ ጋር ያለኝ ግንኙነት በጣም ጥሩ ነው። ሁል ጊዜ መረጃ እንደማገኝ እና በልጄ ትምህርት ውስጥ እንደተካተትኩ ይሰማኛል።",
        name: "ነጻነት, ወላጅ",
    },
    {
        quote: "ሥርዓተ ትምህርቱ ጠንካራ ነው እና ከመምህራኑ የሚሰጠው እንክብካቤ እውነተኛ ነው። ሌሎችም ይህንን ት/ቤት እንዲጠቀሙበት እመክራለሁ።",
        name: "ሳሙኤል, ወላጅ",
    },
    {
        quote: "Rising Star Academy ልጄ የበለጠ ራሱን የቻለ እና በራስ የመተማመን መንፈስ እንዲኖረው ረድቶታል። ለውጡ አስደናቂ ነው።",
        name: "ማህሌት, ወላጅ",
    },
    {
        quote: "ልጆች በስሜትም ሆነ በአካዳሚክ የሚበለጽጉበት ትክክለኛ ቦታ።",
        name: "ትግስት, ወላጅ",
    },
    {
        quote: "መገልገያዎቹ ንፁህ እና በቀለማት ያሸበረቁ ናቸው፣ እና የትምህርት ቤቱ ድባብ በጣም ጥሩ ነው። ለዚህ ትምህርት ቤት አመስጋኞች ነን።",
        name: "ያሬድ, ወላጅ",
    }
];

export default function Testimonial() {
    const [swiperRef, setSwiperRef] = useState(null);

    return (
        <section className="relative bg-gradient-to-br from-[#24326A] via-[#3B4E9B] to-[#6B82D8] text-white py-24 px-6 md:px-16 overflow-hidden">

            {/* Decorative Divider (Wave top) */}
            <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0]">
                <svg className="relative block w-full h-12" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" fill="white">
                    <path d="M321.39 56.14C220.23 86.4 110.4 98.88 0 83.6V0h1200v27.35c-114.72 44.58-266.91 58.59-403.56 48.24C681.09 66.38 523.81 17.62 321.39 56.14z" />
                </svg>
            </div>


            <div className="relative z-10 max-w-4xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 drop-shadow-xl">
                    What Parents Say
                </h2>
                <p className="text-[#E0E8F8] text-lg mb-12">
                    Hear from families who’ve trusted us with their children’s early
                    education journey.
                </p>

                <div className="relative group">
                    <Swiper
                        modules={[Autoplay]}
                        spaceBetween={30}
                        slidesPerView={1}
                        loop={true}
                        autoHeight={true}
                        autoplay={{
                            delay: 5000,
                            disableOnInteraction: false,
                            pauseOnMouseEnter: true,
                        }}
                        onSwiper={setSwiperRef}
                    >
                        {testimonials.map((item, index) => (
                            <SwiperSlide key={index}>
                                <div className="flex flex-col items-center">
                                    <div className="bg-white text-[#132669] rounded-xl p-6 shadow-xl max-w-xl w-full text-left transition-all duration-300 transform hover:scale-[1.02] hover:shadow-2xl">
                                        <p className="mb-4 italic text-lg leading-relaxed">
                                            “{item.quote}”
                                        </p>
                                        <div className="text-sm font-semibold text-[#2B3CAB]">
                                            — {item.name}
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {/* Manual nav buttons */}
                    <div className="flex justify-center gap-6 mt-6 pb-2">
                        <button
                            onClick={() => swiperRef?.slidePrev()}
                            className="bg-white text-[#2B3CAB] p-3 rounded-full shadow-md transition-all hover:bg-[#E0E7FF] hover:scale-110"
                            aria-label="Previous testimonial"
                        >
                            <FaArrowLeft />
                        </button>
                        <button
                            onClick={() => swiperRef?.slideNext()}
                            className="bg-white text-[#2B3CAB] p-3 rounded-full shadow-md transition-all hover:bg-[#E0E7FF] hover:scale-110"
                            aria-label="Next testimonial"
                        >
                            <FaArrowRight />
                        </button>
                    </div>
                </div>
            </div>

            {/* Decorative Divider (Wave bottom) */}
            <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] rotate-180">
                <svg className="relative block w-full h-12" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" fill="white">
                    <path d="M321.39 56.14C220.23 86.4 110.4 98.88 0 83.6V0h1200v27.35c-114.72 44.58-266.91 58.59-403.56 48.24C681.09 66.38 523.81 17.62 321.39 56.14z" />
                </svg>
            </div>
        </section>
    );
};