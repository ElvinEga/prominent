import { Product } from "@/store/product";

// Mock data - Replace with actual API implementation
const mockProducts: Product[] = [
  {
    id: "1",
    name: "TERRA BROWN ABP",
    description:
      "RAL 8028 is a TERRA brown powder coating designed to provide outstanding exterior durability. This RAL powder coating can be used on decorative and protective applications such as structural steelwork, lighting equipment, agricultural machinery, garden furniture and fencing. Along with its polyester TGIC technology, this powder coating comes in a high gloss and smooth finish. ",
    price: 12.51,
    imageUrl: "https://prominentau.netlify.app/images/products/prod.png",
  },
  {
    id: "2",
    name: "BLACK MATTE CRINKLE",
    description:
      "Black Matte Crinkle powder coat is designed to provide a durable black finish for various applications. Black Matte Crinkle is a thermosetting powder coating resulting in a tough and resilient coating. This powder coating is specifically formulated to offer excellent resistance against corrosion, chemicals, and UV rays, ensuring long-lasting protection for the coated surface. The powder coating is suitable for a wide range of substrates, including metal, aluminum, and steel. It can be applied to various products and surfaces, such as automotive parts, appliances, furniture, and architectural components. ",
    price: 9.88,
    imageUrl: "https://prominentau.netlify.app/images/products/prod2.jpg",
  },
  {
    id: "3",
    name: "PRIMERON EDGE BUFF PRIMER",
    description:
      "For more than 30 years, PPG has provided manufacturers and custom coaters with pioneering powder coatings that combine beautiful finishes with exceptional protection performance. From electrical equipment to toolboxes, from water valves to shopping carts, PPG has the products and expertise to optimize the coatings applications process and make finished goods look better and last longer. ",
    price: 79.99,
    imageUrl: "https://prominentau.netlify.app/images/products/prod3.jpg",
  },
  {
    id: "4",
    name: "ENVIROCRON® LUM Retroreflective Black",
    description:
      "PPG ENVIROCRON® LUM powder coating is a proprietary and patent-pending breakthrough technology designed to reflect light back to its source. This innovative single layer solution combines the safety benefits of retroreflectivity with the strength, durability and sustainability of powder coating. ",
    price: 50.99,
    imageUrl: "https://prominentau.netlify.app/images/products/prod4.jpg",
  },
  {
    id: "5",
    name: "Transparent Candy Gold Powder ",
    description:
      "Brand New, Virgin Transparent Candy Gold Powder Coating Paint. This is an extremely popular, super smooth 24 KT candy gold powder. This is a candy top coat so a silver or chrome basecoat is needed. It can also be applied directly over real chrome or polished aluminum. ",
    price: 49.99,
    imageUrl: "https://prominentau.netlify.app/images/products/prod5.jpg",
  },
  {
    id: "6",
    name: "Tiffany Blue Powder Coat ",
    description:
      "Brand New, Virgin High Gloss Tiffany's Blue.  This is an extremely durable, super smooth polyester TGIC powder rated for exterior and interior use. This is a perfect match for you ",
    price: 20,
    imageUrl: "https://prominentau.netlify.app/images/products/prod6.jpg",
  },
];

export const getProducts = async (): Promise<Product[]> => {
  const response = await fetch("/api/products");
  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }
  return response.json();
};

export const getProduct = async (id: string): Promise<Product> => {
  const response = await fetch(`/api/products/${id}`);
  if (!response.ok) {
    throw new Error("Failed to fetch product");
  }
  return response.json();
};
