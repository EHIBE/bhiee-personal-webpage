import { User, MapPin, Mail, Phone, Calendar, Heart } from 'lucide-react'
import alexisPortrait from '../assets/portrait.jpeg'

export default function About() {
  return (
    <div className="max-w-5xl mx-auto animate-in slide-in-from-bottom-4 duration-500">
      
      <div className="mb-10 text-center md:text-left">
        <h1 className="text-4xl font-black text-blue-950 mb-4">Biodata & Profile</h1>
        <p className="text-lg text-blue-800/80">Essential details and core clinical competencies.</p>
      </div>

      <div className="flex flex-col md:flex-row gap-12">
        <div className="w-full md:w-1/3 space-y-6">
          <div className="aspect-[3/4] xray-screen rounded-3xl relative overflow-hidden flex items-center justify-center group">
            <span className="text-blue-300/50 font-mono text-sm tracking-widest absolute top-4 left-4 z-10">AP VIEW</span>
            <img 
              src={alexisPortrait} 
              alt="Marie Alexis S. Uy Portrait" 
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="w-full md:w-2/3 space-y-8">
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded-xl border border-blue-100 flex items-center gap-4 shadow-sm">
              <div className="bg-blue-50 p-3 rounded-lg text-blue-600"><User /></div>
              <div>
                <p className="text-xs font-bold text-blue-400 uppercase tracking-wider">Full Name</p>
                <p className="font-semibold text-blue-950">Marie Alexis S. Uy</p>
              </div>
            </div>
            <div className="bg-white p-4 rounded-xl border border-blue-100 flex items-center gap-4 shadow-sm">
              <div className="bg-blue-50 p-3 rounded-lg text-blue-600"><Calendar /></div>
              <div>
                <p className="text-xs font-bold text-blue-400 uppercase tracking-wider">Birth Date & Age</p>
                <p className="font-semibold text-blue-950">March 3, 2005 (21 Yrs)</p>
              </div>
            </div>
            <div className="bg-white p-4 rounded-xl border border-blue-100 flex items-center gap-4 shadow-sm">
              <div className="bg-blue-50 p-3 rounded-lg text-blue-600"><MapPin /></div>
              <div>
                <p className="text-xs font-bold text-blue-400 uppercase tracking-wider">Location</p>
                <p className="font-semibold text-blue-950">General Santos City</p>
              </div>
            </div>
            <div className="bg-white p-4 rounded-xl border border-blue-100 flex items-center gap-4 shadow-sm">
              <div className="bg-blue-50 p-3 rounded-lg text-blue-600"><Heart /></div>
              <div>
                <p className="text-xs font-bold text-blue-400 uppercase tracking-wider">Current Status</p>
                <p className="font-semibold text-blue-950">2nd Year BSRT Student</p>
              </div>
            </div>
            <div className="bg-white p-4 rounded-xl border border-blue-100 flex items-center gap-4 shadow-sm">
              <div className="bg-blue-50 p-3 rounded-lg text-blue-600"><Mail /></div>
              <div>
                <p className="text-xs font-bold text-blue-400 uppercase tracking-wider">Email</p>
                <p className="font-semibold text-blue-950">marie@gmail.com</p>
              </div>
            </div>
            <div className="bg-white p-4 rounded-xl border border-blue-100 flex items-center gap-4 shadow-sm">
              <div className="bg-blue-50 p-3 rounded-lg text-blue-600"><Phone /></div>
              <div>
                <p className="text-xs font-bold text-blue-400 uppercase tracking-wider">Contact</p>
                <p className="font-semibold text-blue-950">09123456789</p>
              </div>
            </div>
          </div>

          <div className="xray-box p-8 rounded-2xl">
            <h3 className="text-xl font-bold text-blue-950 mb-4">Core Clinical Competencies</h3>
            <div className="flex flex-wrap gap-2">
              {['Anatomy & Physiology', 'Radiation Protection', 'Patient Positioning', 'Medical Terminology', 'Vital Signs Monitoring', 'Image Processing', 'Healthcare Ethics', 'Financial Management (Org)'].map((skill) => (
                <span key={skill} className="px-4 py-2 bg-blue-900 text-blue-50 text-sm font-semibold rounded-lg">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
