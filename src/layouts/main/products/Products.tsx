import ProductCard from "./ProductCard";

const Products = () => {
  return (
    <div className="container mt-2">
      <div className="row g-3 te">
        {" "}
        {/* Giao diện dạng lưới, với khoảng cách giữa các cột */}
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center">
          <ProductCard
            imgSrc="https://via.placeholder.com/150"
            title="Sản phẩm A"
            description="Mô tả ngắn về sản phẩm A."
            poster="Võ Thanh tùng"
            datePost={new Date()}
          />
        </div>
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center">
          <ProductCard
            imgSrc="https://via.placeholder.com/150"
            title="Sản phẩm B"
            description="Mô tả ngắn về sản phẩm B."
            poster="Võ Thanh tùng"
            datePost={new Date()}
          />
        </div>
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center">
          <ProductCard
            imgSrc="https://via.placeholder.com/150"
            title="Sản phẩm C"
            description="Mô tả ngắn về sản phẩm C."
            poster="Võ Thanh tùng"
            datePost={new Date()}
          />
        </div>
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center">
          <ProductCard
            imgSrc="https://via.placeholder.com/150"
            title="Sản phẩm D"
            description="Mô tả ngắn về sản phẩm D."
            poster="Võ Thanh tùng"
            datePost={new Date()}
          />
        </div>
      </div>
    </div>
  );
};

export default Products;
