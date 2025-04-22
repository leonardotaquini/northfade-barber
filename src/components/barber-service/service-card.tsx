import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { BorderBeam } from "../magicui/border-beam";
import { Button } from "../ui/button";
import { AuroraText } from "../magicui/aurora-text";
import { Clock } from "lucide-react";
import { DialogFormButton } from "./dialog-form-button";

interface ServiceCardProps {
  service: {
    id: number;
    name: string;
    description: string;
    duration: number;
    price: number;
  };
}

export const ServiceCard = ({ service }: ServiceCardProps) => {
  return (
    <Card className="relative overflow-hidden">
      <CardHeader>
        <CardTitle>
          <AuroraText colors={["#FFFFFF", "#ffffff", "blue"]}>
            {service.name}
          </AuroraText>
        </CardTitle>
        <CardDescription>{service.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm ">
          Todas los servicios pueden incluir sesions barber 👀🎙️🎵
        </p>
        <div className="flex justify-between items-center">
          <p className="text-sm text-muted-foreground">
            <p className="flex items-center">
              <Clock className="mr-2" size={16} />
              Duración: {service.duration} min
            </p>
          </p>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <DialogFormButton />
          <p className="text-lg font-bold  text-green-300">${service.price.toLocaleString()}</p>
      </CardFooter>
      <BorderBeam duration={8} size={100} />
    </Card>
  );
};
