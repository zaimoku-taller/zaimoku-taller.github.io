import letrero1 from "../assets/img/letrero-1.jpg";
import letrero2 from "../assets/img/letrero-2.jpg";
import tablaCarne from "../assets/img/tabla.jpg";
import tabla3 from "../assets/img/tabla-3.jpg";
interface Props {
    alt: string;
    url: ImageMetadata;
    precio: number | string;
}
export const imgs: Props[] = [
    {alt: "letrero grande", url: letrero1, precio: 5000},
    {alt: "letrero simple", url: letrero2, precio: 12000},
    {alt: "tabla de picar carne", url: tablaCarne, precio: 10000},
    {alt: "tabla", url: tabla3, precio: 3000},
];
