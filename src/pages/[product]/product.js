import { BasicLayout } from "@/layouts";
import { DetailProduct, Advertisement, Separator } from "@/components";
import { Footer } from "@/components";

export default function ProductPage(props) {
  const { product, relate } = props;

  return (
    <div>
      <BasicLayout>
    <Separator />
      </BasicLayout>

      <DetailProduct product={product} relate={relate} />

      <Footer />
    </div>
  );
}
