import GridSpan from "./components/GridSpan";
import Header from "./components/Header";
import Product from "./components/Product";
import { data } from "./constants/dummy";

export default function App() {
  return (
    <div>
      <Header />
      <div className="container mx-auto">
        <GridSpan />
      </div>
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-6 md:grid-cols-5 sm:grid-cols-4  grid-cols-2 gap-2 my-10">
          {data.map((item) => (
            <Product item={item} key={item.id} />
          ))}
        </div>
      </div>
    </div>
  );
}
