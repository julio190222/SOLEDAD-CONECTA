function Empresas() {
  const data = [
    {
      nombre: "Dulces La Soledad",
      categoria: "Repostería",
      img: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092"
    },
    {
      nombre: "Arte y Diseño",
      categoria: "Artesanías",
      img: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4"
    },
    {
      nombre: "Moda Urbana",
      categoria: "Ropa",
      img: "https://images.unsplash.com/photo-1521335629791-ce4aec67dd47"
    },
  ];

  return (
    <div className="px-12 py-12">
      <h2 className="text-2xl font-bold mb-8">
        Emprendimientos Destacados
      </h2>

      <div className="grid grid-cols-3 gap-8">
        {data.map((e, i) => (
          <div key={i} className="bg-card rounded-xl overflow-hidden shadow-xl hover:scale-105 transition">
            <img src={e.img} className="h-40 w-full object-cover" />

            <div className="p-4">
              <h3 className="font-bold text-lg">{e.nombre}</h3>
              <p className="text-gray-300 text-sm">{e.categoria}</p>

              <button className="mt-4 bg-accent text-black px-4 py-1 rounded font-semibold">
                Ver más
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Empresas;