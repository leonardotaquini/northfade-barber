import { Copy } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { AppointmentForm } from "./appointment-form"

export function DialogFormButton() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Reservar turno</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>¡Reservá tu turno!</DialogTitle>
          <DialogDescription>
            Selecciona una fecha y hora disponible
          </DialogDescription>
        </DialogHeader>
        <div>
          <AppointmentForm />
        </div>
        <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
            <Button type="button" variant="secondary" className="w-full">
             Cerrar
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
