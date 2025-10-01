// Placeholder /*
 * File: src/app/contact/page.tsx
 */
"use client";

import { useLanguage } from "@/hooks/useLanguage";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { MessageCircle } from "lucide-react";
import Link from "next/link";

const ContactPage = () => {
  const { t } = useLanguage();
  const { toast } = useToast();

  const formSchema = z.object({
    name: z.string().min(2, { message: "Name must be at least 2 characters." }),
    email: z.string().email({ message: "Please enter a valid email address." }),
    message: z.string().min(10, { message: "Message must be at least 10 characters." }),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log("Contact Form Submitted:", values);
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you soon.",
    });
    form.reset();
  }

  return (
    <div className="container mx-auto px-4 py-12 md:py-20">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold font-headline">
          {t("contactTitle")}
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          {t("contactSubtitle")}
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 mt-12 max-w-5xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle className="font-headline text-2xl">{t("contactFormTitle")}</CardTitle>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t("contactNameLabel")}</FormLabel>
                      <FormControl>
                        <Input placeholder={t("contactNamePlaceholder")} {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t("contactEmailLabel")}</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder={t("contactEmailPlaceholder")} {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t("contactMessageLabel")}</FormLabel>
                      <FormControl>
                        <Textarea placeholder={t("contactMessagePlaceholder")} {...field} rows={5} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full">
                  {t("sendMessage")}
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>
        
        <div className="flex flex-col items-center justify-center bg-card p-8 rounded-lg text-center">
            <MessageCircle className="w-16 h-16 text-primary mb-4"/>
            <h3 className="text-2xl font-bold font-headline mb-2">{t('contactWhatsapp')}</h3>
            <p className="text-muted-foreground mb-6">For immediate assistance, chat with us directly on WhatsApp.</p>
            <Button asChild size="lg" className="bg-green-500 hover:bg-green-600 text-white">
                <Link href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">{t('contactWhatsapp')}</Link>
            </Button>
        </div>
      </div>
    </div>
  );
};

export default ContactPage; page.tsx
