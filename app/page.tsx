import Link from 'next/link'
import { Users, Video, Image, MessageSquare } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">ආසන් චැට්</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          {[
            { icon: <Image size={32} />, title: "ගැලරිය", href: "/gallery" },
            { icon: <Video size={32} />, title: "වීඩියෝ", href: "/videos" },
            { icon: <MessageSquare size={32} />, title: "චැට්", href: "/chat" },
            { icon: <Users size={32} />, title: "පැතිකඩ", href: "/profile" }
          ].map((item, i) => (
            <Link 
              key={i}
              href={item.href}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all"
            >
              <div className="flex flex-col items-center">
                {item.icon}
                <h2 className="mt-3 text-xl font-medium">{item.title}</h2>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
