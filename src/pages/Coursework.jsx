import { BookOpen, CheckCircle2 } from 'lucide-react'
import { allSubjects } from '../data/subjects'

export default function Coursework() {
  if (!allSubjects || allSubjects.length === 0) return null

  return (
    <div className="max-w-5xl mx-auto animate-in fade-in duration-500">
      <div className="mb-10 flex items-center gap-4 text-center md:text-left flex-col md:flex-row">
        <div className="p-3 bg-blue-900 rounded-xl text-white shadow-lg shrink-0">
          <BookOpen className="h-8 w-8" />
        </div>
        <div>
          <h1 className="text-4xl font-black text-blue-950">Academic Record</h1>
          <p className="text-blue-800/80 mt-1">Complete list of completed coursework in BSN and BSRT.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-4">
          <h2 className="text-xl font-bold text-blue-900 border-b-2 border-blue-200 pb-2 flex justify-between items-center">
            <span>Major Subjects</span>
            <span className="text-xs sm:text-sm font-semibold bg-blue-100 text-blue-800 px-3 py-1 rounded-full">BSRT Core</span>
          </h2>
          <div className="grid gap-3">
            {allSubjects.filter(s => s.type === 'Major').map((subject) => (
              <div key={subject.code} className="bg-white p-4 rounded-xl border border-blue-100 shadow-sm flex items-start gap-4">
                <CheckCircle2 className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                <div className="w-full">
                  <div className="flex justify-between items-start mb-1 gap-2">
                    <span className="font-bold text-blue-950 text-sm sm:text-base">{subject.code}</span>
                    <span className="text-[10px] sm:text-xs font-bold text-blue-600 bg-blue-50 px-2 py-1 rounded shrink-0">
                      {subject.units} Units
                    </span>
                  </div>
                  <p className="text-sm font-semibold text-blue-800 leading-tight mb-2">{subject.title}</p>
                  <p className="text-[10px] sm:text-xs text-blue-500 font-medium uppercase tracking-wider">{subject.year} • {subject.sem} Sem</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-xl font-bold text-blue-900 border-b-2 border-amber-200 pb-2 flex justify-between items-center">
            <span>Minor Subjects</span>
            <span className="text-xs sm:text-sm font-semibold bg-amber-100 text-amber-800 px-3 py-1 rounded-full">General Ed</span>
          </h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {allSubjects.filter(s => s.type === 'Minor').map((subject) => (
              <div key={subject.code} className="bg-[#fdfbf7] p-3 rounded-lg border border-[#e6d5a7] shadow-sm">
                <div className="flex justify-between items-start mb-1 gap-2">
                  <span className="font-bold text-sm text-blue-900">{subject.code}</span>
                  <span className="text-[10px] font-bold text-amber-700 bg-amber-100 px-1.5 py-0.5 rounded shrink-0">
                    {subject.units}U
                  </span>
                </div>
                <p className="text-xs font-medium text-blue-800/80 leading-tight line-clamp-2" title={subject.title}>
                  {subject.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
