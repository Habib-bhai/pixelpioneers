import Image from "next/image"

interface Member {
  name: string
  position: string
  image: string
}

interface CardProps {
  member: Member
}

export function Card({ member }: CardProps) {
  return (
    <div className="group relative overflow-hidden rounded-lg bg-zinc-900 p-2">
      <div className="aspect-square overflow-hidden rounded-lg">
        <Image
          src={member.image || "/placeholder.svg"}
          alt={member.name}
          width={400}
          height={400}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="p-4 text-center">
        <h3 className="text-lg font-semibold text-white">{member.name}</h3>
        <p className="text-sm text-gray-400">{member.position}</p>
      </div>
    </div>
  )
}

