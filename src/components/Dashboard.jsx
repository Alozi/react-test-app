import ProductCard from "./ProductCard";

export default function Dashboard() {
  return (
    <div className="dashboard">
      <h2>Dashboard</h2>
      <p>TEST TEXT</p>
      <div className="wrapper">
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
}
