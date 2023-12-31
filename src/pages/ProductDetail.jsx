import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  CardMeta,
  CardHeader,
  CardDescription,
  CardContent,
  Button,
  Card,
  Image,
} from "semantic-ui-react";
import ProductService from "../services/productService";


function ProductDetail() {
  let { name } = useParams();
  const [products, setProducts] = useState({});
  useEffect(() => {
    let productService = new ProductService();

    productService
      .getByProductName(name)
      .then((result) => setProducts(result.data.data));
  }, []);

  return (
    <div>
      <Card fluid>
        <CardContent>
          <Image
            floated="right"
            size="mini"
            src="https://avatars.githubusercontent.com/u/64293873?v=4"
          />
          <CardHeader>{products.productName}</CardHeader>
          <CardMeta>{products.supplierId}</CardMeta>
          <CardDescription>
            Steve wants to add you to the group <strong>best friends</strong>
          </CardDescription>
        </CardContent>
        <CardContent extra>
          <div className="ui two buttons">
            <Button basic color="green">
              Approve
            </Button>
            <Button basic color="red">
              Decline
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
export default ProductDetail;
