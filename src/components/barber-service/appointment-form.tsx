"use client";

import { useState, useEffect } from "react";
import { format, isBefore, startOfToday } from "date-fns";
import { es } from "date-fns/locale";
import { CalendarIcon, Clock } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { DialogClose } from "../ui/dialog";

// Simulación de horarios disponibles
const generateAvailableTimes = (date: Date | undefined) => {
  if (!date) return [];

  // Simulamos diferentes disponibilidades según el día de la semana
  const dayOfWeek = date.getDay();

  // Fin de semana: menos horarios disponibles
  if (dayOfWeek === 0 || dayOfWeek === 6) {
    return ["10:00", "11:00", "12:00"];
  }

  // Día especial con pocos horarios (ejemplo: el día 15 de cada mes)
  if (date.getDate() === 15) {
    return ["09:00", "15:00"];
  }

  // Días normales: horarios completos
  return [
    "09:00",
    "10:00",
    "11:00",
    "12:00",
    "15:00",
    "16:00",
    "17:00",
    "18:00",
  ];
};

const formSchema = z.object({
  name: z.string().min(2, { message: "El nombre es requerido" }),
  email: z.string().email({ message: "Email inválido" }),
  phone: z.string().min(9, { message: "Teléfono inválido" }),
  date: z.date({ required_error: "Por favor selecciona una fecha" }),
  time: z.string({ required_error: "Por favor selecciona una hora" }),
  notes: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

export function AppointmentForm() {
  const [availableTimes, setAvailableTimes] = useState<string[]>([]);
  const today = startOfToday();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      notes: "",
    },
  });

  const selectedDate = form.watch("date");

  // Actualizar horarios disponibles cuando cambia la fecha
  useEffect(() => {
    setAvailableTimes(generateAvailableTimes(selectedDate));

    // Si ya había seleccionado una hora y la fecha cambia, resetear la hora
    if (form.getValues("time")) {
      form.setValue("time", "");
    }
  }, [selectedDate, form]);

  function onSubmit(data: FormValues) {
    // En un caso real, aquí enviaríamos los datos al servidor
    console.log("Formulario enviado:", data);
    toast.success(
      `Turno reservado para ${data.name} el ${format(data.date, "PPP", {
        locale: es,
      })} a las ${data.time}. ¡Gracias!`
    );
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nombre completo</FormLabel>
              <FormControl>
                <Input placeholder="Tu nombre" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="tu@email.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Teléfono</FormLabel>
                <FormControl>
                  <Input placeholder="123456789" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="date"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>Fecha</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "pl-3 text-left font-normal",
                          !field.value && "text-muted-foreground"
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {field.value ? (
                          format(field.value, "PPP", { locale: es })
                        ) : (
                          <span>Selecciona una fecha</span>
                        )}
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={field.value}
                      onSelect={field.onChange}
                      disabled={(date) => isBefore(date, today)}
                      initialFocus
                      locale={es}
                    />
                  </PopoverContent>
                </Popover>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="time"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Hora</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  value={field.value}
                  disabled={!selectedDate || availableTimes.length === 0}
                >
                  <FormControl>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Selecciona una hora" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {availableTimes.length > 0 ? (
                      availableTimes.map((time) => (
                        <SelectItem key={time} value={time}>
                          <div className="flex items-center">
                            <Clock className="mr-2 h-4 w-4" />
                            <span>{time}</span>
                          </div>
                        </SelectItem>
                      ))
                    ) : (
                      <SelectItem value="no-disponible" disabled>
                        No hay horarios disponibles
                      </SelectItem>
                    )}
                  </SelectContent>
                </Select>
                <FormDescription>
                  {selectedDate &&
                    availableTimes.length === 0 &&
                    "No hay horarios disponibles para esta fecha. Por favor selecciona otra fecha."}
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="notes"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Notas adicionales</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Información adicional para tu cita"
                  className="resize-none"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <DialogClose asChild>
          <Button type="submit" className="w-full">
            Reservar turno
          </Button>
        </DialogClose>
      </form>
    </Form>
  );
}
