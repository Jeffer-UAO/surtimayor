import { BasicLayout } from "@/layouts";
import { DetailProduct, Separator } from "@/components";
import { Footer } from "@/components";

export default function ProductPage(props) {
  const { product, relate } = props;

  return (
    <div>
      <BasicLayout>
        <Separator />
        <Separator />
        <DetailProduct product={product} relate={relate} />

        <Footer />
      </BasicLayout>
    </div>
  );
}
