function ProductosGrid({ productos }) {
  return (
    <div className="grid grid-cols-3 gap-6">
      {productos.map((p, i) => (
        <div
          key={i}
          className="bg-card p-4 rounded-xl shadow-lg hover:scale-105 transition"
        >
          <h3 className="font-bold">{p.nombre}</h3>
          <p className="text-accent">{p.precio}</p>
        </div>
      ))}
    </div>
  );
}

export default ProductosGrid;