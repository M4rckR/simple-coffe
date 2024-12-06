export type DrafProducto = {
    nombrePlato: string,
    cantidadPlato: number | null,
    precioPlato: number | null;
}

export type Producto = DrafProducto & {
    id: string;
}

