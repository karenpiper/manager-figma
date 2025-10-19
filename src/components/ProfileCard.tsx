import { ImageWithFallback } from "./figma/ImageWithFallback";

export function ProfileCard() {
  return (
    <div className="relative rounded-3xl overflow-hidden h-[400px] bg-gradient-to-br from-gray-300 to-gray-400">
      <ImageWithFallback
        src="https://images.unsplash.com/photo-1758599543111-36ce5c34fceb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMHNtaWxpbmclMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjA3ODE0MzZ8MA&ixlib=rb-4.1.0&q=80&w=1080"
        alt="Lora Piterson"
        className="w-full h-full object-cover"
      />
      <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/60 via-black/40 to-transparent">
        <div className="flex items-end justify-between">
          <div>
            <h3 className="text-white text-[18px] mb-1">Lora Piterson</h3>
            <p className="text-white/80 text-[12px]">UX/UI Designer</p>
          </div>
          <div className="px-4 py-2 rounded-full border border-white/40 backdrop-blur-sm">
            <span className="text-white text-[13px]">$1,200</span>
          </div>
        </div>
      </div>
    </div>
  );
}
