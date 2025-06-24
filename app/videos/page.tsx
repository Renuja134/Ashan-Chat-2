import Link from 'next/link'
import { ChevronLeft, Play } from 'lucide-react'

export default function VideosPage() {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-4xl mx-auto">
        <Link href="/" className="flex items-center text-blue-600 mb-6">
          <ChevronLeft /> ආපසු
        </Link>
        
        <h1 className="text-3xl font-bold mb-6">වීඩියෝ</h1>
        
        <div className="space-y-4">
          {[1,2,3].map(i => (
            <div key={i} className="bg-white rounded-lg overflow-hidden shadow">
              <div className="relative bg-gray-200 h-48 flex items-center justify-center">
                <Play className="absolute text-white bg-black/50 rounded-full p-2 w-10 h-10" />
                <span className="text-gray-500">වීඩියෝ {i}</span>
              </div>
              <div className="p-4">
                <h3 className="font-medium">වීඩියෝ මාතෘකාව {i}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
      }
