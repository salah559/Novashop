/*
 * File: src/components/OrderForm.tsx
 */
"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
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
import { useLanguage } from "@/hooks/useLanguage";
import { useCart } from "@/hooks/useCart";
import { useToast } from "@/hooks/use-toast";
import { algerianStates } from "@/lib/algeria-states";

const OrderForm = () => {
  const { t, language } = useLanguage();
  const { clearCart, cartItems } = useCart();
  const { toast } = useToast();

  const formSchema = z.object({
    fullName: z.string().min(3, { message: "Name must be at least 3 characters." }),
    phone: z.string().regex(/^(0)(5|6|7)[0-9]{8}$/, { message: "Invalid Algerian phone number." }),
    state: z.string().min(1, { message: "Please select a state." }),
    municipality: z.string().min(2, { message: "Please enter your municipality." }),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      phone: "",
      state: "",
      municipality: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log("Order Submitted:", {
      ...values,
      products: cartItems.map(item => ({ id: item.id, name: item.name.en, quantity: item.quantity, price: item.price })),
    });
    
    toast({
      title: t('formSuccessTitle'),
      description: t('formSuccessMessage'),
    });

    clearCart();
    form.reset();
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="fullName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t("fullNameLabel")}</FormLabel>
              <FormControl>
                <Input placeholder={t("fullNamePlaceholder")} {...field} />
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
              <FormLabel>{t("phoneLabel")}</FormLabel>
              <FormControl>
                <Input type="tel" placeholder={t("phonePlaceholder")} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="state"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t("stateLabel")}</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder={t("statePlaceholder")} />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {algerianStates.map((state) => (
                    <SelectItem key={state.name} value={state.name}>
                      {language === 'ar' ? state.name_ar : state.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="municipality"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t("municipalityLabel")}</FormLabel>
              <FormControl>
                <Input placeholder={t("municipalityPlaceholder")} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full !mt-6" size="lg">
          {t("orderSubmit")}
        </Button>
      </form>
    </Form>
  );
};

export default OrderForm;// Placeholder for OrderForm.tsx
