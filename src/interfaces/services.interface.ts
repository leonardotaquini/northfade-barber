export interface Services {
    id: number;
    name: string;
    description: ServiceName;
    duration: number;
    price: number;
}

type ServiceName = 'Corte' | 'Corte + Barba' | 'Barba';