import { Building2, Users, HeartPulse } from 'lucide-react'
import rtsoGroup from '../assets/rtso_group.jpeg'
import rtsoSolo from '../assets/rtso_solo.jpeg'
import agape1 from '../assets/agape_1.jpeg'
import agape2 from '../assets/agape_2.jpeg'

export default function Experience() {
  return (
    <div className="max-w-5xl mx-auto animate-in slide-in-from-right-8 duration-500">
      <div className="mb-12 pl-2 md:pl-12">
        <h1 className="text-4xl font-black text-blue-950 mb-4">Experience & Leadership</h1>
        <p className="text-lg text-blue-800/80">Organizational involvement and clinical training.</p>
      </div>

      <div className="relative pl-8 md:pl-12">
        <div className="absolute left-[11px] md:left-[15px] top-12 bottom-20 w-1 bg-blue-200 rounded-full z-0"></div>

        <div className="relative mb-16">
          <div className="absolute -left-[37px] md:-left-[41px] top-12 w-7 h-7 bg-blue-600 rounded-full border-4 border-[#fdfbf7] z-10 shadow-sm"></div>
          
          <div className="xray-box rounded-3xl relative overflow-hidden shadow-md ml-2 md:ml-4">
            <div className="h-48 md:h-64 w-full">
              <img 
                src={rtsoGroup} 
                alt="RTSO Group" 
                className="w-full h-full object-cover object-center" 
              />
            </div>
            
            <div className="p-8 pt-0 relative z-10">
              <div className="relative -mt-12 md:-mt-16 mb-6">
                <img 
                  src={rtsoSolo} 
                  alt="Alexis RTSO Official" 
                  className="h-24 w-24 md:h-32 md:w-32 rounded-2xl border-4 border-white shadow-lg object-cover bg-blue-50 relative z-20"
                />
              </div>

              <div className="flex flex-wrap items-center gap-2 mb-4 relative z-10">
                <span className="px-3 py-1 bg-blue-600 text-white font-bold text-[10px] sm:text-xs rounded-full shadow-sm tracking-wide uppercase">
                  Current Role
                </span>
                <span className="px-3 py-1 bg-blue-50 text-blue-700 font-bold text-[10px] sm:text-xs rounded-full border border-blue-200 tracking-wide">
                  A.Y. 2025-2026
                </span>
              </div>

              <div className="absolute top-24 right-0 p-8 opacity-5 text-blue-900 pointer-events-none">
                <Building2 className="h-32 w-32" />
              </div>

              <div className="mb-6 relative z-10">
                <h2 className="text-2xl font-bold text-blue-950">Organization Treasurer</h2>
                <h3 className="text-blue-700 font-semibold mt-1 flex items-center gap-2">
                  <Users className="h-4 w-4" /> RTSO ☢️ (Radiologic Technology Students' Organization)
                </h3>
              </div>
              
              <ul className="space-y-3 text-blue-900/80 list-disc list-inside relative z-10">
                <li>Manage and allocate financial resources for the official RadTech club of GSDMSFI.</li>
                <li>Maintain transparent and accurate ledgers for student body funds and event budgets.</li>
                <li>Collaborate with other officers to execute educational seminars and organizational activities.</li>
                <li>Develop leadership and accountability skills alongside clinical studies.</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -left-[37px] md:-left-[41px] top-12 w-7 h-7 bg-amber-500 rounded-full border-4 border-[#fdfbf7] z-10 shadow-sm"></div>

          <div className="bg-[#f4ebd0] border border-[#e6d5a7] p-8 md:p-10 rounded-3xl shadow-sm relative overflow-hidden ml-2 md:ml-4">
            <div className="flex flex-col-reverse md:flex-row gap-10 items-center">
              <div className="w-full md:w-1/2 space-y-4 relative z-10">
                <div className="flex items-center gap-2 mb-2">
                  <HeartPulse className="h-5 w-5 text-amber-600" />
                  <span className="text-xs font-bold text-amber-700 tracking-wider uppercase">SHS Work Immersion</span>
                </div>
                
                <h2 className="text-3xl font-bold text-blue-950">Student Intern</h2>
                <h3 className="text-lg text-blue-800 font-semibold">Agape Maternity Clinic</h3>
                
                <p className="text-blue-900/80 leading-relaxed py-2">
                  Completed an 80-hour intensive work immersion program, gaining early foundational exposure to a clinical environment, patient interaction, and healthcare facility operations.
                </p>
                
                <div className="inline-block px-4 py-1.5 bg-amber-100 text-amber-800 font-bold text-sm rounded-full shadow-sm">
                  A.Y. 2022-2023
                </div>
              </div>

              <div className="w-full md:w-1/2 relative h-64 md:h-72 flex items-center justify-center">
                <div className="absolute inset-0 bg-amber-100/50 rounded-full blur-3xl -z-10"></div>
                
                <img 
                  src={agape1} 
                  alt="Agape Immersion 1" 
                  className="absolute w-44 h-56 md:w-48 md:h-64 object-cover rounded-xl shadow-xl -rotate-6 transform hover:rotate-0 hover:z-30 transition-transform duration-300 border-4 border-white z-10 -ml-12"
                />
                <img 
                  src={agape2} 
                  alt="Agape Immersion 2" 
                  className="absolute w-44 h-56 md:w-48 md:h-64 object-cover rounded-xl shadow-xl rotate-6 transform hover:rotate-0 hover:z-30 transition-transform duration-300 border-4 border-white z-20 ml-16 md:ml-24 mt-8"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
