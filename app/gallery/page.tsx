import Link from 'next/link'
import { ChevronLeft } from 'lucide-react'

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-4xl mx-auto">
        <Link href="/" className="flex items-center text-blue-600 mb-6">
          <ChevronLeft /> ආපසු
        </Link>
        
        <h1 className="text-3xl font-bold mb-6">ගැලරිය</h1>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {[1,2,3,4,5,6].map(i => (
            <div key={i} className="bg-white rounded-lg overflow-hidden shadow">
              <div className="bg-gray-200 h-48 flex items-center justify-center">
                <span className="text-gray-500">ඡායාරූපය {i}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
