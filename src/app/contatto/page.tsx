import type { Metadata } from "next"
import { ContactForm } from "@/components/ContactForm"

export const metadata: Metadata = {
  title: "Contact",
}

export default function ContattoPage() {
  return (
    <div className="pt-16">
      <ContactForm />
    </div>
  )
}
