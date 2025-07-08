export function PortfolioCard({ title, image }: { title: string; image: string }) {
  return (
    <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 bg-base-200">
      <img src={image} alt={title} className="w-full h-52 object-cover" />
      <div className="p-4">
        <h3 className="text-2xl font-semibold">{title}</h3>
      </div>
    </div>
  )
}
