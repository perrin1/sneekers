import { Check, Binoculars, Euro, Flame } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type Product = {
  title: string;
  imageUrl: string;
  description: string;
  minPrice: number;
  maxPrice: number;
};

type CategorieCardProps = {
  product: Product;
} & React.ComponentProps<typeof Card>;

export const CategorieCard = ({ className, product, ...props }: CategorieCardProps) => {
  return (
    <Card className={cn("w-[380px]", className)} {...props}>
      <CardHeader>
        <CardTitle>{product.title}</CardTitle>
        <CardDescription>
        <img
            className="w-[250px] h-[180px] md:w-[350px] md:h-[250px] lg:w-[400px] lg:h-[300px] rounded-lg object-cover"
            src={product.imageUrl}
            alt={product.title}
        />

        </CardDescription>
      </CardHeader>

      <CardContent className="grid gap-4">
        <div className="flex items-center space-x-4 rounded-md border p-4">
          <Flame className="text-orange-400" />
          <div className="flex-1 space-y-1">
            <p className="text-sm font-medium leading-none">{product.description}</p>
            <p className="text-sm text-muted-foreground">
              <strong>{product.minPrice}</strong> - {product.maxPrice}
            </p>
          </div>
          <Euro className="text-sky-500" />
        </div>
      </CardContent>

      <CardFooter className="flex justify-between">
        <Button>
          <Check /> Ajouter
        </Button>
        <Button variant="jojo">
          <Binoculars /> Voir plus
        </Button>
      </CardFooter>
    </Card>
  );
};
