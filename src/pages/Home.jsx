import { ArrowRight, Activity, Bone, Scan, ShieldCheck, Award, Stethoscope } from 'lucide-react'
import { Link } from 'react-router-dom'
import alexisPortrait from '../assets/portrait.jpeg'

export default function Home() {
  return (
    <div className="max-w-5xl mx-auto space-y-16 animate-in fade-in duration-700">
      <section className="relative overflow-hidden bg-blue-950 text-white rounded-[2.5rem] shadow-2xl border border-blue-900 flex flex-col-reverse md:flex-row items-center">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_left,_var(--tw-gradient-stops))] from-blue-400 via-blue-950 to-blue-950"></div>
        
        <div className="relative z-10 w-full md:w-3/5 p-8 md:p-16 space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-900/80 border border-blue-700 backdrop-blur-md shadow-sm">
            <Activity className="h-4 w-4 text-amber-400" />
            <span className="text-xs font-bold text-blue-50 tracking-widest uppercase">BSRT Candidate • Class of 2028</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-[1.1]">
            Diagnostic <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-amber-200">Precision.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-blue-200 font-light max-w-xl leading-relaxed">
            I am <strong className="font-semibold text-white">Marie Alexis Uy</strong>, a dedicated Radiologic Technology student combining deep anatomical knowledge with advanced imaging science to deliver exceptional patient care.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Link to="/about" className="bg-amber-100 hover:bg-amber-200 text-amber-950 px-8 py-4 rounded-xl font-bold transition-transform hover:-translate-y-1 flex items-center justify-center gap-2 shadow-lg shadow-amber-900/20">
              View Full Profile <ArrowRight className="h-5 w-5" />
            </Link>
            <Link to="/experience" className="bg-blue-900/50 hover:bg-blue-800 border border-blue-700 text-white px-8 py-4 rounded-xl font-bold transition-colors flex items-center justify-center gap-2">
              <Award className="h-5 w-5 text-blue-300" /> Professional Experience
            </Link>
          </div>
        </div>

        <div className="relative w-full md:w-2/5 h-80 md:h-auto md:absolute md:right-0 md:top-0 md:bottom-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-l from-blue-950 via-transparent to-transparent z-10"></div>
          <img 
            src={alexisPortrait} 
            alt="Marie Alexis Uy" 
            className="w-full h-full object-cover object-top opacity-90"
          />
        </div>
      </section>

      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <div className="bg-white rounded-2xl p-6 border border-blue-100 shadow-sm flex items-center gap-4">
          <div className="p-3 bg-blue-50 rounded-xl text-blue-600 shrink-0">
            <Stethoscope className="h-6 w-6" />
          </div>
          <div>
            <h4 className="font-bold text-blue-950">Clinical Readiness</h4>
            <p className="text-sm text-blue-800/70 font-medium">Immersive healthcare training</p>
          </div>
        </div>
        <div className="bg-white rounded-2xl p-6 border border-blue-100 shadow-sm flex items-center gap-4">
          <div className="p-3 bg-amber-50 rounded-xl text-amber-600 shrink-0">
            <Award className="h-6 w-6" />
          </div>
          <div>
            <h4 className="font-bold text-blue-950">Proven Leadership</h4>
            <p className="text-sm text-blue-800/70 font-medium">Organizational Treasurer</p>
          </div>
        </div>
        <div className="bg-white rounded-2xl p-6 border border-blue-100 shadow-sm flex items-center gap-4">
          <div className="p-3 bg-emerald-50 rounded-xl text-emerald-600 shrink-0">
            <ShieldCheck className="h-6 w-6" />
          </div>
          <div>
            <h4 className="font-bold text-blue-950">Patient-Centered</h4>
            <p className="text-sm text-blue-800/70 font-medium">Strict ethical jurisprudence</p>
          </div>
        </div>
      </section>

      <section className="grid md:grid-cols-3 gap-6">
        <div className="xray-box p-8 rounded-3xl flex flex-col gap-5 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl group">
          <div className="bg-blue-100 w-16 h-16 rounded-2xl flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors shrink-0">
            <Bone className="h-8 w-8 text-blue-700 group-hover:text-white" />
          </div>
          <div>
            <h3 className="text-xl font-black text-blue-950 mb-2">Anatomical Expertise</h3>
            <p className="text-blue-800/80 leading-relaxed text-sm">
              Comprehensive understanding of the human framework, ensuring precise patient positioning and highly accurate diagnostic imaging support.
            </p>
          </div>
        </div>

        <div className="xray-box p-8 rounded-3xl flex flex-col gap-5 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl group">
          <div className="bg-blue-100 w-16 h-16 rounded-2xl flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors shrink-0">
            <Scan className="h-8 w-8 text-blue-700 group-hover:text-white" />
          </div>
          <div>
            <h3 className="text-xl font-black text-blue-950 mb-2">Imaging Informatics</h3>
            <p className="text-blue-800/80 leading-relaxed text-sm">
              Proficient in the core principles of radiation production, exposure characteristics, and modern radiologic technology systems.
            </p>
          </div>
        </div>

        <div className="xray-box p-8 rounded-3xl flex flex-col gap-5 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl group bg-[#f4ebd0] border-[#e6d5a7]">
          <div className="bg-amber-200 w-16 h-16 rounded-2xl flex items-center justify-center group-hover:bg-amber-600 transition-colors shrink-0">
            <Activity className="h-8 w-8 text-amber-800 group-hover:text-white" />
          </div>
          <div>
            <h3 className="text-xl font-black text-blue-950 mb-2">Quality Patient Care</h3>
            <p className="text-blue-800/80 leading-relaxed text-sm">
              Dedicated to delivering compassionate, safe, and efficient care while strictly maintaining professional ethics and healthcare standards.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
