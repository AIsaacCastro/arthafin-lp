import { cn } from "@/lib/utils"

interface ProcessStepProps {
  number: number
  title: string
  description: string
  isLast?: boolean
}

export function ProcessStep({ number, title, description, isLast = false }: ProcessStepProps) {
  return (
    <div className="flex flex-col items-center text-center relative">
      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-navy-600 text-white font-bold text-lg mb-4 relative z-10">
        {number}
      </div>
      {!isLast && (
        <div className="absolute top-6 left-[50%] w-full h-[2px] bg-navy-200" />
      )}
      <h3 className="text-xl font-semibold text-navy-800 mb-2">{title}</h3>
      <p className="text-navy-600 max-w-xs">{description}</p>
    </div>
  )
}

