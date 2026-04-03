import { Stethoscope, Camera, Radiation, HeartPulse } from 'lucide-react'
import gallery1 from '../assets/gallery_1.jpeg'
import gallery2 from '../assets/gallery_2.jpeg'
import gallery3 from '../assets/gallery_3.jpeg'
import gallery4 from '../assets/gallery_4.jpeg'
import gallery5 from '../assets/gallery_5.jpeg'
import gallery6 from '../assets/gallery_6.jpeg'

export default function Journey() {
  const galleryImages = [gallery1, gallery2, gallery3, gallery4, gallery5, gallery6]

  return (
    <div className="max-w-5xl mx-auto space-y-12 animate-in fade-in duration-700">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-black text-blue-950">My Clinical Journey</h1>
        <p className="text-lg text-blue-800/80">Documenting my path to becoming a Radiologist.</p>
      </div>

      <div className="relative space-y-12 pb-12 mt-12">
        <div className="absolute top-0 bottom-0 left-6 md:left-1/2 w-1 bg-blue-300 -translate-x-1/2 z-0"></div>

        <div className="relative w-full">
          <div className="hidden md:block md:absolute md:left-0 md:top-0 md:w-1/2 md:pr-12 text-right">
            <h3 className="text-xl font-bold text-blue-950">The Spark</h3>
            <p className="text-blue-800/70 text-sm mt-1">Inspired by family dedication to healthcare.</p>
          </div>

          <div className="absolute left-6 md:left-1/2 w-6 h-6 rounded-full bg-amber-400 border-4 border-[#fdfbf7] shadow-sm -translate-x-1/2 top-0 md:top-1 z-10"></div>

          <div className="ml-16 md:ml-[50%] md:pl-12">
            <div className="xray-box p-6 rounded-2xl">
              <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center text-amber-700 mb-4 md:hidden">
                <Stethoscope />
              </div>
              <h4 className="font-bold text-lg text-blue-900 md:hidden mb-2">The Spark</h4>
              <p className="text-blue-900 leading-relaxed">
                My journey began with a deep inspiration drawn from my aunt, a dedicated nurse in the United Kingdom. Seeing the impact of healthcare professionals firsthand ignited my absolute desire to enter the medical field.
              </p>
            </div>
          </div>
        </div>

        <div className="relative w-full">
          <div className="hidden md:block md:absolute md:right-0 md:top-0 md:w-1/2 md:pl-12 text-left">
            <h3 className="text-xl font-bold text-blue-950">Agape Maternity Clinic</h3>
            <p className="text-blue-800/70 text-sm mt-1">SHS Work Immersion • A.Y. 2022-2023</p>
          </div>

          <div className="absolute left-6 md:left-1/2 w-6 h-6 rounded-full bg-emerald-500 border-4 border-[#fdfbf7] shadow-sm -translate-x-1/2 top-0 md:top-1 z-10"></div>

          <div className="ml-16 md:ml-0 md:w-1/2 md:pr-12">
            <div className="bg-[#f4ebd0] border border-[#e6d5a7] shadow-sm p-6 rounded-2xl">
              <div className="flex items-center gap-3 mb-4 md:hidden">
                <HeartPulse className="text-emerald-600 h-6 w-6 shrink-0" />
                <h4 className="font-bold text-lg text-blue-900">SHS Work Immersion</h4>
              </div>
              <p className="text-blue-900 leading-relaxed">
                During my Senior High School years, I completed an intensive 80-hour work immersion program. This experience gave me my very first real exposure to patient interaction, clinical environments, and the daily operations of a healthcare facility.
              </p>
            </div>
          </div>
        </div>

        <div className="relative w-full">
          <div className="hidden md:block md:absolute md:left-0 md:top-0 md:w-1/2 md:pr-12 text-right">
            <h3 className="text-xl font-bold text-blue-950">Notre Dame of Dadiangas University</h3>
            <p className="text-blue-800/70 text-sm mt-1">1st Year • Bachelor of Science in Nursing</p>
          </div>

          <div className="absolute left-6 md:left-1/2 w-6 h-6 rounded-full bg-blue-500 border-4 border-[#fdfbf7] shadow-sm -translate-x-1/2 top-0 md:top-1 z-10"></div>

          <div className="ml-16 md:ml-[50%] md:pl-12">
            <div className="bg-white border border-blue-100 shadow-sm p-6 rounded-2xl">
              <h4 className="font-bold text-lg text-blue-900 md:hidden mb-2">1st Year BSN at NDDU</h4>
              <p className="text-blue-800/90 leading-relaxed">
                Initially pursuing Nursing, I built a strong foundation in patient care, community health, and basic sciences. However, my early exposure to diagnostics during this time revealed an entirely different calling for my future.
              </p>
            </div>
          </div>
        </div>

        <div className="relative w-full">
          <div className="hidden md:block md:absolute md:right-0 md:top-0 md:w-1/2 md:pl-12 text-left">
            <h3 className="text-xl font-bold text-blue-950">GSDMSFI</h3>
            <p className="text-blue-800/70 text-sm mt-1">Transfer & Shift to RadTech</p>
          </div>

          <div className="absolute left-6 md:left-1/2 w-6 h-6 rounded-full bg-blue-900 border-4 border-[#fdfbf7] shadow-sm -translate-x-1/2 top-0 md:top-1 z-10"></div>

          <div className="ml-16 md:ml-0 md:w-1/2 md:pr-12">
            <div className="bg-blue-950 text-white p-6 rounded-2xl shadow-xl">
              <div className="flex items-center gap-3 mb-4">
                <Radiation className="text-amber-400 h-6 w-6 shrink-0" />
                <h4 className="font-bold text-lg md:hidden">The Pivot</h4>
              </div>
              <p className="text-blue-100 leading-relaxed">
                Realizing my absolute passion was in imaging science, dealing with X-rays, and diagnosing from the inside out, I proudly transferred to General Santos Doctors' Medical School Foundation, Inc. to pursue Radiologic Technology and chase my dream of becoming a Radiologist.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-12 border-t-2 border-blue-100">
        <h2 className="text-2xl font-black text-blue-950 mb-6 flex items-center gap-2">
          <Camera className="text-blue-600 shrink-0" /> Clinical Gallery
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 sm:gap-4">
          {galleryImages.map((imgSrc, index) => (
            <div key={index} className="aspect-square bg-blue-100 rounded-xl overflow-hidden border-2 border-blue-200 shadow-sm transition-transform hover:scale-[1.02] cursor-pointer">
              <img 
                src={imgSrc} 
                alt={`Clinical Journey ${index + 1}`} 
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
