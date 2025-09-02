import { useQuery } from '@tanstack/react-query';
import { api } from '@/lib/api';

const TestAPI = () => {
  const { data: products, isLoading, error } = useQuery({
    queryKey: ['products'],
    queryFn: api.getProducts
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">API Test - Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products?.map((product) => (
          <div key={product.id} className="border p-4 rounded">
            <img src={product.image} alt={product.name} className="w-full h-48 object-cover mb-2" />
            <h3 className="font-semibold">{product.name}</h3>
            <p className="text-gray-600">{product.description}</p>
            <p className="text-lg font-bold">${product.price}</p>
            <p className="text-sm">Category: {product.category}</p>
            <p className="text-sm">Stock: {product.stock}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestAPI;