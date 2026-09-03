import { useState } from "react";
import { MessageCircle, Send } from "lucide-react";

export default function EnquirySection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    product: "",
    quantity: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const whatsappNumber = "918590884831";

    const whatsappMessage = `
Hello Ajira Naturals,

I would like to make a spice enquiry.

Name: ${form.name}
Email: ${form.email}
Phone: ${form.phone}

Product: ${form.product}
Quantity: ${form.quantity}

Message:
${form.message}

Thank you.
    `.trim();

    const whatsappURL =
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
        whatsappMessage
      )}`;

    window.open(whatsappURL, "_blank");
  };

  return (
    <section className="bg-[#f7f9f4] px-6 py-16">
      <div className="mx-auto max-w-[1180px]">

        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">

          {/* LEFT */}
          <div className="flex flex-col justify-center">
            <span className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-[#08752a]">
              Send an Enquiry
            </span>

            <h2 className="max-w-lg text-3xl font-semibold leading-tight text-[#142b46] md:text-4xl">
              Tell us what you are looking for.
            </h2>

            <p className="mt-4 max-w-md text-base leading-7 text-slate-600">
              Share your spice requirements and our sourcing team will get
              back to you with availability, specifications and pricing.
            </p>

            <div className="mt-8 flex items-center gap-3 rounded-2xl border border-[#dfe6da] bg-white p-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#e9f5eb] text-[#08752a]">
                <MessageCircle size={21} />
              </div>

              <div>
                <p className="text-sm font-semibold text-[#142b46]">
                  Quick WhatsApp Enquiry
                </p>
                <p className="text-sm text-slate-500">
                  Send your requirements directly to our team
                </p>
              </div>
            </div>
          </div>

          {/* FORM */}
          <form
            onSubmit={handleSubmit}
            className="rounded-3xl border border-[#dfe6da] bg-white p-6 shadow-[0_15px_50px_rgba(20,43,70,0.07)] md:p-7"
          >
            <div className="grid gap-4 md:grid-cols-2">

              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                placeholder="Your Name *"
                className="h-11 rounded-xl border border-slate-200 px-4 text-sm outline-none transition focus:border-[#08752a]"
              />



              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                placeholder="Email Address *"
                className="h-11 rounded-xl border border-slate-200 px-4 text-sm outline-none transition focus:border-[#08752a]"
              />

              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                required
                placeholder="Phone Number *"
                className="h-11 rounded-xl border border-slate-200 px-4 text-sm outline-none transition focus:border-[#08752a]"
              />

              <select
                name="product"
                value={form.product}
                onChange={handleChange}
                required
                className="h-11 rounded-xl border border-slate-200 bg-white px-4 text-sm text-slate-600 outline-none focus:border-[#08752a]"
              >
                <option value="">Select Product *</option>
                <option>Green Cardamom</option>
                <option>Black Pepper</option>
                <option>Nutmeg</option>
                <option>Nutmeg Mace</option>
                <option>Turmeric</option>
                <option>Dried Ginger</option>
                <option>Other</option>
              </select>

              <input
                name="quantity"
                value={form.quantity}
                onChange={handleChange}
                placeholder="Required Quantity"
                className="h-11 rounded-xl border border-slate-200 px-4 text-sm outline-none focus:border-[#08752a]"
              />
            </div>

            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows="4"
              placeholder="Tell us about your requirement..."
              className="mt-4 w-full resize-none rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-[#08752a]"
            />

            <button
              type="submit"
              className="mt-5 flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#08752a] px-5 text-sm font-semibold text-white transition hover:bg-[#075f23]"
            >
              <MessageCircle size={18} />
              Send Enquiry on WhatsApp
              <Send size={16} />
            </button>

            <p className="mt-3 text-center text-xs text-slate-400">
              Your enquiry will open directly in WhatsApp.
            </p>
          </form>

        </div>
      </div>
    </section>
  );
}